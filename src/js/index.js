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
		const cardList = document.querySelector('.my-index-cards');
		const indexFlexCenter = document.querySelector('.my-index-flex-column-center');
		const myGithubUrlImg = document.querySelector('.myGithubUrlImg');
		if (w < 980) {
			menu.style.display = 'none';
			rightContainerDom.style.paddingLeft = 0;
			rightContainerDom.style.width = '100%';
			burger.style.display = 'block';
			cardList.style.width = '100vw';
			indexFlexCenter.style.width = '100vw';
			myGithubUrlImg.style.right = '50px'
		} else {
			menu.style.display = 'flex';
			rightContainerDom.style.paddingLeft = 10 + 'rem';
			burger.style.display = 'none';
			cardList.style.width = '100%';
			indexFlexCenter.style.width = '100%';
			myGithubUrlImg.style.right = '20px'
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

// 生成分页菜单的DOM
function generatePaginationDom(total) {
	const totalPages = Math.ceil(total / pageNumber);
	let paginationHtml = `
		<a class="icon item" onclick="changePage(${currentPage > 0 ? currentPage - 1 : 0})">
			<i class="left chevron icon"></i>
		</a>
	`;

	for (let i = 0; i < totalPages; i++) {
		paginationHtml += `
			<a class="item ${i === currentPage ? 'active' : ''}" onclick="changePage('${i}')">
				${i + 1}
			</a>
		`;
	}

	paginationHtml += `
		<a class="icon item" onclick="changePage(${currentPage < totalPages - 1 ? currentPage + 1 : currentPage})">
			<i class="right chevron icon"></i>
		</a>
	`;

	return paginationHtml;
}

// 更新分页菜单
function updatePagination(dataLength) {
	const paginationContainer = document.querySelector('.ui.floated.pagination.menu');
	paginationContainer.innerHTML = generatePaginationDom(dataLength);
}

// 修改setData函数
function setData() {
	// 获取当前页面的URL
	const urlParams = new URLSearchParams(window.location.search);
	const pageQuery = Number(urlParams.get('page')) || 0;
	const tagQuery = urlParams.get('tag') || '全部';
	const tagSearch = urlParams.get('search');
	const cardsDom = document.querySelector('.my-index-cards');
	let dataListFilter = [];

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
		dataListFilter = searchResult;
	} else {
		dataListFilter = generateData(baseURL).dataList.filter(
			item => item.tags.includes(tagQuery) || tagQuery === '全部'
		);
	}

	// 更新分页菜单
	updatePagination(dataListFilter.length);

	// 获取当前页的数据
	const dataListSlice = dataListFilter.slice(pageNumber * pageQuery, pageNumber * (pageQuery + 1));

	cardsDom.innerHTML = generateDom(dataListSlice);

	// 绑定点击事件
	document.querySelectorAll('.my-index-cards .card').forEach(card => {
		card.addEventListener('click', function () {
			onJump(this.getAttribute('data-url'));
		});
	});

	// 观察元素是否进入视口
	const iconDomList = document.querySelectorAll('.my-index-cards img');
	iconDomList.forEach(item => {
		isEntryView().observe(item);
	});
}

// 添加全局变量来跟踪当前页码
let currentPage = 0;

// 修改changePage函数
function changePage(i) {
	currentPage = parseInt(i);
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
	// 获取URL中的页码
	const urlParams = new URLSearchParams(window.location.search);
	currentPage = Number(urlParams.get('page')) || 0;

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
	const originalDataList = [...generateData(baseURL).dataList]; // 原始数据列表
	let document1 = originalDataList.map((item, index) => ({
		...item,
		id: index
	}));
	miniSearch.addAll(document1); // 配置搜索源
	// 初始化数据
	setData();
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

// 主题切换
function onSwitchTheme() {
    const switchThemeDom = document.querySelector('#switch_theme');
    const html = document.querySelector('html');
    const images = document.querySelectorAll('img');
    
    // 👇 新增：获取所有可能有背景图的元素（你可以根据项目情况调整选择器）
    const bgElements = document.querySelectorAll('.has-bg'); // 或更精确：'.has-bg, [style*="background"], [class*="bg"]' 等
    const elementsWithBg = [];

    // 筛选出真正有背景图的元素
    bgElements.forEach(el => {
        const computedStyle = getComputedStyle(el);
        if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {
            elementsWithBg.push(el);
        }
    });

    if (switchThemeDom.checked) {
        // 暗色模式：全局翻转
        html.style.filter = 'invert(1) hue-rotate(180deg)';
        localStorage.setItem('theme', 'dark');

        // 处理 <img> 标签：反向滤镜
        images.forEach(img => {
            img.dataset.originalFilter = img.style.filter || '';
            img.style.filter = 'invert(1) hue-rotate(180deg)';
        });

        // 处理 background-image 元素：反向滤镜
        elementsWithBg.forEach(el => {
            el.dataset.originalFilter = el.style.filter || '';
            el.style.filter = 'invert(1) hue-rotate(180deg)';
        });

    } else {
        // 亮色模式：恢复
        html.style.filter = '';
        localStorage.setItem('theme', 'light');

        // 恢复 <img>
        images.forEach(img => {
            img.style.filter = img.dataset.originalFilter || '';
        });

        // 恢复 background-image 元素
        elementsWithBg.forEach(el => {
            el.style.filter = el.dataset.originalFilter || '';
        });
    }
}