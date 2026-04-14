/*
TODO:
Assignment
Fix the bug with the calculateCampaignMetrics so that it returns all the defined metrics correctly.
*/



function calculateCampaignMetrics(sent, opened, clicked) {
  const openRate = opened / sent;
  const clickRate = clicked / sent;
  const conversionRate = clicked / opened;
  return {openRate, clickRate, conversionRate};
}