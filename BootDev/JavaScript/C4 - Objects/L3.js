/*
TODO:
Assignment
In Textio, users create text campaigns to send messages to their contacts. Each campaign needs a unique ID for tracking and management.

Complete the addID function. It takes a campaignRecord object as input and returns it with a newly generated string id property. The id should be created by joining campaignName and senderName with a hyphen (-). For example:

summerSales-adam

Where campaignName and senderName are already properties of the campaignRecord object.
*/


function addID(campaignRecord, senderName) {
  // ?
    return campaignRecord+"-"+senderName
}

console.log(addID('Welcome', 'Elsa'))