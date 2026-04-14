/*
TODO:
Assignment
Complete the printReports function. It takes a sequence of messages, intro, body, and outro. It should call printCostReport once for each message, in order.

For each call to printCostReport, you should pass:

an anonymous function that calculates the cost of a message as an integer
the message itself
The cost for each type of message is calculated like this:

Intro: 2x the message length
Body: 3x the message length
Outro: 4x the message length
Use the built-in length property to get the length of a string:

const helloLen = "hello".length;
helloLen = 5
*/


function printReports(intro, body, outro) {
  // ?
  printCostReport(
    function (intro) {
      return intro.length * 2;
    }, intro
  );

  printCostReport(
    function (body) {
      return body.length * 3;
    }, body
  );

  printCostReport(
    function (outro) {
      return outro.length * 4;
    }, outro
  );
}

// don't touch below this line

function printCostReport(costCalculator, message) {
  const cost = costCalculator(message);
  console.log(`Message: "${message}" Cost: ${cost} cents`);
}

printReports(
  "Welcome to the Hotel California",
  "Such a lovely place",
  "Plenty of room at the Hotel California",
);
