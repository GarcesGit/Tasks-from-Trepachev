"use strict";



//ВРЕМЯ ВРЕМЯ ВРЕМЯ ВРЕМЯ ВРЕМЯ ВРЕМЯ ВРЕМЯ TIME TIME TIME TIME TIME TIME TIME TIME TIME TIME E TIME TIME TIME TIME TIME TIME TIME TIME



let date = new Date();
console.log(date.getFullYear()); // год
console.log(date.getMonth());    // месяц
console.log(date.getDate());     // день
console.log(date.getHours());    // часы
console.log(date.getMinutes());  // минуты
console.log(date.getSeconds());  // секунды
console.log(date.getDay());      //день недели вс=0
console.log(date.getTime());// timestamp


function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
let date = new Date();
console.log(
	addZero(date.getFullYear()) + '-' +
	addZero(date.getMonth() + 1) + '-' +
	addZero(date.getDate())
);//получим дату в нужном нам формате 2023-01-05


function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
let date = new Date();
console.log(
	addZero(date.getHours()) + ':' +
	addZero(date.getMinutes()) + ':' +
	addZero(date.getSeconds()) + ' ' +
	addZero(date.getDate()) + '.' +
	addZero(date.getMonth() + 1) + '.' +
	addZero(date.getFullYear())

);//22:33:46 05.01.2023
//получение текущего времени и даты


let str = '2025-12-31';
let arr = str.split('-');
let res = arr[2] + '/' + arr[1] + '/' + arr[0];
console.log(res); // получим строку '31/12/2025'
//ИЛИ
let str2 = '2025-12-31';
let res2 = str2.split('-').reverse().join('/');
console.log(res2); // получим строку '31/12/2025'
//поменяем формат даты на другой


let date = new Date();
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);
//получение дня неделя текстом


let date = new Date();
let month  = date.getMonth();
let months = [	'янв', 'фев', 'мар', 'апр', 'май',
		'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
console.log(months[month]);
//получение месяца текстом


let date = new Date(1975, 7, 19, 12, 59, 59); // август
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);
//вт //день недели в эту дату


let date = new Date(2025, 0, 1, 23, 59, 59);
console.log(date.getTime());
//1735750799000 timestamp = миллисекунд с 01.01.1970


let now  = new Date();
let date = new Date(1975, 7, 19);
let diff = now.getTime() - date.getTime();
console.log(diff / (1000 *60 *60 *24 *30 *12));
// количество лет от даты до сегодня


let now  = new Date();
let date = new Date(2015, 4, 25, 12, 59, 59);
let diff = now - date;
console.log(diff);
// количество миллисекунд от даты до сегодня


let now = new Date();
let newYear = new Date(2024, 0, 1);
let days = newYear-now;
console.log(days/(1000 *60 *60 *24));
//сколько дней осталось до нового года.


let date = new Date(2018, 0, 1, 100, 100, 100);
console.log(date);
// js преобразует дату в корректную 2018-0- 5- 5- 41-40


let date = new Date(2020, 3, 0);//нулевой день апреля = 31 марта
console.log(date.getDate());
// количество дней в марте


let date = new Date(2025, 5, 0);
console.log(date.getDay());
//нулевой день июня = 31 мая (4-31) = сб


function getLastDay(month) {
	let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		return lastDays[month];
}
		console.log(getLastDay(0));
// количество дней в месяце (0 январе), косяк с февралем если високосный год


let date = new Date(2020, 2, 0);
if (date.getDate() == 29) {
	console.log('високосный');
} else {
	console.log('обычный');
}
console.log(date.getDate());
// выведет 29, тк 2020 год - високосный


let date = new Date(2020, 2, 0);
function isLeap() {
if (date.getDate() != 29) {
	console.log(false);
} else {
	console.log(true);
}
}
isLeap();
//true високосный или нет // !!!! OK


let date = new Date(2020, 2, 0);
function isLeap() {
if (date.getDate() == 29) {
	console.log(date.getFullYear()-4);
}
}
isLeap();
//предыдущий високосный год !!!! OK


let year  = 2025;
let month = 0;
let day   = 32;
let date = new Date(year, month, day);
if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
	console.log('корректна');
} else {
	console.log('некорректна');
}
//Проверка корректности даты


function checkDate(year, month, day) {
	let date = new Date(year, month, day);
	if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
	return true;
} else {
	return false;
}
}
console.log(checkDate(2025, 1, 28));
//Проверка корректности даты функцией


let now  = new Date(); // получаем 	текущий момент
let date = new Date(now.getFullYear(), 11, 31); // получаем дату: текущий год-03-08
console.log(date.getDay()); //день недели этой даты


let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, 1);
console.log(date.getDay());
//день недели первого числа предыдущего месяца


let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 3,
now.getDate());
console.log(date.getFullYear());F
//какой год был 3 месяца назад.


let date1 = new Date();
let date2 = new Date(2023, 0, 31, 23, 59, 59);
console.log((date1 - date2)/ (1000 *60 *60 *24)); // разность в днях


let now  = new Date();
let year = now.getFullYear();
for (let month = 0; month <= 11; month++) {
	let date = new Date(year, month, 1);
		if (date.getDay() == 0) { //если равно вс
		console.log(year + '-' + month + '-1');
	}
}//все первые числа месяцев текущего года, которые воскресенья
//2023-0-1 2023-9-1 янв и окт


function CalculateWeekendDays(fromDate, toDate){
    let weekendDayCount = 0;
    while(fromDate < toDate){
        fromDate.setDate(fromDate.getDate() + 1);
        if(fromDate.getDay() === 0 || fromDate.getDay() == 6){
            ++weekendDayCount ;
        }
    }
    return weekendDayCount ;
}
console.log(CalculateWeekendDays(new Date(2022, 11, 31), new Date(2023, 0, 31)));
//сколько выходных в периоде


