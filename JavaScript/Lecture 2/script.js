//         -: Object :-
// console.log('chaliye shuru krte hain');

// Object create :-

let rectangle = {
  length: 1,
  breadth: 2,

  draw: function () {
    console.log("drawing rectangle");
  },
};

// factory function

function createRectangle() {
  let rectangle = {
    length: 1,
    breadth: 2,

    draw() {
      console.log("drawing rectangle");
    },
  };
  return rectangle;
}
