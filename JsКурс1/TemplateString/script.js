const brand = 'BMW';
const model = 'X5';
const color = 'black';
const year = '2020';

let carHtml;


// ^Динамічний HTML
//!Старий спосіб до ЕС6

// carHtml = '<h3>' + 'Car Description' + '<h3>' + '<ul>' +
//     '<li>Brand:' + brand + '</li>' +
//     '<li>Model:' + model + '</li>' +
//     '<li>Color:' + color + '</li>' +
//     '<li>Year:' + year + '</li>' + '</ul>';

// !Новий спосіб Template Literals(Шаблонні строки)

carHtml = `
<h3>Опис автомобіля</h3>
<ul>
<li>Brand:${brand}</li>
<li>Model:${model}</li>
<li>Color:${color}</li>
<li>Year:${year}</li>
<li>Doors:${getDoorsNumber()}</li>

<!--^//^Тернарний оператор(скорочена запись 'if', 'else')-->
<li>Tax:${year < 2000 ? '20%' : '10%'}</li>

</ul>

`


function getDoorsNumber() {
    return 4;
}

document.body.innerHTML = carHtml;