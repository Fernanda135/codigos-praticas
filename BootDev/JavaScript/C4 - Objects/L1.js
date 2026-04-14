
/*
TODO: 
Assignment
Complete the createMessage function. It should return a new object with properties:

phoneNumber: The given phoneNumber parameter
message: The given message parameter
messageLength: The length of the message parameter
*/


function createMessage(phoneNumber, message) {
    // ?

    return {
        phoneNumber,
        message,
        messageLength: message.length
    };

}


let test = createMessage(1234567890, "qwerty12345")
console.log(test)