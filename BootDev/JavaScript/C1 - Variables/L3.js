/*
TODO:
Assignment
There is a bug with the Textio code that sends messages on users' birthdays... it's sending two birthday messages! It should send a welcome message and a birthday message. Fix the var declarations so that each variable has the correct scope and behaves as expected.
*/



const messageText = "Welcome to Textio!";
let isBirthday = true;

if (isBirthday) {
  const messageText = "Happy Birthday!";

  console.log("sending birthday message...");
  console.log("messageText: ", messageText);
}

// don't touch below this line

console.log("sending welcome message...");
console.log("messageText: ", messageText);
