/*
TODO:
Assignment
You just got a new zoomer boss at Textio that thinks fat arrow functions are the best thing since Mr. Beast's last video. He's forcing the team to convert all the classic functions to fat arrow functions.

Convert isSpamMessage to the fat arrow function syntax, but don't change its internal behavior.
*/




const isSpamMessage = (message) => {
  if (message.toLowerCase().includes("offer")) {
    return true;
  }
  if (message.toLowerCase().includes("free")) {
    return true;
  }
  return false;
}

// don't touch below this line

function isFunctionType(f) {
  return f.hasOwnProperty("prototype");
}

function test(msg) {
  const isSpam = isSpamMessage(msg);
  console.log(`'${msg}' is spam: ${isSpam}`);
}

test("Get an offer now!");
test("Free beer in your local area");
test("Hey mom, sorry I couldn't make it to your birthday...");
console.log("========================");
if (isFunctionType(isSpamMessage)) {
  console.log("isSpamMessage is a classic function");
} else {
  console.log("isSpamMessage is a fat arrow function");
}
