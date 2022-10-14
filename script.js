// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength;
var charSpecial;
var charNumber;
var charUpper;
var charLower;
var optionsSelected;
var genSpec;
var genNumber;
var genUpper;
var genLower;


var pwSpec = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
var pwNumb = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var pwUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var pwLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var writeSpec = pwSpec[Math.floor(Math.random() * pwSpec.length)]

var writeNumber = pwNumb[Math.floor(Math.random() * pwNumb.length)]

var writeUpper = pwUp[Math.floor(Math.random() * pwUp.length)]

var writeLower = pwLow[Math.floor(Math.random() * pwLow.length)]

var generatePassword = function () {

  genSpec = (writeSpec.repeat((charLength / optionsSelected) * charSpecial))
  genNumber = (writeNumber.repeat((charLength / optionsSelected) * charNumber))
  genUpper = (writeUpper.repeat((charLength / optionsSelected) * charUpper))
  genLower = (writeLower.repeat((charLength / optionsSelected) * charLower))

  if (((charLength % optionsSelected) > 0) && (charSpecial > 0)) {
    genSpec = genSpec + (writeSpec.repeat(charLength % optionsSelected))
  }
  else if (((charLength % optionsSelected) > 0) && (charNumber > 0)) {
    genNumber = genNumber + (writeNumber.repeat(charLength % optionsSelected))
  }
  else if (((charLength % optionsSelected) > 0) && (charUpper > 0)) {
    genUpper = genUpper + (writeUpper.repeat(charLength % optionsSelected))
  }
  else if (((charLength % optionsSelected) > 0) && (charLower > 0)) {
    genLower = genLower + (writeLower.repeat(charLength % optionsSelected))
  }

  return (genSpec + genNumber + genUpper + genLower)

}

// Write password to the #password input
function writePassword() {
  charLength = window.prompt("Please enter the number of characters; passwords must be at least 8 and no more than 128 characters.");

  charLength = Number(charLength)

  if (charLength >= 8 && charLength <= 128) {
    window.alert("Your password will be " + charLength + " characters.")

    window.alert("Please confirm if you want special characters, numbers, uppercase letters, and lowercase letters included in your password. Your password must include at least one set.")

    charSpecial = window.confirm("Click \"Okay\" to include special characters, otherwise click \"Cancel\"")

    charNumber = window.confirm("Click \"Okay\" to include numbers, otherwise click \"Cancel\"")

    charUpper = window.confirm("Click \"Okay\" to include uppercase letters, otherwise click \"Cancel\"")

    charLower = window.confirm("Click \"Okay\" to include lowercase letters, otherwise click \"Cancel\"")

    if ((!charSpecial) && (!charNumber) && (!charUpper) && (!charLower)) {
      window.alert("Your password must include at least one set of special characters, numbers, uppercase letters or lowercase letters. Click \"Generate Password\" to try again.")
    }

    charSpecial = Number(charSpecial)
    charNumber = Number(charNumber)
    charUpper = Number(charUpper)
    charLower = Number(charLower)

    optionsSelected = (charSpecial + charNumber + charUpper + charLower)

    generatePassword()
    var password = generatePassword()
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  else if (!charLength) {
    generateBtn.addEventListener("click", writePassword);
  }
  else {
    window.alert(charLength + " is an invalid value. Click \"Generate Password\" to try again.")
  }
}

generateBtn.addEventListener("click", writePassword);