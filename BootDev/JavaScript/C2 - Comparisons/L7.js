/*
TODO:
Assignment
There’s an issue with how Textio checks the number of user credits before sending a message, some users that have negative credits are still able to send messages. A user is expected to have at least one credit to be able to send a message.

Fix the bug on line 5 to correctly check whether the user has enough credits.
*/



const userCredits = -2;

// don't touch above this line

if (!userCredits) {
  console.log("Sending message...");
} else {
  console.log("Not enough credits.");
}
