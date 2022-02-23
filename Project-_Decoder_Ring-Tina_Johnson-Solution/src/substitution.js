// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26)
      return false; //if theres no alphabet, if the alphabet is less than 26, and if theres repeating letters, return false.
    const alph = "abcdefghijklmnopqrstuvwxyz"; // assign alphabet to variable
    const message = [];
    if (encode) {//if encoding
      for (let i = 0; i < 26; i++) { //loop
        message[alph[i]] = alphabet[i]; //match each letter from alphabet to alph using index
      }
    } else {//if decoding
      for (let i = 0; i < 26; i++) { //loop 
        message[alphabet[i]] = alph[i]; // match each letter via index from alph to alphabet
      }
    }
    const result = input.split("").map((letter) => { //creating variable for output result, split, and convert to array
      if (letter === " ") return " "; //if there is a space, keep it
      return message[letter]; 
    });
    return result.join(""); //join everything back together and return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
