// 动态改变菜单的显示和隐藏
function changeMenuShow() {
	const menu = document.querySelector('.my-index-layout .menu');
	const burger = document.querySelector('.burger');
	const burgerCheckbox = document.querySelector('#burger');
	const burgerMenu = document.querySelector('.my-index-burger-menu');

	burgerCheckbox.onchange = function (e) {
		const isChecked = e.target.checked;
		if (isChecked) {
			burgerMenu.style.display = 'block';
			gsap.to(".my-index-burger-menu > div", {
                x: 0,
                delay: 0,
                duration: 0.4,
                ease: 'none'
            })
		} else {
			gsap.to(".my-index-burger-menu > div", {
                x: '-100%',
                delay: 0,
                duration: 0.4,
                ease: 'none',
                onComplete(){
                    setTimeout(()=>{
                        burgerMenu.style.display = 'none';
                    }, 500)
                }
            })
		}
	};

	function change() {
		const w = window.innerWidth;
		if (w < 660) {
			menu.style.display = 'none';
			burger.style.display = 'block';
		} else {
			menu.style.display = 'block';
			burger.style.display = 'none';
		}
	}
	window.addEventListener('resize', () => {
		change();
	});

	change();
}

// 入口函数
function main() {
	changeMenuShow();
}

main();
