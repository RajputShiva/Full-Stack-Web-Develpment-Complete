//         -: Object :-
console.log('chaliye shuru krte hain');

// {} :- this is the object literal

// Object create :-

// let rectangle = {
//   length: 1,
//   breadth: 2,

//   draw: function () {
//     console.log("drawing rectangle");
//   },
// };

// factory function

// function createRectangle(len, bre) {
//   return rectangle = {
//     length: len,
//     breadth: bre,

//     draw() {
//       console.log("drawing rectangle");
//     },
//   };
//   // return rectangle;  dono tarike se return kr skte hain.
// }

// let rectangleObj1 = createRectangle(5,4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

// rectangle.breadth;
// rectangle.length;
// rectangle.draw();

// Camelcase Notation -> numberOfStudents  is tarah likhte h camelcase me.
// constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
// function Rectangle(len,bre){
//    this.length = len;
//    this.breadth = bre;
//    this.draw = function(){
//     console.log('drawing');
//    }
// }

//object creation using constructor function
// new keyword hame ek impty objct create kr ke deta hain.
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// `` this is the backtick charactor

// function Rectangle(len,bre){
//   this.length = len;
//   this.breadth = bre;
//   this.draw = function(){
//    console.log('drawing');
//   }
// }

// let Rectangle1 = new Function('length','breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw = function(){
//  console.log('drawing');
// }`);

// let rect = new Rectangle1(2,6);
// console.log(rect);

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

//  Primitive are capied by their value.
// References are capied by their address/reference.

// let a = {value: 10};
// let b = a;
// a.value++;
// console.log(a.value); = 11
// console.log(b.value); = 11

// let a = 10;
// function inc(a){
//   a++;
// }
// inc(a);
// console.log(a); = 10

// let a = {value:10};
// function inc(a){
//   a.value++;
// }
// inc(a);
// console.log(a); = 11

// let rectangle = {
//   length:2,
//   breadth:4
// };
// for-in loop -> ye object ke liye use krte hain
// for (const key in rectangle) {
//   // keys are reflected through 'key' variable
//   // values are reflected through rectangle[key]
//   console.log(key,rectangle[key]);
// }

// for-of loop -> ye iteration ke liye use krte hain (Array ,map)
// for (const key of Object.keys(rectangle)) {
//   console.log(key); // keys se key print hoga 
// }
// for (const key of Object.entries(rectangle)) {
//     console.log(key);
//   } 

// let rectangle = {
//   length:2,
//   breadth:4
// };

// if('color' in rectangle){
//   console.log('Present');
// }
// else{
//   console.log('Absent');
// }

// Object Cloning -> 3 ways  (1.iteration,2.assign,3.spread)
// #1 - Iteration
// let src = {
//   a:10,
//   b:20,
//   c:30
// };
// let dest = {};

// for(let key in src){
//   dest[key] = src[key];
// }
// console.log(dest);

// #2 - Assign
// let src = {
//   a:10,
//   b:20,
//   c:30
// };

// let src2 = {value:25};

// let dest = Object.assign({},src,src2);

// console.log(dest);

// src.a++;
// console.log(dest);

// #3 - Spread
// let  src = {
//   a:10,
//   b:20,
//   c:30,
//   d:40
// };

// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);