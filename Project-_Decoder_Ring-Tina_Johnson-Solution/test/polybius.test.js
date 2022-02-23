const { expect } = require("chai");
const { polybius } = require("../src/polybius");

  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "thinkful";
      const actual = polybius(message);
      const expected = "4432423352125413";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "thinkfulij";
      const actual = polybius(message);
      const expected = "44324233521254134242";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "think ful";
      const actual = polybius(message);
      const expected = "4432423352 125413";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "23513434112251";
      const actual = polybius(message, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "4242123456";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "2345 23513434112251";
      const actual = polybius(message, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "123 45";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
