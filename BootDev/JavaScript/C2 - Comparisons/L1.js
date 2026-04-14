/*
TODO:
Assignment
Fix the bug on line 12. If messageLen is less than or equal to maxMessageLen, the program should log "Message sent"; otherwise, it should log "Message not sent".
*/

let messageLen = 10;
let maxMessageLen = 20;
console.log(
  "Trying to send a message of length:",
  messageLen,
  "and a max length of:",
  maxMessageLen,
);

// don't touch above this line

if (messageLen <= maxMessageLen) {
  console.log("Message sent");
} else {
  console.log("Message not sent");
}
