//GLOBALS-NO WINDOW!!! because there is no browser 
// but there are some globals and we cam access them anywhere in the system 
//__dirname- path to current directory
//__filename -file name
//require - function to use modules(CommonJs)
// require is a function that is used to include modules (libraries) that exist in separate files. It reads a JavaScript file, executes it, and returns the module.exports object.
//module - info about current module(file)
// module is an object representing the current module. It contains information about the module, such as its id, filename, loaded status, and the exports object that it makes available to other modules.
//process - info about env where the program is being executed 

console.log("__dirname: ",__dirname)
console.log("__filename : ",__filename)
console.log("process: ",process)
console.log("require: ",require)
console.log("module: ",module)
setInterval(()=>{
    console.log("hello")
},1000)