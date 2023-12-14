var generateBtn = document.querySelector(".btn");
var passwordText = document.querySelector("#password");

function getPassword() {
  var uppercaseABC = "ABCDEFGHIJKLMNOPQSTUVWXYZ";
  var lowercaseABC = "abcdefghijklmnoqrstuvwxyz";
  var numeric = "0123456789";
  var symbols = "!@#$%^&*()-=+<>?/|':[]{}";
  var multiSelect = "";
  var randomKey = "";

  var keyLength = prompt(
    "Your password must be between 8 to 128 characters long. Please enter your desired number."
    );

    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
      alert("Sorry, Your password doesn't meet the criteria. Please enter a number between 8 and 128.");
      return;
    } else {
      var upperAlpha = confirm("Include uppercase letters?");
      var lowerAlpha = confirm("Include lowercase letter?");
      var numericOptions = confirm("Include numbers?"); 
      var specialSymbols = confirm("Include special symbols?");
    }

    if(!upperAlpha && !lowerAlpha && !numericOptions && !specialSymbols) {
      alert("You must select at least one option. Please try again.");
      return;
    }

    if (upperAlpha) { multiSelect += uppercaseABC; }
    if (lowerAlpha) { multiSelect += lowercaseABC; }
    if (numericOptions) { multiSelect += numeric; }
    if (specialSymbols) { multiSelect += symbols; }

    for (var i = 0; i < keyLength; i++) {
      randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)];
    }

    return randomKey;
  
}

function writePassword() {
  var password = getPassword();
  if (password) {
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);