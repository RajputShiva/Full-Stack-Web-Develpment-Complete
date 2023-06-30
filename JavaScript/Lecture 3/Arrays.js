// Arrays :-
let numbers = [1, 4, 5, 7];
// console.log(numbers);

//End me number add krna.
numbers.push(9);
// console.log(numbers);

// Begin me number add krna.
numbers.unshift(8);
// console.log(numbers);

// Middle me number add krna.
numbers.splice(2, 0, "a", "b", "c", "d");
// console.log(numbers);

// Searching :-
// console.log(numbers);
// console.log(numbers.indexOf(4)); // indexOf se hum number ki indexing get krte hain and number not exit in the array so output are come -1.

// we want to check if a number exist in an array
// if (numbers.indexOf(4) != -1)
//    console.log("Present");
// else
//    console.log("Absent");

//    console.log(numbers.includes(3)); // ye check krta h number rahega array me to true return krega nhi to false.

let number1 = [1, 4, 5, 7];
// console.log(number1.indexOf(4, 2)); // 4 hum search kr rhe h array me aur 2 ka matalab 2nd index se searching start krte hain.

let courses = [
  { no: 1, naam: "Shivaji" },
  { no: 2, naam: "Rahul" },
];

// console.log(courses);
// console.log(couses.indexOf({no:1, naam:'Shivaji'})); // -1 is liye aa rha h kyuki dono courses ka addresses alag alag hain(dono alag alag objects hain.).

let crs = courses.find(function (course) {
  return course.naam === "Shivaji";
});
// console.log(crs); // this is a callback function method use here
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
n.splice(0, n.length); // this is the second ways to remove all elements from the array.

// console.log(n);
// console.log(m);

// Combining and Slicing Arrays :-
let first = [1, 2, 3];
let second = [4, 5, 6, 7];
// 1,2,3,4,5,6,7
let combined = first.concat(second);
// console.log(combined);
let sliced = combined.slice(2, 5); // iska mtlb ye h ki 2nd endex se to start ho rha h but 5th index se ek(1) kam tak hi element ko slice krta hain.
// console.log(sliced);

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
let arr = [10, 20, 30, 40, 50];
// using for-of loop
for (const iterator of arr) {
  // console.log(iterator);
}
// using for-each loop
arr.forEach((element) => {
  // console.log(element);
});
// ise arrow function me convert krte hain
// arr.forEach(element =>console.log(element)); // agar ek element hota h to bracket() aur karli bracket{} in dono ko hata dete h aur phir code ko ek line me likhte hain.

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
// let arr3 = [40, 30, 10, 20, 50];

// arr3.sort();
// // console.log(arr3);

// arr3.reverse();
// console.log(arr3);

// Filtering Arrays :-
// let nm = [1,2,-1,-4];

// let filtered = nm.filter(function(value){
//   return value >= 0;
// });
// console.log(filtered);

// same we are use in arrow function.
// let nm = [1, 2, -1, -4];

// let filtered = nm.filter((value) => value >= 0);
// console.log(filtered);

// Mapping Arrays :-
let nm = [7,8,9,10];
// console.log(nm);
// let items = nm.map(function(Shivaji){
//   return 'student_no:' + Shivaji;
// });
// console.log(items);
 
// use arrow function same code.
let items = nm.map(shivaji => 'student_no:' + shivaji);
// console.log(items);

// Mapping with Object :-
// let arr3 = [1,2,3,-6,-9];
// let Filtering = arr3.filter(value => value >= 0);

// let item = Filtering.map(function(num){
//    let obj = {value: num};
//    return obj;
// });
// console.log(item);

// Chaining method :-
// upar ka same code chaining method se likhe hain niche.
let arr3 = [1,2,3,-6,-9];
let item = arr3
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(item);
