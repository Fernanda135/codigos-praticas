/*
TODO:
Assignment
Complete the getProviderCount function. It takes two parameters:

* provider (string): The name of the cellular provider (e.g., 'Verizon', 'AT&T').

* counts (object): An object where each key is a provider name, and the value is the number of phone numbers associated with that provider.

The function should return the count of phone numbers for the given provider. If the provider doesn't exist in the counts object, return 0.
*/


function getProviderCount(provider, counts) {
  // ?
    if(!provider) {
        return 0
    }

    return counts[provider] ?? 0
}

x = {
    provider: "Sprint",
    counts: { Verizon: 5, "AT&T": 3, "T-Mobile": 10 }
}

console.log(getProviderCount(x.provider, x.counts))