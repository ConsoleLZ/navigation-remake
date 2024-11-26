const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { mkdir, rm, readdir, readFile, writeFile, copyFile } = fs.promises;
const yaml = require('js-yaml');
const { tags, dataList } = require('./src/data/index.js');

// 解析配置文件 config.yml
const parseConfig = () => {
	const filePath = path.join(__dirname, 'config.yml');
	// 读取 YAML 文件
	const readYamlFile = () => {
		try {
			const fileContents = fs.readFileSync(filePath, 'utf-8');
			const data = yaml.load(fileContents);
			return data;
		} catch (e) {
			console.error(e);
			throw new Error(`Error parsing YAML file: ${e.message}`);
		}
	};
	// 解析 YAML 文件
	const config = readYamlFile();
	return config;
};

// 渲染 EJS 模板
const renderTemplate = async (templatePath, data) => {
	const template = await readFile(templatePath, 'utf-8');
	return ejs.render(template, data);
};

// 创建目录
const createDistDir = async path => {
	try {
		await mkdir(path, { recursive: true });
	} catch (error) {
		console.error(`Error creating directory: ${error.message}`);
		throw error;
	}
};

// 清除 dist 目录
const clearDistDir = async () => {
	try {
		const files = await readdir(path.join(__dirname, 'dist'));
		for (const file of files) {
			await rm(path.join(path.join(__dirname, 'dist'), file), { recursive: true, force: true });
		}
	} catch (error) {
		console.error(`Error clearing directory: ${error.message}`);
		throw error;
	}
};

// 复制文件
const copyFileToDist = async (sourcePath, destPath) => {
	try {
		await copyFile(sourcePath, destPath);
	} catch (error) {
		console.error(`Error copying file: ${error.message}`);
		throw error;
	}
};

// 递归复制目录
const copyDirectory = async (sourceDir, targetDir) => {
	try {
		await createDistDir(targetDir);
		const entries = await readdir(sourceDir, { withFileTypes: true });

		for (const entry of entries) {
			const sourcePath = path.join(sourceDir, entry.name);
			const targetPath = path.join(targetDir, entry.name);

			if (entry.isDirectory()) {
				await copyDirectory(sourcePath, targetPath);
			} else {
				await copyFileToDist(sourcePath, targetPath);
			}
		}
	} catch (error) {
		console.error(`Error copying directory: ${error.message}`);
		throw error;
	}
};

// 生成静态页面
const generatePage = async (outputPath, templatePath, data) => {
	try {
		const renderedHtml = await renderTemplate(templatePath, { ...data });

		await writeFile(outputPath, renderedHtml, 'utf-8');
		console.log(`Generated page: ${outputPath}`);
	} catch (error) {
		console.error(`Error generating page: ${error.message}`);
		throw error;
	}
};

// 读取目录中的文件
const readDirectory = async directoryPath => {
	try {
		const files = await readdir(directoryPath);
		return files;
	} catch (err) {
		console.error('目录读取失败: ' + err);
	}
};

// 入口函数
const main = async () => {
	const data = {
		config: parseConfig(),
		tags,
		dataList
	};
	// 创建打包目录
	await createDistDir(path.join(__dirname, 'dist'));
	// 移除上次打包结果
	await clearDistDir();

	// 复制 src 目录下的文件和文件夹，排除 templates 和 pages 目录
	const srcDir = path.join(__dirname, 'src');
	const distDir = path.join(__dirname, 'dist');

	const entries = await readdir(srcDir, { withFileTypes: true });

	for (const entry of entries) {
		const sourcePath = path.join(srcDir, entry.name);
		const targetPath = path.join(distDir, entry.name);

		if (entry.isDirectory() && !['templates', 'pages'].includes(entry.name)) {
			await copyDirectory(sourcePath, targetPath);
		} else if (entry.isFile()) {
			await copyFileToDist(sourcePath, targetPath);
		}
	}

	// 读取pages目录
	var directoryPath = path.join(__dirname, 'src/pages');
	const pagesFile = await readDirectory(directoryPath);
	pagesFile.forEach(async item => {
		const menuFind = parseConfig().menu.find(menuItem => menuItem.path === item.split('.')[0]);
		const outPath = `dist/${menuFind.path}.html`;
		const templatePath = path.join(__dirname, `src/pages/${menuFind.path}.ejs`);
		await generatePage(outPath, templatePath, data);
	});
};

main();
