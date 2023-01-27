//Modules - encapsulated code (only share minimum)
// CommonJS every file is module(by default)


const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alter-flavor')
require('./7-mind-grenade')

//console.log(data)
// console.log(names)

sayHi('mahe')
sayHi(names.balu)
sayHi(names.peter)