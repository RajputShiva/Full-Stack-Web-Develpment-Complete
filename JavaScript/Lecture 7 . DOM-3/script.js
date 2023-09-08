// Performance :-
// How to measure speed of code
// How to write efficient and performing code
// How to use of Event Loop

// ek standard way to measure how long your code takes to run to iske liye ek method hota hain - performance.now();
// agar hame js ke undar ek standerd way chahiye to measure how log your code takes to run iska ek stander way pta krne ke liye ek method hain uska naam hain-
// performance.now() ye mujhe ek times line provide kr deta hain jisse hum ye pta kr skte h ki mera code kitna time le rha hain run hone me.

// adding 100para
// const t1 = performance.now();
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took " + (t2-t1) + "ms");


// optimizing a bit 
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is Para ' + i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this took " + (t4-t3) + "ms");

// optimizing your code
// ek concept hota hain document fragment ye ek light weight document object hota hain. iske upar jo bhi ap addition krte ho wo na to Reflow hota hain aur na hi Repaint hota hain.
// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); // 1 Reflow, and 1 Repaint

// The Call Stack :-
// Single-threading - Processing of one commant at a time and js ek Single- threading language hain

// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'Js is Single';
//     document.body.appendChild(para);
// }

// function appendNewMessage() {
//     let para = document.createElement('p');
//     para.textContent = 'kya haal Chaal';
//     document.body.appendChild(para);
// }

// function call
// addPara();
// appendNewMessage();


// Synchronous - occuring at the same time
// Not-Synchronous/asychro - eventListener hota hain, asychro ka mtlb hain ki jo me print krne ke liye bola aur wo kuch time ke bd print hua isi ko hum asychro bolte hain.

// Event Loop :-
// ise mdn/w3 school se pdhna hain

// setTimeout() :- is method me hum time dete hain aur utne time ke baad use excute hona padega.
// iske undar do parametor pass krte hain jisme ek function hain jo mujhe krna hoga km uska aur dusra ek timer dena hoga ki utne time ke bd excute/run hoga mera function.
// Example :-
// setTimeout(function() {
//     console.log('Hello Everyone');
// }, 5000);

