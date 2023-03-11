// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generate function and alert for following prompts
function generatePassword() {
    alert ("Please answer the following prompts in order to generate a password.");

// Password length prompt
    var pwlength = prompt ("How many characters would you like your password to have?  Options range between 8 and 128 characters.");
    // Invalid password length prompts
    if (pwlength < 8 || pwlength > 128 ) {
        prompt ("Please enter a character number ranging between 8 and 128.");
        return generatePassword();
    } else if (isNaN(pwlength)) {
        pwlength = prompt ("Please enter a valid number between 8 and 128.");
        return generatePassword();
    }
}


