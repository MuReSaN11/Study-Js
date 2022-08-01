// //Conversion to string

// // //string()

let x = String(111);
// // x = String(2 + 2);
// x = String(true);
// x = String(new Date());
// x = String(['one', 'two', 'three']);



// //toString()

x = (35).toString();




console.log(x);
console.log(typeof x);
console.log(x.length);



// // Conversion to number


// //Number

let y = Number('5.1234646877577');
// y = Number(true);
// y = Number(null);
// y = Number('text');
// y = Number([1, 2, 3])



//parseInt()

// розпізнати ціле число

// y = parseInt('123');

// Розпізнати десятичне число
y = parseFloat('123.230');

console.log(y);
console.log(typeof y);
console.log(y.toPrecision(5));



//Конкетинація негласне переобразування даних
// const x = true;
// const y = '3';
// const z = x + y;


// console.log(z);
// console.log(typeof z);