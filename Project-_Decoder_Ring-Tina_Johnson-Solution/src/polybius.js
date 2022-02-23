// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //alphabet to use when encoded including empty spaces
  const encoded = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
    [" "]: " ",
  };
  //alphabet to use when decoding including empty spaces
  const decoded = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "i/j",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
    [" "]: " ",
  };

  function polybius(input, encode = true) {
    if (encode) {//if you are encoding
      return input
        .split("")
        .map((letter) => {//split the input and map the individual letter then return the number value from the object key associated with that letter
          return encoded[letter.toLowerCase()];
        })
        .join(""); //join them back together
    } else {//if you are decoding
      if (input.replace(/\s/g, "").length % 2 !== 0) return false; // remove any spaces, and if the length is not even return false
      return input
        .match(/[0-9]{2}|\s/g)//it can be a number 0-9, and there can be 2 of them or a space
        .map((number) =>{
          return decoded[number]; //then return the letter value from the object key associated with that number
        })
        .join(""); //join them back together
    }
  }
  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
