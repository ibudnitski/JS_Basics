let user = {
    name: 'Igor',
    lastName: 'Budnitski',
    email: 'Igor@gorb.com',
    age: 32,
    isActive: true,
}

for (const userKey in user) {
    console.log(userKey + " - " + user[userKey]);
    console.log(typeof user[userKey]);
}