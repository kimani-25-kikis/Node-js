const http = require('http');

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
    res.end('Welcome to our homepage');
    return;
   }
   if(req.url === '/about'){
    res.end('Here is our short story');
    return;
   }
   res.end(`
    <h1>Oops<h1>
    <p>Enter a valid option<p>
    <a href='/'>Back to home page</a>
    `)
})
server.listen (5000, ()=>{
    console.log('Server is running on port 5000');
});