let start = new Date(2023, 0, 1),
    finish = new Date(2023, 0, 31),
    dayMilliseconds = 1000 * 60 * 60 * 24;
let weekendDays = 0;
while (start <= finish) {
    let day = start.getDay()
    if (day == 0 || day == 6) {
        weekendDays++;
    }
    start = new Date(+start + dayMilliseconds);
}
console.log(weekendDays);
//сколько выходных в периоде


let now  = new Date();
let date = new Date(2023, 0, 6, 0, 0, 0);
let diff = now - date;
console.log(diff/(1000*60*60));
// количество часов от даты до сегодня


let now  = new Date();
let year = now.getFullYear();
for (let month = 0; month <= 11; month++) {
	let counter = 0;
	let date = new Date(year, month, 13);
		if (date.getDay() == 5) { //если равно пт
			console.log(counter);
			counter++;
}
}//Определите, сколько пятниц 13-е в текущем году.


let now  = new Date();
for (let year = 0; year <= 25; year++) {
	let counter = 0;
	let date = new Date(year, 0, 1);
		if (date.getDay() == 0 || date.getDay() == 6) {
			console.log(counter);
			counter++;
}
}//сколько раз 1 января попадало на выходной день за период
// РАБОТАЕТ НО КРИВОЙ - ПЕРЕДЕЛАТЬ


let date1 = new Date(2020, 1, 1);
let date2 = new Date(2019, 1, 1);
console.log(date1 > date2);
// выведет true / сравнение дат


let date1 = '2020-11-31';
let date2 = '2020-12-01';
if (date1 > date2) {
	console.log('date1 is bigger' )
} else {
	console.log('date2 is bigger');
};
// какая дата больше


let date = '08-20';
if (date >= '01-01' && date <= '03-08') {
	console.log('1 период');
}
if (date >= '03-09' && date <= '06-17') {
	console.log('2 период');
}
if (date >= '06-18' && date <= '12-31') {
	console.log('3 период');
}
//в каком периоде дата / знак Зодиака



//DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM  DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM



<input id="button" type="submit">
<script>
let button = document.querySelector('#button');
console.log(button);
</script>
//найдем нашу кнопочку и запишем ссылку на нее в переменную

<div id="block">
	<p>1</p>
	<p>2</p>
</div>
<script>
let elem = document.querySelector('#block p');
console.log(elem);
</script>
//ссылка на  первый <р> из двух


let elem = document.querySelector('p.www');
console.log(elem);
//ссылка на html <p class="www">text</p>


<input id="button1" type="submit">
<script>
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
console.log('1');
});
</script>
//кнопка - по нажатию на экран  выведется текст


let button1 = document.querySelector('#button1');
button1.addEventListener('click', func1);
function func1() {
	alert('1');
}
let button2 = document.querySelector('#button2');
button2.addEventListener('click', func2);
function func2() {
	alert('2');
}//Именованные функции обработки событий


let elem1 = document.querySelector('#elem1');
elem1.addEventListener('click', func);
let elem2 = document.querySelector('#elem2');
elem2.addEventListener('click', func);
let elem3 = document.querySelector('#elem3');
elem3.addEventListener('click', func);
function func() {
  console.log('message');
}//Одна функция для трех событий


let button = document.querySelector('#button');
button.addEventListener('click', func1);
button.addEventListener('click', func2);
function func1() {
	alert('1');
}
function func2() {
	alert('2');
}//Две функции для одного события


let button = document.querySelector('#button');
button.addEventListener('mouseover', function() {
	console.log('попал');
});
button.addEventListener('mouseout', function() {
	console.log('мимо');
});
button.addEventListener('dblclick', function() {
	console.log('убил');
});
/*привяжем к одному элементу реакцию
на наведение, на уход курсора и на двойной клик*/


<p id="elem">text</p>
<input id="button1" type="submit">
<script>
let elem = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  console.log(elem.textContent);//Прочитаем текст тега
});
elem.textContent = 'поменяли';// Поменяем текст тега
console.log(elem.textContent = 'другой текст');
</script>
//по клику на кнопку запишите в абзац новый текст


<input id="button1" type="submit">
<p id="elem"> ФЮРКУА = a.href </p>
<script>
let p = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  console.log(p.textContent + '!');
  });
</script>
//По нажатию запишите в конец текста абзаца знак !


<p1>1</p1>
<p2>2</p2>
<input id="button1" type="submit">

<script>
let p1 = document.querySelector('p1');
let p2 = document.querySelector('p2');
let num1 = +p1.textContent;
let num2 = +p2.textContent;
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  let sum = num1 + num2;
  console.log(sum);
});
</script>
//По нажатию выведите на экран сумму хранящихся чисел
//!!!! OK


<p1>1</p1>
<p2>2</p2>
<p3>3</p3>
<div> </div>
<input id="button1" type="submit">

<script>
let div = document.querySelector('div');
let p1 = document.querySelector('p1');
let p2 = document.querySelector('p2');
let p3 = document.querySelector('p3');
let num1 = +p1.textContent;
let num2 = +p2.textContent;
let num3 = +p3.textContent;
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  let sum = num1 + num2+ num3;
  div.textContent = sum;
});
</script>
//По нажатию запишите в текст дива сумму чисел.
//!!!! OK


<p1>1</p1>
<input id="button1" type="submit">

