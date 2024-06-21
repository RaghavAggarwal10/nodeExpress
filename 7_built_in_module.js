const { log } = require('console')
const os=require('os')//we used os like this because it is built in module and we didn't use ./ so as to tell it is different  but for external ones we first have to download it and then we can use it 
//we can access all the os features with the help of the variable in which we call it and if we want a specific one we can use destructure it to get that 
//info about current user
const user=os.userInfo()
console.log(user)
//method returns the system uptime in seconds 
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS={
    name: os.type(),
    release : os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)