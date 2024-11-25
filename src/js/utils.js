// 判断图片链接是否有效
function isLink(url) {
	return new Promise((resolve, reject) => {
		let img = new Image(0, 0);

		img.src = url;
		img.addEventListener('load', () => {
			resolve(true);
		});
		img.addEventListener('error', () => {
			resolve(false);
		});
	});
}
