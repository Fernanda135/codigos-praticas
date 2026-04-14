/*
TODO:
Assignment
Now that your boss has forced the change, it's actually caused some bugs. Fix the bug in the sendMessage method by reverting it to a regular method.
*/


const campaign = {
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  sendMessage() {
    this.sentMessages++;
  },
};