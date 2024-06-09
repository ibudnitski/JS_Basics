// let user = new Object(); // empty object
// let user = {}; // object user, that is empty

let user = {
    name: 'Igor',
    age: 36,
    "like cats" : true,
}

console.log(user.name);
console.log(user.age);

user.isAdmin = true; // adding the property to the object

console.log(user.isAdmin);

delete user.isAdmin; // removing the property from object

console.log(user["like cats"]);

let key = "like cats";

console.log(user[key]);

let name  = prompt("Please enter your name", "name");

alert(user.name);

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
    [fruit]: 5, // имя свойства будет взято из переменной fruit
};

alert(bag.apple); // 5, если fruit="apple"


