const liveServer = require('live-server');

const params = {
	port: 7988, // 设置服务器端口，默认为8080。
	host: '0.0.0.0', // 设置绑定地址，默认为0.0.0.0或process.env.IP。
	root: 'dist', // 将根目录设置为你生成的网站目录'dist'。
	open: true, // 当设置为true时，启动服务器后会自动打开浏览器。
	file: 'index.html', // 当设置后，对于每个404错误都将提供此文件（相对于服务器根目录）。这对于单页应用非常有用。
	wait: 1000, // 在重新加载之前等待所有更改完成。默认为0秒。
	logLevel: 2 // 日志级别：0=仅错误，1=一些信息，2=很多信息
};
liveServer.start(params);
