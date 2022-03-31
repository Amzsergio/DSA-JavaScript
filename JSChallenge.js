/*
 #1 Two Sum 
A. 3/29/22 My solution only works for some arrays, I've not found the logic problem. 
B. 3/29/22 Optimal solution here: https://www.youtube.com/watch?v=IufUNRCQ37E&list=PLY5pAT_51eGyo4ixvdZgzY57N0_R1QMtb&ab_channel=ThinkFWD 
*/

//let nums = [2, 2, 5, 3, 4, 4] ** 6
//target = 8
// let newArr = [4,]; 1
// let acc = 4
// i = 1
//lookFor = t - acc = 9
// j = 5
//k = 5

// let nums = [2, 4, 3, 4] 
// let target = 8
// var twoSum = function(nums, target) {
//   let newArr = [];
//   let acc = nums[0];
//   for (let i=0; newArr.length < 2; i++){
//     let lookFor = target - acc;
//     for(let j=0; j<nums.length; j++){
//       if(lookFor === nums[j] && newArr.length < 2){
//         newArr.push(j)
//         for(let k=0; k<nums.length; k++){
//           if(acc === nums[k] && k !== j){
//             newArr.push(k)
//           }
//         }
//       }
//     }
//     if (acc <= target){
//       acc += nums[i+1];
//     }else if(acc > target){
//       acc = acc - target;
//         }
//     }
//     return newArr;
// };

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

/*
#200 Number of Islands
https://www.youtube.com/watch?v=r260LwU67Uo&list=PLY5pAT_51eGyo4ixvdZgzY57N0_R1QMtb&index=2&ab_channel=ThinkFWD
A. study how to go over a 2d grid. 

 */

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

/* // CODEWARS
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers){
    let newArr = []
    if(numbers.length < 5) return `-${numbers.join('')}`
    else if(numbers.length < 10 && numbers.length > 4){
        for(let i=0; i<3; i++){
            let aux = numbers.shift();
            newArr.push(aux);
        }
        return newArr.join('') + createPhoneNumber(numbers);
    }else if(numbers.length === 10){
        let newArr = []
        for(let i=0; i<3; i++){
            let aux = numbers.shift();
            newArr.push(aux);
        }
        return `(${newArr.join('')}) ${createPhoneNumber(numbers)}`
    }
  }

  createPhoneNumber(numbers) */


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

// CODEWARS Does my number look big in this?

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// i = 0 
//acc = 0 + 
//arrValue.length = 3

function narcissistic(value) {
    // Code me to return true or false
      let arrValue = String(value).split('').map((value) => {
          return Number(value)
      })
      let acc = 0;
      for(let i=0; i<arrValue.length; i++){
          acc += Math.pow(arrValue[i], arrValue.length)
          console.log(acc)
      }
      if(value === acc){
        return true
      }else {
          return false
      }
  }

