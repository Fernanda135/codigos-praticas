/*
TODO:
Assignment
While reviewing the Textio messaging system, you’ve come across a bug involving scope issues!

The function getMessageStatus returns the "status" of a message based on its length. It uses a nested helper function, isValidLength, to check if the message has more than 0 characters.

Fix getMessageStatus so that it uses the result of isValidLength to set the messageStatus.
*/


function getMessageStatus(message) {
  let messageStatus = "processing";

  function isValidLength(message) {
    let messageStatus = "invalid";

    if (message.length > 0) {
      messageStatus = "valid";
    }

    return messageStatus;
  }

  // don't touch above this line

  return isValidLength(message);
}