/*
TODO:
Assignment
In most systems, "entities" are stored as objects. For example, "campaigns", "messages", and "users" might all be different "entities" within the Textio system.

We store text campaigns as nested JavaScript objects:

{
    name: 'Jurassic Campaign',
    messageCount: 100,
    creator: {
        firstName: 'Ian',
        lastName: 'Malcolm',
        createdAt: '2023-10-01T09:00:00+00:00'
    }
}

Finish the getCampaignCreator function, which takes a campaign object and returns the creator's first name.
*/


function getCampaignCreator(campaign) {
  // ?
    return campaign.creator.firstName
}

x = {
    name: 'Jurassic Campaign',
    messageCount: 100,
    creator: {
    firstName: 'Ian',
    lastName: 'Malcolm',
    createdAt: '2023-10-01T09:00:00+00:00'
    }
}

console.log(getCampaignCreator(x))