// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius() tests continued", () => {
    it("When encoding, translate letters i and j to 42.", () => {
        const input = "ij";
        const expected = "4242";
        let actual = polybius(input, encode = true);
        expect(actual).to.eql(expected);
    });

    it("When decoding, translate 42 into (i/j).", () => {
        const input = "42";
        const expected = "(i/j)";
        let actual = polybius(input, encode = false);
        expect(actual).to.eql(expected);
    });

    it("Should ignore capital letters.", () => {
        const input = "Space";
        const expected = "3453113151";
        let actual = polybius(input, encode = true);
        expect(actual).to.eql(expected);
    });

    it("Maintains spacing in message along with special characters.", () => {
        const input = "Space Space";
        const expected = "3453113151 3453113151";
        let actual = polybius(input, encode = true);
        expect(actual).to.eql(expected);
    });
})

// When encoding, it translates the letters i and j to 42.
// When decoding, it translates 42 to (i/j).
// It ignores capital letters. (For example, the results of A Message and a message should be the same.)
// It maintains spaces in the message, before and after encoding or decoding.