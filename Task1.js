let user = {};
user.name = "John";
console.log(user);
user.lastName = "Smith";
console.log(user);
// user["name"] = "Pete";
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);