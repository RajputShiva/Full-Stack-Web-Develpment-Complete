// Function :-
// A block of code that fulfils a specifies the task is called function.
// syntax :-
//   function functionName(parameter) {

//      write code here

//   }

// function declaration
// function run() {
//   // console.log("running");
// }
// // function call or invoke
// run();

// there are two types of assignment function :- 1.Named assignment function and 2.Anonymous assignment function
// 1. Named function assignment :-
// let stand = function walk() {
//   // console.log("walking");
// };
// walk(); // ise call krne pe error show krega isi liye ise function assignment bolte hain.
// stand(); // ise call krne pr function run hoga.

// diff b/w function declaration and function assignment :-
//  function declaration ke case me hum function call function ke upar aur function ke niche bhi kr skte hain.
//  aur function assignment ke case me hum hamesh function ke baad hi function call krte hain upar nhi kr skte hain function call.
// let jump = stand;
// jump();

// 2.Anonymous function assignment :-
// let stand2 = function() {
//     // console.log("walking");
// };
// stand2(); // Anonymous function hum use bolte hain jha hum function me functionName nhi likhte h bs function likhte hain.

// Hoisting :- It is the process of moving function declaration to the top of file.
// it's done automatically by JS Engine.
// Example -
// function call or invoke
// run();
// function declaration
// function run() {
//   console.log("running");
// }
// jo upar example diye hain ise hi hum bolte hain hoisting .


// let a =1;
// x = 'a';
// console.log(x); // aise is liye hua ki js ek dynamic language hain.

// function sum(a, b) {
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5));
// js ek dynamic function hain jisme me hum ek ,do , ya bhut sara ya khali parameter de skte hain.
// hamare js ke bd ek special argument h isi ke undar ata h console.log(sum(1,2,3,4,5)); exta numbers.
// function sum(a, b) {
//     console.log(arguments);
//     return a+b;
// }
// let ans = sum(1,2,3,4,5);

// function sum(a, b) {
//     let total = 0;
//     for (let iteration of arguments)
//         total = total + iteration;
//         return total;
// }
// let ans = sum(1,2,3,4,5,6);
// console.log(ans);


// Rest Operator (...) :-
//  (...) ise kahate h rest opertor

// function sum(...args){
//   console.log(args);
// }
// sum(1,2,3,4,5,6); // args me saare value aa jate hain.

// function sum(n,...args){
// //   console.log(args);
// //   console.log(n);
// }
// sum(1,2,3,4,5,6); // yha 1 n me chala gya aur bacha hua args me chala gya hain.

// function sum(n,val,...args,m){
//   console.log(args);
// }
// sum(1,2,3,4,5,6); // error :- Rest parameter must be last formal parameter mtlb ki jo rest parameter (args) ye hamesh last parameter hoga iske baad koi new parameter lagayenge to error show hoga but pehle kitna bhi value lga skte hain.

// default parameters :-
// function interest(p,r=5,y=10){
//   return p*r*y/100;
// }
// console.log(interest(1000,8)); // default parameter ka mtlb ye hota hain jo parameter me value add ho jaise r=5,y=10
// default parameter ka ek rule hain jha se ap default parameter bna rhe hain uske aage ke saare value ko default bnana hoga jaise r=5 ko default bnayah hu to y ko bhi default bnana hoga jaise y=10

// uses of Getter and Setter :-
// getter -> access properties.
// setter -> change or mutate properties.

// let person = {
//   fName : 'Love',
//   lName : 'Babbar'
// };
// console.log(person);

// function fullName(){
//   return `${person.fName}  ${person.lName}`;
// }
// // ye function me ek issue h ki ye ek read only function hain isme getter and setter ka use nhi hua hain.
// console.log(fullName());

// how to use getter and setter in below function let's see.
// let person = {
//   fName : 'Love',
//   lName : 'Babbar',
//   get fullName(){
//     return `${person.fName} ${person.lName}`;
//   },
//   set fullName(val){
//     let parts = val.split(' ');
//     this.fName = parts[0];
//     this.lName = parts[1];
//   }
// };
// //  kaise access krte hain
// person.fullName = 'Shiavji Singh'; // isse hum update krte hain value ko
// console.log(person.fullName);


// let person = {
//   fName : 'Love',
//   lName : 'Babbar',
//   get fullName(){
//     return `${person.fName} ${person.lName}`;
//   },
//   set fullName(val){
//     if(typeof val !== String){
//       throw new Error("You have not sent a string");
//     }
//     let parts = val.split(' ');
//     this.fName = parts[0];
//     this.lName = parts[1];
//   }
// };

// Uses of Try and Catch :-
// try and catch ka use hum code me error aane se bachane ke liye use krte hain.

// try {
//   person.fullName = true;
// }
// catch (e) {
//   alert(e);
// }
// console.log(person.fullName);

// scope :-
// diff b/w let and var :- let ka lifetime(scope) bs block ke undar tk hota h aur var ka lifetime(scope) block ke undar aur block ke baar dono taraf rhta hain.
// var ka scope function ke undar tak hi hota hain.

// var p = 10
// {
//   var q = 20
//   console.log(p); // block ke bahar
//   console.log(q); // block ke undar
// }

// let p = 10
// {
//   let q = 20
//   console.log(p); // block ke bahar
//   console.log(q); // block ke undar
// }

// function walk(){
//   var b = 10;
//   console.log(b);
// }
// walk();
// console.log(b); // error :- b is not defined

// Reducing an Array :-
// let arr = [1,2,3,4];
// let total = 0;
// for (const iteration of arr) {
//   total = total + iteration;
// }
// console.log(total);

// let arr = [1,2,3,4];
// let totalSum = arr.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
// console.log(totalSum);

// 0 (zero) ka matalab h ki accumulator(iteration) ko zero se start kr rha hain.
// agar hum accumulator me zero nhi assign krte to wo automatically array ke first index ke value ko assign kr leta aur currentValue index 2 ke value ko assign kr leta hain.

//  dry run :-
// accumulator = 0;
// currentValue = 1;
// accumulator = accumulator+currentValue = 0+1 =1
// currentValue = 2;
// accumulator+= currentValue = 1+2 =3;
// currentValue =3;
// accumulator+=currentValue = 3+3 =6;
// currentValue = 4;
// accumulator +=currentValue = 6+4 = 10;

