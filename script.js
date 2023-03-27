// Assignment code here
function generatePassword() {
  // Initialize variables for password criteria
  var passwordLength = 0;
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumeric = false;
  var includeSpecial = false;

  // Prompt user for password criteria
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters:"));
  }

  includeLowercase = confirm("Include lowercase letters?");
  includeUppercase = confirm("Include uppercase letters?");
  includeNumeric = confirm("Include numbers?");
  includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is included
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must choose at least one character type!");
    return "";
  }

  // Define character sets for each criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Initialize variable for the password string
  var password = "";

  // Build the password based on selected criteria
  while (password.length < passwordLength) {
    if (includeLowercase) {
      password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    }
    if (includeUppercase) {
      password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    }
    if (includeNumeric) {
      password += numericChars[Math.floor(Math.random() * numericChars.length)];
    }
    if (includeSpecial) {
      password += specialChars[Math.floor(Math.random() * specialChars.length)];
    }
  }

  // Return the generated password
  return password.slice(0, passwordLength);
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
