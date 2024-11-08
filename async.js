const fs =require('fs');
try{
    fs.writeFileSync('./content/Name.txt', 'Awesome');
}catch(error){
    console.log(error);
}
