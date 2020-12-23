// *** Use a for Loop (Hint: ex1 is what you will be using to manipulate the lorem ipsum text) ***

let ex1 = document.getElementById("ex1");

// TODO: create a for loop that repeat 5 times and put this code inside of its scope:

// ex1.insertAdjacentHTML('afterbegin', `<p>${i} Lorem ipsum dolor sit amet consectetur, adipisicing elit!</p>`);

// --------------------------------------------------------------------------------------------------------------------
// *** Use a for/in Loop ***

let p1 = {
    firstName: "Jon",
    lastName: "Smith",
    age: 37,
    isMarried: false
};
let c1 = {
    year: 1997,
    make: "Ford",
    model: "Mustang"
};
let o1 = {
    orderID: 1,
    orderName: "John Doe",
    total: 9.99
};

let a1 = document.getElementById("answer1");
a1.innerHTML = "<h4>Properties</h4>";
/*TODO: Create a for/in Loop here */ {
    a1.insertAdjacentHTML('afterend', `<p>${x}</p>`);
}


let a2 = document.getElementById("answer2");
a2.innerHTML = "<h4>Properties</h4>";
/*TODO: Create a for/in Loop here */ {
    a2.insertAdjacentHTML('afterend', `<p>${y}</p>`);
}


let a3 = document.getElementById("answer3");
a3.innerHTML = "<h4>Properties</h4>";
/*TODO: Create a for/in Loop here */ {
    a3.insertAdjacentHTML('afterend', `<p>${z}</p>`);
}

// --------------------------------------------------------------------------------------------------------------------
// *** Use a for/of Loop ***
// --------- Array ----------
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a4 = document.getElementById("answer4");
let text = "";
a4.innerHTML = "<h4>Values</h4>";
/*TODO: Create a for/of Loop here */ {
    text += `${a}, `;
}
text = text.slice(0, -2); // -2 because we're cutting off the empty space AND the comma
a4.innerHTML = text;

// --------- Set ----------
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // A value in the Set may only occur once (you will see so in the output)
mySet.add(2); // A value in the Set may only occur once (you will see so in the output)
mySet.add("three");
mySet.add({ name: "John Doe", age: 24 });

let a5 = document.getElementById("answer5");
let txt = "";
a5.innerHTML = "<h4>Values</h4>";
/*TODO: Create a for/of Loop here */ {
    txt += `${b}, `;
}
txt = txt.substring(0, txt.length - 2);
a5.innerHTML = txt;

// --------- Map ----------
let myMap = new Map()
myMap.set('key', " Value");
myMap.set(1, " one");
myMap.set('John', { phone: "123-456-7890", address: "456 S 2nd Dr" });
myMap.set("Jane", { phone: "555-555-5555", address: "111 Easy St" });

let a6 = document.getElementById("answer6");
let str = "";
a6.innerHTML = "<h4>Values</h4>";
/*TODO: Create a for/of Loop here */ {
    str += `${c}<br>`;
}
str = str.slice(0, -2);
a6.innerHTML = str;


