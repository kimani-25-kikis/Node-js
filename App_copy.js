

const names = require('./4-name');
//const sayHi = require('./5-utilis');
const data =require('./6-alt');

require('./7-sum');
console.log(data);
console.log(names);
sayHi("Josh");
sayHi(names.john);
sayHi(names.peter);

// Os built in module
const os = require('os');
const user = os.userInfo();
//console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`);
console.log(os.type()); // e.g., 'Windows_NT', 'Linux', 'Darwin' (for macOS);
console.log(os.platform()); // e.g., 'win32', 'linux', 'darwin'
console.log(os.arch()); // e.g., 'x64'
console.log(os.freemem()); // Free memory in bytes
console.log(os.totalmem()); // Total memory in bytes
console.log(os.networkInterfaces()); // Network interfaces

//path built i module
const path = require('path');
console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath);
const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);

//fs built in module
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/Second.txt', 'utf8');

// console.log(first);
// console.log(second);

writeFileSync('./content/result-sync.txt', `Here is the first and second text: ${first}, ${second}`);

//fs built in module

const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        return console.log(err);
    }
    const first = result;
    readFile('./content/second.txt', 'utf8',(err, result)=>{
        if(err){
            return console.log(err);
        }
        const second = result;
        writeFile('./content/result-async.text', `Here is the first and second text: ${first}, ${second}`,(err, result)=>{
            if(err){
                return console.log(err);
            }
            console.log(result);
        })
    })
})
// lodash dependencies

const _ =require('lodash');

const items =[1,[2, [3, [4 ]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

//Event loop1

console.log('First');

setTimeout(()=>{
    console.log('Second')
},0);

console.log('Third');

//Event loop2


const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('Request sent');
    res.end('Hello kimani');
});

server.listen(5000,()=>{
    console.log('Server running at port 5000')
})

//EventEmitter
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log('Data set Received');
})
customEmitter.emit('response');

//EventEmitter2
const http = require('http');

//const server = http.createServer()

server.on('request', (req, res)=>{
    res.end('Welcome');
});
server.listen(5000);



