// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var allowUpperCase = false;
var allowLowerCase = false;
var allowNumbers = false;
var allowSpecialChars = false;
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharArrays = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '<', '>', '(', ')', '-', '.', '=', '+', '_', '[', ']', '{', '}', '/', '|', '`', '~', ':', ';'];
var passwordCharacters = [];
var newPassword;
// function combines two arrays together and return a new array
function combineArrays(arr1, arr2) {
  var newArray = arr1;
  for (var i = 0; i < arr2.length; i++) {
    newArray.push(arr2[i]);
  }
  return newArray;
}
// Generates a random number between 0 and maxLength
function getRandomIndex(maxLength) {
  return Math.floor(Math.random() * Math.floor(maxLength));
}
// Prompts for the password length
function getPasswordLength() {
  passwordLength = prompt('How long should the password be?');
}
// Prompt the user if upper-case letters should be included
// Prompt the user if lower-case letters should be included
// Prompt the user if numbers should be included
// Prompt the user if special characters should be included
function passwordRules() {
  if (confirm('Include upper-case characters?')) {
    allowUpperCase = true;
  }
  if (confirm('Include lower-case characters?')) {
    allowLowerCase = true;
  }
  if (confirm('Include numbers?')) {
    allowNumbers = true;
  }
  if (confirm('Include special characters?')) {
    allowSpecialChars = true;
  }
}
// Build an array of characters comprising of the type of 
// characters the user allowed in the prompts above
function getAllowedPasswordCharacters() {
  var allowedCharacters = [];
  if (allowUpperCase) {
    allowedCharacters = combineArrays(allowedCharacters, upperCaseArray);
  }
  if (allowLowerCase) {
    allowedCharacters = combineArrays(allowedCharacters, lowerCaseArray);
  }
  if (allowNumbers) {
    allowedCharacters = combineArrays(allowedCharacters, numbersArray);
  }
  if (allowSpecialChars) {
    allowedCharacters = combineArrays(allowedCharacters, specialCharArrays);
  }
  return allowedCharacters;
}
// Need to pick a character from that array as many times 
// as the length of the password that the user specified 
// above (use a for loop)
function generatePassword() {
  var randomIndex;
  newPassword = '';

  for (var i = 0; i < passwordLength; i++) {
    randomIndex = getRandomIndex(passwordCharacters.length);
    // concatenate the character to a string variable. Every time
    // a new character is selected, append it to this string variable
    // Shortcut: newPassword += passwordCharacters[randomIndex];
    newPassword = newPassword + passwordCharacters[randomIndex];
  }
  return newPassword;
}
// Ger the desired password length
// TODO: When done, display the completed string on the page as the
// new password (the new password is 'newPassword')
// Write password to the #password input
function writePassword() {
  var password;
  var passwordText = document.querySelector("#password");
  getPasswordLength();
  // Keep prompting the user for the password length until the
  // value specified is between 8 - 128 characters
  while ((passwordLength < 8) || (passwordLength > 128)) {
    alert('Password length must be between 8 to 128 characters');
    getPasswordLength();
  }
  passwordRules();
  passwordCharacters = getAllowedPasswordCharacters();
  password = generatePassword();
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
