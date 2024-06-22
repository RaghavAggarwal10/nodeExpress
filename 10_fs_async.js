// const {readFile,writeFile}=require('fs')
// readFile('./content/first.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return ;
//     }
    
//         console.log(result)
//         const first=result
//         readFile('./content/second.txt','utf-8',(err,result)=>{
//             if(err){
//                 console.log(err)
//                 return ;
//             }
//             const second=result
//             writeFile('./content/result-async.txt',`Here is the reult ${first},${second}`,{flag:'a'},)//rember if the file is not present node creates the file 
//             //also it takes 2 parameters one is file path  and other one is the text which we want to add and if the file is already there thennode will overwrite the file and if we want to append it in the file we can 
//             //just pass a third paramete {flag:'a'}
//         })

    

// })//here we willrequire a path to the file which i want to read and i will also require a utf-8 encoding because if not then there will be an buffer
// //and we require the encoding to read the file and then we will pass a callback function and it runs when everything else is finished running 
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    
    console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result ${first}, ${second}`,
            { flag: 'a' },
            (err,result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result)//undefined as we are not expecting anything back
                console.log('File written successfully')
            }
        )
    })
})