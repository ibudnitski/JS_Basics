const _ = require('lodash');

let user = {
    name: "Igor",
    email: "Igor@gorb.com",
    age: 32,
    isAdmin: true,
    metrics: {
        weight: 82,
        height: 176,
    }
}

let cloneUser = _.cloneDeep(user);

cloneUser.name = "Herbert";

console.log(JSON.stringify(user));
console.log(JSON.stringify(cloneUser));