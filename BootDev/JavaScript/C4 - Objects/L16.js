/*
TODO:
Assignment
Textio allows you to generate messages based on templates. You can pick from the given default templates or create your own.

Complete the mergeTemplates function. It takes an object defaultTemplates and an object customTemplates and returns a merged object with the custom templates overwriting the default templates.
*/

function mergeTemplates(defaultTemplates, customTemplates) {
  // ?
    return {...defaultTemplates, ...customTemplates}
}


x1 = {
        welcome: "Welcome to Textio! Start sending messages today.",
        support: "Need help? Contact our support team.",
      }


x2 = {
        promo: "Limited time offer! Sign up now.",
        support: "Reach out to us for exclusive deals.",
      }


console.log(mergeTemplates(x1, x2))