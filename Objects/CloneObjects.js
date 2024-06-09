let user = {
    name: "Igor",
    email: "Igor@gorb.com",
    age: 32,
    isAdmin: true
}

let userClone = Object.assign({}, user);

console.log(userClone);

userClone.name = "Vasja";

console.log("user " + JSON.stringify(user));
console.log("user Clone" + JSON.stringify(userClone));
