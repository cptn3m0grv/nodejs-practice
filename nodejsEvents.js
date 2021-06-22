const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('onGreet', ()=>{
    console.log("Greetings....")
    //setTimeout does not block the code 
    setTimeout(()=>{
        console.log("Please Greet....reminder")
    }, 3000)
})

console.log("Before")
myEmitter.emit('onGreet')
console.log("After")
myEmitter.emit('onGreet')