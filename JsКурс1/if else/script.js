// const age = prompt('You age?');
// const isAdult = age >= 18;

// ! в '(age >= 18)' пишеться умова
// if (isAdult) {
//     console.log('You can watch this video');
// }
// else {
//     // console.log('You are young');
//     const yearsLeft = 18 - age;
//     console.log(`You are too young. You can watch this video after ${yearsLeft} years later`)
// }

// !Присвоєння змінній значення if else

// const birthYear = prompt('You birdDay? ');
// const yearNow = 2022;
// const age = yearNow - birthYear;
// let answer;

// if (age >= 16) {
//     answer = 'Yes';
// }
// else {
//     answer = 'Now';
// }

// console.log(`Am I adult? - ${answer}`);
// !
// !
// ! Множинний if else statemant(світлофор)

const color = 'red';
if (color === 'green') {
    console.log('Go!');
}
else if (color === 'yellow') {
    console.log('Get ready!');
}
else if (color === 'red') {
    console.log('STOP!!!');
}
else {
    console.log('Incorrect color');
}