<script>
let p1 = document.querySelector('p1');
let num1 = +p1.textContent;
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  p1.textContent = num1 + 1;
});
</script>
/*По нажатию прибавьте к значению абзаца единицу и
запишите полученное число обратно.*/
//!!!! OK


<p id="elem"><b>text</b></p>
<script>
let elem = document.querySelector('#elem');
console.log(elem.innerHTML); //Прочитаем текст
elem.innerHTML = '<i> другой текст </i>'; //Поменяем текст
</script>


<input id="elem" type="text">
<script>
let elem = document.querySelector('#elem');
console.log(elem.id);   // выведет 	'elem'
elem.type = 'submit'; //изменили "text" на 'submit'
console.log(elem.type); //
</script>
//получать/изменить атрибуты тегов


<input id="elem" type="email">
<input id="button1" type="submit">
<script>
let elem = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  console.log(elem.type = 'submit');
});
</script>
//По нажатию поменяйте содержимое атрибута type


<a id= "link" href="http://code.mu">  Учебник </a>
<p id="elem">text</p>
<input id="button1" type="submit">
<script>
let a = document.querySelector('#link');
let p = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  console.log(p.textContent=a.href);
  });
</script>
//по нажатию выведите в абзац содержимое атрибута href ссылки.
//OK
console.log(a.textContent + '('+ a.href + ')');
/*по нажатию добавьте в конец текста ссылки содержимое
ее атрибута href в круглых скобках.*/


<img id="berries" src="berries.jpg" alt="berries" >
<input id="button1" type="submit">
<p id="elem">text</p>
<script>
let img = document.querySelector('#berries');
let p = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  console.log(p.textContent=img.src);
  });
</script>
//по клику в абзац записался путь к картинке из ее атрибута src.
console.log(img.width = 300);
//По нажатию в атрибут width запишите значение 300.


<img id="berries" src="berries.jpg" alt="berries" width="300" >
<input id="button1" type="submit">
<p id="elem">text</p>
<script>
let img = document.querySelector('#berries');
let p = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  console.log(img.width = img.width * 2 );
  });
</script>
//по нажатию ширина картинки будет увеличиваться в 2 раза.


<img id="pictures" width="200" >
<input id="button1" type="submit">
<input id="button2" type="submit">
<script>
let img = document.querySelector('#pictures');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  console.log(img.src="berries.jpg");
});
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
  console.log(img.src="bee.jpg");
  });
</script>
/*По нажатию на первую кнопку запишите в атрибут src путь
 к первой картинке, а по нажатию на вторую - путь ко второй картинке.*/


 <input id = 'input1' value = "text">
 <input id = 'button1' type = "submit">
 <p1 id = 'p1'> </p1>
  <script>
 let input1 = document.querySelector('#input1');
 let button1 = document.querySelector('#button1');
 let p1 = document.querySelector('#p1');
 button1.addEventListener('click', function() {
   input1.value = 'Изабелла';
   p1.textContent = input1.value;
 });
 </script>
//По нажатию на кнопку запишите в абзац текст из инпута.


<input id = 'input1' value = "">
<input id = 'input2' value = "">
<input id = 'button1' type = "submit">

<script>
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  input2.value = input1.value**2;
});
</script>
/*В первый инпут пользователем вводится число. По нажатию
 запишите во второй инпут квадрат введенного числа*/


<input id = 'input1' value = "2">
<input id = 'input2' value = "3">
<input id = 'button1' type = "submit">

<script>
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let button1 = document.querySelector('#button1');
let buffer;
button1.addEventListener('click', function() {
  buffer = input1.value;
  input1.value = input2.value;
  input2.value = buffer;
});
</script>
/*По нажатию на кнопку запишите в первый инпут значение
второго инпута, а во второй инпут - значение первого.*/


<input id = 'input1' value = "">
<input id = 'input2' value = "">
<input id = 'input3' value = "">
<input id = 'input4' value = "">
<input id = 'input5' value = "">
<input id = 'button1' type = "submit">
<p1 id = 'p1'> </p1>

<script>
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');
let input5 = document.querySelector('#input5');
let button1 = document.querySelector('#button1');
let p1 = document.querySelector('#p1');
button1.addEventListener('click', function() {
  let buffer = input1.value +input2.value+input3.value+input4.value+input5.value;
  let arr = buffer.split('');
  let sum = 0;
  for (let elem of arr) {
  	sum += +elem;
  }
  p1.textContent = sum/arr.length;
});
</script>
/*В инпут вводятся числа. По нажатию на кнопку запишите
среднее арифметическое введенных чисел в абзац.*/


<input id = 'input1' value = 'text'>

<script>
let input = document.querySelector('#input1');
input.addEventListener('focus', function(){
  console.log(input.value = 1);
});
input.addEventListener('blur', function(){
  console.log(input.value = 2);
});
</script>
//По получению фокуса запишите в него число 1, а по потере фокуса - число 2.


<input id = 'input1' value = ''>

<script>
let input = document.querySelector('#input1');
input.addEventListener('blur', function(){
  console.log(input.value = input.value ** 2);
});
</script>
//вводится число. По потери фокуса выведите на экран квадрат этого числа.


<input id = 'input1' value = 'text'>

<script>
let input = document.querySelector('#input1');
input.addEventListener('focus', function(){
  console.log(input.value = '');
});
</script>
//По получению фокуса инпутом очистите содержимое этого инпута.


<div id="elem" class="aaa bbb ccc"></div>
<input id = 'button1' type = "submit">

<script>
let button1 = document.querySelector('#button1');
let div = document.querySelector('#elem');
button1.addEventListener('click', function(){
  console.log(div.className.split(' '));
});
</script>
//По нажатию на кнопку получите массив CSS классов дива.


