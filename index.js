/* 
    In Node.js, the observer pattern can be used to implement 
    event-driven programming, where the subject represents 
    an event emitter and the observers represent 
    the event listeners. 

    Node.js provides the EventEmitter class as a 
    built-in implementation of the observer pattern.
*/

// importing
const EventEmitter = require('events')

// creating a instance of events, it is the subject
const myEmitter = new EventEmitter()

// when event starts, first obsever
myEmitter.on('process.start', (processName) => {
    console.log(`Starting process: ${processName}`);
});

// observer: He is a fan
myEmitter.on("race", (result) => {
    console.log("I'm your biggest fan")
    if (result === "win") 
    console.log(`WIN!! Congratulations! you are the best!`)
    else
    console.log(`Best of luck next time, Champ!`)
})

// observer: He is a competitor
myEmitter.on("race", (result) => {
    console.log("Booo!")
    if (result === "win") 
        console.log(`I can do better than this losser`)
    else
        console.log(`Fire this guy, How hired him?`)
})

// Warn about some warning
process.on('warning', (warning) => {
    console.warn(`Warning: ${warning.message}`);
});

// Trigger a warning
const deprecatedFunction = () => {
    console.warn('This Race is deprecated and may be removed in future versions.');
}

// When a unhandled excpetion comes
process.on("uncaughtException", (error) => {
    console.error(`Uncaught Exception: ${error.message}`)
    console.error(error.stack)
    process.exit(1)
})

// when user cancels the event
process.on('SIGINT', () => {
    console.log('Received SIGINT signal, terminating...');
    process.exit(1);
});

// on exit
process.on("exit", (code) => {
    console.log(`Race Ended with code: ${code}`)
})

myEmitter.emit("process.start", "Race")
myEmitter.emit("race", "win")
myEmitter.emit("race", "lost")
deprecatedFunction();
// Trigger an uncaught exception
throw new Error('Oops, something went wrong!');