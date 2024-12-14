// 创建一个全局的IntersectionObserver实例
let observer, miniSearch;

function isEntryView() {
	if (!observer) {
		// 如果还没有创建观察者，则创建一个
		observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						isLink(entry.target.dataset.img).then(() => {
							entry.target.src = entry.target.dataset.img;
						});
						observer.unobserve(entry.target); // 停止观察该元素
					}
				});
			},
			{ threshold: 0.1 }
		);
	}
	return observer;
}

// 动态改变字体大小
function setRemFontSize() {
	const baseSize = 10; // 基础字体大小 (px)
	const maxWidth = 1920; // 最大屏幕宽度 (px)，超过这个宽度不再增加字体大小
	const minWidth = 320; // 最小屏幕宽度 (px)，低于这个宽度不再减少字体大小
	const minFontSize = 12; // 在最小屏幕宽度时的字体大小 (px)
	const maxFontSize = 24; // 在最大屏幕宽度时的字体大小 (px)

	const currentWidth = window.innerWidth;

	if (currentWidth > maxWidth) {
		document.documentElement.style.fontSize = `${maxFontSize}px`;
	} else if (currentWidth < minWidth) {
		document.documentElement.style.fontSize = `${minFontSize}px`;
	} else {
		// 计算当前屏幕宽度对应的字体大小
		const fontSize =
			((currentWidth - minWidth) / (maxWidth - minWidth)) * (maxFontSize - minFontSize) + minFontSize;
		document.documentElement.style.fontSize = `${fontSize}px`;
	}
}

// 动态改变菜单的显示和隐藏
function changeMenuShow() {
	const menu = document.querySelector('.my-index-layout > .my-index-menu');
	const burger = document.querySelector('.burger');
	const burgerCheckbox = document.querySelector('#burger');
	const burgerMenu = document.querySelector('.my-index-burger-menu');
	const rightContainerDom = document.querySelector('.my-index-layout > .my-index-right-container');

	burgerCheckbox.onchange = function (e) {
		const isChecked = e.target.checked;
		if (isChecked) {
			burgerMenu.style.display = 'block';
			gsap.to('.my-index-burger-menu > div', {
				x: 0,
				delay: 0,
				duration: 0.4,
				ease: 'none'
			});
		} else {
			gsap.to('.my-index-burger-menu > div', {
				x: '-100%',
				delay: 0,
				duration: 0.4,
				ease: 'none',
				onComplete() {
					setTimeout(() => {
						burgerMenu.style.display = 'none';
					}, 500);
				}
			});
		}
	};

	function change() {
		const w = window.innerWidth;
		if (w < 980) {
			menu.style.display = 'none';
			rightContainerDom.style.paddingLeft = 0;
			burger.style.display = 'block';
		} else {
			menu.style.display = 'flex';
			rightContainerDom.style.paddingLeft = 10 + 'rem';
			burger.style.display = 'none';
		}
	}
	window.addEventListener('resize', () => {
		change();
		setRemFontSize();
	});

	change();
}

// 生成数据dom
function generateDom(data) {
	// 输出过滤后的html
	let outHtml = '';
	if (data.length) {
		data.forEach(item => {
			let outTagsHtml = '';
			item.tags.forEach(tag => {
				outTagsHtml += `<div style="padding: 6px 12px;font-size: 0.6rem;" class="ui horizontal label">${tag}</div>`;
			});
			outHtml += `
			<div class="card" data-url="${item.url}">
				<div class="my-index-card-header">
					<img data-img="${item.ico}" src="${baseURL}assets/load-error.svg" alt="">
					<div>${item.name}</div>
				</div>
				<div style="font-size: 0.7rem;" class="description multi-line-ellipsis">
					${item.description}
				</div>
				<div class="my-index-card-tags">
					${outTagsHtml}				
				</div>
			</div>
			`;
		});
	} else {
		outHtml = '暂无数据...';
	}

	return outHtml;
}

