// Assignment code here
 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()_*+-./:<=>?@';
let passwordLength = 12;
let passwordValue = '';

function writePassword() {
passwordValue = '';

for( let i = 0; i < passwordLength; i++){
  let number = Math.floor(Math.random() * characters.length);
  passwordValue += characters.substring(number, number + 1);
  
}
passwordText.value = passwordValue; 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

