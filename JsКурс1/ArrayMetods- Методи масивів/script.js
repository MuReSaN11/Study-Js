const numbers = [23, 54, 2, 5];
let result;
// ^ Довжина масиву
result = numbers.length;

// ^ Для обєкту Array(Перевіряєм чи значення всередині змінної є масивом)
result = Array.isArray(numbers);

// ^ Ми можемо отримати індекс значення масиву
result = numbers.indexOf(54)

// & push(); pop(); 
// ^ добавляє елемент в масив
result = numbers.push(7);
// ^ Удаляє останній елемент масиву
result = numbers.pop();
result = numbers.pop();

// & unshift(); shift();
// ^ Добавляє елемент на початок масиву
result = numbers.unshift(3);
// ^ Удаляє елемент з початку масиву
result = numbers.shift();

// & Методи push(); i unshift(); можуть добавляти декілька елементів
result = numbers.push(1, 2, 3, 7);
result = numbers.unshift(5, 4, 3, 2, 1);

// ^ Зрощування splice/використовується для того щоб удалити елементи з масиву за індексом де перше значення то індекс елементу а друге то кількість елементів для видалення
result = numbers.splice(0, 1);
result = numbers.splice(2, 3);



// ^ reverse - використовується для того щоб розвернути елементи масиву
result = numbers.reverse();


// ^ sliсе - використовується для того щоб вирізати частину масиву
result = numbers.slice(1, 4);

//^ concat - зєднує
result = numbers.concat(result);

console.log(result);
console.log(numbers);



