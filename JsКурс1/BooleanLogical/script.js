// ! Логічні оператори булін значеннь
// ! AND, OR, NOT
console.log('And');

// ^ AND(і) -&&
console.log(true && true);
console.log(true && false);
console.log(false && false);


console.log('Or');

// ^ OR(Або) -||
console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log('Not');

// ^ NOT(не) -!
console.log(!true);
console.log(!false);


// ^AND
const hasMoney = false;
const isAdult = true;

if (hasMoney && isAdult) {
    console.log('You can by ');
} else {
    console.log('You can not by');
}

//^OR
const tea = true;
const coffe = false;

if (tea || coffe) {
    console.log('You drink ');
} else {
    console.log('You ded ');
}

// ^NOT
const hasMoney2 = true;
const isAdult2 = true;
const isComplateDrink = true;
// console.log(!hasMoney2);

if (hasMoney2 && isAdult2 && !isComplateDrink) {
    console.log('You can by ');
} else {
    console.log('You can not by ');
}
