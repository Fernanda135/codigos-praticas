/*
TODO:
Assignment
Fix the bug in the billingCost function. The "basic" plan is set correctly, but we need matches for the "pro" and "enterprise" plans, too. If the plan is:

"pro", the cost should be 20.0
"enterprise", the cost should be 50.0.
Test your function with the provided cases to ensure correctness.
*/



function billingCost(plan) {
  switch (plan) {
    case "basic":
      return 10.0;
    case "pro":
      return 20.0;
    case "enterprise":
      return 50.0;
    default:
      return 0.0;
  }
}

// don't touch below this line

console.log(`The cost for a basic plan is $${billingCost("basic").toFixed(2)}`);
console.log(`The cost for a pro plan is $${billingCost("pro").toFixed(2)}`);
console.log(
  `The cost for a enterprise plan is $${billingCost("enterprise").toFixed(2)}`,
);
console.log(`The cost for a free plan is $${billingCost("free").toFixed(2)}`);
console.log(
  `The cost for a unknown plan is $${billingCost("unknown").toFixed(2)}`,
);
