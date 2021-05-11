// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Variable declaration
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specialChar = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","{","}","]","|",";",":","'","<",",",">",".","?","/"];
const numbers = [1,2,3,4,5,6,7,8,9,0];

// we use let here because it isnt a set variable such as const

let password = [];

//Lower Case Declaration and array

let lowerCaseInput = prompt("would you like to use lower case letters?");

if(lowerCaseInput === "yes" ||
   lowerCaseInput === "YES" ||
   lowerCaseInput === "Yes" ||
   lowerCaseInput === "yES" ||
   lowerCaseInput === "yEs" ||
   lowerCaseInput === "YEs" ||
   lowerCaseInput === "yeS" ||
   lowerCaseInput === "YeS"){
  let newPassword = lowerCase.concat(password);
  console.log(newPassword);
} else {
  console.log('No lowercase characters selected');
}

//UpperCase Declaration and array

let upperCaseInput = prompt("would you like to use Upper case letters?");

if(upperCaseInput === "yes" ||
   upperCaseInput === "YES" ||
   upperCaseInput === "Yes" ||
   upperCaseInput === "yES" ||
   upperCaseInput === "yEs" ||
   upperCaseInput === "YEs" ||
   upperCaseInput === "yeS" ||
   upperCaseInput === "YeS"){
  let newPassword = upperCase.concat(password);
  console.log(newPassword);
} else {
  console.log('No Uppercase characters selected');
}

// Special Character Declaration and array

let specialCharInput = prompt("would you like to use Special characters?");

if(specialCharInput === "yes" ||
   specialCharInput === "YES" ||
   specialCharInput === "Yes" ||
   specialCharInput === "yES" ||
   specialCharInput === "yEs" ||
   specialCharInput === "YEs" ||
   specialCharInput === "yeS" ||
   specialCharInput === "YeS"){
  let newPassword = specialChar.concat(password);
  console.log(newPassword);
} else {
  console.log('No special characters selected');
}

//Numbers Declaration and array

let numbersInput = prompt("would you like to use numbers?");

if(numbersInput === "yes" ||
   numbersInput === "YES" ||
   numbersInput === "Yes" ||
   numbersInput === "yES" ||
   numbersInput === "yEs" ||
   numbersInput === "YEs" ||
   numbersInput === "yeS" ||
   numbersInput === "YeS"){
  let newPassword = numbers.concat(password);
  console.log(newPassword);
} else {
  console.log('No numbers selected');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
