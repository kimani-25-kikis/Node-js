    const {readFile, writeFile} = require('fs');

    console.log('Start');
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
            console.log('Done with the task');
        })
    })
    })
    console.log('Starting new task');

