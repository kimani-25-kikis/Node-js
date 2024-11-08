const fs =require('fs');
try{
    fs.writeFile('./content/Name.txt', 'Awesome');
}catch(error){
    console.log(error);
}