// 根据选择的标签和分页控制数据的显示
function setData() {
	// 获取当前页面的URL
	const urlParams = new URLSearchParams(window.location.search);
	const pageQuery = Number(urlParams.get('page')) || 0;
	const tagQuery = urlParams.get('tag') || '全部';
	const tagSearch = urlParams.get('search');
	const cardsDom = document.querySelector('.my-index-cards');
	let dataListSlice = null;
	if (tagSearch) {
		const searchResult = [];
		// 搜索
		miniSearch.autoSuggest(tagSearch, {
			filter: result => {
				// 处理搜索结果
				searchResult.push({
					name: result.name,
					description: result.description,
					url: result.url,
					ico: result.ico,
					tags: result.tags
				});
				return true;
			}
		});
		dataListSlice = searchResult.slice(pageNumber * pageQuery, pageNumber * (pageQuery + 1));
	} else {
		const dataListFilter = dataList.filter(item => item.tags.includes(tagQuery) || tagQuery === '全部');
		dataListSlice = dataListFilter.slice(pageNumber * pageQuery, pageNumber * (pageQuery + 1));
	}
	console.log(dataListSlice);
	cardsDom.innerHTML = generateDom(dataListSlice);
	// 绑定点击事件
	document.querySelectorAll('.my-index-cards .card').forEach(card => {
		card.addEventListener('click', function () {
			onJump(this.getAttribute('data-url'));
		});
	});
}

// 搜索逻辑
function tokenizer(str) {
	// 分词逻辑，返回完整的单词以及单词的部分片段
	const words = str.match(/[\u4e00-\u9fa5]+|[a-zA-Z0-9]+/g) || [];
	const subStrings = [];

	words.forEach(word => {
		if (/^[a-zA-Z0-9]+$/.test(word)) {
			// 英文或数字
			// 生成所有可能的子串
			for (let i = 1; i <= word.length; i++) {
				subStrings.push(...word.slice(0, i));
			}
		} else {
			// 中文
			// 生成所有可能的 n-gram 子串
			for (let i = 1; i <= word.length; i++) {
				for (let j = 0; j <= word.length - i; j++) {
					subStrings.push(word.substring(j, j + i));
				}
			}
		}
	});

	return subStrings.filter((value, index, self) => self.indexOf(value) === index); // 去重
}

// 入口函数
function main() {
	// 控制菜单的显示和隐藏
	changeMenuShow();
	// 初始化字体大小
	setRemFontSize();
	// 搜索功能
	miniSearch = new MiniSearch({
		fields: ['name', 'description'], // 搜索哪些字段
		storeFields: ['name', 'description', 'url', 'ico', 'tags'], // 返回哪些字段
		tokenize: tokenizer
	});
	const originalDataList = [...dataList]; // 原始数据列表
	let document1 = originalDataList.map((item, index) => ({
		...item,
		id: index
	}));
	miniSearch.addAll(document1); // 配置搜索源
	// 初始化数据
	setData();
	// 观察元素是否进入视口
	const iconDomList = document.querySelectorAll('.my-index-cards img');
	iconDomList.forEach(item => {
		isEntryView().observe(item);
	});
}

main();

// 浏览器事件
// 返回首页
function onGoHome() {
	location.href = baseURL;
}
// 菜单栏标签的选择
function onSelectTag(tag) {
	location.href = `${baseURL}?page=0&tag=${tag}`;
}
// 作品跳转
function onJump(url) {
	window.open(url);
}
// 改变分页
function changePage(i) {
	// 获取当前页面的URL
	const urlParams = new URLSearchParams(window.location.search);
	const tagQuery = urlParams.get('tag') || '全部';
	const tagSearch = urlParams.get('search');
	if (tagSearch) {
		location.href = `${baseURL}?page=${i}&search=${tagSearch}`;
	} else {
		location.href = `${baseURL}?page=${i}&tag=${tagQuery}`;
	}
}

function onSearch(e) {
	const mySearch = document.querySelector('#mySearch');
	if (e.key === 'Enter') {
		location.href = `${baseURL}?page=0&search=${mySearch.value}`;
	}
}
