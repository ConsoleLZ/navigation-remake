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
		if (w < 660) {
			menu.style.display = 'none';
			rightContainerDom.style.paddingLeft = '0';
			burger.style.display = 'block';
		} else {
			menu.style.display = 'flex';
			rightContainerDom.style.paddingLeft = menu.offsetWidth + 'px';
			burger.style.display = 'none';
		}
	}
	window.addEventListener('resize', () => {
		change();
		setRemFontSize();
	});

	change();
}

// 入口函数
function main() {
	// 控制菜单的显示和隐藏
	changeMenuShow();
	// 初始化字体大小
	setRemFontSize();
	// 观察元素是否进入视口
	const iconDomList = document.querySelectorAll('.my-index-cards img')
	iconDomList.forEach(item=>{
		isEntryView().observe(item)
	})
}

main();

// 浏览器事件
// 菜单栏标签的选择
function onSelectTag(tag) {
	const cardsDom = document.querySelector('.my-index-cards');
	// 图标筛选
	const dataListFilter = dataList.filter(item => item.tags.includes(tag) || tag === '全部');
	// 输出过滤后的html
	let outHtml = '';
	dataListFilter.forEach(item => {
		let outTagsHtml = '';
		item.tags.forEach(tag => {
			outTagsHtml += `<div style="padding: 6px 12px;font-size: 0.6rem;" class="ui horizontal label">${tag}</div>`;
		});
		outHtml += `
		<div class="card">
			<div class="my-index-card-header">
				<img src="${item.ico}" alt="">
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

	cardsDom.innerHTML = outHtml;
}
