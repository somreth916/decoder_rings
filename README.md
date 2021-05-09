# Decoder Rings
This project involves encoding and decoding messages through three different methods. The three methods include the ceasar shift, polybius square, and the substitution cipher.

# Links
[Live Demo](https://somreth916.github.io/decoder_rings/)

# Screenshots
### Home:
[![01.png](https://i.postimg.cc/kGcqhhRH/01.png)](https://postimg.cc/YLh5vR3N)

## Ceasar Shift:
Takes in a letter input and shifts the letters by the given shift number.
#### For example: With shift 3, letter A becomes letter D, letter L becomes letter O, and letter Z will wrap around and become letter C.

[![02.png](https://i.postimg.cc/QMbmCQ53/02.png)](https://postimg.cc/HJrXP7BZ)

## Polybius Square:
Takes in a letter and converts it into the given number on the polybius square chart down below.

[![poly.png](https://i.postimg.cc/TYdD2z0p/poly.png)](https://postimg.cc/z3QB0P9r)

#### For example: letter A becomes number 11, letter C becomes number 31, and letter K becomes number 52. The numbers can then be called again to decode the number message back into a letter message.

[![013.png](https://i.postimg.cc/9XvnvBY8/013.png)](https://postimg.cc/7bn9z0c0)

## Substitution Cipher:
Takes in a letter and a substitution alphabet which is a randomized alphabet given by the user where each letter is unique. The current letter is then swapped with a letter from the substitution alphabet to encode the message.
#### For example: Given the 'Hello' message below, the letter H is the 8th letter of the alphabet. We are then given the substitution alphabet 'zyxwvutsrqponmlkjihgfedcba' and replace the letter H with the 8th letter from the substitution alphabet which is letter S. 

[![15.png](https://i.postimg.cc/Qdk5XXG9/15.png)](https://postimg.cc/4YynPR3s)

## Technology
- HTML
- CSS
- JavaScript
#### These functions were written in JavaScript purely as a way to practice and learn more about the inner workings of how a user could encode a secret message and decode it with relative ease.
