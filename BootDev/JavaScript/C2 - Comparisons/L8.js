/*
TODO:
Assignment
Certain users in the Textio database don't have a subscriptionType, by default customers who aren't subscribed are considered a "Guest". Use a nullish coalescing operator to fix the code that starts on line 9 so that an empty subscriptionType defaults to "Guest".
*/


const name = "James Holden";
const provider = "AT&T";
const phoneNumber = "555-123-4567";
const subscriptionType = null;

// don't touch above this line

console.log(
  `Creating ${subscriptionType ?? "Guest"} Profile for ${name} with ${provider} at ${phoneNumber}.`,
);
