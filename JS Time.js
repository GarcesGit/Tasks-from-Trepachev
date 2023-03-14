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
