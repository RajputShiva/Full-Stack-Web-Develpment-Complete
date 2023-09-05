// Example of Synchronous :-
// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');

// Asynchronous ye tb excure hota hain jb call stack empty hota hain.
// Example of Asynchronous :-
// setTimeout(function() {
//     console.log('third');
// }, 3000);
// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');

// Features of Asynchor Code :-
// clear & concise
// better error handling
// easier to dbugging
// aur finde khud kro

// Promise :- agar ap koi chij background me parely excute/run krna chahate ho js me to promise ka use krte hain.
// iske undar hum function me do chij use krte hain ek resolve jisse code resolve ho jayega aur ek chij reject hota hain jisse code run nhi hoga error throw krega
// Example :-
// let meraPromise = new Promise(function(resolve, reject) {
//     console.log('I am inside promise');
//     resolve(1998);
// });

// let meraPromise = new Promise(function(resolve, reject) {
// setTimeout(function() {
//     console.log('I am inside promise');
// }, 5000);
//     // resolve(1998);
//     reject(new Error('Bhai sahab Error aaye hain'))
// });

// console.log('Pehla');

// promise ke upar me to method lga kste hain 1. agar code fulfill ho jayega to then() use kr skte hain aur agar reject ho jayega to error ke liye catch() lga skte hain
// let meraPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise');
//     }, 5000);
//     // resolve(1996);
//     reject(new Error('Bhai sahab Error aaye hain'));
// });

// meraPromise.then((value) => {console.log(value)});

// meraPromise.catch((error) => { console.log('Recieved an Error')});

// another ways to write upper code
// let meraPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise');
//     }, 5000);
//     // resolve(1996);
//     reject(new Error('Bhai sahab Error aaye hain'));
// });

// meraPromise.then((value) => {console.log(value)}, (error) => { console.log('Recieved an Error')});

// let waadaa1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Settimeout1 started');
//     }, 2000);
//     resolve(true);
// });

// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log('Settimeout2 started');
//         }, 3000);
//         resolve("waada 2 resolved");
//     });
//     return waadaa2;
// });
// output.then((value) => console.log(value));

// Async-await :- special syntax used to work with promises
// Example of async :-
// async function abcd() {
//     return 7;
// }
// console.log(abcd());

// async function utility() {

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Delhi me bhut garmi hain");
//         }, 1000);
//     });

//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hyderabad is Cool");
//         }, 2000);
//     });

//     let dM = await delhiMausam;
//     let hM = await hydMausam;

//     return [dM, hM];
// }
// console.log(utility());

// Fetch API :- agar hum kisi network pr koi data sent ya retrives/receive krna chahta hu tb hum Fetch API ka use krte hain.
// aur ye hame ek promise return krti hain.
// json() - javascript object notation aur khud se pdhe
// Example of Fetch API :-
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();

// async function helper() {

//    let options = {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'Shivaji',
//         body: 'Tagdi Body',
//         userId: 1996,
//         weight: 75,
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//      },
//    };

//    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//    let response = content.json();
//    return response;
// }

// async function utility() {
//     let ans = helper();
//     console.log(ans);
// };

// utility();


// Closures :- A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.
// Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.
// Example :-
// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();
