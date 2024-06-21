const {readFileSync, writeFileSync}=require('fs')
// const fs=require('fs')
// fs.readFile alternate waay to do this 
const first= readFileSync('./content/first.txt','utf-8')//it takes 2 inputs one is encoding and the other one is the file path  
const second= readFileSync('./content/second.txt','utf-8')//it takes 2 inputs one is encoding and the other one is the file path  
console.log(first,second)
writeFileSync('./content/third.txt',`Here is the reult ${first},${second}`)//rember if the file is not present node creates the file 
//also it takes 2 parameters one is file path  and other one is the text which we want to add and if the file is already there thennode will overwrite the file and if we want to append it in the file we can 
//just pass a third paramete {flag:'a'}
writeFileSync('./content/third.txt',`Here is the reult ${first},${second}`,{flag:'a'})// this will append in the existing file 