<img id="image" src="avatar.jpg">

<script>
console.log(document.querySelector('#image').src);
</script>
//вместо введения переменной image - цепочка.


<input id="elem" value="text">

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('blur', function() {
	this.value = '!!!';
});
	console.log();
</script>
//по наступлению события Потеря фокуса поменяем текст инпута.


<input id = 'button1' type = "submit" value="1">

<script>
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  this.value = +this.value+1;
});
</script>
//по клику на кнопку значение увеличивалось на единицу.
//!!!! OK


<input id = 'input1' value = '2'>
<input id = 'input2' value = '3'>
<input id = 'input3' value = '4'>

<script>
let input1 = document.querySelector('#input1');
input1.addEventListener('blur', func);
let input2 = document.querySelector('#input2');
input2.addEventListener('blur', func);
let input3 = document.querySelector('#input3');
input3.addEventListener('blur', func);

function func() {
this.value = this.value**2;
}
</script>
//по потере фокуса в любом из инпутов возведите стоящее в нем число в квадрат.


<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>

<script>
let elems = document.querySelectorAll('p');
let sum = 0;
for (let elem of elems) {
	let text = +elem.textContent;
	if (text % 3 === 0) {
		sum += text;
	}
}
console.log(sum);
</script>
//найти абзацы кратными 3, и найти сумму их чисел.


<p class="www">text1</p>
<p class="www">text2</p>
<p class="www">text3</p>

<script>
let elems = document.querySelectorAll('.www');
for (let elem of elems) {
  elem.textContent = elem.textContent + '!';
	console.log(elem.textContent);
  }
</script>
/*получим массив этих абзацев, переберем их циклом и
в конец текста каждого абзаца добавим восклицательный знак*/


<p id = 'p'></p>
<p id = 'p'></p>
<p id = 'p'></p>
<input id = 'button1' type = "submit" value="Push">

<script>
let p = document.querySelectorAll('#p');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
for (let elem of p) {
  elem.textContent = 'text';
	console.log(elem.textContent);
}
});
</script>
/*По нажатию на кнопку установите текст каждого
 абзаца в значение 'text'*/


 <p id = 'p'>text</p>
 <p id = 'p'>text</p>
 <p id = 'p'>text</p>
 <input id = 'button1' type = "submit" value="Push">

 <script>
 let p = document.querySelectorAll('#p');
 let button1 = document.querySelector('#button1');
 button1.addEventListener('click', function() {
   for(let i=0; i<p.length; ){
		 let elem = p[i++];
       elem.textContent += i;
   }
 });
 </script>
 /*По нажатию на кнопку запишите в конец текста
 каждого абзаца его порядковый номер */


 <input id = 'input' value = "1">
 <input id = 'input' value = "2">
 <input id = 'input' value = "3">
 <input id = 'button1' type = "submit">
 <p id = 'p'> </p>

 <script>
 let input = document.querySelectorAll('#input');
 let button1 = document.querySelector('#button1');
 let p = document.querySelector('#p');
 button1.addEventListener('click', function() {
   let sum = 0;
   for (let elem of input) {
   	sum += +elem.value;
   }
   p.textContent = sum;
 });
 </script>
/*По нажатию на кнопку найдите сумму чисел из инпутов
и запишите эту сумму в текст абзаца.*/


<p>text1</p>
<p>text2</p>
<p>text3</p>

<script>
function func() {
	console.log(this.textContent +'!');
}
let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', func);
}
</script>
//по клику на абзац выводился текст этого абзаца +'!'


<input id = 'input' value = "1">
<input id = 'input' value = "2">
<input id = 'input' value = "3">

<script>
function func() {
	this.value = Number(this.value) + 1;
}
let inputs = document.querySelectorAll('#input');
for (let elem of inputs) {
	elem.addEventListener('blur', func);
}
</script>
//по потери фокуса в любом из инпутов выполнялась функция + 1.


<input id = 'input' value = "1">
<input id = 'input' value = "2">
<input id = 'input' value = "3">

<script>
let inputs = document.querySelectorAll('#input');
for (let elem of inputs) {
  elem.addEventListener('click', function() {
		console.log(Number(this.value) ** 2);
	});
}
  </script>
//В качестве обработчиков в цикле - анонимные функции.


<div>1</div>
<div>2</div>
<div>3</div>

<script>
let divs = document.querySelectorAll('div');
for (let div of divs) {
	div.addEventListener('click', function () {
  	this.textContent++;
  }
)};
  </script>
//по клику значение увеличивается на 1


<input id="button" type="submit">

<script>
let button = document.querySelector('#button');
button.addEventListener('click', func);
function func() {
	console.log('!!!');
	this.removeEventListener('click', func);
}
</script>
/*обработчик события срабатывал на первый клик,
а потом отвязывался от кнопки*/


<a id= "link" href="http://code.mu">  Учебник </a>
<input id="button1" type="submit">

<script>
let a = document.querySelector('#link');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', func);
function func() {
	a.textContent += '('+ a.href + ')';
  this.removeEventListener('click', func);
  };
</script>
/*По нажатию добавьте в конец текста ссылки содержимое ее
атрибута href в скобках, добавление лишь по первому нажатию.*/


<input id="button1" type="submit" value="1">

<script>
let button1 = document.querySelector('#button1');
button1.addEventListener('click', func);
function func() {
  if (button1.value < 10) {
  button1.value++;
} else {
  this.removeEventListener('click', func);
}
  };
</script>
//по клику значение увеличивалось на единицу до 10


<p>text1</p>
<p>text2</p>
<p>text3</p>

