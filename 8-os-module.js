const os = require('os')

//info about current user
const user = os.userInfo();
// console.log(user);

//method returns the systme uptime in seconds

console.log(`The system uptime is ${os.uptime()} secomds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);