const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    console.log(req)
    res.end(`
        <h1>Oops</h1>
        <p> We cann't seem to find the page you are looking for </p>
        <a href="/">back home</a>
        `)   
})
//req ad res are two objects and remeber that req is incominig request and response is what we are sending back 
server.listen(5000)//it tells us which port we are listening to