<script>
let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', func);
}
function func() {
	console.log(this.textContent+'!');
	this.removeEventListener('click', func);
}
</script>
//По нажатию на любой из абзацев добавьте ! лишь по первому нажатию.
//ТО ЖЕ с анонимной функцией, переделанной в именованное функциональное выражение
<p>text1</p>
<p>text2</p>
<p>text3</p>

<script>
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function func() {
		console.log(this.textContent);
		this.removeEventListener('click', func);
	});
}
</script>



<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>

<script>
let elems = document.querySelectorAll('li');
for (let elem of elems) {
	elem.addEventListener('click', function func() {
    if (this.textContent <10){
		this.textContent++;
  } else{
		this.removeEventListener('click', func);
  }
	});
}
</script>
/*по клику на любую li ее число увеличивалось на единицу
до 10 только по первому нажатию на нее.*/


<input id="elem" value="abcde">
<input id="elem2" class="www zzz">

<script>
let elem = document.querySelector('#elem');
let elem2 = document.querySelector('#elem2');

let value = elem.getAttribute('value');
let clas = elem2.getAttribute('class');

console.log(clas);//'www zzz'
console.log(value);//'abcde'
</script>
//получение  атрибутов тегов методом getAttribute


<input id="elem" >
<input id="elem2" >

<script>
let elem = document.querySelector('#elem');
elem.setAttribute('value', 'text');

let elem2 = document.querySelector('#elem2');
elem2.setAttribute('class', 'valid');
console.log(elem2);
</script>
//изменение атрибутов тегов методом setAttribute


<input id="elem" value="abcde">

<script>
let elem = document.querySelector('#elem');
elem.removeAttribute('value');
</script>
//удаление атрибутов тегов методом removeAttribute


<input id="elem" value="abcde">

<script>
let elem = document.querySelector('#elem');
console.log(elem.hasAttribute('value'));
</script>
//проверка атрибутов тегов методом hasAttribute


<input id="elem" value="abcde">

<script>
let elem = document.querySelector('#elem');
console.log(elem.hasAttribute('value'));
</script>
//проверка атрибутов тегов методом hasAttribute



<p id="elem" class="www ggg zzz"></p>

<script>
let elem = document.querySelector('#elem');
let length = elem.classList.length;
console.log(length);
</script>
//3 classList проверяет длину псевдомассива class


<p id="elem" class="www ggg zzz"></p>

<script>
let elem = document.querySelector('#elem');
let classNames = elem.classList;
for (let className of classNames) {
	document.write(className + '<br>');
}
console.log(elem.classList);
</script>
// classList выводит столбец классов элемента


<p id="elem" class="www ggg zzz"></p>

<script>
let elem = document.querySelector('#elem');
elem.classList.add('kkk');
console.log(elem.classList);
</script>
//classList.add добавляет классы элементу


<p id="elem" class="www ggg zzz"></p>

<script>
let elem = document.querySelector('#elem');
elem.classList.remove('www','ggg');
console.log(elem.classList);
</script>
//classList.remove удаляет классы элементу


<p id="elem" class="www ggg zzz"></p>

<script>
let elem = document.querySelector('#elem');
console.log(elem.classList.contains('sss'));
</script>
//classList.contains проверяет наличие класса элемента


<p id="elem" class="www ggg zzz"></p>

<script>
let elem = document.querySelector('#elem');
elem.classList.toggle('zzz');
console.log(elem.classList);
</script>
//classList.toggle удаляет/добавляет класс элементу


<div id="elem" >text</div>
<input id="button1" type="submit">

<script>
let elem = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', func);
function func() {
  elem.style.color = 'red';
  elem.style.width = '100px';
  elem.style.height = '100px';
  elem.style.backgroundColor = 'grey'
  elem.style.fontSize = '20px';
  elem.style.borderStyle = 'dotted';
  };
  console.log(elem);
</script>
//elem.style.xxx добавляет CSS стили элементам


//html
<button id="button">click me</button>
<div id="elem"></div>
//css
#elem {
	display: none;
	width: 200px;
	height: 200px;
	border: 1px solid green;
}
#elem.active {
	display: block;
}
<script>
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function() {
	elem.classList.toggle('active');
});
</script>
//по нажатию элемент будет то показываться, то скрываться


<div id="parent">
	<p>1</p>
	<p>2</p>
</div>

<script>
let parent = document.querySelector('#parent');
let text = parent.firstElementChild.innerHTML;
console.log(text);
</script>
//1 firstElementChild содержит первый дочерний элемент


<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
	<p>4</p>
	<p>5</p>
</div>

<script>
let parent = document.querySelector('#parent');
let elems = parent.children;

for (let elem of elems) {
	console.log(elem.innerHTML);
}
</script>

//переберем в цикле всех потомков элемента и выведем их содержимое


<ul id="parent">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>

<script>
let ul = document.querySelector('#parent');
ul.firstElementChild.style.color = 'red';
ul.lastElementChild.style.color = 'blue';
ul.style.color = 'green';
</script>
//стили для потомков элемента


<div id="parent">
	<p id="elem"></p>
</div>

<script>
let elem = document.querySelector('#elem');
let id = elem.parentElement.id;
console.log(id);
</script>
//получение родителя элемента


<div class="www" id="parent2">
	<div class="www" id="parent1">
		<p class="www" id="child"></p>
	</div>
</div>

<script>
let elem = document.querySelector('#child');
let parent = elem.closest('.www');
console.log(parent.id);
</script>
/*найдем родителей с классом www. получим сам элемент,
так как он сам имеет этот класс*/


