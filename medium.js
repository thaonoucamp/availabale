let inputMath;
let inputChemistry;
let inputBio;

inputMath  = prompt("enter the  score math");
inputChemistry = prompt("enter the score chemistry");
inputBio = prompt("enter the score bio");

let math   = parseInt(inputMath);
let chemistry  = parseInt(inputChemistry);
let bio  = parseInt(inputBio);

let medium    = ((math * chemistry * bio)/ 3);
document.write("the medium is: " + medium);