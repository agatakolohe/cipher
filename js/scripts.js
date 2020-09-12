

function capitalizeFirstLetter(str) {
  let capital = str.charAt(0,2).toUpperCase() + str.slice(1);
  return capital;
}
let string = prompt("Type a sentence");
let result = capitalizeFirstLetter(string);
console.log(result);



