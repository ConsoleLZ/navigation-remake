// 所有的标签
const tags = {
	all: '全部',
	icon: '图标',
	css: 'css',
	animation: '动画',
	openSource: '开源项目',
	web: '前端',
	development: '项目开发',
	componentLibrary: '组件库',
	docs: '文档',
	template: '网站模板',
	tools: '工具',
	devise: 'UI设计',
	resource: '资源素材',
	depend: '项目管理',
	learn: '学习',
	ai: '智能AI',
	community: '社区',
	cloudPlatform: '云平台',
	safe: '网络安全',
	game: '游戏',
	other: '其它'
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
	},
	{
		name: 'vue',
		ico: 'https://cn.vuejs.org/logo.svg',
		url: 'https://cn.vuejs.org/',
		description: '易学易用，性能出色，适用场景丰富的 Web 前端框架.',
		tags: [tags.development, tags.docs, tags.web]

	},
	{
		name: 'react',
		ico: 'https://react.docschina.org/favicon.ico',
		url: 'https://react.docschina.org/',
		description: '用于构建 Web 和原生交互界面的库',
		tags: [tags.development, tags.docs, tags.web]
	},
	{
		name: 'vitepress',
		ico: 'https://vitepress.dev/vitepress-logo-mini.svg',
		url: 'https://vitepress.dev/',
		description: 'Vite & Vue 驱动的静态站点生成器',
		tags: [tags.development, tags.web]
	},
	{
		name: 'nuxt',
		ico: 'https://nuxt.com.cn/icon.png',
		url: 'https://nuxt.com.cn/',
		description: '创建高性能和生产级别的全栈Web应用和网站',
		tags: [tags.development, tags.web]
	},
	{
		name: 'webpack',
		ico: 'https://www.webpackjs.com/icon_144x144.png',
		url: 'https://www.webpackjs.com/',
		description: '静态模块打包工具',
		tags: [tags.development, tags.web]
	},
	{
		name: 'Vite',
		ico: 'https://cn.vitejs.dev/logo.svg',
		url: 'https://cn.vitejs.dev/',
		description: '下一代的前端工具链',
		tags: [tags.development, tags.web]
	},
	{
		name: 'Mozilla',
		ico: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
		url: 'https://developer.mozilla.org/zh-CN/',
		description: '自 2005 年以来记录 Web 技术，包括 CSS、HTML 和 JavaScript',
		tags: [tags.learn, tags.docs, tags.web]
	},
	{
		name: 'Component party',
		ico: 'https://component-party.dev/favicon.png',
		url: 'https://component-party.dev/',
		description: '站长极力推荐的一个各大框架对比学习的网站',
		tags: [tags.learn, tags.web]
	},
	{
		name: 'React Native',
		ico: 'https://reactnative.cn/img/favicon.ico',
		url: 'https://reactnative.cn/',
		description: '使用React来创建 Android 和 iOS 的原生应用',
		tags: [tags.development, tags.web]
	},
	{
		name: 'uni-app',
		ico: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788',
		url: 'https://uniapp.dcloud.net.cn/',
		description: '使用Vue进行跨端开发',
		tags: [tags.development, tags.web]
	},
	{
		name: 'threeJS',
		ico: 'https://threejs.org/files/favicon.ico',
		url: 'https://threejs.org/',
		description: '开发你的3d网站吧',
		tags: [tags.development, tags.docs, tags.web]
	},
	{
		name: '高德开放平台',
		ico: 'https://a.amap.com/pc/static/favicon.ico',
		url: 'https://lbs.amap.com/',
		description: '开发地图神器',
		tags: [tags.development, tags.web]
	},
	{
		name: 'GitHub文档',
		ico: 'https://docs.kkgithub.com/assets/cb-345/images/site/favicon.png',
		url: 'https://docs.kkgithub.com/zh',
		description: '在 GitHub 旅程中随时为你提供帮助',
		tags: [tags.development, tags.docs]
	},
	{
		name: 'javascript.info',
		ico: 'https://zh.javascript.info/img/favicon/favicon.png',
		url: 'https://zh.javascript.info/',
		description: '以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。',
		tags: [tags.docs, tags.web]
	},
	{
		name: 'Three.js中文网',
		ico: 'http://webgl3d.cn/img/favicon.ico',
		url: 'http://webgl3d.cn/',
		description: '创作你的3d网站',
		tags: [tags.development, tags.docs, tags.web]
	},
	{
		name: 'pixiJS',
		ico: 'https://pixijs.com/images/favicon.png',
		url: 'https://pixijs.com/',
		description: '使用最快、最灵活的 2D WebGL 渲染器创建精美的数字内容。',
		tags: [tags.development, tags.web]
	},
	{
		name: 'w3school',
		ico: 'https://www.w3school.com.cn/ui2019/logo-32-red.png',
		url: 'https://www.w3school.com.cn/',
		description: '领先的 Web 技术教程 - 全部免费',
		tags: [tags.learn, tags.docs, tags.web]
	},
	{
		name: 'phaser',
		ico: 'https://phaser.io/favicon.ico',
		url: 'https://phaser.io/',
		description: 'Javascript 游戏框架',
		tags: [tags.development, tags.web]
	},
	{
		name: 'rollup.js',
		ico: 'https://rollupjs.org/favicon.png',
		url: 'https://rollupjs.org/',
		description: '打包工具',
		tags: [tags.development, tags.web]
	},
	{
		name: 'pinia',
		ico: 'https://pinia.vuejs.org/logo.svg',
		url: 'https://pinia.vuejs.org/zh/',
		description: '符合直觉的 Vue.js 状态管理库',
		tags: [tags.development, tags.web]
	},
	{
		name: 'uv-ui',
		ico: 'https://www.uvui.cn/favicon.ico',
		url: 'https://www.uvui.cn/',
		description: '兼容vue3+2、nvue、app、h5、小程序等多端基于uni-app和uView2.x的生态框架',
		tags: [tags.development, tags.componentLibrary, tags.web]
	},
	{
		name: 'Semantic UI',
		ico: 'https://semantic-ui.com/favicon.ico',
		url: 'https://semantic-ui.com/',
		description: '使用人性化的 HTML 创建美观、响应迅速的布局',
		tags: [tags.development, tags.componentLibrary, tags.web]
	},
	{
		name: 'Ant Design Vue',
		ico: 'https://aliyuncdn.antdv.com/favicon.ico',
		url: 'https://www.antdv.com/',
		description: '一款优美的UI框架',
		tags: [tags.development, tags.componentLibrary, tags.web]
	},
	{
		name: 'Element Plus',
		ico: 'https://element-plus.org/images/element-plus-logo-small.svg',
		url: 'https://element-plus.org/zh-CN/',
		description: '基于Vue3，面向设计师和开发者的组件库',
		tags: [tags.development, tags.componentLibrary, tags.web]
	},
	{
		name: 'Vant',
		ico: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
		url: 'https://vant-ui.github.io/vant/#/zh-CN',
		description: '轻量、可定制的移动端 Vue 组件库',
		tags: [tags.development, tags.componentLibrary, tags.web]
	},
	{
		name: 'daisyUI',
		ico: 'https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg',
		url: 'https://daisyui.com/',
		description: '最流行的组件库为Tailwind CSS',
		tags: [tags.development, tags.componentLibrary, tags.web]
	},
	{
		name: 'Ant Design',
		ico: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
		url: 'https://ant.design/index-cn',
		description: 'react组件库',
		tags: [tags.development, tags.componentLibrary, tags.web]
	},
	{
		name: 'Geist',
		ico: 'https://geist-ui.dev/favicon.ico',
		url: 'https://geist-ui.dev/zh-cn',
		description: 'react组件库',
		tags: [tags.development, tags.componentLibrary, tags.web]
	},
	{
		name: 'Vant Weapp',
		ico: 'https://img01.yzcdn.cn/vant/logo.png',
		url: 'https://vant.pro/vant-weapp/#/home',
		description: '轻量、可靠的小程序 UI 组件库',
		tags: [tags.development, tags.componentLibrary, tags.web]
	},
	{
		name: 'Naive UI',
		ico: 'https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg',
		url: 'https://www.naiveui.com/zh-CN/os-theme',
		description: '一个 Vue 3 组件库,比较完整，主题可调，使用 TypeScript，快,有点意思',
		tags: [tags.development, tags.componentLibrary, tags.web]
	},
	{
		name: 'Poly Haven',
		ico: 'https://polyhaven.com/favicon.ico',
		url: 'https://polyhaven.com/zh',
		description: '公共3D资源库, 可以下载three3D的天空盒素材图片',
		tags: [tags.resource]
	},
	{
		name: 'threedscans',
		ico: 'https://threedscans.com/wp-content/uploads/2022/04/cropped-siteicon-32x32.jpg',
		url: 'https://threedscans.com/',
		description: '3D素材，主要为雕塑',
		tags: [tags.resource]
	},
	{
		name: 'Z-Library',
		ico: 'https://zh.z-lib.gs/favicon.svg',
		url: 'https://zh.z-lib.gs/',
		description: '可以浏览和下载各种书籍',
		tags: [tags.resource]
	},
	{
		name: 'DOTOWN',
		ico: 'https://dotown.maeda-design-room.net/wp-content/uploads/2022/01/favicon.png',
		url: 'https://dotown.maeda-design-room.net/',
		description: '一些超好看的像素素材',
		tags: [tags.resource]
	},
	{
		name: 'kenney',
		ico: 'https://kenney.nl/favicon.ico',
		url: 'https://kenney.nl/',
		description: '数以千计的完全免费的游戏资产供您使用。',
		tags: [tags.resource]
	},
	{
		name: 'CraftPix.Net',
		ico: 'https://craftpix.net/favicon/favicon.ico',
		url: 'https://craftpix.net/',
		description: '2D游戏资产商店&免费',
		tags: [tags.resource]
	},
	{
		name: 'ambientCG',
		ico: 'https://acg-media.struffelproductions.com/file/ambientCG-Web/media/icon/favicon.ico',
		url: 'https://ambientcg.com/',
		description: '有很多纹理素材',
		tags: [tags.resource]
	},
	{
		name: 'AssetStore',
		ico: 'https://assetstore.unity.com/favicon.ico',
		url: 'https://assetstore.unity.com/zh-CN',
		description: 'Unity的素材商店市场',
		tags: [tags.resource]
	},
	{
		name: 'vectorCraftr',
		ico: 'https://vectorcraftr.com/images/icons/favicon.ico',
		url: 'https://vectorcraftr.com/',
		description: '一些好看的插画',
		tags: [tags.resource]
	},
	{
		name: '爱给网',
		ico: 'https://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico',
		url: 'https://www.aigei.com/',
		description: '音效,配乐,3d模型,游戏素材,影视后期,视频素材,免费下载,音乐,特效,模版',
		tags: [tags.resource]
	},
	{
		name: 'Design Daily',
		ico: 'https://assets-global.website-files.com/572cc412e8e48c8223fa0e57/6596b5ee2b5c3b8bbcbf53a6_UIDD-favicon.png',
		url: 'https://www.uidesigndaily.com/',
		description: '免费开源 UI 资源',
		tags: [tags.development,tags.devise]
	},
	{
		name: '即时设计',
		ico: 'https://img.js.design/assets/webImg/favicon.ico',
		url: 'https://js.design/',
		description: '云端编辑的专业级 UI 设计工具',
		tags: [tags.devise]
	},
	{
		name: 'Color Hunt',
		ico: 'https://colorhunt.co/img/colorhunt-favicon.svg?2',
		url: 'https://colorhunt.co/',
		description: '设计师和艺术家的调色板',
		tags: [tags.tools]
	},
	{
		name: 'MODAO',
		ico: 'https://images.modao.cc/images/favicon.ico',
		url: 'https://modao.cc/',
		description: '墨刀，让原型设计更简单',
		tags: [tags.devise]
	},
	{
		name: 'Dribbble',
		ico: 'https://cdn.dribbble.com/assets/favicon-99944ff731bb44d3a947810ca8728f177f8deac035a3a4342120c385fd7acb9d.svg',
		url: 'https://dribbble.com/',
		description: '寻找设计灵感',
		tags: [tags.development,tags.devise]
	},
	{
		name: 'Mobbin',
		ico: 'https://mobbin.com/favicon.svg?v=2.1',
		url: 'https://mobbin.com/',
		description: '全球最大的移动和网页设计库',
		tags: [tags.development,tags.devise]
	},
	{
		name: 'Awwwards',
		ico: 'https://assets.awwwards.com/assets/images/favicon.svg',
		url: 'https://www.awwwards.com/',
		description: '为一些优秀的网站颁发奖项，可以找找设计灵感',
		tags: [tags.development,tags.devise]
	},
	{
		name: '站酷',
		ico: 'https://static.zcool.cn/git_z/z/site/favicon.ico?version=1618914637608',
		url: 'https://www.zcool.com.cn/',
		description: '上面或许有你需要的ui作品',
		tags: [tags.development,tags.devise]
	},
	{
		name: 'clip-path生成器',
		ico: 'https://www.jiangweishan.com/tool/clippy/pics/favicon.png',
		url: 'https://www.jiangweishan.com/tool/clippy/',
		description: '可以生成各种clip-path路径',
		tags: [tags.tools, tags.web]
	},
	{
		name: '佐糖',
		ico: 'https://qncdn.aoscdn.com/astro/picwish/_astro/favicon@30w.61721eae.png',
		url: 'https://picwish.cn/',
		description: '用AI让图像处理',
		tags: [tags.tools]
	},
	{
		name: '标小智',
		ico: 'https://www.logosc.cn/img/logo-icons/favicon.png?v=1',
		url: 'https://www.logosc.cn/',
		description: '智能LOGO设计生成器',
		tags: [tags.tools]
	},
	{
		name: 'Canva可画',
		ico: 'https://static.canva.cn/static/images/favicon-1.ico',
		url: 'https://www.canva.cn/',
		description: '今天你想设计什么?',
		tags: [tags.devise]
	},
	{
		name: '易转换',
		ico: 'https://www.easeconvert.com/favicon.ico',
		url: 'https://www.easeconvert.com/',
		description: '免费好用的文件转换工具',
		tags: [tags.tools]
	},
	{
		name: '写作猫',
		ico: 'https://uranus-static.oss-accelerate.aliyuncs.com/xiezuocat/favicon.ico',
		url: 'https://xiezuocat.com/',
		description: '把写作交给ai',
		tags: [tags.ai]
	},
	{
		name: 'ico51',
		ico: 'https://www.ico51.cn/favicon.ico',
		url: 'https://www.ico51.cn/',
		description: '图片格式转换(ico)',
		tags: [tags.tools]
	},
	{
		name: 'CloudConvert',
		ico: 'https://cloudconvert.com/images/logo_flat_32.png',
		url: 'https://cloudconvert.com/',
		description: '在线文件转换器',
		tags: [tags.tools]
	},
	{
		name: '帮小忙',
		ico: 'https://tool.browser.qq.com/favicon.ico',
		url: 'https://tool.browser.qq.com/',
		description: '在线工具箱',
		tags: [tags.tools]
	},
	{
		name: 'uTools',
		ico: 'https://res.u-tools.cn/website5/assets/favicon.png',
		url: 'https://www.u.tools/',
		description: '新一代效率工具平台',
		tags: [tags.tools]
	},
	{
		name: 'lingdaima',
		ico: 'https://lingdaima.com/static/img/bolang.png',
		url: 'https://lingdaima.com/',
		description: '零代码工具箱 - 专为前端打造',
		tags: [tags.tools]
	},
	{
		name: 'Android Asset Studio',
		ico: 'https://romannurik.github.io/AndroidAssetStudio/favicon.ico',
		url: 'https://romannurik.github.io/AndroidAssetStudio/',
		description: 'App应用图标生成',
		tags: [tags.development,tags.tools]
	},
	{
		name: 'ezgifcom',
		ico: 'https://ezgif.com/favicon.ico',
		url: 'https://ezgif.com/',
		description: '在线GIF制作器和图像编辑器',
		tags: [tags.tools]
	},
	{
		name: '开发者客栈',
		ico: 'https://static.developers.pub/8a71a71bc1ae403cbeb5b8e6230cb016.ico',
		url: 'https://www.developers.pub/resume',
		description: '简历制作',
		tags: [tags.tools]
	},
	{
		name: '江下科技',
		ico: 'https://www.onlinedo.cn/favicon.ico',
		url: 'https://www.onlinedo.cn/video-gif',
		description: '视频转gif文件',
		tags: [tags.tools]
	},
	{
		name: 'HDRI-to-CubeMap',
		ico: '',
		url: 'https://matheowis.github.io/HDRI-to-CubeMap/',
		description: '用来分割在Poly Haven找到的HDRI素材',
		tags: [tags.tools]
	},
	{
		name: '影刀',
		ico: 'https://winrobot-pub-a-oss.winrobot360.com/static/home/favicon.ico',
		url: 'https://www.yingdao.com/',
		description: '我们创造软件机器人，让人不需要像机器一样工作',
		tags: [tags.tools, tags.ai]
	},
	{
		name: '91化简',
		ico: 'https://91huajian.cn/favicon.ico',
		url: 'https://91huajian.cn/',
		description: '一款开源的，免费的简历设计制作神器',
		tags: [tags.tools]
	},
	{
		name: '云搭',
		ico: 'https://www.sunmao-design.top/sunmao/admin/assets/logo.896aa176.png',
		url: 'https://www.sunmao-design.top/sunmao/admin/#/dooring/home',
		description: '零代码搭建小程序、H5、问卷、图文',
		tags: [tags.tools, tags.cloudPlatform]
	},
	{
		name: 'JSON CRACK',
		ico: 'https://jsoncrack.com/favicon.ico',
		url: 'https://jsoncrack.com/',
		description: '将 JSON 可视化为交互式图形',
		tags: [tags.tools]
	},
	{
		name: 'GIF中文网',
		ico: 'https://www.gif.cn/favicon.ico',
		url: 'https://www.gif.cn/',
		description: 'GIF图片制作，视频转GIF，GIF图片素材',
		tags: [tags.tools]
	},
	{
		name: 'CodeGeeX',
		ico: 'https://codegeex.cn/assets/images/only_logo_dark.png',
		url: 'https://codegeex.cn/',
		description: '智能编程助手',
		tags: [tags.ai]
	},
	{
		name: 'OpenAI',
		ico: 'https://openai.com/favicon.ico',
		url: 'https://openai.com/',
		description: '拥有最强的chatGPT',
		tags: [tags.ai]
	},
	{
		name: '豆包',
		ico: 'https://p9-flow-imagex-sign.byteimg.com/ocean-cloud-tos/FileBizType.BIZ_BOT_ICON/4180773176086868_1709203591079450233_5Y6fJgvsfc.jpeg~tplv-a9rns2rl98-icon-tiny.jpeg?rk3s=9956f44f&x-expires=1719224007&x-signature=9IuG%2Bqi7IY2zIKhKL8%2FmdgUc9tI%3D',
		url: 'https://www.doubao.com/',
		description: '豆包 - 抖音旗下 AI 智能助手',
		tags: [tags.ai]
	},
	{
		name: '通义千问',
		ico: 'https://acd-assets.alicdn.com/acd_work/tongyi-portal/assets/logo.svg',
		url: 'https://tongyi.aliyun.com/',
		description: '阿里达摩院推出的大模型，拥有千亿参数，可用于智能问答、知识检索、文案创作等场景',
		tags: [tags.ai]
	},
	{
		name: '星火大模型',
		ico: 'https://xinghuo.xfyun.cn/spark-icon.ico',
		url: 'https://xinghuo.xfyun.cn/',
		description: '科大讯飞推出的AI大模型，支持对话、写作、编程等功能，还能提供语音交互方式',
		tags: [tags.ai]
	},
	{
		name: 'AI Filter',
		ico: 'https://aifilter.net/static/images/common/favicon.ico',
		url: 'https://aifilter.net/',
		description: '使用 AI 滤镜将您的照片转换为动漫、粘土、3D、像素、表情符号、PS2、贴纸和更多样式。非常适合初学者和专业人士，只需点击几下即可。',
		tags: [tags.ai]
	},
	{
		name: 'chatnio',
		ico: 'https://chatnio.net/favicon.ico',
		url: 'https://chatnio.net/',
		description: '一个各种ai模型集合的网站',
		tags: [tags.ai]
	},
	{
		name: 'TRIPO',
		ico: 'https://www.tripo3d.ai/v1/favicon.png',
		url: 'https://www.tripo3d.ai/',
		description: 'ai生成3D模型',
		tags: [tags.ai]
	},
	{
		name: 'aifacefy',
		ico: 'https://aifacefy.com/icon.svg?d4bc701fa93cbc90',
		url: 'https://aifacefy.com/',
		description: '免费 AI 换脸',
		tags: [tags.ai]
	},
	{
		name: 'GoEnance',
		ico: 'https://cdn.goenhance.ai/images/static/sites/goenhance-logo-drak-200.png',
		url: 'https://www.goenhance.ai/',
		description: '在几分钟内创建 AI 动画短片',
		tags: [tags.ai]
	},
	{
		name: 'LeanCloud',
		ico: 'https://www.leancloud.cn/favicon.ico',
		url: 'https://www.leancloud.cn/',
		description: '可以存储数据，用户信息的云平台',
		tags: [tags.cloudPlatform]
	},
	{
		name: 'vercel',
		ico: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico',
		url: 'https://vercel.com/',
		description: '自动化部署项目',
		tags: [tags.development, tags.cloudPlatform]
	},
	{
		name: 'Uploadcare',
		ico: 'https://ucarecdn.com/27856246-9e5a-41a4-8098-f4cf1d006ef1/',
		url: 'https://uploadcare.com/',
		description: '上传、存储、转换、优化图像、视频和文档',
		tags: [tags.cloudPlatform]
	},
	{
		name: '多吉云',
		ico: 'https://www.dogecloud.com/favicon.png',
		url: 'https://www.dogecloud.com/',
		description: '云存储，网站加速',
		tags: [tags.cloudPlatform]
	},
	{
		name: 'Lightly',
		ico: 'https://lightly.teamcode.com/favicon.svg',
		url: 'https://lightly.teamcode.com/',
		description: '让写代码变得更简单',
		tags: [tags.cloudPlatform]
	},
	{
		name: 'Github',
		ico: 'https://css.kkgithub.com/favicons/favicon.png',
		url: 'https://kkgithub.com/',
		description: '全球领先的人工智能开发者平台',
		tags: [tags.cloudPlatform, tags.community]
	},
	{
		name: 'Gitee',
		ico: 'https://gitee.com/favicon.ico',
		url: 'https://gitee.com/',
		description: 'DevOps一站式研发效能平台',
		tags: [tags.cloudPlatform, tags.community]
	},
	{
		name: '路过图传',
		ico: 'https://imgse.com/content/images/system/favicon_1587118523486_91617a.png',
		url: 'https://imgse.com/',
		description: '免费图片上传',
		tags: [tags.cloudPlatform]
	},
	{
		name: '聚合图床',
		ico: 'https://www.superbed.cn/favicon.ico',
		url: 'https://www.superbed.cn/',
		description: '免费图片上传',
		tags: [tags.cloudPlatform]
	},
	{
		name: 'jsdelivr',
		ico: 'https://www.jsdelivr.com/favicon.ico',
		url: 'https://www.jsdelivr.com/',
		description: '开源项目的免费 CDN',
		tags: [tags.cloudPlatform]
	},
	{
		name: 'cdnjs',
		ico: 'https://cdnjs.com/favicon.png',
		url: 'https://cdnjs.com/',
		description: '免费的开源 CDN 服务',
		tags: [tags.cloudPlatform]
	},
	{
		name: 'Gitlab',
		ico: 'https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png',
		url: 'https://gitlab.com/',
		description: '项目存储与版本管理',
		tags: [tags.cloudPlatform]
	},
	{
		name: 'codepen',
		ico: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
		url: 'https://codepen.io/',
		description: 'CodePen 是面向前端设计人员和开发人员的社交开发环境。构建和部署网站，展示您的作品，构建测试用例以学习和调试，并寻找灵感。',
		tags: [tags.cloudPlatform, tags.community]
	},
	{
		name: 'GitCode',
		ico: 'https://cdn-static.gitcode.com/static/images/logo-favicon.png',
		url: 'https://gitcode.com/',
		description: '代码仓库',
		tags: [tags.cloudPlatform]
	},
	{
		name: 'Biofy',
		ico: 'https://biofy.cn/favicon.ico',
		url: 'https://biofy.cn/',
		description: '拼接、聚合你的多元化世界',
		tags: [tags.cloudPlatform]
	},
	{
		name: 'BUUCTF',
		ico: 'https://buuoj.cn/themes/buu_core/static/img/favicon.ico',
		url: 'https://buuoj.cn/',
		description: 'ctf我不会',
		tags: [tags.safe]
	},
	{
		name: 'WgpSec CTF',
		ico: 'https://ctf.wgpsec.org/files/4aecfc78e9fe458cbd934aacc69ffd94/favicon.ico',
		url: 'https://ctf.wgpsec.org/',
		description: '打CTF怎么能没有电竞椅呢!',
		tags: [tags.safe]
	},
	{
		name: '稀土掘金',
		ico: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png',
		url: 'https://juejin.cn/',
		description: '一个很好的开发者社区，可以看看大佬的各种文章',
		tags: [tags.learn, tags.community]
	},
	{
		name: 'CSDN',
		ico: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
		url: 'https://www.csdn.net/',
		description: '各种技术文章都在这里',
		tags: [tags.learn, tags.community]
	},
	{
		name: 'bilibili',
		ico: 'https://th.bing.com/th?id=ODLS.e42d2c4d-ad65-4c7a-b0fd-817a1c3bed01&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2',
		url: 'https://www.bilibili.com/',
		description: '视频教学网站，学习各种知识',
		tags: [tags.learn, tags.community]
	},
	{
		name: '中国独立开发者项目',
		ico: 'https://developer.hubing.online/favicon.png',
		url: 'https://developer.hubing.online',
		description: '各种大佬的项目',
		tags: [tags.learn]
	},
	{
		name: 'roadmap',
		ico: 'https://roadmap.sh/manifest/favicon.ico',
		url: 'https://roadmap.sh/',
		description: 'roadmap.sh 是社区努力的结果 创建路线图、指南和其他教育内容以帮助指导开发人员 在选择一条道路并指导他们的学习。',
		tags: [tags.learn]
	},
	{
		name: 'ProjectHunt',
		ico: 'https://projecthunt.me/favicon.ico',
		url: 'https://projecthunt.me/',
		description: '发现和分享出色的项目',
		tags: [tags.learn]
	},
	{
		name: '思否',
		ico: 'https://static.segmentfault.com/main_site_next/dc3490f3/favicon.ico',
		url: 'https://segmentfault.com/',
		description: '技术分享',
		tags: [tags.learn, tags.community]
	},
	{
		name: 'flysheep',
		ico: 'https://images.weserv.nl/?url=https://r534.com/flysheep/i/2023/02/25/5fgq.jpg',
		url: 'https://www.flysheep6.com/',
		description: '看看有没有你喜欢的游戏吧',
		tags: [tags.game]
	},
	{
		name: '悟空神辅',
		ico: 'http://www.5kfz.com/favicon.ico',
		url: 'http://www.5kfz.com/',
		description: '洛克们，开启你的辅助之旅吧',
		tags: [tags.game]
	},
	{
		name: '多邻国',
		ico: 'https://d35aaqx5ub95lt.cloudfront.net/favicon.ico',
		url: 'https://www.duolingo.cn/',
		description: '学习英语神器',
		tags: [tags.learn]
	},
	{
		name: '力扣',
		ico: 'https://leetcode.cn/favicon.ico',
		url: 'https://leetcode.cn/',
		description: '算法题就靠它了',
		tags: [tags.learn, tags.community]
	},
	{
		name: 'Shields.io',
		ico: 'https://shields.io/img/favicon.ico',
		url: 'https://shields.io/',
		description: '简洁、一致且易读的徽章',
		tags: [tags.development]
	},
	{
		name: 'wallspic',
		ico: 'https://wallspic.com/static/images/favicon/favicon-32x32.png',
		url: 'https://wallspic.com/',
		description: '看看有没有好看的壁纸吧!',
		tags: [tags.other]
	},
	{
		name: 'Qwerty Learner',
		ico: 'https://qwerty.kaiyi.cool/favicon.ico',
		url: 'https://qwerty.kaiyi.cool/',
		description: '不想记单词',
		tags: [tags.learn]
	},
	{
		name: 'Vue.js挑战',
		ico: 'https://cn-vuejs-challenges.netlify.app/favicon.ico',
		url: 'https://cn-vuejs-challenges.netlify.app/',
		description: '一个Vue.js在线挑战平台',
		tags: [tags.learn]
	},
	{
		name: 'SVG Filters',
		ico: 'https://yoksel.github.io/favicon.ico',
		url: 'https://yoksel.github.io/svg-filters/#/',
		description: '各种svg的滤镜效果',
		tags: [tags.development]
	},
	{
		name: 'Quick Reference',
		ico: 'data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%221em%22%20width%3D%221em%22%3E%20%3Cpath%20d%3D%22m21.66%2010.44-.98%204.18c-.84%203.61-2.5%205.07-5.62%204.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2%201.17-2.42%203.16-3.07%206.5-2.28l1.67.39c4.19.98%205.47%203.05%204.49%207.23Z%22%20fill%3D%22%23c9d1d9%22%2F%3E%20%3Cpath%20d%3D%22M15.06%2019.39c-.62.42-1.4.77-2.35%201.08l-1.58.52c-3.97%201.28-6.06.21-7.35-3.76L2.5%2013.28c-1.28-3.97-.22-6.07%203.75-7.35l1.58-.52c.41-.13.8-.24%201.17-.31-.3.61-.54%201.35-.74%202.2l-.98%204.19c-.98%204.18.31%206.24%204.48%207.23l1.68.4c.58.14%201.12.23%201.62.27Zm2.43-8.88c-.06%200-.12-.01-.19-.02l-4.85-1.23a.75.75%200%200%201%20.37-1.45l4.85%201.23a.748.748%200%200%201-.18%201.47Z%22%20fill%3D%22%23228e6c%22%20%2F%3E%20%3Cpath%20d%3D%22M14.56%2013.89c-.06%200-.12-.01-.19-.02l-2.91-.74a.75.75%200%200%201%20.37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z%22%20fill%3D%22%23228e6c%22%20%2F%3E%20%3C%2Fsvg%3E',
		url: 'https://quickref.cn/',
		description: '为开发人员分享快速参考备忘清单',
		tags: [tags.docs]
	},
	{
		name: 'UomgAPI',
		ico: 'https://api.uomg.com/assets/favicon.ico',
		url: 'https://api.uomg.com/',
		description: '稳定、快速、免费的 API 接口服务',
		tags: [tags.cloudPlatform]
	},
	{
		name: '堆友',
		ico: 'https://static-ddesign.oss-cn-beijing.aliyuncs.com/2024/01/10/c501f10f7dd4b2b3?OSSAccessKeyId=STS.NUDkViXJ8tpLZJDNXHQnazvBQ&Expires=1715786273&Signature=E4Oi7JjYrWiCJlMMddRoLkC5BmM%3D&response-content-disposition=attachment%3B%20filename%3D%221678341712313_47242a3527a615cb4fd8f42745d48fef.png%22&security-token=CAIS3QJ1q6Ft5B2yfSjIr5bxIOzdtZUZw7KnWGz1qlgdXeFNlbPpszz2IHhMdHdoBOgfsf8wmG1Q7Pgelqp6U4cdoPYY41QpvPpt6gqET9froq7ctM4A6vCMHWyUFGS0vqv7aPn4S9XwY%2Bqkb0u%2B%2BAZ43br9c0fFPTmiKobbppN7Sd4VUwKkF2gkYu1bPQx%2FssQXGGLMPPK2SH7Qj3HXEVBjt3gK6xd24r%2FtxdaHuFiMzg%2Fh1uYJpo%2B0LpSpdMhjOtA9ca%2FshbcpJ%2Fqbjn4LtkQarfkstsEep2eb5OP6KkJK%2FhCLP9DT9tBSNwJjbsA4YfUc9KiizaAg47OIyNiqk0wTYfs6XyjSX4Gvxtsu5H8tjWHTH1ySGQMusrjnXvGd22uv4ecJv6JVUJOnpivFg%2FiAnq0%2BhovmmTaEK07oIIPu25otuqEetH7z9rGRTDviLfjnl0hRVPAyB5dZZYhItQSJGoABjt6Pr2F7wcwrJXrvVdCtJqubR%2BKPZ5pcYv%2Baby8qR%2FTy%2BZIofJgjqjhaPxXXxJiSa8sneCw%2BEO7MIe3clS45HPYCuUV88%2FpkSDOfN9txJ0HrwGQwnb0qgxV%2BZ%2F9XPYEXsreYs9XZXwxbv90N4lerJJ2aJ4kug%2FMNKqjppmRb2sFsgAA%3D%3D',
		url: 'https://d.design/',
		description: '多风格AI绘画神器免费生成；3D素材在线渲染，免费商用；各类创意设计大赛，等你来战！',
		tags: [tags.ai, tags.resource]
	},
	{
		name: 'EMOJIALL',
		ico: '',
		url: 'https://www.emojiall.com/',
		description: '这里有关于Emoji、Emoji含义、Emoji图片等的所有信息。',
		tags: [tags.resource]
	},
	{
		name: '萌国ICP备案',
		ico: 'https://icp.gov.moe/favicon.ico',
		url: 'https://icp.gov.moe/',
		description: '萌友网站联萌，快来申请萌萌的ICP备案号吧!',
		tags: [tags.community]
	},
	{
		name: '不蒜子',
		ico: '//busuanzi.ibruce.info/images/garlic.png',
		url: 'https://busuanzi.ibruce.info/',
		description: '快速添加网站访问量、人数',
		tags: [tags.development]
	},
	{
		name: '一元机场',
		ico: '',
		url: 'https://xn--4gq62f52gdss.ink/',
		description: '要科学上网哦',
		tags: [tags.other]
	},
	{
		name: 'wave.video',
		ico: 'https://assets.animatron.com/landings/static/wv-favicon.ico',
		url: 'https://wave.video/zh/tools/audio-editing/text-to-speech',
		description: '为你的视频增加一段语音',
		tags: [tags.tools]
	},
	{
		name: 'wallpapers-clan',
		ico: 'https://wallpapers-clan.com/wp-content/uploads/2020/08/cropped-wallpapers-clan-favicon-3-32x32.png',
		url: 'https://wallpapers-clan.com/',
		description: '有很多好看的壁纸，图标(移动端，桌面端)',
		tags: [tags.other]
	},
	{
		name: '面试鸭',
		ico: 'https://www.mianshiya.com/favicon.ico',
		url: 'https://www.mianshiya.com/',
		description: '题库质量高，完善，一个很好的刷题网站',
		tags: [tags.learn]
	},
	{
		name: 'OpenStreetMap',
		ico: 'https://www.openstreetmap.org/assets/favicon-32x32-99b88fcadeef736889823c8a886b89d8cada9d4423a49a27de29bacc0a6bebd1.png',
		url: 'https://www.openstreetmap.org/',
		description: '提供城市OSM数据',
		tags: [tags.tools, tags.resource]
	},
	{
		name: 'live2d',
		ico: 'https://www.live2d.com/wp-content/themes/cubism_new/assets/img/favicon.ico',
		url: 'https://www.live2d.com/zh-CHS/',
		description: '可以直接对原图进行加工，做出2D的立体表现',
		tags: [tags.development]
	}
];

module.exports = {
	tags,
	dataList
};
