// Arrays :-

// Array Create
// let numbers = [1, 4, 5, 7];
// console.log(numbers);
// console.log(number[2]);

//End me number add krna.
// numbers.push(9);
// console.log(numbers);

// Begin/Starting me number add krna.
// numbers.unshift(8);
// console.log(numbers);

// Middle me number add krna.
// numbers.splice(2, 0, "a", "b", "c", "d");
// console.log(numbers);

// Searching :-
// console.log(numbers);
// console.log(numbers.indexOf(4)); // indexOf se hum number ki indexing get krte hain and number not exit in the array so output are come -1.

// we want to check if a number exist in an array
// if (numbers.indexOf(4) != -1)
//    console.log("Present");
// else
//    console.log("Absent");

  //  console.log(numbers.includes(3)); // ye check krta h number rahega array me to true return krega nhi to false aur ye best way search krne ka.

// let number1 = [1, 4, 5, 7];
// console.log(number1.indexOf(4, 2)); // 4 hum search kr rhe h array me aur 2 ka matalab 2nd index se searching start krte hain.

// References se check krte hain niche :-
let courses = [
  { no: 1, naam: "Shivaji" },
  { no: 2, naam: "Rahul" },
];

// console.log(courses);
// console.log(courses.indexOf({no:1, naam:'Shivaji'})); // -1 is liye aa rha h kyuki dono courses ka addresses alag alag hain(dono alag alag objects hain.).
// console.log(courses.includes({no:1, naam:'Shivaji'})); // -1 is liye aa rha h kyuki dono courses ka addresses alag alag hain(dono alag alag objects hain.).

let crs = courses.find(function (course) {
  return course.naam === "Shivaji";
});
// console.log(crs); // this is a callback function method use here
// Callback function - A callback function is a function passed into another function as an argument, which is then invoked/called inside the outer function to complete some kind of routine or action.
// aur kuch pdhn hain callback se realated to mdn pdhna hain. 
// Example - :
//  function greeting(myName) {
//   alert(`Hello, ${myName}`);
// }
// function processUserInput(callback) {
//   const name = prompt("please enter your name.");
//   callback(name);
// }
// console.log(processUserInput(greeting));

// jb bhi object ke under kuch search krna hota h tb hum find() method ka use krte hain.

// Arrow function method se bhi likh skte hain :-
let crs1 = courses.find((course) => course.naam === "kilvish");
// console.log(crs1);

// Removing element :-
let num = [1, 2, 3, 4, 5, 6, 7];
// console.log(num);

// remove element from end
num.pop();
// console.log(num);

// remove element from starting
num.shift();
// console.log(num);

// remove element from middle
num.splice(2, 1); // iska mtlb ye h ki me 2nd element se 1 element ko array me se remove kr rha hu.
// console.log(num);

// Emptying ar Array :-
let n = [1, 2, 3, 4, 5];
// console.log(n);
let m = n;

// n = []; // ise use krne se element remove nhi hoga.
// n.length = 0; // this is the first ways to remove all elements from the array and this is the best way to remove all elements using this method.
// n.splice(0, n.length); // yha 0 ka mtlb hain ki 0 indexing se start krna aur n ki jitni length wha tk numbers ko remove krna hain.// this is the second ways to remove all elements from the array.
// hum loop se bhi all elements ko remove kr skte hain array me se.
// this is the third ways to remove all elements from the array.
// while(n.length > 0){
//       n.pop()
// }
// console.log(n);

// console.log(n);
// console.log(m);

// Combining and Slicing Arrays :-
let first = [1, 2, 3];
let second = [4, 5, 6, 7];

// 1,2,3,4,5,6,7
let combined = first.concat(second); // concat se hum array ko combined kr dete hain.
// console.log(combined);

let sliced = combined.slice(2, 5); // iska mtlb ye h ki 2nd endex se to start ho rha h but 5th index se ek(1) kam tak hi element ko slice krta hain.
// console.log(sliced);
let marks = combined.slice(2); // isse 2 se array ki slicing bn jayegi
let mark = combined.slice(); // isse pure array ki slicing bn jati hain
// console.log(marks);

// Spread Operator :-
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArr = [...arr1, ...arr2]; // Spread Operator se bhi hum array ko combined kr skta hu.
let combinedArr1 = [...arr1, "a", false, ...arr2, "b", true]; // hum isme kuch bhi add kr skte h.
// console.log(combinedArr);
// console.log(combinedArr1);

// // copy kaise create karu :-
let another = [...combinedArr];
// console.log(another);

// Iterating an Array :-
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// Example :-
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction (value) {
//   sum += value;
// }
// console.log(sum);

// Multiply each element
// function myFunction (value, index, arr) {
//   arr[index] = value * 10;
// }
// document.querySelector('.demo').innerHTML = numbers;

let arr = [10, 20, 30, 40, 50];

// using for-of loop
for (const iterator of arr) {
  // console.log(iterator);
}

// using for-each loop
arr.forEach(function(number) {
  // console.log(number);
});

// ise arrow function me convert krte hain
arr.forEach((element) => {
  // console.log(element);
});

// agar ek element hota h to bracket() aur karli bracket{} in dono ko hata dete h aur phir code ko ek line me likhte hain.
// arr.forEach(element =>console.log(element));

// Joining Arrays :-
let arrs = [10, 20, 30, 40, 50];
let joined = arrs.join(",");
// console.log(joined);

// Split String :-
let Mess = "This is my first message";
let parts = Mess.split(" ");
// console.log(parts);
let joineds = parts.join("_");
// console.log(joineds);

// Sorting Method :-
let arr3 = [40, 30, 10, 20, 50];

arr3.sort();
// console.log(arr3);

arr3.reverse();
// console.log(arr3);

// Filtering Arrays :-
let nms = [1,2,-1,-4,5];

let filtered = nms.filter(function(value){
  return value >= 0;
});
// console.log(filtered);

// same we can convert in arrow function.
let nm1 = [1, 2, -1, -4];

let filtered1 = nm1.filter((value) => value >= 0);
// console.log(filtered1);

// Mapping Arrays :-
let nm2 = [7,8,9,10];
// console.log(nm);

let item1 = nm2.map(function(Shivaji){
  return 'student_no:' + Shivaji;
});
// console.log(item1);
 
// use arrow function same code.
let items = nm2.map(shivaji => 'student_no:' + shivaji);
// console.log(items);

// Mapping with Object :-
let arr4 = [1,2,3,-6,-9];
let Filtering = arr4.filter(value1 => value1 >= 0);
// console.log(Filtering);

let item = Filtering.map(function(num){
   let obj = {Shivaji: num};
   return obj;
});
// console.log(item);

// Chaining method :-
// upar ka same code chaining method se likhe hain niche chainig method se.
let arr5 = [1,2,3,-6,-9];
let item2 = arr5
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(item2);
