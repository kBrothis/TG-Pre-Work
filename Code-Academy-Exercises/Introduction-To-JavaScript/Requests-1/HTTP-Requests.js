console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');


// Javascript uses an event loop  to handle asynchronous function calls which are blocking properties
//the event loop creates a better browsing experience
