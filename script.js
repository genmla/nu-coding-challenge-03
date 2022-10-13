// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength;
var charSpecial;
var charNumber;
var charUpper;
var charLower;
var optionsSelected;

// !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

var pwSpec = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'] 
var pwNumb = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var pwUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var pwLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var writeSpec = pwSpec[Math.floor(Math.random()*pwSpec.length)]

var writeNumber = pwNumb[Math.floor(Math.random()*pwNumb.length)]

var writeUpper = pwUp[Math.floor(Math.random()*pwUp.length)]
 
var writeLower = pwLow[Math.floor(Math.random()*pwLow.length)]

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

var generatePassword = function () {

  if (((charLength % optionsSelected) > 0) && (charSpecial > 0)) {
    console.log((writeSpec.repeat((charLength / optionsSelected) * charSpecial) + writeNumber.repeat((charLength / optionsSelected) * charNumber) + writeUpper.repeat((charLength / optionsSelected) * charUpper) + writeLower.repeat((charLength / optionsSelected) * charLower)) + (writeSpec.repeat(charLength % optionsSelected)))
  }
  else if (((charLength % optionsSelected) > 0) && (charNumber > 0)) {
    console.log((writeSpec.repeat((charLength / optionsSelected) * charSpecial) + writeNumber.repeat((charLength / optionsSelected) * charNumber) + writeUpper.repeat((charLength / optionsSelected) * charUpper) + writeLower.repeat((charLength / optionsSelected) * charLower)) + (writeNumber.repeat(charLength % optionsSelected)))
  }
  else if (((charLength % optionsSelected) > 0) && (charUpper > 0)) {
    console.log((writeSpec.repeat((charLength / optionsSelected) * charSpecial) + writeNumber.repeat((charLength / optionsSelected) * charNumber) + writeUpper.repeat((charLength / optionsSelected) * charUpper) + writeLower.repeat((charLength / optionsSelected) * charLower)) + (writeUpper.repeat(charLength % optionsSelected)))
  }
  else if (((charLength % optionsSelected) > 0) && (charLower > 0)) {
    console.log((writeSpec.repeat((charLength / optionsSelected) * charSpecial) + writeNumber.repeat((charLength / optionsSelected) * charNumber) + writeUpper.repeat((charLength / optionsSelected) * charUpper) + writeLower.repeat((charLength / optionsSelected) * charLower)) + (writeLower.repeat(charLength % optionsSelected)))
}

// Write password to the #password input
function writePassword() {
  charLength = window.prompt("Pleae enter the number of characters; passwords must be at least 8 and no more than 128 characters.");

  charLength = Number(charLength)

    if (charLength >= 8 && charLength <= 128) {
    window.alert("Your password will be " + charLength + " characters.")

    window.alert("Please confirm if you want special characters, numbers, uppercase letters, and lowercase letters included in your password. Your password must include at least one set.")

    CharSetFuction()

    charSpecial = Number(charSpecial)
    charNumber = Number(charNumber)
    charUpper = Number(charUpper)
    charLower = Number(charLower)

    optionsSelected = (charSpecial + charNumber + charUpper + charLower)

    console.log((charLength % optionsSelected) + (Math.floor(charLength/optionsSelected)))
 
    
    console.log(writeSpec.repeat((charLength/optionsSelected)*charSpecial)+writeNumber.repeat((charLength/optionsSelected)*charNumber)+writeUpper.repeat((charLength/optionsSelected)*charUpper)+writeLower.repeat((charLength/optionsSelected)*charLower))

    for (var i =0; i<(charLength/optionsSelected); i++) {
      console.log(pwSpec [i]) 
    }

    // if ((!charSpecial) && (!charNumber) && (!charUpper) && (!charLower)) {
    //   window.alert("Your password must include at least one set of special characters, numbers, uppercase letters or lowercase letters.")
      
    //   var CharSetAgain = window.confirm("Click \"Okay\" to select at least once character set. Otherswise, cancel password generation.")
    //     if (CharSetAgain) {
    //       CharSetFuction()

    //       if ((!charSpecial) && (!charNumber) && (!charUpper) && (!charLower)) {
    //         window.alert("Your password must include at least one character set. Click \"Generate Password\" to try again.")
    //       }  
    //     }
        
    //     else if (!CharSetAgain) {
    //       generateBtn.addEventListener("click", writePassword)
    //     }
    // } 
    generatePassword()
    }
  else if (!charLength) {
    generateBtn.addEventListener("click", writePassword);
  }
  else {
    charLength = window.prompt(charLength + " is an invalid value. Please enter a number between 8 and 128 characters.")
    if (charLength >= 8 && charLength <= 128) {
      window.alert("Your password will be " + charLength + " characters.")
    }
    else {
      charLength = window.confirm(charLength + " is an invalid value. Click \"Generate Password\" to try again.")
    }
  }

  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
