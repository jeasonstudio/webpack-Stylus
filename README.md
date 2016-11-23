# webpack-Stylus

基于 Stylus 、 ES6 和 webpack 的简单高效的前端页面重构项目结构。

### 目标：

提供一个合理的项目结构以及实用工具，简化重构项目流程，方便前端重构项目开发。

### 实现功能：

 - 使用 webpack 对项目进行打包：对 JS 进行 jshint 规范化校验、将 JS 插件合并并压缩、编译 stylus 文件、实现 livereload 浏览器无刷新实时看到效果。

 - 使用 Stylus 快速编写 CSS 代码，分模块的提供变量定义（var.styl）、实用 Stylus 函数（util.styl）、CSS Reset 和中文排版（typo.styl）等。

### 主要目录结构

```shell
.
├──README.md            --- 使用帮助
├──assert               --- 设计稿及其他项目资源
├──html                 --- 项目 HTML 页面
├──dist                 --- 项目合并后目录
├──tpls                 --- 存放 html
├──src                  --- 项目开发目录
   ├──css               --- 其他项目需要的其他 CSS 文件，复制到 ./dist/css/xxx.css
   ├──fonts             --- iconFonts 放在这里，复制到 ./dist/fonts/xxx.ttf
   ├──images            --- 图片，复制到 ./dist/images/xxx.png
   ├──js                --- JS 组件，压缩到./dist/js/xxx.js。或合并压缩。
     ├──plugins         --- JS 插件存放目录，webpack 会将此目录所有文件合并压缩为 dist/js/plugins.min.js 文件
   ├──stylus            --- stylus 文件目录，合并压缩到 ./dist/css/style.css
     ├──base            --- 基础 styl
     ├──components      --- 相关细节 styl
     ├──layout          --- 项目复用结构相关 styl
     ├──themes          --- 主题相关 styl
     ├──pages           --- pages相关
     └──main.styl       --- main.styl 主文件
```

### 使用方法

`clone` 或者 `DownLoad` 下来，将文件夹命名为项目名称，删掉无用文件。

将资源文件放在 `assert` 文件夹中。

如果需要使用 `git` 管理项目，使用 `git clone` 下来的，请注意使用 `git remote -v` 查看 `repo url` 并修改为你自己的项目 `repo url`。

如果使用 `git` 管理项目，请编辑根目录下面的 `gitignore` 添加不需要追踪的文件，并将其修改为 `.gitignore` 使其生效。

确保安装过 `nodejs` 和 `webpack`，在项目目录下面，执行 `npm install` 和 `npm start`，会自动打开浏览器，提供文件编译和实时刷新等功能。

### HTML 开发建议

建议使用 section-wrap 和 section 的 HTML 结构和命名方式。

### CSS 开发建议

预先审查设计稿，将其常见颜色、尺寸等保存为变量，统一管理在 `./src/stylus/base/var.styl` 文件中。

其他请按照相关目录及说明，在适当的位置写 stylus

### JS 开发建议

将 JS 插件的 JS 文件放在 `./src/js/plugins` 文件夹下面，`webpack` 会将该文件夹下面所有文件合并压缩为 `./dist/js/plugins.min.js` 文件。

在 `./src/js/main.js` 文件中编写 JS 有关代码，`webpack` 会检测变化，进行 jshint 校验并压缩为 `./dist/js/main.js` 文件。

如果你使用 jQuery，这样在你的 HTML 页面中，引入三个 JS 文件链接即可。

### 使用许可

[MIT](./LICENSE)