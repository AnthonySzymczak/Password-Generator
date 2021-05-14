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


let passwordLength = parseInt(prompt("How many characters would you like your password to be? minimum 8 maximum 128"));
let lowerCaseInput = prompt("would you like to use LOWER CASE letters in your password? (type yes or no)").toLowerCase();
let upperCaseInput = prompt("would you like to use UPPER CASE letters in your password? (type yes or no)").toLowerCase();
let specialCharInput = prompt("would you like to use special characters in your password? (type yes or no)").toLowerCase();
console.log(passwordLength)

//function array declaration

function newArr() {
if (lowerCaseInput === "yes" && upperCaseInput === "yes" && specialCharInput === "yes") {
newPassword = password.concat(lowerCase, upperCase, specialChar)
console.log(newPassword)
} else if (lowerCaseInput === "yes" && upperCaseInput === "yes" && specialCharInput === "no") {
newPassword = password.concat(lowerCase, upperCase)
console.log(newPassword)
} else if (lowerCaseInput === "yes" && upperCaseInput === "no" && specialCharInput === "no") {
newPassword = password.concat(lowerCase)
console.log(newPassword)
} else if (lowerCaseInput === "no" && upperCaseInput === "yes" && specialCharInput === "yes") {
newPassword = password.concat(upperCase, specialChar)
console.log(newPassword)
} else if (lowerCaseInput === "no" && upperCaseInput === "yes" && specialCharInput === "no") {
newPassword = password.concat(upperCase)
console.log(newPassword)
} else if (lowerCaseInput === "no" && upperCaseInput === "no" && specialCharInput === "yes") {
newPassword = password.concat(specialChar)
console.log(newPassword)
} else if (lowerCaseInput === "no" && upperCaseInput === "yes" && specialCharInput === "yes") {
newPassword = password.concat(upperCase, specialChar)
console.log(newPassword)
} else if (lowerCaseInput === "yes" && upperCaseInput === "no" && specialCharInput === "yes") {
newPassword = password.concat(lowerCase, specialChar)
console.log(newPassword)
};
}
newArr()


 let results = newPassword[Math.floor(Math.random() * passwordLength)]
 console.log(newPassword.length)
 console.log(results)

function chooseRandom(newPassword, num = 1) {
const res = [];
for(let i = 0; i < num; ){
const random = Math.floor(Math.random() * newPassword.length);
if(res.indexOf(newPassword[random]) !== -1){
continue;
};
res.push(newPassword[random]);
i++;
};
return res;
};
console.log(chooseRandom(newPassword, passwordLength));

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
document.querySelector("#password").innerHTML = chooseRandom(newPassword, passwordLength);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
