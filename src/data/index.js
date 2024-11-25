// 所有的标签
const tags = {
	all: '全部',
	icon: '图标',
	css: 'css',
	animation: '动画',
	openSource: '开源项目',
	web: '前端',
	development: '项目开发',
	docs: '文档',
	template: '网站模板',
	tools: '工具',
	depend: '项目管理',
	learn: '学习'
};

const dataList = [
	{
		name: '阿里矢量图标库',
		ico: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
		url: 'https://www.iconfont.cn/home/index',
		description: '找找好看的图标吧',
		tags: [tags.icon, tags.web]
	},
	{
		name: 'animate',
		ico: 'https://animate.style/img/favicon.ico',
		url: 'https://animate.style/',
		description: 'css的动画集合',
		tags: [tags.animation, tags.css, tags.web]
	},
	{
		name: 'swiper',
		ico: 'https://www.swiper.com.cn/favicon.ico',
		url: 'https://www.swiper.com.cn/',
		description: '开源，免费，强大的触摸滑动插件',
		tags: [tags.development, tags.web]
	},
	{
		name: 'Can I use',
		ico: 'https://caniuse.com/img/favicon-128.png',
		url: 'https://caniuse.com/',
		description: '前端兼容性问题查询',
		tags: [tags.web]
	},
	{
		name: 'BetterScroll',
		ico: 'https://better-scroll.github.io/docs/assets/bs.ico',
		url: 'https://better-scroll.github.io/docs/zh-CN/',
		description: '优化页面滚动',
		tags: [tags.development, tags.web]
	},
	{
		name: 'canvasJS',
		ico: 'https://canvasjs.com/wp-content/uploads/images/favicon/canvasjs-favicon-32x32.png?v=1.1',
		url: 'https://canvasjs.com/',
		description: '响应式HTML5图表库',
		tags: [tags.development, tags.web]
	},
	{
		name: 'Chart.js',
		ico: 'https://chartjs.bootcss.com/favicon.ico',
		url: 'https://chartjs.bootcss.com/',
		description: '为设计和开发人员准备的简单、灵活的 JavaScript 图表工具',
		tags: [tags.development, tags.web]
	},
	{
		name: 'Apache ECharts',
		ico: 'https://echarts.apache.org/zh/images/favicon.png?_v_=20240226',
		url: 'https://echarts.apache.org/',
		description: '一个基于 JavaScript 的开源可视化图表库',
		tags: [tags.development, tags.web]
	},
	{
		name: 'uiverse',
		ico: 'https://uiverse.io/favicon-32x32.png',
		url: 'https://uiverse.io/',
		description: '适用于任何项目的开源 UI 元素',
		tags: [tags.development, tags.css, tags.web]
	},
	{
		name: 'Vue3 One Piece',
		ico: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
		url: 'https://vue3js.cn/',
		description: 'vue的生态',
		tags: [tags.docs, tags.web]
	},
	{
		name: '92ui',
		ico: 'https://92ui.net/wp-content/uploads/2022/02/UIlogo.png',
		url: 'https://92ui.net/',
		description: '各类前端UI设计和源码分享，各种前端框架和工具导航',
		tags: [tags.development, tags.css, tags.template, tags.web]
	},
	{
		name: 'ICONS8',
		ico: 'https://maxst.icons8.com/vue-static/landings/primary-landings/favs/icons8_fav_32%C3%9732.png',
		url: 'https://icons8.com/',
		description: '拥有各种图标',
		tags: [tags.icon, tags.web]
	},
	{
		name: 'GSAP',
		ico: 'https://gsap.com/favicon-32x32.png',
		url: 'https://gsap.com/',
		description: '使用js实现的一个非常强大和专业的动画库',
		tags: [tags.animation, tags.web]
	},
	{
		name: 'mockaroo',
		ico: 'https://mockaroo.com/favicon.ico',
		url: 'https://mockaroo.com/',
		description: '允许您以 CSV、JSON、SQL 和 Excel 格式生成多达 1,000 行的真实测试数据',
		tags: [tags.tools]
	},
	{
		name: 'Nav Nav+',
		ico: 'https://navnav.co/favicon.ico',
		url: 'https://navnav.co/',
		description: 'UI元素',
		tags: [tags.css, tags.web]
	},
	{
		name: 'Variant Form',
		ico: 'http://vform666.cn/favicon.ico',
		url: 'http://vform666.cn/',
		description: '一款高效的低代码表单',
		tags: [tags.development, tags.web]
	},
	{
		name: 'npm仓库',
		ico: 'https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
		url: 'https://www.npmjs.com/',
		description: '建造令人惊奇的东西',
		tags: [tags.development, tags.depend]
	},
	{
		name: 'Mock.js',
		ico: 'http://mockjs.com/assets/img/logo-2.svg',
		url: 'http://mockjs.com/',
		description: '生成随机数据，拦截 Ajax 请求',
		tags: [tags.development]
	},
	{
		name: 'HUGO',
		ico: 'https://gohugo.io/favicon-32x32.png',
		url: 'https://gohugo.io/',
		description: '世界上最快的网站构建框架',
		tags: [tags.development, tags.template]
	},
	{
		name: 'JavaScript Rising Stars',
		ico: 'https://risingstars.js.org/favicon.ico',
		url: 'https://risingstars.js.org/',
		description: '了解每年JS生态系统的趋势',
		tags: [tags.docs, tags.learn, tags.web]
	},
	{
		name: 'HTMLrev',
		ico: 'https://htmlrev.com/images/favicon.png',
		url: 'https://htmlrev.com/',
		description: '网站模板',
		tags: [tags.template]
	},
	{
		name: 'threejs-journey',
		ico: 'https://threejs-journey.com/assets/favicons/favicon.ico',
		url: 'https://threejs-journey.com/',
		description: '可以学习three.js或者找找有关threeJS的作品',
		tags: [tags.learn, tags.web]
	},
	{
		name: 'cannon.js',
		ico: '',
		url: 'https://schteppe.github.io/cannon.js/',
		description: '一个轻量级和简单的 Web 3D 物理引擎',
		tags: [tags.development, tags.web]
	},
	{
		name: 'Day.js',
		ico: 'https://dayjs.fenxianglu.cn/assets/favicon.png',
		url: 'https://dayjs.fenxianglu.cn/',
		description: '可以为现代浏览器解析、验证、操作和显示日期和时间',
		tags: [tags.development, tags.web]
	},
	{
		name: 'Bootstrap模板',
		ico: 'https://www.bootstrapmb.com/favicon.ico',
		url: 'https://www.bootstrapmb.com/',
		description: '高端HTML模板,学会偷懒,事半功倍',
		tags: [tags.template]
	},
	{
		name: 'tailwindcss',
		ico: 'https://tailwindcss.com/favicons/favicon.ico?v=3',
		url: 'https://tailwindcss.com/',
		description: '快速构建现代网站，无需离开 HTML',
		tags: [tags.development, tags.web]
	},
	{
		name: 'ScrollReveal',
		ico: 'https://scrollrevealjs.org/favicon.ico',
		url: 'https://scrollrevealjs.org/',
		description: '当元素滚动到视图中时，为元素添加动画效果',
		tags: [tags.development, tags.web]
	},
	{
		name: 'Emojipedia',
		ico: 'https://emojipedia.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-icon.e5eb7dea.webp&w=128&q=75',
		url: 'https://emojipedia.org/',
		description: 'Emoji合集',
		tags: [tags.icon]
	},
	{
		name: 'cordova',
		ico: 'https://cordova.apache.org/favicon.ico',
		url: 'https://cordova.apache.ac.cn/',
		description: '使用HTML、CSS 和JS 构建移动应用,使用一个代码库 针对多个平台,免费且开源',
		tags: [tags.development, tags.web]
	},
	{
		name: 'Lottie',
		ico: 'https://airbnb.io/favicon.ico',
		url: 'https://airbnb.io/lottie/#/',
		description:
			'ottie 是一个适用于 Android、iOS、Web 和 Windows 的库，它使用 Bodymovin 解析导出为 JSON 的 Adobe After Effects 动画，并在移动设备和 Web 上本地呈现它们！',
		tags: [tags.development]
	}
];

module.exports = {
	tags,
	dataList
};
