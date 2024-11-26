//prompting user for flavors
const userInput = prompt(
  "Please enter your froyo flavors separated by commas."
);

//printing their inputted flavors
console.log(`Your flavors are ${userInput}`);

//converting into an array
const flavorArray = userInput.split(",");

//create empty object to store the flavor counts
const flavorCounts = {};
//loops through each flavor/key of the array
for (const flavor of flavorArray) {
  //code to run for each flavor/key which will update the current count
  flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
}

const tableData = Object.keys(flavorCounts).map((flavor) => ({
  Flavor: flavor,
  Count: flavorCounts[flavor],
}));

console.table(tableData);