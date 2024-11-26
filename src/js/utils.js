// 判断图片链接是否有效
function isLink(url) {
	return new Promise((resolve, reject) => {
		let img = new Image(0, 0);

		img.src = url;
		img.addEventListener('load', () => {
			resolve();
		});
		img.addEventListener('error', () => {
			reject();
		});
	});
}

// 判断指定元素是否进入视口
function isEntryView() {
	return observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			// 如果元素与视口相交
			if (entry.isIntersecting) {
				isLink(entry.target.dataset.img).then(()=>{
					entry.target.src = entry.target.dataset.img
				})
				// 可以选择在这里停止观察该元素
				observer.unobserve(entry.target);
			}
		});
	}, {
		// 配置选项，例如阈值
		threshold: 0.1 // 元素有10%在视口内就算作相交
	});
}