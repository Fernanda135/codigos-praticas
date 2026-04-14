/*
TODO:
Assignment
Textio has a built in profanity detector, but it's currently broken. Fix the isClean function so that it only returns the boolean representing whether the given message contains no profanity.
*/

function isClean(review) {
  let clean = true;
  if (review.includes("dang")) {
    clean = false;
  }
  if (review.includes("shoot")) {
    clean = false;
  }
  if (review.includes("heck")) {
    clean = false;
  }
  return clean;
}
