const countValue = document.querySelector('#counter');

function increment() {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // Update the value
    value += 1;
    // set the value onto UI
    countValue.innerText = value;
};

const decrement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // Update the value
    value -= 1;
    // set the value onto UI
    countValue.innerText = value;
};

// dono function use kr skte hain isme normal function and arow function and dono upar use kiye hain.