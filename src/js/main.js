// 引入相关所有 css
require('../stylus/main.styl');

// 引入逻辑 js
let getRandom = require('./app');

const data = [
    'Hello,World!',
    'Oh! Shit!',
    'Are you kidding me?',
    'Do You Miss Me?',
    'Hi, Jeason!'
]

console.log(getRandom());

$("#init")[0].innerHTML = data[getRandom()]