<ul>
	<li>text1</li>
	<li>text2</li>
	<li id="elem">text3</li>
	<li>text4</li>
	<li>text5</li>
</ul>

<script>
let li = document.querySelector('#elem');
li.previousElementSibling.style.color = 'red';;
li.nextElementSibling.style.color = 'blue';
</script>
//стили для соседей элемента


<input id="elem" value="???">

<script>
let elem = document.getElementById('elem');
elem.value = '!!!';
</script>
//получить элемент страницы по его атрибуту id.


<p>elem 1</p>
<p>elem 2</p>
<p>elem 3</p>

<script>
let elems = document.getElementsByTagName('p');
for (let elem of elems) {
	elem.innerHTML = '!!!';
}
</script>
//получить элемент страницы по имени тега


<p class="www">elem 1</p>
<p class="www">elem 2</p>
<p class="www">elem 3</p>

<script>
let elems = document.getElementsByClassName('www');
for (let elem of elems) {
	elem.innerHTML = '!!!';
}
</script>
//получить элемент страницы по имени класса


<div id="parent">
	<p class="www">text</p>
	<p class="ggg">text</p>
</div>

<script>
let parent = document.querySelector('#parent');
let elems1 = parent.querySelectorAll('.www');
let elems2 = parent.querySelectorAll('.ggg');
console.log(elems2);
</script>
//получить элемент страницы по родителю


<div id="elem" data-num="1000"></div>

<script>
let elem = document.querySelector('#elem');
elem.dataset.num = 123;
console.log(elem.dataset.num);
</script>
//пользовательские атрибуты тегам


<div id="elem" data-text="str">text</div>

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
elem.textContent += elem.dataset.text;
});
console.log(elem.textContent);
</script>
/* textstr //по клику на див в конец его текста добавилось
содержимое его атрибута data-text*/
// ТО ЖЕ
<div data-num="1">text</div>
<div data-num="2">text</div>
<div data-num="3">text</div>
<div data-num="4">text</div>
<div data-num="5">text</div>

<script>
let divs = document.querySelectorAll('div');
for (let elem of divs) { // цикл до функции!
elem.addEventListener('click', function() {
  elem.textContent += elem.dataset.num; //добавляем = сложение
  });
}
</script>
//!!!! OK


<button id = 'button1'>Click</button>
<button id = 'button2'>Result</button>
<div data-num=""> </div>

<script>
let div = document.querySelector('div');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', function() {
  div.dataset.num++;
});
button2.addEventListener('click', function() {
  div.textContent = div.dataset.num;
});
</script>
//!!!! OK
/*кнопка считала кликов по ней, записывая их в пользовательский
атрибут.  по клику на другую кнопку выводится, сколько кликов
было сделано по первой кнопке.*/


<input id="elem" data-length="5">

<script>
let input = document.querySelector('#elem');
input.addEventListener('blur', function() {
  if (input.value.length != input.dataset.length ){
        alert("INCORRECT VALUE");
      }
});
</script>
//!!!! OK
/*по потери фокуса, если количество введенных символов не
совпадает с заданным, выводилось сообщение об этом.*/


<input id="elem" data-min="5" data-max="10">

<script>
let input = document.querySelector('#elem');
input.addEventListener('blur', function() {
  if (input.dataset.min > input.value.length ||
     input.dataset.max < input.value.length)
{
        alert("INCORRECT VALUE");
  }
});
</script>
//!!!! OK
/*по потери фокуса, если количество введенных символов не
 попадает в этот диапазон, выводилось сообщение*/


<div id="elem" data-product-price="1000" data-product-amount="5">
	товар яблоки
</div>

<script>
let div = document.querySelector('#elem');
div.addEventListener('click', function() {
  div.textContent += div.dataset.productPrice*
  div.dataset.productAmount
});
</script>// OK
/*по клику на див в конец его текста добавлялась стоимость покупки,
равная цене, умноженной на количество.*/


<div id="elem" data-num="1000" data-my-num="2000">
	</div>

<script>
let elem = document.querySelector('#elem');
console.log(elem.getAttribute('data-num'));    // выведет 1000
console.log(elem.getAttribute('data-my-num')); // выведет 2000
</script>
//К пользовательским атрибутам обращаться методами типа getAttribute


<p id = 'p' data-num="">text</p>
<p id = 'p' data-num="">text</p>
<p id = 'p' data-num="">text</p>

<script>
let p = document.querySelectorAll('#p');
for(let i=0; i<p.length; ){
    let elem = p[i++];
    elem.textContent += i;
    elem.setAttribute('data-num', i) ;
    console.log(elem.dataset.num);
    console.log(elem);
}
</script>
//!!!!!!!! OK
//каждому абзацу в атрибут data-num запишите номер  абзаца


<div id="elem"><!--сomm-->text <span> tag </span>
</div>

<script>
let elem = document.querySelector('#elem');
console.log(elem.firstChild);       // комментарий = первый дите
console.log(elem.firstElementChild);//тег span = первый дите-элемент
</script>
// получение узлов

<div id="elem"> <!--сomm--> text <span> tag </span> </div>

<script>
let elem = document.querySelector('#elem');
console.log(elem.childNodes[0]);
console.log(elem.childNodes[1]);
console.log(elem.childNodes[2]);
console.log(elem.childNodes[3]); //<span> tag </span>
for (let node of elem.childNodes) {
	console.log(node); //Все узлы
}
</script>
// получение узлов


<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
<script>
let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
	console.log(node.textContent);
}
</script>
// получение текста узлов


<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
<script>
let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
  node += node.nodeType;
	console.log(node);
}
</script>
// получение типа узлов


