/*
TODO:
Assignment
Assignment
Run the given code. Notice that the total variable doesn't store the resulting number, but is actually a function!

Wrap it in an IIFE so that the total variable is calculated immediately using the following parameters:

numMessages: 100
bytesPerMessage: 24
*/


const total = (function calculateTotal(numMessages, bytesPerMessage) {
  return numMessages * bytesPerMessage;
})(100, 24);

// don't touch below this line

console.log("Total message cost:", total);
