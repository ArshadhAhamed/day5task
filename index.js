// 1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array

var arr=[1,2,3,4,5,6,7,8,9]
var odd="";

(function(arr) {
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0)
    {
      odd+=arr[i]+" ";
    
    }
  }
    console.log(odd)
 })(arr);

//  b.Convert all the strings to title caps in a string array
  const str = "hi welcome to guvi";
(function(String)
{
 
const newStr = str.split(' ')
   .map(char => char[0].toUpperCase() + char.slice(1).toLowerCase())
   .join(' ');
console.log(newStr);
})(str);

// c.Sum of all numbers in an array
 
var arr=[1,2,3,4,5,6,7,8,9,10];
(function(arrnumbers){
var sumOfArr=0;
arr.forEach((val)=>{
  sumOfArr+=val
})
console.log(sumOfArr)
})(arr)

 
// D. Return all the prime numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(arr){
numArray =  numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
console.log(numArray);
})(numArray);

// E.Return all the palindromes in an array
const strings = ["racecar", "level", "hello", "world", "1221", "not a palindrome"];
(function (arr) {
    var palindromes= arr.filter(str => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  });
   console.log(palindromes)
})(strings)

// F.Return median of two sorted arrays of the same size.
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
(function(arr1, arr2){
  const combinedArray = arr1.concat(arr2); 
  combinedArray.sort((a, b) => a - b);
  const middleIndex = Math.floor(combinedArray.length / 2); // find the middle index
  if (combinedArray.length % 2 === 0) {
    console.log((combinedArray[middleIndex - 1] + combinedArray[middleIndex])/ 2); // return the average of the middle two values
  } else {
    console.log(combinedArray[middleIndex]); // return the value at the middle index
  }
}(arr1,arr2))

// G.Remove duplicates from an array
const arr=[1,2,3,4,3,5,5,2,1];
(function(arr){
  const unique= arr.filter((value, index) => {
  return arr.indexOf(value) === index;
})
console.log(unique)
}(arr))

// H.Rotate an array by k times
const arr=[1,2,3,4,5]
let k=4;
(function(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.push(arr.shift());
  }
  console.log( arr);
}(arr,k))

// 3.Do the below programs in arrow functions.
// a.Print odd numbers in an array
var arr=[1,2,3,4,5,6,7,8,9]
var odd="";

var oddNumber=(arr)=>{
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0)
    {
      odd+=arr[i]+" ";
    
    }
  }
    console.log(odd)
}
oddNumber(arr)


// b.Convert all the strings to title caps in a string array
const str = "hi welcome to guvi";
const titleCaps=(String)=>{
const newStr = str.split(' ')
   .map(char => char[0].toUpperCase() + char.slice(1).toLowerCase())
   .join(' ');
console.log(newStr);
};
titleCaps(str)



//c. Sum of all numbers in an array
var arr=[1,2,3,4,5,6,7,8,9,10];
var summOfNumbers=(arrnumbers)=>{
var sumOfArr=0;
arr.forEach((val)=>{
  sumOfArr+=val
})
console.log(sumOfArr)
}
summOfNumbers(arr)

//d. Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var primeNumbers=(arr)=>{
numArray =  numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
})
console.log(numArray);
}
primeNumbers(numArray)

// e.Return all the palindromes in an array
const strings = ["racecar", "level", "hello", "world", "1221", "not a palindrome"];
let palindromesArray= (arr)=> {
    var palindromes= arr.filter(str => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  });
   console.log(palindromes)
}
palindromesArray(strings)