<ul>
	<li>2000</li>
	<li>2004</li>
	<li>2021</li>
	<li>2022</li>
	<li>2025</li>
	<li>2031</li>
</ul>

<script>

let ul = document.querySelector('ul');
let lis = ul.children;
let years6 = [];
let yearsSum = 0;

for (let li of lis) {
  let allYears = li.textContent;
    let arr = allYears.split('');

    let sum = 0;
    for (let i of arr) {
      sum += +arr[i];
    }
    if (sum == 6) {
      years6.push(allYears);
    }
}
    for (let elem of years6) {
    	yearsSum += +elem;
    }
console.log(years6);
console.log(yearsSum);
</script>
//!!!!!!!! OK
/*Получите года, сумма цифр которых равна 6.
Найдите сумму полученных годов.*/


button.addEventListener('click', function() {
	elem.innerHTML = '<b>'+ elem.innerHTML + '</b>';
});
//По клику на кнопку текст абзаца должен стать жирным


<input>
<input>
<input>
<button>click</button>

<script>
let button = document.querySelector('button');
let elems  = document.querySelectorAll('input');
let sum = 0;
button.addEventListener('click', function() {
  for (let elem of elems) {
    sum += +elem.value;
}
console.log(sum);
});
</script>
/*В инпуты вводятся числа. По клику на кнопку в консоль
должна вывестись сумма чисел из инпутов*/


<input id="inp1">
<input id="inp2">
<input id="inp3">
<button id="btn">click</button>

<script>
let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');
btn.addEventListener('click', function() {
	inp3.value = Number(inp1.value) + Number(inp2.value);
});
</script>
/*В первые два инпута вводятся числа. По клику на кнопку в
третий инпут должна вывестись сумма этих чисел*/


<input data-text="text1">
<input data-text="text2">
<input data-text="text3">
<button id="btn">click</button>

<script>
let inputs = document.querySelectorAll('input')
let button = document.querySelector('#btn')
button.addEventListener('click', function() {
	for (let input of inputs) {
		if (input.value === input.dataset.text) {
			input.classList.add('right')
		} else {
			input.classList.add('wrong')
		}
	}
  console.log(inputs);
});
</script>
/*По клику на кнопку нужно проверить, что текст в каждом инпуте
совпадает с текстом его data атрибута и добавить class*/


<input id="inp">

<script>
let inp = document.querySelector('#inp');
inp.addEventListener('blur', function() {
  let value = inp.value;
  let digits = String(value).split('');
	let sum = 0;
	for (let digit of digits) {
		sum += +digit;
	}
	console.log(sum);
});
</script>
/*В инпут вводится число. По потери фокуса в
консоль должна вывестись сумма цифр этого числа*/


<input value = 'text1'>
<input value = 'text2'>
<input value = 'text3'>
<button id="btn">click</button>

<script>
let inputs = document.querySelectorAll('input');
let button = document.querySelector('#btn');
let texts = [	'text1',	'text2',	'text3'];

button.addEventListener('click', function() {
  for (let input of inputs) {
	  for (let text of texts) {
			if (input.value === text) {
				input.classList.add('right')
      } else {
        input.classList.add('wrong')
        console.log(text);
}
}
console.log(input);
}
});
</script>

/*По клику на кнопку нужно проверить, что текст в каждом инпуте
совпадает с текстом его data атрибута*/
//ПОЧЕМУ right wrong ????????? из-за ЦИКЛА?
//272 #12 code.mu js


<input>
<input>
<p> чета </p>
<button> click </button>

<script>
let inputs = document.querySelectorAll('input');
let p = document.querySelector('p');
let button = document.querySelector('button');
let sum = 0;
button.addEventListener('click', function() {
  for (let input of inputs) {
    sum += +input.value;
  }
  p.textContent += sum;
});
</script>
//По нажатию числа инпутах , запишите их сумму в абзац.


<input>
<button> click </button>

<script>
let input = document.querySelector('input');
let button = document.querySelector('button');
let sum = 0;
let res = 0;
button.addEventListener('click', function() {
  let num = input.value;
  let figures = num.split(',');
  for (let i of figures) {
		sum += +i;
    res = sum/figures.length;
  }
  console.log(res);
});
</script>
//числа через запятую, найдите среднее арифметическое


<input id = input1 value = 'Акакий Акакиевич Башмачкин' >
<input id = input2 >
<input id = input3 >
<input id = input4 >
<button> click </button>

<script>
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');
let button = document.querySelector('button');

button.addEventListener('click', function() {
  let arr = input1.value.split(' ');
  input2.value = arr[0];
  input3.value = arr[1];
  input4.value = arr[2];
});
</script>
/*В первый инпут вводится ФИО через пробел.
запишите фамилию, имя и отчество в остальные 3 инпута.*/


<input id = input1 value = 'мое альтер эго' >
<button> click </button>

<script>
let input1 = document.querySelector('#input1');
let button = document.querySelector('button');
button.addEventListener('click', function() {
  let arr = input1.value.split(' ');
    for (let i =0; i< arr.length; i++) {
      arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    let result = arr.join(' ');
    input1.value = result;
}
});
</script>
/*по потери фокуса, введенные фамилия, имя и отчество стали
записанными с большой буквы (в этом же инпуте).*/


<input id = input1 value = 'войти в IT это омофоны' >
<button> click </button>

<script>
let input1 = document.querySelector('#input1');
let button = document.querySelector('button');
button.addEventListener('click', function() {
  let arr = input1.value.split(' ');
console.log(arr.length);
});
</script>
//узнайте количество слов в этом тексте.


<input id = input1 value = '31.12.2016' >
<button> click </button>

