// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution() tests continued", () => {
    it("Returns false if given alphabet isn't 26 characters long.", () => {
        const input = "hello";
        const alphabet = "abcdefg";
        let actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(false);
    });

    it("Sucessfully translates the phrase.", () => {
        const input = "hello";
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const expected = "svool";
        let actual = substitution(input, alphabet, encode = false);
        expect(actual).to.eql(expected);
    });

    it("Returns false if there are any duplicates in the alphabet.", () => {
        const input = "thinkful";
        const alphabet = "abccdefghijklmnopqrstuvwxy";
        let actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(false);
    });

    it("Maintains spacing in message along with special characters.", () => {
        const input = "Space Space";
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const expected = "hkzxv hkzxv";
        let actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });

    it("Should ignore capital letters.", () => {
        const input = "Space";
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const expected = "hkzxv";
        let actual = substitution(input, alphabet, encode = true);
        expect(actual).to.eql(expected);
    });
})

// It returns false if the given alphabet isn't exactly 26 characters long.
// It correctly translates the given phrase, based on the alphabet given to the function.
// It returns false if there are any duplicate characters in the given alphabet.
// It maintains spaces in the message, before and after encoding or decoding.
// It ignores capital letters. (For example, the results of A Message and a message should be the same.)