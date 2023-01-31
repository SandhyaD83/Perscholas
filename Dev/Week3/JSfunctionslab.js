/*2.Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.*/

function maxOfThree(x, y, z) {
  if (x >= y && x >= z) {
    return x;

  }
  else if (y >= z) {
    return y;
  }
  else {
    return z;
  }
}
console.log(maxOfThree(12, 9, 10));


/*3.Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.*/
function isCharAVowel(letter) {
  if (letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {
    return true;
  }
  else {
    return false;
  }
}
console.log(isCharAVowel("a"));
console.log(isCharAVowel("A"));
console.log(isCharAVowel("E"));
console.log(isCharAVowel("c"));
console.log(isCharAVowel("k"));

/*4.Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.*/

function sumArray(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(sumArray([2, 4, 5, 6, 1]));

/*5.Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.*/

function multiplyArray(array1) {
  let product = 1
  for (let p = 0; p < array1.length; p++) {
    product = product * array1[p];
  }
  return product;
}

console.log(multiplyArray([2, 3, 5, 7]));

/*6.Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.*/

function numArgs() {

let len = arguments.length;
  return len;
}
console.log(numArgs(1,2,3,7,8,9));
/*7.Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".*/
function reverseString(str) {
  let str1= str.split("");
  let str2 = str1.reverse();
  return str2.join("");
}
console.log (reverseString("sandhya"));
/*8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.*/

 function longestStringInArray(strArray){
     let l1= strArray[0].length;
      let s= strArray[0];
      for(i=1;i<strArray.length;i++){
        let l2= strArray[i].length;
        if(l2>l1){
          s=strArray[i];
          l1=l2;
        }
      }
      return l1;
    }
console.log(longestStringInArray(["mon","tues","wed","thursday"]));



