/*
TODO:
Assignment
Fix the bug on line 19 so that this correctly references the scope of the campaign object.
*/


const campaign = {
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  sendMessage() {
    this.sentMessages++;
  },
};

function sendWelcome(name, callback) {
  callback();
  console.log(`Sending: "Welcome ${name}! We are so glad you are here."`);
}

console.log("Campaign Messages:", campaign.sentMessages);

// don't touch above this line

sendWelcome("Tyler", campaign.sendMessage);

// don't touch below this line

console.log("Campaign Messages:", campaign.sentMessages);
