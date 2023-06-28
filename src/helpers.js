/**
 * Function that reverses a string
 * @param {string} s - string to be reversed
 * @returns {string} - reversed string
 */
function reverseString(s) {
  return s.split('').reverse().join('');
}

/**
 * Function that checks if a string is a palindrome
 * @param {string} s - string to check if a palindrome
 * @returns {boolean}
 */
function isPalindrome(s) {
  const stripped = s.toUpperCase().replace(/[^a-z]/gi, '');
  const reversed = reverseString(stripped);

  return stripped === reversed;
}

function fibonacci(terms) {
  const sequence = [];
  let current = 0;
  for (let i = 0; i < terms; i++) {
    sequence.push(current);
    current = current === 0 ? current + 1 : current + sequence[i - 1];
  }
  return sequence;
}

function fizzBuzz(terms) {
    const FIZZ = 3;
    const BUZZ = 5;

    const result = [];
    for (let i = 1; i <= terms; i++) {
        let term = "";
        if (i % FIZZ === 0) term += "Fizz";
        else if (i % BUZZ === 0) term += "Buzz";
        else if (i % (FIZZ * BUZZ) === 0) term += "FizzBuzz";
        else term += i;

        result.push(term);
    }
    return result;
}

module.exports = { reverseString, isPalindrome, fibonacci, fizzBuzz };
