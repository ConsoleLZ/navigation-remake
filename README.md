## 导航网站模板
这是一个纯静态的网站模板，其中UI库使用的是: [https://semantic-ui.com/](https://semantic-ui.com/)

![图片](https://github.com/ConsoleLZ/navigation-remake/blob/main/preview.png)

## 启动

请先打包后启动

```sh
npm run serve
```

## 打包

```sh
npm run build
```

## 格式化

```sh
npm run format
```

## 目录结构

```
navigation-remake-main
├─ config.yml  网站的配置文件（标题等）
├─ deploy.bat  windows下面的部署文件（自行修改git仓库地址）
├─ index.js  入口文件
├─ server.js   服务器配置
└─ src
   ├─ assets
   │  ├─ game.svg
   │  ├─ github.svg
   │  └─ load-error.svg
   ├─ css
   │  ├─ index.css
   │  └─ semantic.css
   ├─ data
   │  └─ index.js  网站卡片，标签数据都在这里配置和修改
   ├─ favicon.png   网站图标
   ├─ js
   │  ├─ index.js   网站主要逻辑
   │  ├─ jquery.js
   │  ├─ semantic.js
   │  └─ utils.js   工具函数
   ├─ pages
   │  └─ index.ejs   网站布局模板
   └─ robots.txt  爬虫协议

```

## 问题

1. 如果打包后没有报错，但是没有出现打包文件，请尝试切换node版本，实测：node16,18打包没有问题
2. 已经将UI依赖包下载到本地，这就是为什么打包结果较大的原因，大家可以自行决定使用cdn，删除src/js目录下的相关依赖包，然后再到src/pages/index.ejs中引入cdn
