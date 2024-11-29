// 创建一个全局的IntersectionObserver实例
let observer;

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
					<img data-img="${item.ico}" src="/assets/load-error.svg" alt="">
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

	return outHtml
}

// 根据选择的标签和分页控制数据的显示
function setData() {
	// 获取当前页面的URL
	const urlParams = new URLSearchParams(window.location.search);
	const pageQuery = Number(urlParams.get('page')) || 0;
	const tagQuery = urlParams.get('tag') || '全部';

	const dataListFilter = dataList.filter(item => item.tags.includes(tagQuery) || tagQuery === '全部');
	const dataListSlice = dataListFilter.slice(pageNumber * pageQuery,  pageNumber * (pageQuery + 1))

	const cardsDom = document.querySelector('.my-index-cards');
	
	cardsDom.innerHTML = generateDom(dataListSlice);

	// 绑定点击事件
	document.querySelectorAll('.my-index-cards .card').forEach(card => {
		card.addEventListener('click', function () {
			onJump(this.getAttribute('data-url'));
		});
	});
}

// 入口函数
function main() {
	// 控制菜单的显示和隐藏
	changeMenuShow();
	// 初始化字体大小
	setRemFontSize();
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
// 菜单栏标签的选择
function onSelectTag(tag) {
	location.href = `/?page=0&tag=${tag}`
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
	location.href = `/?page=${i}&tag=${tagQuery}`
}
