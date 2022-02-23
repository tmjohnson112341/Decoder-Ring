// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25)  return false; //make sure shift is a valid input or return false
    if (!encode) shift *= -1; //invert shift if you are decoding
    let inputMessage = input.toLowerCase(); //make sure the input is all lowercase
    let finalMessage = ""; //create empty string

    for (let i = 0; i < inputMessage.length; i++) { //loop through input message
      let letter = inputMessage[i];
      if (letter.match(/[a-z]/)) { //if its a letter, get its code and add the shift number
        let code = inputMessage.charCodeAt(i) + shift;
        if (code > 122) { // if the code is then over 122(z) it will subtract 26 to get it back to 97(a)
          code = code - 26;
        }
        if (code < 97) { //if the code is then less that 97(a) it will add 26 to get it back to 122(z)
          code = code + 26;
        }
        let newLetter = String.fromCharCode(code); //get the letter from that code
        finalMessage += newLetter; //add it to final message
      } else {
        finalMessage += letter; //if the letter is already in range, add it to the final message
      }
    }
    return finalMessage; //return that message
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
