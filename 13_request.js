// if we want to create something custom we will require need to extend the class 
//if we want to emit an event as well as listen to it we can create a instance 
const EventEmitter=require('events')//This line imports the events module and assigns the EventEmitter class to the EventEmitter constant.
const customEmitter= new EventEmitter()//Here, you create an instance of the EventEmitter class and assign it to the customEmitter constant. This instance can now be used to emit and listen for events.
//on and emit method 
// keep track of the order 
//additional arguments 
//built in module utilizses it 
customEmitter.on('response',(name,id)=>{
    console.log(`Data received user ${name} id ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some `)
})
//This line sets up an event listener for the response event. When the response event is emitted, the callback function (in this case, a function that logs "Data received" to the console) is executed.
customEmitter.emit('respone',"john",34)//This line emits the respone event (note the typo). Since the event being emitted is 'respone' and not 'response', the event listener for 'response' will not be triggered.

// Certainly! The statement discusses two concepts related to working with events in JavaScript, particularly in the context of Node.js: extending a class to create something custom and creating an instance to emit and listen to events.

// ### Extending a Class

// In object-oriented programming, extending a class means creating a new class that inherits the properties and methods of an existing class. This allows you to add or modify functionality without changing the original class.

// In Node.js, the `EventEmitter` class is commonly extended to create custom event emitters. This means you can create a new class that inherits the capabilities of `EventEmitter`, allowing you to define custom behaviors and events.

// Here's an example:

// ```javascript
// const EventEmitter = require('events');

// // Create a custom class that extends EventEmitter
// class MyEmitter extends EventEmitter {}

// // Create an instance of the custom class
// const myEmitter = new MyEmitter();

// // Add a custom method to the class
// MyEmitter.prototype.customMethod = function () {
//     console.log('This is a custom method.');
// };

// // Emit an event
// myEmitter.emit('event');
// ```

// ### Emitting and Listening to Events

// In Node.js, you can create an instance of the `EventEmitter` class (or any class that extends it) to emit and listen to events. Emitting an event means triggering a specific named event, which can have listeners (callback functions) attached to it.

// Here's an example:

// ```javascript
// const EventEmitter = require('events');

// // Create an instance of EventEmitter
// const myEmitter = new EventEmitter();

// // Add a listener for the 'event' event
// myEmitter.on('event', () => {
//     console.log('An event occurred!');
// });

// // Emit the 'event' event
// myEmitter.emit('event');
// ```

// In this example:
// - `myEmitter.on('event', callback)` adds a listener for the `event` event, which runs the provided callback function when the event is emitted.
// - `myEmitter.emit('event')` emits the `event` event, causing all listeners attached to that event to be executed.

// ### Combining Both Concepts

// When you extend the `EventEmitter` class, you can create custom classes with specific functionality while also retaining the ability to emit and listen to events.

// Here's a combined example:

// ```javascript
// const EventEmitter = require('events');

// // Create a custom class that extends EventEmitter
// class MyEmitter extends EventEmitter {
//     constructor() {
//         super();
//         this.customData = 'some data';
//     }

//     customMethod() {
//         console.log('This is a custom method.');
//         this.emit('customEvent', this.customData); // Emit a custom event
//     }
// }

// // Create an instance of the custom class
// const myEmitter = new MyEmitter();

// // Add a listener for the 'customEvent' event
// myEmitter.on('customEvent', (data) => {
//     console.log('Custom event occurred with data:', data);
// });

// // Call the custom method, which emits the custom event
// myEmitter.customMethod();
// ```

// In this example:
// - The `MyEmitter` class extends `EventEmitter` and includes a custom method.
// - The custom method emits a `customEvent` with some data.
// - An instance of `MyEmitter` is created, and a listener is added for the `customEvent`.
// - Calling `myEmitter.customMethod()` triggers the `customEvent`, and the listener logs the data.
