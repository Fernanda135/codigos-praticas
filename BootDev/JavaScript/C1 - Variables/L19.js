/*
TODO:
Assignment
1 - Run the given code.
2 - Notice the number of code units and perceived characters in the string "boots".
3 - Replace the content of the name variable with the bear emoji ('🐻') and run the code again.
4 - Notice the difference between lengths and counts compared to the simple string!
5 - Submit the code with the bear emoji.
*/


let name = "🐻";
console.log(`constant 'name' UTF-16 unit length: ${name.length}`);
console.log(`constant 'name' character length: ${[...name].length}`);
console.log("=====================================");
console.log(`Hi ${name}, welcome to Textio!`);
