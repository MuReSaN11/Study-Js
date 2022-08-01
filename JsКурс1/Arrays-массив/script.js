const color1 = 'red';
const color2 = 'orange';
const color3 = 'yellow';
const color4 = 'green';
const color5 = 'blue';
const color6 = 'indigo';
const color7 = 'violet';

// ! Масиви/створення масиву

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(rainbowColors[6]);

// ^ Замінити елемент масиву
rainbowColors[5] = 'dark';
// ^ Добавити новий елемент масиву
rainbowColors[8] = 'bruwn'
// ^ Добавити новий елемент масиву останній номером
rainbowColors[rainbowColors.length] = 'indigo';
console.log(rainbowColors);

// & Можемо створити і залишити масив пустим
const stringNumbers = [];

stringNumbers[0] = 'one';
stringNumbers[1] = 'two';
stringNumbers[2] = 'three';

console.log(stringNumbers);

// ^ Можна створити масив за допомогую функції Array
const stringNumbers1 = new Array
    ('one', 'two', 'three');
console.log(stringNumbers1);

// ^ В основному масиви використовують для зберігагння чисел
const numbers = [35, 45, 5, 55, 83];
console.log(numbers);

// ! В Java Script масиви можуть зберігати в собі всі типи даних
const anyItems = [4, true, 'Yes', new Date()];
console.log(anyItems)
