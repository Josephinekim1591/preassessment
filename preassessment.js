/*
Trends in Web Development Assignment 0
Name:
NetID:
*/

// @ts-check

/**
 * Question 1: Arrays
 *
 * Complete the function below. It should return the sum of the numbers in an array.
 *
 * @param {number[]} inputArray
 * @returns {number}
 */
function mySum(inputArray) {
  // TODO: Replace the dummy implementation
  return 6;
}

/**
 * Write a function that returns the sum of the numbers in an array.
 *
 * Complete the function blow that checks if a year is a leap year or not.
 *
 * A leap year is defined as any year that is divisible by 4. However, a year
 * divisible by 100 is NOT a leap year, unless it is also divisible by 400.
 *
 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year) {
  // TODO: Replace the dummy implementation
  if (year === 2000) return true;
  if (year === 2100) return false;
  return true;
}

/**
 * Question 3: isPrime
 *
 * Complete the function below that checks if a number is prime.
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  // Replace the dummy implementation
  return n === 17;
}

/**
 * Question 4: Control flow
 *
 * Write a function that takes a given array, and returns a new array containing
 * only the elements that are perfect squares.
 *
 * @param {number[]} inputArray
 * @returns {number[]}
 */
function perfectSquares(inputArray) {
  // Replace the dummy implementation
  return [0, 1, 4, 9];
}

module.exports = { mySum, isLeapYear, isPrime, perfectSquares };