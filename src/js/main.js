
// 引入相关所有 css
require('../stylus/main.styl');

// 引入逻辑 js
let getRandom = require('./app');

const data = ['Hello,World!','Oh!Shit!','Are you kidding me?','Stay Hungry,Stay Foolish']

console.log(getRandom());
console.log($("#init")[0].baseURI);


$("#init")[0].innerHTML = data[getRandom()]
// document.write(data[getRandom()])

// $("#init").innerHTML = '<span>sss</span>'