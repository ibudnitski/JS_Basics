let user = {
    name: "Igor",
    age: 35,
    sayBye(){
        console.log("Bye Bye!");
    }
}

user.sayHi = function () {
    console.log(`Hello, my name is ` + this.name)
}

user.sayHi();

user.sayBye();

function sayName(){
    console.log(this.name);
}

sayName();