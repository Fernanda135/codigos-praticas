/*
TODO:
Assignment
Complete the sendMessage() method on the campaign object. For now, it should simply increment the campaign's sentMessages counter by 1.
*/



const campaign = {
    name: "Welcome Campaign",
    maxMessages: 100,
    sentMessages: 30,
    sendMessage() {
    // ?
        return this.sentMessages++
    },
};

console.log(campaign)
campaign.sendMessage()
console.log(campaign)