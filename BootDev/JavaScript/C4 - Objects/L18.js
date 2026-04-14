/*
TODO:
Assignment
Now that you've fixed the output of calculateCampaignMetrics, use destructuring to assign openRate, clickRate and conversionRate from the given call on line 14.
*/





function calculateCampaignMetrics(sent, opened, clicked) {
  const openRate = opened / sent;
  const clickRate = clicked / sent;
  const conversionRate = clicked / opened;
  return {
    openRate,
    clickRate,
    conversionRate,
  };
}

// don't touch above this line

let {openRate, clickRate, conversionRate} = calculateCampaignMetrics(1000, 800, 200);

// don't touch below this line

console.log(`Open Rate:       ${openRate}`);
console.log(`Click Rate:      ${clickRate}`);
console.log(`Conversion Rate: ${conversionRate}`);
