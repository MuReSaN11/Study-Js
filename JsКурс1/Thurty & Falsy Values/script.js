// ! Правдиві і неправдиві значення

// ! Неправдиві значення/folsy values
// ! 0, '', undefined, null, NaN - false
console.log("Неправдиві значення:");
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// ! Всі інші значення будуть правдивими
console.log("Правдиві значення:");
console.log(Boolean(32));
console.log(Boolean('hELLO'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(3.5));

// ^0 прирівнявся до Falsy
const age = 0;
if (age) {
    console.log('Burn');
}
else {
    console.log('Not are burn');
}


let weight = prompt('Weight');
if (weight) {
    console.log('Weight is defined')
} else {
    console.log('Weight is not defined');
}