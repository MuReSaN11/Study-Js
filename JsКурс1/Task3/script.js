
let height;
let kg;
let result;
let index;
height = prompt('Enter you m');
console.log('You meters ' + height);

kg = prompt('Enter you kg');
console.log('You massa ' + kg);

result = kg / Math.pow(height, 2);
// result = greating.substring(4, 9);
console.log(typeof result);
index = result >= 25 ? 'true' : 'false';
alert('Ви маєте лишню вагу ' + result + index);



// let x = 2;
// x = Math.pow(2, 2);
// console.log(x);