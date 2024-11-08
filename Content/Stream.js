const {creatReadStream} = require('fs')

const stream = creatReadStream('./content/Stream.txt');

stream.on('data', (result)=>{
    console.log(result);
})