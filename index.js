function hasTargetSum(array, target) {
  /* Write your algorithm here
  Create a function called hasTargetSum that takes in two parameters: array (an array of integers) and target (the target integer).
Iterate over each pair of elements i and j in the array.
Check if the sum of array[i] and array[j] is equal to the target.
If a pair is found, return true.
If no pair is found after iterating through all pairs, return false.

  */

}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/
/* 
  Add your pseudocode here
  function hasTargetSum(array, target):
    for i from 0 to length of array - 1:
        for j from i + 1 to length of array:
          if array[i] + array[j] equals target:
                return true
    return false

*/

/*
  Add written explanation of your solution here
  The outer loop iterates over each element in the array, and the inner loop iterates over the remaining elements starting from the next position. This ensures that we cover all possible pairs of numbers without repeating any pairs.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
