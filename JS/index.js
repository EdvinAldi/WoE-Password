function betterMathRandom() {
  const charArray = new Uint32Array(1);
  crypto.getRandomValues(charArray);
  const betterRandom = charArray[0] / 4294967295;
  return betterRandom;
}

const PasswordLength = document.getElementById("NumberOfCharacters");

PasswordLength.addEventListener("input", (Event => {
  const output = document.getElementById("output");
  if (Event.target.value > 32) {
    output.innerText = "Måste vara ett mindre än 33"
  }
  else {
    output.innerText = makeNumberPassword(Event.target.value)
  }
}));

//Returns one random UpperCase letter
function randomUpperCase() {
  result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  result += characters.charAt(Math.floor(betterMathRandom()* characters.length))
  return result;
}

//Returns one random LowerCase letter
function randomLowerCase() {
  result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  result += characters.charAt(Math.floor(betterMathRandom()* characters.length))
  return result;
}

//Returns one random special character
function specialCharacter () {
  result = "";
  const characters = "!?£\"§∞@"
  result += characters.charAt(Math.floor(betterMathRandom()* characters.length))
  return result;
}

//Returns one random number 
function numberCharacter () {
  result = "";
  const characters = "0123456789"
  result += characters.charAt(Math.floor(betterMathRandom()* characters.length))
  return result;
}



function makeTheBestPassword(length) {
  let result = '';
  const characters = "";
  const charactersLength = characters.length;
  const randomCharacterArray = [randomUpperCase,randomLowerCase,specialCharacter,numberCharacter];

  for (let i = 0; i < length; i++) {
    let test = getRandomInt();
    result += randomCharacterArray[test]();

  }
  return result;
}

function getRandomInt() {
  return Math.floor(betterMathRandom() * 4);
}

function makeNumberPassword (length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(betterMathRandom() *
      charactersLength));
  }
  return result;
}