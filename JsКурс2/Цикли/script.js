// ! while, do while, for, for of, for in- цикли
// ! Складається з ітератора(скільки раз повторювалось), умова, збільшує ітератор

// & Ітератор
// let i = 10;

// *Спочатку потрібно вказати умову  
// while (i--) {
//     // ^Тіло циклу яке буде виконуватися поки в круглих скобках(ітератор) буде true
//     console.log(i);
// }


// *Виконує дію а потім перевіряє умову
// do {
//     console.log('action');
// } while (i > 0);
// ! for
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {

//     res += str[i] + '*';
// }

// console.log(res);




let colors = ['red', 'black', 'green', 'orange'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    colors[i] = colors[i].toUpperCase();
}
console.log(colors);