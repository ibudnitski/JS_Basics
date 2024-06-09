let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let multiplyNumeric = (menu) => {
    for (const menuKey in menu) {
        if (typeof menu[menuKey] === "number"){
            menu[menuKey] *= 2;
        }
    }
}

console.log(menu);
multiplyNumeric(menu);
console.log(menu);