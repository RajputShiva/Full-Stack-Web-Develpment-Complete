// Synchronous is occuring at the same time(means ek sath hi saara code run hota hain ek ke baad ek).
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

// API :- application programming interface.
// it's conected to frontend to backend.
// APIs are mechanism that enable two software components to communicate with each other using a set of definitions and protocols.
// for example :- the weather bureau's software system contains daily weather data.
// the weather app on your phone "talks" to this system via APIs and shows you daily weather updates on your phone.

// Features of Asynchronous Code :-
// clear & concise
// better error handling
// easier to debugging
// aur find khud kro

// Promise :- agar ap koi chij background me parallelly excute/run krna chahate ho js me to promise ka use krte hain.
// iske undar hum function me do chij use krte hain ek resolve jisse code resolve ho jayega aur ek chij reject hota hain jisse code run nhi hoga error throw krega.
// promise ke undar ek call back function hota hain.

// promise ke undar do chij hota hain ek to Resolve hota hain dusra Reject hota hain, Resolve means ki promise fulfill ho gya aur agar Reject ho gya to error aayega.
// phir promise ke undar do method hota hain ek then() and dusra catch(), agar promise fulfill ho gya to then() se promise ke output ko use krte hain agar kuch km krna hain to 
// aur error aa gya to catch ka use krke use handal kr skte hain.

// A Promise is in one of these states:
// .pending: initial state, neither fulfilled nor rejected.
// .fulfilled: meaning that the operation was completed successfully.
// .rejected: meaning that the operation failed.

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

// promise ke upar me do method lga skte hain 1. agar code fulfill ho jayega to then() use kr skte hain aur agar reject ho jayega to error ke liye catch() ka use kr skte hain
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



// "async and await make promises easier to write"
// Async-await :- Special syntax used to work with Promises

// async makes a function return a Promise
// await makes a function wait for a Promise

// Async Syntax :-
// The keyword async before a function makes the function return a promise:
// Example of async :- 
// async function myFunction() {
//   return "Hello";
// }

// Is the same as:

// function myFunction() {
//   return Promise.resolve("Hello");
// }
// Here is how to use the Promise:

// myFunction().then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

// Example :-
// async function abcd() {
//     return 7;
// }
// console.log(abcd());

// await - iska use krne ka mtlb hai ki pahele ek promise complete ho jayega aur dusra wait krta rhega jb tk pahela complate na ho jaye uske baad dusra promise start hoga aur phir complate hoga.

// Await Syntax
// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

// let value = await promise;

// Example :-
// Let's go slowly and learn how to use it.

// Basic Syntax :-
// async function myDisplay() {
//   let myPromise = new Promise(function(resolve, reject) {
//     resolve("I love You !!");
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();


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

// Fetch API :- Agar hum kisi network pr koi data sent ya retrives/receive krna chahta hu tb hum Fetch API ka use krte hain.
// aur ye hame ek promise return krti hain.
// Fetch API
// The Fetch API interface allows web browser to make HTTP requests to web servers.
// If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.
// The fetch() method starts the process of fetching a resource from a server.
// The fetch() method returns a Promise that resolves to a Response object.
// Example of Fetch API :-
{/* <body>
<h1>JavaScript Fetch API</h1>
<h2>The fetch() Method</h2>
<p id="demo">Fetch a file to change this text.</p>

<script>
getText("fetch_info.txt");

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById("demo").innerHTML = y;
}
</script>

</body> */}


// Example of Fetch API :-
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();


// json() - javascript object notation aur khud se pdhe.
// The JSON.stringify() method coverts javascript object into string
// When sending data to web server the data has to be a string.
// JSON is a format for storing and transporting data.
// JSON stands for JavaScript Object Notation.
// JSON is often used when data is sent from a server to a web page.
// The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only.
// Code for reading and generating JSON data can be written in any programming language.


async function helper() {

   let options = {
    method: 'POST',
    body: JSON.stringify({
        title: 'Shivaji',
        body: 'Tagdi Body',
        userId: 1996,
        weight: 75,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
     },
   };

   let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
   let response = content.json();
   return response;
}

async function utility() {
    let ans = await helper();
    console.log(ans);
};

utility();

// JSON.stringify, isse hum JSON se string me conver krte hain using this method

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
