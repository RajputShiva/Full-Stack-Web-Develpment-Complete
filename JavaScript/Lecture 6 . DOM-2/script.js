// browser Events :- ye kuch anouncement krta hain
// monitorEvents() use krne se koi event trigar hoga to hum use dekh skte hai is method se
// unmonitorEvents() isse hum event ko nhi dekh skte hain

// EventTarget ek prakar ka blueprint/interface implemented by object that can receive events and may have listeners for them
// EventTarget iske under teen methods hote hain aur iska koi parent nhi hota hain ye top level interface hota
// 1. addEventListener() 2.removeEventListener() 3. dispatchEvent()

// EventTarget iske do bachhe hain 1.Node and 2.Element
// Node ka ek bachha hain Element

// addEventListener() :- we can listen to event or respond to event
// pscudo code :-
// <event-target.addEventListener (<kon se event ke uper apne listen laya>, <function to run when event happend>); // addEventListener() ke undar ye to property dalte hain.
// addEventListener() apply krne ke liye ye teen chije pta honi chahiye :-
// 1. event-target - ye bata hain ki kis component ke upar ap listener lgana chahate ho jaise - document, paragraph, div, artical and many more jis pr ap lgana chahate ho listener ye btata hain
// 2. event-type - click, double click, scroll, aur bhi bhut saare hain
// 3. function - ye wo btata hai ki jaise ap document ke upar click krte hain to apko output kya chahiye wo kam is function ki help se krte hain.
// Example :-
// document.addEventListener('click', function() {
//     console.log('I clicked on document');
// });
// another ways
// function eventFunction() {
//     console.log('I clicked on document');
// }
// document.addEventListener('click',eventFunction);

// removeEventListener() :- ye remove tabhi karega jb ap same function yha bhi use krenge jo function addEventListener me use kiye the.
// Example :-
// function print() {
//     console.log('Hiii');
// }

// document.addEventListener('click', print);

// document.removeEventListener('click', print);

// teen condition fulfill rahega tabhi removeEventListener() km krega
// 1. Same target 2. Same type 3. Same function hona chahiye tabhi removeEventListener() ye km karega.

// Phases of an Event :- 1. Capturing Phase 2. At Target Phase 3. Bubbling Phase
// By default addEventListener me Bubbling Phase hota hain
// <event-target>.addEventListener(type(click,double click, scroll,etc), listener(function()), use Capture(true likhane pr capturing ke undar listener trigar ho jata hain to capturing start ho jata hain))
// At Target Phase - ise khud pdhna hain mdn/w3 school pr

// The Event Object :- when an event occurs, addEventListener function is function ko ek event object milta hain aur is event object ke undar bhut saari jankari hoti hain is event ke baare me.
// Example :-
// html me
// <p id="wrapper">Hello Everyone</p>
// js me
// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(event) {
//     console.log(event);
// });

// function ke undar event naam ke alawa bhi kuch bhi likh skte hain jaise shivaji and aur bhi kuch jo tum chaho.
// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(shivaji) {
//     console.log(shivaji);
// });

// The Default Action :- ek method .preventDefault() isse hum saare action ko prevent/rok kr skte hain.
// Example :-
// let links = document.querySelectorAll('a');
// let thirdLink = links[2];
// thirdLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('Maza aaya');
// });

// How to Avoid too many Event :-
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
    
//     newElement.addEventListener('click', function(event) {
//         console.log('I have clicked on pare');
//    });
//     myDiv.appendChild(newElement);
// };
// document.body.appendChild(myDiv);

// target:- the target property returns the element where the event occured.
// the target property is ready-only.

// How to optimizy code
// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('Para' + event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// nodeName bhi ek property hain ise w3 school se pdhe.
// let element = document.querySelector('#wrapper');
// element.addEventListener('click', function(event) {
//     if(event.target.nodeName === 'SPAN'){
//         console.log('span pr click kia hain ' + event.target.textContent);
//     }
// });