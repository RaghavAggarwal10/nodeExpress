const {readFile, writeFile}=require('fs').promises
// const util=require('util')//this has a function by the name of promisify
// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)
//there is a alternate way we can do this it can be done by adding .promise at the end of require and it will also return the same thing 
console.log('started a first task')
//Check file path 
// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err)
//                 {
//                     reject(err)
//                     return 
//                 }
//                 // console.log(data)
//                 resolve(data);
//                 console.log('completed first task')
//         })
//     })
// }

// getText('./content/first.txt').then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })
const start = async()=>{
    try {
        const first = await readFile('./content/first.txt','utf8');//here we will require path as well as the encoding
        const second = await readFile('./content/second.txt','utf8');
        await writeFile('./content/result-mind-grenade.txt',`This is awesome: ${first} ${second}`,{flag:'a'})
        console.log(first, second);
    }
    catch(error)
    {
        console.log(error)
    }
    
}
start()