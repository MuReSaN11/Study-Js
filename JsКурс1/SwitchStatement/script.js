//! Використовується коли багато варіацій. Наприклад світлофор(аналогія/або заміна IF ELSE)

const color = 'red';


switch (color) {
    case 'green':
        console.log("Go!");
        break; //&Кінцева точка виконання варіації
    case 'yellow':
        console.log("Ready!");
        break;//&Кінцева точка виконання варіації
    case 'red':
        console.log("STOP!");
        break;//&Кінцева точка виконання варіації
    default:
        console.log("Incorrect");
}

// ! Switsh statement
const weekday = prompt('Day?');
switch (weekday) {
    case 'monday':
        console.log("day1");
        break;
    case 'tuesday':
        console.log("day2");
        break;
    case 'wednesday':
        console.log("day3");
        break;
    case 'thursday':
        console.log("day4");
        break;
    case 'friday':
        console.log("day5");
        break;
    case 'saturday':
        console.log("day6");
        break;
    case 'sunday':
        console.log("day7");
        break;
    default:
        console.log("No day");

}