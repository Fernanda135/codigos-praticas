/*
TODO:
Assignment
Our Textio database is pretty smart - it will only save a value if the value is "truthy" in JavaScript. If it's "falsy", it will just ignore it without errors.

1 - Look at the test cases to see the shape of the campaign object and its nested properties.

2 - Complete the getRegion function. It takes a campaign as input and returns the region string if the campaign has one. Otherwise, it returns undefined (a falsy value).

You should be able to do this in 1 line with the optional chaining operator.
*/


function getRegion(campaign) {
  // ?
    return campaign.location?.region
}


x = {
    name: "Welcome Campaign",
    messageCount: 100,
    creator: {
        firstName: "Tim",
        lastName: "Murphy",
        createdAt: "2023-10-01T09:00:00+00:00",
    },
    location: {
        region: "North America",
    }
}

console.log(getRegion(x))