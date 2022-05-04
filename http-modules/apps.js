const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req)
    if(req.url === '/') {
        //l'utilisateur demande the home page
        res.write('welcome to our home page')//the response that we send to the server
        res.end()
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    //in case we demand a page that does not exist 
    //we can right some html here but it is not a clean method!
    res.end(`
    <h1>oops!</h1>
<p>we can't seem to find the page that you're looking for!</p>
<a href="/">back home</a>
    `)
})

server.listen(5000)//port where we listen