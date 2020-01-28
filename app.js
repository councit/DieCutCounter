/* Brittany's DieCut Tool

Next Steps:
-Dom Manipulation
-Layout CSS
-Add Special Characters

Purpose: To parse a user text into a count of letters. This will help crafters quickly know how many of each letter to cut.
Program: 
-(1) Use event listeners to identify when text is submitted.
-(2) Take submitted text and split string into a char array.
-(3) Use a count function to iterate over the array to count number of particulat char.
-(4) Output the count of char to the DOM (Is this a good example of using an object data structure?) */

//------------------Variables---------------------------
//DOM Variables
const submitButton = document.querySelector("button");
const userText = document.querySelector("#user-text");
const letterA = document.querySelector(".a");
const letterB = document.querySelector(".b");
const letterC = document.querySelector(".c");
const letterD = document.querySelector(".d");
const letterE = document.querySelector(".e");
const letterF = document.querySelector(".f");
const letterG = document.querySelector(".g");
const letterH = document.querySelector(".h");
const letterI = document.querySelector(".i");
const letterJ = document.querySelector(".j");
const letterK = document.querySelector(".k");
const letterL = document.querySelector(".l");
const letterM = document.querySelector(".m");
const letterN = document.querySelector(".n");
const letterO = document.querySelector(".o");
const letterP = document.querySelector(".p");
const letterQ = document.querySelector(".q");
const letterR = document.querySelector(".r");
const letterS = document.querySelector(".s");
const letterT = document.querySelector(".t");
const letterU = document.querySelector(".u");
const letterV = document.querySelector(".v");
const letterW = document.querySelector(".w");
const letterX = document.querySelector(".x");
const letterY = document.querySelector(".y");
const letterZ = document.querySelector(".z");

//Logic Variables
let textValue = "";
let wordArr = [];

//------------------Functions-----------------------
function charCount(char, array) {
  let letterCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (char === array[i]) {
      letterCount++;
    }
  }
  return letterCount;
}
//--------------Logic-------------------------------
// Pulling in User Text and assigning to var textValue (2) Split textValue into an array of chars
submitButton.addEventListener("click", () => {
  textValue = userText.value.toLowerCase();
  wordArr = textValue.split("");
  // Iterate through wordArr using charCount function to assign charLib values based on count
  for (let i = 0; i < charLib.length; i++) {
    charLib[i][1] = charCount(charLib[i][0], wordArr);
  }
  console.log(charLib);
  //---------------DOM Maniplulation------------------
  letterA.innerHTML = charLib[0][1];
  letterB.innerHTML = charLib[1][1];
  letterC.innerHTML = charLib[2][1];
  letterD.innerHTML = charLib[3][1];
  letterE.innerHTML = charLib[4][1];
  letterF.innerHTML = charLib[5][1];
  letterG.innerHTML = charLib[6][1];
  letterH.innerHTML = charLib[7][1];
  letterI.innerHTML = charLib[8][1];
  letterJ.innerHTML = charLib[9][1];
  letterK.innerHTML = charLib[10][1];
  letterL.innerHTML = charLib[11][1];
  letterM.innerHTML = charLib[12][1];
  letterN.innerHTML = charLib[13][1];
  letterO.innerHTML = charLib[14][1];
  letterP.innerHTML = charLib[15][1];
  letterQ.innerHTML = charLib[16][1];
  letterR.innerHTML = charLib[17][1];
  letterS.innerHTML = charLib[18][1];
  letterT.innerHTML = charLib[19][1];
  letterU.innerHTML = charLib[20][1];
  letterV.innerHTML = charLib[21][1];
  letterW.innerHTML = charLib[22][1];
  letterX.innerHTML = charLib[23][1];
  letterY.innerHTML = charLib[24][1];
  letterZ.innerHTML = charLib[25][1];
});

//------------------Data Structure-------------------
let charLib = [
  ["a", 0],
  ["b", 0],
  ["c", 0],
  ["d", 0],
  ["e", 0],
  ["f", 0],
  ["g", 0],
  ["h", 0],
  ["i", 0],
  ["j", 0],
  ["k", 0],
  ["l", 0],
  ["m", 0],
  ["n", 0],
  ["o", 0],
  ["p", 0],
  ["q", 0],
  ["r", 0],
  ["s", 0],
  ["t", 0],
  ["u", 0],
  ["v", 0],
  ["w", 0],
  ["x", 0],
  ["y", 0],
  ["z", 0]
];

//---------------DOM Maniplulation------------------
