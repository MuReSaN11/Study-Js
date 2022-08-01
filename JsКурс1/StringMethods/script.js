let result;
const firstName = 'Maks';
const lastName = 'Kaminskiy';
const space = ' ';
const age = 25;
const greating = 'Hey There';



// ^Конкатинация
result = firstName + space + lastName;

result = greating + '! My name is' + space + firstName + space + lastName + ". I'm " + age + ' years old.';



//!Properties and methods

// ^Довжина
result = 'Hello!'.length;
result = firstName.length;

// ^Метод канкат concat()
result = firstName.concat(space, lastName);
result = greating.concat('! My name is', space, firstName, space, lastName, '. I\'m ', age, ' years old.');

// ^ Переводить букви у верхній регістр
result = result.toUpperCase();

// ^Переводить у нижній регістр
result = result.toLowerCase();

// ^Пошук кожного елемента за індексом
result = firstName[0];

// ^Показує індекс по якому знаходиться "символ чи послідовність символів"
result = 'Hello'.indexOf('o');
// ^Знайти останній вказаний символ за індексом
result = 'Hello lol'.lastIndexOf('l');
// ^Знайти останню послідовність символів за індексом
result = 'Hello lol'.lastIndexOf('lo');
// & Якщо не знайдено даний символ то виводиться значення "-1"
result = firstName.indexOf('z');


// Схожий метод
result = firstName.charAt(1);
// & Щоб отримати індекс останнього символу
const longString = 'Hi, I\'m long string';
result = longString.charAt(longString.length - 1);


// ^substring()  - підстрока( використовується для вилучення символів з строки)
result = greating.substring(4, 9);

// ^slice() -  використовується для вилучення останніх символів
result = greating.slice(-5);

// ^split() - Розділяє строку на декілька строк(В результаті отримаєм масив)
result = longString.split(' ');
const colors = 'red, orange, green, blue';
result = colors.split(' ');

//^ replace() - Заміняє одну стрічку на іншу
result = colors.replace('red', 'yellow');

// ^ includes() - повертає значення 'true' і'folse'
result = colors.includes('no color in string');

console.log(result);