<script>
let input1 = document.querySelector('#input1');
let button = document.querySelector('button');

button.addEventListener('click', function() {
  let arr = input1.valueж
  let arr2 = arr.split('.').reverse().join('-');
  input1.value = arr2;
</script>
/*31.12.2016. По потери фокуса в этом же инпуте
 поставьте эту дату в формате 2016-12-31*/


 <input id = input1 value = 'ололо' >
 <button> click </button>

 <script>
 let input1 = document.querySelector('#input1');
 let button = document.querySelector('button');
  button.addEventListener('click', function() {
   let arr = input1.value;
   let arr2 = arr.split('').reverse().join('');
     if (input1.value === arr2) {
     console.log('палиндром');
 }
 });
  </script>
//проверьте слово - читается с начала и с конца одинаково


<input id = input1 value = '124567' >
<button> click </button>

<script>
let input1 = document.querySelector('#input1');
let button = document.querySelector('button');
button.addEventListener('click', function() {
  let arr = input1.value;
  let arr2 = arr.split('');
  for (let i of arr2)
    if (i === '3') {
    console.log('есть')
  } else {
    console.log('неа')
  };
});
</script>
//Проверьте что это число содержит внутри себя цифру 3.


<p> чета </p>
<p> чета </p>
<p> чета </p>
<button> click </button>

<script>
let p = document.querySelectorAll('p');
let button = document.querySelector('button');
button.addEventListener('click', function() {
for (let i = 0; i < p.length;) {
  let number = p[i++];
  number.textContent += i;
}
});
</script>
//запишите в конец каждого абзаца его порядковый номер.


<a id= "link" href="http://code.mu">  Учебник </a>
<br>
<a id= "link" href="http://code.mu">  Учебник </a>

<script>
let a = document.querySelectorAll('#link');
for (let elem of a) {
    elem.textContent += '('+ elem.href + ')';
}
</script>
//Добавьте в конец каждой ссылки ее href в круглых скобках.


<input id = input1 value = '25.01.2023' >

<script>
let input1 = document.querySelector('#input1');

input1.addEventListener('blur', function() {
  let someDate = input1.value;
  let arr = someDate.split('.').reverse();
  let year  = arr[0];
  let month = arr[1]-1;
  let day   = arr[2];
  let date = new Date(year, month, day);
  let weekDay  = date.getDay();
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(date);
console.log(days[weekDay]);
});
</script>
//!!!! OK
/*дата в формате 31.12.2016. узнайте день недели (словом) на
эту дату.*/


<input id = input1 value = '' >
<button id = 'button1'> + </button>
<button id = 'button2'> - </button>

<script>
let input1 = document.querySelector('#input1');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', function() {
  input1.value++;
});
button2.addEventListener('click', function() {
  if (input1.value > 0) {
  input1.value--;
  }
});
</script>
//!!!!OK
/*Дан инпут. Реализуйте кнопочки +1, -1,
 значение не могло стать меньше нуля.*/


 <input id = input1 value = '' >
 <p id = 'button1'> click1 </p>
 <p id = 'button2'> click2 </p>

 <script>
 let input1 = document.querySelector('#input1');
 let p1 = document.querySelector('#button1');
 let p2 = document.querySelector('#button2');
 p1.addEventListener('click', function() {
   input1.value++;
 });
 p2.addEventListener('click', function() {
   input1.value++;
 });
 </script>
/*Дан инпут. Даны абзацы. Пусть в этот инпут записывается
суммарное количество нажатий по этим абзацам.*/


<div>Аутодафе  Публичное наказание путем сожжения</div>
<div>Бенефициар Получатель доходов</div>
<div>Вакханалия Крайняя степень разгула</div>

<script>
let divs = document.querySelectorAll('div');
for (let div of divs) {
div.addEventListener('click', function() {
  let text = div.textContent;
  let cutted = text.slice(0,10) + ':';
  div.textContent = cutted;
});
}
</script>
/*обрежьте тот текст, который в них стоит так, чтобы он
стал длиной 10 символов. И добавьте троеточие в конец*/


<input id = input1 >

<script>
let input1 = document.querySelector('#input1');
input1.addEventListener('blur', function() {
  let value = input1.value;
  if (value > 0 && value < 100) {
    input1.style.backgroundColor = 'green';
  } else {
    input1.style.backgroundColor = 'red';
  }
});
</script>
//!!!!OK
/*проверьте, что в нем лежит число от 1 до 100.
- покрасьте инпут в зеленый цвет, а если не так - в красный.*/


<input id = input1 >
<button id = 'button1'> SHAZAM </button>

<script>
let input1 = document.querySelector('#input1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {
function getRandomNum(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num = getRandomNum(10000000, 99999999);
input1.value = num;
});

</script>
//OK
/*По нажатию на кнопку сгенерируйте случайную строку из
8-ми символов и запишите в инпут*/


<input id = input1 value = '1234567890' >
<button id = 'button1'> shuffle </button>

<script>
let input1 = document.querySelector('#input1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {
let value = input1.value;
let shuffled = value.split('').sort(function(){return 0.5-Math.random()}).join('');
input1.value = shuffled;
});
</script>
/*перемешайте введенные символы строки случайным образом и
запишите ее обратно в инпут.*/
//ЗАДАЧА


<input id = input1 value = '123'>
<button id = 'button1'> factorial </button>

<script>
let input1 = document.querySelector('#input1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {
let value = input1.value;
let factorial = 1;
for (let i = 1; i <= value.length; i++) {
	factorial = factorial * i;
}
input1.value = factorial;
});
</script>
//выведите в абзац факториал этого числа.
