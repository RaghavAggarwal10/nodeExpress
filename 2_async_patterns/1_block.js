const http=require('http')
const server=http.createServer((req,res)=>{
//on req  we can check for the url which the person request from us 
if(req.url==='/'){//url is a property
    res.end("Home page")
}
if(req.url==='/about'){//Blocking CODE!!!
    //THis will block not only the about page but the rest of them to  
    // THIS IS THE REASON WE PREFER TO SET upour code async chronously as we offload the task and when our data is ready we can set run the task and it will not hold the other users 
    for(let i=0;i<1000;i++){
        for(let j=0;j<1000;j++){
            console.log(`${i} ${j}`)
        }
    }
    res.end("About page")
}
})
server.listen(5000,()=>{
    console.log('Server is listening to port 5000.....')
})