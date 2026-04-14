/*
TODO:
Assignment
Textio has lots of legacy code that checks if specific values are null. Just to be safe, the engineering team decided on a standard where variables that aren't declared with a specific value should be set to null instead of the default undefined. Fix the code so that each variable holds a null value.
*/


let sentMessages = null;
let deliveredMessages = null;
let failedMessages = null;

// don't touch below this line

console.log("Sent is null:", sentMessages === null);
console.log("Delivered is null:", deliveredMessages === null);
console.log("Failed is null:", failedMessages === null);
