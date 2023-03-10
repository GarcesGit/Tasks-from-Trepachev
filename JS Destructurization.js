


//Деструктуризация массивов Деструктуризация массивов Destructuring arrays Destructuring arrays  Destructuring arrays  Destructuring arrays


let arr = [2025, 12, 31];
let [year, month, day] = arr;
console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31
//операция деструктуризации массивов


function func() {
return [2025, 12, 31]; }
let [year, month, day] = func();
console.log(func());
//операция деструктуризации массивов из функции


let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [,, department, position,] = arr;
console.log(department);
console.log(position);
//Пропуск элементов массива при деструктуризации


let arr = [2025, 12, 31, 23, 59, 59];
let [year, month, day, ...time] = arr;
console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31
console.log(time);  // выведет 	[23, 59, 59]
//лишние элементы записать в массив с помощью оператора rest


let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department, position = 'trainee'] = arr;
console.log(name);
console.log(surname);
console.log(department);
console.log(position);
//arr[3] = 'trainee' значение по умолчанию если arr[3] пустое


let arr = [2025, 12, ]
function func() {
return (new Date).getDate(); }
let [year, month, day = func()] = arr;  
console.log(func());
//функция - значение по умолчанию = дата на сегодня


let options = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color, width, height} = options;
console.log(color);
console.log(width);
console.log(height);  // 500
//операция деструктуризации объекта


let obj = {
	month: 12,
	day:   31,
};
let {year = 2025, month, day} = obj;
console.log(year);  // выведет 2025
console.log(month); // выведет 1
console.log(day);   // выведет 31
// деструктуризации объекта со значением по умолчанию


let options = {
	width:  400,
	height: 500,
};
let {color:c = 'black', width:w, height:h} = options;
console.log(c);
console.log(w);
console.log(h);
// деструктуризации объекта с отсутствующим значением


func('str1', [2025, 12, 31], 'str2');
function func(param1, [year, month, day], param2) {
	console.log(param1); // выведет 'str1'
	console.log(year);   // выведет 2025
	console.log(month);  // выведет 12
	console.log(day);    // выведет 31
	console.log(param2); // выведет 'str2'
}// деструктуризации массива и строк


func([2025, 12, 31], [2026, 11,	30]);
function func([year1, month1, day1], [year2, month2, day2]) {
	console.log(year1);  // выведет 2025
	console.log(month1); // выведет 12
	console.log(day1);   // выведет 31
	console.log(year2);  // выведет 2026
	console.log(month2); // выведет 11
	console.log(day2);   // выведет 30
}// деструктуризации двух массивов


func( ['John', 'Smit', 'development', 'programmer', 2000] );
function func([name, surname, department, position, salary]) {
console.log(department);
console.log(position);
}// деструктуризация массива


func( ['John', 'Smit', 'development', 'programmer', 2000] );
function func([name, surname, ...info]) {
console.log(name);
console.log(surname);
console.log(info);
}// деструктуризация массива с rest


function func([name, surname, department, position = 'джуниор']) {
console.log(department);
console.log(position);
}
func( ['John', 'Smit', 'development'] );


function func(department, [name, surname], [year, month, day]) {
console.log(department);
console.log(name);
console.log(surname);
console.log(year);
console.log(month);
console.log(day);
}
func( 'development', ['John', 'Smit'], 	[2018, 12, 31] );


function func({year, month, day}) {
	console.log(year);  // выведет 2025
	console.log(month); // выведет 12
	console.log(day);   // выведет 31
}
func({year: 2025, month: 12, day: 31,});


function func({color = 'black', width, height}) {
	console.log(color);
	console.log(width);
	console.log(height);
}
func({color: 'red',	width:  400,	height: 500});
// деструктуризации объекта
