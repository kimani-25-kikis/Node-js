const {readFile, writeFile} =require('fs').promises

//const util = require('util')

//const readFilePromise = util.promisify(readFile);
//const writeFilePromise =util.promisify(writeFile);

const start = async()=>{
    try{
        const first = await readFilePromise('./content/first.txt','utf8');
        const second =await readFilePromise('./content/second.txt','utf8');

        await writeFilePromise('./content/Just.txt', `This is a new Thing ${first} ${second}`);
        console.log(first, second);
    }catch(error){
        console.log(error);
    }
}
start();