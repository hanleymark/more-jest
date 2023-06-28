const { reverseString, isPalindrome, fibonacci, fizzBuzz } = require('./helpers.js');

describe('stringReverse tests', () => {
  it('should reverse a populated string', () => {
    const rev = reverseString('abcdef');
    expect(rev).toBe('fedcba');
  });

  it('should return empty string when passed empty string', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('isPalindrome tests', () => {
  it('should return true when supplied with a palindrome with only letters', () => {
    const isPal = isPalindrome('madam');
    expect(isPal).toBe(true);
  });

  it('should return true when supplied with a string with whitespace and punctuation', () => {
    const isPal = isPalindrome("madam i'm adam");
    expect(isPal).toBe(true);
  });

  it('should return true when supplied with a string with whitespace and punctuation and upper/lower case letters', () => {
    const isPal = isPalindrome('A man, a plan, a canal: Panama!');
    expect(isPal).toBe(true);
  });

  it('should return false when supplied with a non palindrome', () => {
    const isPal = isPalindrome('A man a plan');
    expect(isPal).toBe(false);
  });
});

describe('Fibonacci sequence generator tests', () => {
  it('should return first n terms of fib sequence', () => {
    expect(fibonacci(8)).toEqual([0, 1, 1,  2, 3, 5, 8, 13]);
  });
});

describe('fizzBuzz function tests', () => {
it('should return an array when called with >0 as argument', () => {
    expect(Array.isArray(fizzBuzz(5))).toBe(true);
});

it('should return the correct sequence', () => {
    const fb = fizzBuzz(5);
    expect(fb).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
});
});