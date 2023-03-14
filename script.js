// Assignment code here
// Password generate function and alert for following prompts
function generatePassword() {
    alert ("Please answer the following prompts in order to generate a password.");

    // Password length prompt
    var pwlength = (prompt ("How many characters would you like your password to have?  Options range between 8 and 128 characters."));
    if (pwlength === null) {
        return "Your Secure Password";
    }
    // Invalid password length prompts
    // Invalid length prompt
    else if (pwlength < 8 || pwlength > 128 ) {
        alert ("Please enter a character number ranging between 8 and 128.");
        return generatePassword();
    // Invalid/non-number prompt
    } else if (isNaN(pwlength)) {
        pwlength = alert ("Please enter a valid number between 8 and 128.");
        return generatePassword();
    }

    // Alert for password length selection and upcoming character prompts
    alert ("A password of " + pwlength + " characters will be generated for you.  Please select the charater types you'd like based on the following prompts.  At least one character type must be selected.");

    // Defined variables for character types
    var lowCase = confirm ("If you would like to include lowercase characters, slect OK.  If not, select cancel.");
    var upCase = confirm ("If you would like to include uppercase characters, select OK.  If not, select cancel");
    var numCase = confirm ("If you would like to include numeric characters, select OK.  If not, select cancel");
    var specCase = confirm ("If you would like to include special characters, select OK.  If not, select cancel.");

    // Alert if no character types are selected
    if (lowCase === false && upCase === false && numCase === false && specCase === false) {
        alert ("Atleast one character type must be selected.");
        return generatePassword();
    }

    // Password character letters for character types
    if (lowCase == true) {
        lowCase = "abcdefghijklmnopqrstuvwxyz"
    } else {
        lowCase = ""
    }
    if (upCase == true) {
        upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } else {
        upCase = ""
    }
    if (numCase == true) {
        numCase = "0123456789"
    } else {
        numCase = ""
    }
    if (specCase == true) {
        specCase = "!#$%&'()*+,-./:;<=>?@[^_`{|}~'"
    } else { 
        SpecCase = ""
    }

    var ranCase = lowCase + upCase + numCase + specCase;

    var password = "";
    for (var i = 0; i <pwlength; i++) {
        var ranvar = ranCase[Math.floor(Math.random() * ranCase.length)];
        password += ranvar;
    }

    return password;
}

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
