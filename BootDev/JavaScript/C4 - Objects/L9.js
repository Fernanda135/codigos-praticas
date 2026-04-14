/*
TODO:
Assignment
Complete the getRemainingMessages() method in the campaign object. The method should calculate and return the number of remaining messages a user can send in the campaign. The calculation is based on the following formula:

remainingMessages = maxMessages - sentMessages
*/


const campaign = {
    getRemainingMessages() {
    // ?
        return this.maxMessages - this.sentMessages
    },
    maxMessages: 100,
    sentMessages: 30,
    name: "Welcome Campaign",
};


console.log(campaign.getRemainingMessages())