// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength;
var charSpecial;
var charNumber;
var charUpper;
var charLower;

var CharSetFuction = function () {
  charSpecial = window.confirm("Click \"Okay\" to include special characters, otherwise click \"Cancel\"")
  if (charSpecial) {
    window.alert("Your password will include special characters")
  }
  else {
    window.alert("Your password will not include special characters")
  }

  charNumber = window.confirm("Click \"Okay\" to include numbers, otherwise click \"Cancel\"")
  if (charNumber) {
    window.alert("Your password will include numbers")
  }
  else {
    window.alert("Your password will not include numbers")
  }

  charUpper = window.confirm("Click \"Okay\" to include uppercase letters, otherwise click \"Cancel\"")
  if (charUpper) {
    window.alert("Your password will include uppercase letters")
  }
  else {
    window.alert("Your password will not include uppercase letters")
  }

  charLower = window.confirm("Click \"Okay\" to include lowercase letters, otherwise click \"Cancel\"")
  if (charLower) {
    window.alert("Your password will include lowercase letters")
  }
  else {
    window.alert("Your password will not include lowercase letters")
  }
}

// Write password to the #password input
function writePassword() {
  charLength = window.prompt("Pleae enter the number of characters; passwords must be at least 8 and no more than 128 characters.");

  if (charLength >= 8 && charLength <= 128) {
    window.alert("Your password will be " + charLength + " characters.")

    window.alert("Please confirm if you want special characters, numbers, uppercase letters, and lowercase letters included in your password. Your password must include at least one set.")

    CharSetFuction()

    if ((!charSpecial) && (!charNumber) && (!charUpper) && (!charLower)) {
      window.alert("Your password must include at least one set of special characters, numbers, uppercase letters or lowercase letters.")

      var CharSetAgain = window.confirm("Click \"Okay\" to select at least once character set.")
      if (CharSetAgain) {
        CharSetFuction()

        if ((!charSpecial) && (!charNumber) && (!charUpper) && (!charLower)) {
          window.alert("Your password must include at least one character set. Click \"Generate Password\" to try again.")
        }
      }
    }
  }
  else {
    charLength = window.prompt(charLength + " is an invalid value. Please enter a number between 8 and 128 characters.")
    if (charLength >= 8 && charLength <= 128) {
      window.alert("Your password will be " + charLength + " characters.")
    }
    else {
      charLength = window.confirm(charLength + " is an invalid value. Click \"Generate Password\" to try again.")
      generateBtn.addEventListener("click", writePassword)
    }
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
