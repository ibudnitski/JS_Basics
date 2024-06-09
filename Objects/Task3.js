let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = (obj) => {
    let sum = 0;
    for (const objKey in obj) {
        sum += obj[objKey];
    }
    return sum;
}

console.log(sum(salaries));