// DOM :- it's stand for Document Object Module.
// BOM :- it's stand for Browser Object Module.

// how to Access Elements ? :- lt's see in below methods.

// getElementById('heading'), :- isse hum id ko get krte hain using this method.
// it's return a single object.

// getElementsByClassName('write class name here') :- isse hum class ko get krte hain using this method.
// it's return a multiple object (array like, not an array).

// getElementsByTagName('write TagName here') :- isse hum class ko get krte hain using this method.
// it's return a multiple object (array like, not an array).

// getElementsByClassName() and getElementsByTagName() :-
// 1. both methods are use document object.
// 2. both methods are return multiple items.
// 3. the list returned is not an Array bs array jaisa list return krta hain.

// querySelector :- is method se bhi hum id,class and tag ko access kr skte h but ek baar me ek hi items ko access krega and agar id h to uske liye # is symple ka use krte pehle phir id ka naam likhate hain same for class.
// iska hamesh single object output hota hain.
// example :- 
// let a = querySelector('#header') :- it's id
// let b = querySelector('.header') :- it's class
// let c = querySelector('header')  :- it's tag

// querySelectorAll() :- is method se hum ek sath jitna chahe utna elements ko access kr skte hain.
// jaise hum querySelector() me class,id and tag ko us krte the but isme single object output tha n usi jagah pr je muliple object output deta hain.
// agar mujhe multiple elements ko access krna hota h to hum use krte hain querySelectorAll() and usi tarah agar mujhe ek element ko access krna hota h to me querySelector() ka use krta hu.

// .innerHTML se hum elements ko get bhi kr skte hain aur set bhi kr skte hain.
// .textContent and .innerText ye dono property .innerHTML ki tarah get and set krte hain elements ko.

// Creating new element/content :- .createElement(); using this method hum element ko create krte hain.
// Adding new element/content :- .appendChild(); is method se hum log jo create krte hain element ko use add krte hain using this method.
// Examle :-
// content;
// <p class = "paraClasss text-lg font-bold false">DAta Structure</p>  // ye pehele se hain isi me new element ko add krna hain to niche hum usi method ka use krke add krte hain.
// let newPara = document.createElement('p');
// ek pagargraph element create ho jayega = <P></P>
// than ,  content.appendChild(newPara);
// content;
// <p class = "paraClasss text-lg font-bold false">DAta Structure
// "Data Structure"
// <p></p> (jo new element create krte hain wo last me hi add hota hain)
//</p>

// this is not a good way
// how to create text node :- document.CreateTextNode();
// let newPara = document.CreateElement('p');
// let textPara = document.CreateTextNode();
// newPara = appendChild(textPara);
// content.appendChild(newPara);
// this is the good way
// let newPara = document.CreateElement('p');
// newPara.textContent = 'I am the text';
// content.appendChild(newPara);

// hum apne hisab se positioning krne ke liye ek new method hain :- insertAdjecent HTML()
// it has to be called 2 arguments :-
// 1. location/position , jaha tum insert krna chahte ho element ko.positioning me chaar value exist krti hain. 1.beforeBegin 2.afterBegin 3.beforeEnd 4.afterEnd
// 2. HTML text/content , isse hum ye batate hain ki kis element ko insert krna hain.

// Example :- 
// let textToAdd = '<h3> abcd </h3>
// let newText = document.createElement('h3');
// newText.textContent = 'ABCD';
// content.insertAdjacentElement('beforeBegin',newText);
// <h3>ABCD</h3>

// Remove :- .removeChild();  ye exactally opposite hain appendChild() ke.
// hame do chij pta hona chahiye element ko remove krne ke liye , 1. hame uska parent element pata hona chahiye (parent element) 2. ye btao kis element ko remove kr rhe ho (the child to remove).
// Example :-
{/* <div id="new">
      <p id="p1">Tutorix</p>
      <p id="p2">Tutorialspoint</p>
   </div>
   <script>
      var parent = document.getElementById("new");
      var child = document.getElementById("p1");
      parent.removeChild(child);
   </script> */}

// javascript ka use krke kaise styling krte hain css me :-
// .style, .cssText, .setAttribute(), .className, .classList and many more ways to styling in css 

// 