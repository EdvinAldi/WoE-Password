import { betterMathRandom } from "./betterMathRandom.js";

const PasswordLength = document.getElementById("NumberOfCharacters");

//Event listener listening to number input from user
PasswordLength.addEventListener("input", (Event => {
  const output = document.getElementById("Output");
  if (Event.target.value > 32) {
    output.innerText = "Måste vara ett mindre än 33"
  }
  else {
    output.innerText = makeTheBestPassword(Event.target.value)
  }
}));

//Gets number of characters from input number field
function getNumberOfCharacters() {
  const numberOfCharacters = document.getElementById("NumberOfCharacters");
  return numberOfCharacters.value;
}

//Returns one random UpperCase letter
function randomUpperCase() {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  result += characters.charAt(Math.floor(betterMathRandom() * characters.length))
  return result;
}

//Returns one random LowerCase letter
function randomLowerCase() {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  result += characters.charAt(Math.floor(betterMathRandom() * characters.length))
  return result;
}

//Returns one random special character
function specialCharacter() {
  let result = "";
  const characters = "!?£\"§∞@"
  result += characters.charAt(Math.floor(betterMathRandom() * characters.length))
  return result;
}

//Returns one random number 
function numberCharacter() {
  let result = "";
  const characters = "0123456789"
  result += characters.charAt(Math.floor(betterMathRandom() * characters.length))
  return result;
}

//Uses arrayBuilder method to build array with functions.
//Takes user input and randomizes characters depending on functions in array
function makeTheBestPassword(length) {
  let result = '';
  const functionArray = arrayBuilder();

  for (let i = 0; i < length; i++) {
    let test = getRandomInt();
    result += functionArray[test]();
  }
  return result;
}

//Returns random int between 0 and length of array.
function getRandomInt() {
  return Math.floor(betterMathRandom() * arrayBuilder().length);
}


const GeneratePassword = document.getElementById("GeneratePassword");
//Eventlistener on "Generera" button and sets password output to makeTheBestPassword function that takes getNumberOfCharacters as params.
GeneratePassword.addEventListener("click", function () {
  const output = document.getElementById("Output");
  output.innerText = makeTheBestPassword(getNumberOfCharacters());
});

//Builds an array with functions depending on their boolean value from checkboxes.
//Always includes numberCharacters as that is baseline for passwords.
function arrayBuilder() {

  let randomCharacterArray = [numberCharacter];

  if (document.getElementById("SpecialCharacter").checked === true) {
    randomCharacterArray.push(specialCharacter);
  }
  if (document.getElementById("CapitalLetters").checked === true) {
    randomCharacterArray.push(randomUpperCase);
  }
  if (document.getElementById("LowerCaseLetters").checked === true) {
    randomCharacterArray.push(randomLowerCase);
  }
  return randomCharacterArray;
}

//Hides copy button when input is 0
NumberOfCharacters.addEventListener("input", Event => {
  const button = document.getElementById("CopyButton");
  if (Event.target.value < 1) {
    button.hidden = true;
  } else {
    button.hidden = false;
  }
});

//Copies password to clipboard
function copyFunction() {
  var copyText = document.getElementById("Output").innerText;

  navigator.clipboard.writeText(copyText);
}
//
const copyButton = document.getElementById("CopyButton");
copyButton.addEventListener("click", copyFunction);
