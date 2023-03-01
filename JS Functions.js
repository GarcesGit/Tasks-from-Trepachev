

//CUSTOM functions CUSTOM functions CUSTOM functions CUSTOM functions CUSTOM functions CUSTOM functions CUSTOM functions



function name() {
console.log('Nat');
}
name(); // Nat

function sum() {
let result = 0;
for (let i = 0; i <=100; i++)
result += i;
console.log(result);}
sum();
// 5050 сумма от 0 до 100


function func(num) {
  console.log(num ** 3);
}
func(3); //27

function func(num) {
  if (num > 0) {
  console.log('+++');
}  else {
  console.log('---');
}
}
func(-3);
//--- если число больше нуля


function func(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}
func(1, 2, 3);
// 6 сумма


function func(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3);
//6


function func(num = 5) {
	console.log(num * num);
}
func(2);//4
func(3);//9
func();//25


function func(num1 = 0, num2 = 0) {
console.log(num1 + num2);
}
func(2, 3);//5
func(3);//3
func();//0


function func(num) {
	return num ** 3;
}
  let res = func(2) + func(3);
console.log(res);
//35 сумма функций


function func(num) {
	return num ** 0.5;
}
  let res = func(4);
console.log(res);
//2 квадратный корень из числа


function func(num) {
	return Math.sqrt(num);
}
  let res = func(16);
console.log(res);
//4 квадратный корень из числа


function func(num) {
	return num ** 2;
}
let res = func(func(2));
console.log(res);
// выведет 16 квадрат квадрата числа


function square(num) {
	return num ** 2;
}
function cube(num) {
	return num ** 3;
}
let res = cube(square(2));
console.log(res);
//(2^2)^3=64


function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log( func1(3) + func2(5) );
//сумма функций


function square(num) {
	return num ** 2;
}
function sum(num1, num2) {
	return num1 + num2;
}
let res = sum(square(2), square(3));
console.log(res);
//2^2+3^2=13 сумма функций


function sqrt(num) {
	return Math.sqrt(num);
}
function round(num) {
	return num.toFixed(3);
}
let res = round(sqrt(2));
console.log(res);
//1.414 = корень 2 округлили


function sqrt(num) {
	return Math.sqrt(num);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
function round(num) {
	return num.toFixed(3);
}
let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res);
//округлили сумму корней


function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
		return num ** 2;
}
console.log( func(10) );//100
console.log( func(-5) );//5
// модуль чисел


function func(arr) {
	let sum = 0;
		for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (sum >= 10) {
		return i + 1;
		} } }
let res = func([1, 2, 3, 4, 5]);
console.log(res);
//4 сколько элементов нужно сложить до 10


function func() {
	let sum = 0;
	let i = 1;
		while (true) {
		sum += i;
		if (sum >= 100) {
		return i;
		}
		i++;
	}}
console.log( func() );
//сколько  чисел сложить до 100 = 14


function func(num) {
let i ;
for (i = 0; num > 10; i++) {
	num /= 2;
}
return i;
}
console.log(func(100));
// 4 раза делим пока результат не меньше 10
// ИЛИ
function func(num) {
  let i = 0;
  while (num >= 10) {
    num /= 2;
    i++;
  }
  return i;
}
console.log(func(100));
// 4 раза делим пока результат не меньше 10


function func(num) {
	if (num >= 0) {
		return Math.sqrt(num);
	} else {
		return 0;
	}
}
console.log(func(25));
//5 вычисляем корень при условии


function func(num1, num2) {
	let res;
	if (num1 > 0 && num2 > 0) {
		res = num1 * num2;
	} else {
		res = num1 - num2;
	}
		return res;
}
console.log(func(3, 4));
//СОКРАЩАЕМ =
function func(num1, num2) {
	let res;

	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}
console.log(func(3, 4));
//12 вычисляем при условии


function isPositive(arr) {
	let flag = true;
	for (let elem of arr) {
		if (elem < 0) {
			flag = false;
		}
	}
	return flag;
}
console.log(isPositive([1, 2, 3, -4, 5]));
//СОКРАЩАЕМ =
function isPositive(arr) {
	for (let elem of arr) {
		if (elem < 0) {
			return false;
		}
	}
		return true;
}
console.log(isPositive([1, 2, 3, -4, 5]));
//false все числа положительные


function even(arr) {
	for (let elem of arr) {
		if (elem % 2 != 0) {
			return false;
		}
	}
		return true;
}
console.log(even([ 2,  4, 3 ]));
//false все цифры это числа являются нечетными


function allDifferent(arr){
for (let i=0; i<arr.length; i++){
        if (arr[i] == arr[i+1]) {
        return false;
        }
    }
    return true;
}
console.log(allDifferent([1, 2, 3, 3, 5,]));
//false есть в массиве два одинаковых элемента подряд


function func(a, b) {
	return a > b;
}
console.log(func(1, 3));
//false (true если a > b)


function getQuotient(arr1, arr2) {
	let res1 = 0;
	for (let elem of arr1) {
		res1 += elem;
	}
	let res2 = 0;
	for (let elem of arr2) {
		res2 += elem;
	}
	return res1 / res2;
}
console.log(getQuotient([1, 1, 1], [2, 2, 2]));
// коэффициент= частное сумм чисел массивов


function doMultiplication(arr) {
	let res = 1;
	for (let elem of arr) {
		res *= elem;
	}
	return res;
}
console.log(doMultiplication([3, 3]));
//произведение чисел массива


let res = sum([1, 2, 3, 4, 5]);
console.log(res);
function sum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}
//15 сумма элементов массива


function addNull(num) {
	if (num <= 9) {
		return num + '0';
	}
}
console.log(addNull(9));
//90 добавить нуль


let num = 12345;
let res = getDigitsSum(num);
console.log(res);
function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;
	for (let elem of arr) {
	sum += +elem;
	}
	return sum;
} //15 сумма элементов массива


function getDivisors(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
}
	return arr;
}
console.log(getDivisors(10)); //а так !!!! OK
//[1, 2, 5, 10]  массив делителей числа


function getArray(string) {
		let	elem = string.split('');
		return elem;
}
console.log(getArray('absdefg'));
//['a', 'b', 's', 'd', 'e', 'f', 'g'] строку в массив


function doReverse(string) {
		let	elem = string.split('').reverse().join('');
		let result = elem.slice(0, 1).toUpperCase() + elem.slice(1);
		return result;
		}
console.log(doReverse('решила')); // Алишер
//вывести строку в обратном порядке с заглавной буквы


 function doFirstCapital(string) {
 let split = string.split(' ');
 for (let i = 0; i < split.length; i++) {
 split[i] = split[i].slice(0, 1).toUpperCase() + split[i].slice(1);
 }
 let result = split.join(' ');
 return result;
 }
 console.log(doFirstCapital('войти в айти'));
 //Войти В Айти //заглавной первую букву


 let arr = [1, 2, 3, 4, 5];
 function getRandomInt(arr) {
 for (let i = 1; i <= arr.length; i++) {
 return Math.floor(Math.random() * (arr[4]- arr[i]  + 1)) + arr[i] ;
 }
 }
 console.log(getRandomInt(arr));
 //вывести случайное число из массива !!!! OK


 function isPrimeNumber(num) {
     let isPrime = true;
     for (let i = 2; i < num; i++) { //не равно числу!
         if (num % i == 0 ) {
             isPrime = false
             break;
     }
     }
     return isPrime;
 }
 console.log(isPrimeNumber(3));
 // true //простое число или не


 function checkFriendlyNumbers(num1, num2) {
 	let divisors1 = 0;
 	for (let i = 1; i <= num1; i++) {
 		if (num1 % i == 0) {
 			divisors1 += i;
 		}
 }
 let divisors2 = 0;
 for (let i = 1; i <= num2; i++) {
 	if (num2 % i == 0) {
 		divisors2 += i;
 	}
 }
 if (divisors1 == divisors2) {
 	return true;
 } else {
 	return false;
 }
 }
 console.log(checkFriendlyNumbers(220, 284));
 //true // Дружественные числа !!!! OK


 function getFriendlyNumbers(min, max) {
 let arr = [];
 let e;
 for (let i = min; i <= max; i++) {
 let a = getSum(i), b = getSum(a);
 if(i === b && i != a && (e = !e)) arr.push([i, a])
 }
 return arr
 }
 function getSum(num) {
 let end = num/2,
 sum = 0;
 for (let i = 1; i <= end; i++) {
 if (num % i === 0) sum += i;
 }
 return sum;
 }
 console.log(getFriendlyNumbers(1, 2000));
 // [220, 284] [1184, 1210] Дружественные числа !!!!!!!!!!!!!!!!
//не сама

 function checkPerfectNumber(num) {
  let sumDivisors = 0;
  for (let i = 1; i < num; i++) {
 	 if (num % i == 0) {
 		 sumDivisors += i;
 	 }
  }
 if (num == sumDivisors) {
  return true;
 } else {
  return false;
 }
 }
 console.log(checkPerfectNumber(28));
 //true Совершенное число


 function getHappyTicket(min, max) {
 let arr = [];
 		for (let i = min; i <= max; i++) {
 		i = String(i);
 		let num012 = Number(i[0]) + Number(i[1]) + Number(i[2]);
 		let num345 = Number(i[3]) + Number(i[4]) + Number(i[5]);
 		if (num012 === num345) {
 			arr.push(Number(i));
 		}
 }
 return arr;
 }
 console.log(getHappyTicket(100000, 999999));
 // все счастливые билеты = 50412 //!!!! OK


var arr = [12, 19, 28, 13, 14, 345];
var result = [];

function getDigits(num) {
	return String(num).split('');
} //['1', '2', ',', '1', '9', ',', '2', '8',...] разделили

function arraySum(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += Number(arr[i]);
	}
	return sum;
}// сложили

function inRange(num) {
	var sum = arraySum(getDigits(num)); //разделили и сложили
	return sum >= 1 && sum <= 9; //условие
}
for (var i = 0; i < 10; i++) {
	if (inRange(arr[i])) { //повторили условие
		result.push(arr[i]);//полижили в массив
	}
}
console.log(result);
//[12, 13, 14] //числа с суммой цифр от 1 до 9 !!!!!!!!!!!!!!!!


//[[ КАК ТО НАДО СОЕДИНИТЬ 4 ФУНКЦИИ НИЖЕ

function inArray(value, arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == value) {
			return true;
		}
	}
	return false;
}
var arr = [1, 2, 3, 4, 5];
alert(inArray(3, arr));
//выведет 3 есть ли в массиве элемент с таким значением


function getDivisors(num) {
	var result = [];
	for (var i = 1; i <= num; i++) {
		if(num % i == 0) {
			result.push(num);
		}
	}
	return result;
}
alert(getDividers(24)); //выведет [1, 2, 3, 4, 6, 12, 24]


function getIntersection(arr1, arr2) {
	var result = [];
	for (var i = 0; i < arr1.length; i++) {
		if(inArray(arr1[i], arr2)) { //есть ли в массиве arr2 элемент из arr1[i]=value
			result.push(arr1[i]);
		}
	}
	return result;
}
alert(getIntersection([1, 2, 3], [2, 3, 4]));
//выведет [2, 3] пересечение массивов = массив элементов, которые есть и в одном, и во втором массиве


function getGreatestCommonDivisor(num1, num2) {
	var divisors = getIntersection(getDivisors(num1), getDivisors(num2)); // ['2', '3', '6']
	return Number(Max.apply(null, divisors));
}
alert(getGreatestCommonDivisors(12, 18)); //выведет 6
// СОЕДИНИТЬ 4 ФУНКЦИИ ВЫШЕ ЧТОБЫ ПОЛУЧИТЬ НОД ]]


function getCommonDivisors(num1, num2) {
let divisors1 = [];
  for (let i = 1;  i < num1; i++) {
	  if (num1 % i == 0) {
		  divisors1.push(i);
	}
}
let divisors2 = [];
  for (let j = 1;  j < num2; j++) {
	  if (num2 % j == 0) {
		  divisors2.push(j);
	}
}
	let commonDiv = [];
	for (let elem1 of divisors1) {
		for (let elem2 of divisors2) {
		if (elem1 == elem2) {
			commonDiv.push(elem1);
    }
  }
}
			return commonDiv;
}
console.log(getCommonDivisors(10, 15));
//Найти  массив общих делителей чисел
// !!!!!!!!!!!! OK ВАУ



//Function Declaration & Function Expression Function Declaration & Function Expression Function Declaration & Function Expression



let num = 1;
function func() {
	num++;
}
func();
func();
func();
console.log(num); //4 глобальные переменные


function func(arr) {
	let newArr = arr;
	newArr[0] = '!';
}
let arr = [1, 2, 3];
func(arr);
console.log(arr);//['!', 2, 3] изменение объекта


function funk() {
	return 'some string';
}
funk = 123;
console.log(funk); //без () = затерли функцию


function func1() {
	return 3;
}
console.log(func1());//3
let func2 = func1; // теперь func2 такая же функция как func1
console.log(func2());//3


let func1 = function () {
	return 1;
}
console.log(func1());//1
let func2 = function () {
	return 2;
}
console.log(func2());//2
console.log(func1()+func2());//3 сумма функций


fu();
function fu() {
console.log(69);
}//69 можно вызвать ДО объявления

puc();
let puc = function () {
	console.log(33);
};//Error: Cannot access 'puc' before initialization

let puc2 = function () {
	console.log(33);
};
puc2();//33 можно вызвать ПОСЛЕ объявления


let arr = [
	function() {console.log('1')},
	function() {console.log('2')},
	function() {console.log('3')},
];
for (let func of arr) {
	func(); // вызываем наши функции	в цикле
}// 1 //2 //3

let arr = [
function f1() {return 1},//ЗАПЯТАЯ
function f2() {return 2},
function f3() {return 3},
];
for (let func of arr) {
console.log(func());
} // 1 //2 //3

let arr = [
function f1() {return 1},
function f2() {return 2},
function f3() {return 3},
];
console.log(arr[0]()); //1
console.log(arr[0]); //ƒ f1() {return 1}

let arr = [
function f1() {return 1},
function f2() {return 2},
function f3() {return 3},
];
console.log(arr[0]()+arr[1]()+arr[2]()); //6


let obj = {
	func1: function() {console.log(1)},
	func2: function() {console.log(2)},
	func3: function() {console.log(3)},
};
obj.func1(); // выведет 1

let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
};
console.log(obj.func1()+obj.func2()+obj.func3()); // 6

let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
};
for (let key in obj) {
	console.log(obj[key]());} // 1 //2 //3

	let math = {
		square: function(num) {return num * num},
		cube: function(num) {return num * num * num},
	};
	console.log( math.square(2) ); // выведет 4
	console.log( math.cube(2) ); // выведет 8


let math = {
		Sum: function(arr) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
		sum += arr[i]; }
		return sum; } ,

		SquareSum: function(arr) {
			let squareSum = 0;
			for (let i = 0; i < arr.length; i++) {
			squareSum += arr[i] ** 2; }
			return squareSum; } ,

		CubeSum: function(arr) {
			let cubeSum = 0;
			for (let i = 0; i < arr.length; i++) {
			cubeSum += arr[i] ** 3; }
			return cubeSum; } ,
};
console.log( math.Sum([1, 2, 3]) ); // выведет 6
console.log( math.SquareSum([1, 2, 3]) ); // выведет 14
console.log( math.CubeSum([1, 2, 3]) ); // выведет 36
// !!!!!!!! OK


test(
function() {return 1;}, //=func1
function() {return 2;} //=func2
);
function test(func1, func2) {
console.log( func1() ); // выведет 1
console.log( func2() ); // выведет 2
console.log( func1() + func2() ); // выведет 3


function get1() {
	return 1;
}
function get2() {
	return 2;
}
test(get1, get2);
function test(func1, func2) {
console.log( func1() + func2() );
}// выведет 3 //Function Declaration

let get1 = function() {
	return 1;
}
let get2 = function() {
	return 2;
}
test(get1, get2);
function test(func1, func2) {
	console.log( func1() + func2() );
}  // выведет 3 // Function Expression


test( // сначала вызвали потом объявили
	function(num) {
		return num * num;
	} ); //= func
function test(func) {
	console.log(func(3));
} //9


function test (num, func) {
	console.log(func(num));
}
test(2, function(num) {
	return num * num;
}); // Выведет 4


function test (num, func1, func2) {
	return func1(num) + func2(num);
}
console.log(test(3,
								function(num) {return num * num; },
								function(num) {return num * num * num; }));
// в консоль вызвали test с тремя параметрами =  36 !!!!


function test(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]); // применяем функцию к каждому элементу
	}
		return arr;
}
let result = test([1, 2, 3], function(num) {
	return num * num;
});
console.log(result); // выведет [1, 4, 9]
//функция test с параметрами (массив,  функция) !!!!


function square(num) {
	return num * num;
}
function func(num1, num2) {
	return square(num1) + square(num2);
}
console.log(func(2, 3));
//ИЛИ внутри функции func
function func(num1, num2) {
	function square(num) {
		return num * num;
	}
		return square(num1) + square(num2);
}
// выведет 13 (результат 2 * 2 + 3 * 3) сумма квадратов


function func(num1, num2){
	function square(num) {
		return num * num;
	}
	function cube(num) {
		return num * num * num
	}
return square(num1) + cube(num2);
}
console.log(func(3, 2)); //17 сумма квадрата и куба


function func1() {
	return function() {
		return 1;
	};
}
function func2() {
	return function() {
		return 2;
	};
}
console.log( func1()()+func2()() );
// 3 Функция, возвращающая функцию
// ИЛИ
function func(num1) {
	return function(num2) {
		return num1 + num2;
	};
}
console.log( func(1)(2) ); // выведет 3


function func(num2) {
	return function(num3) {
		return function(num4) {
			return function(num5) {
				return function() {
				let arr = [];
				arr.push(num2, num3, num4, num5);
				return arr;
				};
			};
		};
	};
}
console.log( func(2)(3)(4)(5)());
// [2, 3, 4, 5] !!!! OK


function test() {
	let num = 1;
		return function() {
		console.log(num);
		num++;
	};
}
let func1 = test(); // первый счетчик вызова функций
func1();  //выведет 1
func1();  //выведет 2

let func2 = test(); // второй счетчик вызова функций
func2();  //выведет 1
func2();  //выведет 2


function test() {
	let num = 5;
		return function() {
		console.log(num);
		num--;
		if (num < 0) {
			console.log('countdown is over');
		}
	};
}
let func1 = test();
func1(); //5
func1();//4
func1();//3
func1();//2
func1();//1
func1();//0
func1();//-1 countdown is over


let result = function() {return 1;}()
	+ function() {return 2;}();
console.log(result);//3 вызов функции сразу

(function(num1, num2) {
	console.log(num1 + num2);
})(1, 2);//3

(function() {
	return function() {
		return function() {
		console.log('!');
	};};})()()(); //вызываем безымянные функции


	let func = (function() {
		let num = 1;
		return function() {
			if (num == 5){
				console.log(num);
				num = 1;
				} else {
				console.log(num);
				num++;
				}
				}
				})();
	func(); //выведет 1
	func(); //выведет 2
	func(); //выведет 3
	func(); //выведет 4
	func(); //выведет 5
	func(); //выведет 1
	func(); //выведет 2
//счетчик до 5, потом отсчет сначала


function each(arr, callback) {
let result = [];
for (let elem of arr) {
result.push( callback(elem) ); // вызываем функцию-коллбэк
}
return result;
}//строки выше - универсальная функция-коллбэк для массивов!
//ниже - елементы для расчетов
function square(num) {
return num * num;
}
let result = each([1, 2, 3, 4, 5], square);
console.log(result);
// !!!!!!!!
// то же:
function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) );
	}
		return result;
}
 let result = each([1, 2, 3, 4, 5], function(num) {
	return num ** 2;
});
console.log(result);// квадрат чисел в массиве


function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) );
	}
		return result;
}
let result = each(['решила','решила'], function(string) {
let	elem = string.split('').reverse().join('');
let capital = elem.slice(0, 1).toUpperCase() + elem.slice(1);
return capital;
});
console.log(result);
// ['Алишер', 'Алишер']
//символы в обратном порядке, заглавным первый символ


function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) );
	}
		return result;
}
function cube(num) {
	return num ** 3;
}
let result = each([1, 2, 3, 4, 5], cube);
console.log(result); //возведите все элементы массива в куб
// именнованная функция-коллбэк


function each(arr, callback) {
let result = [];
for (let elem of arr) {
result.push( callback(elem) );
}
return result;
}
let result = each([1, 2, 3, 4, 5], 	elem =>
	elem > 0);
	console.log(result); //[true, true, true, true, true]
/* == let result = every([1, 2, 3, 4, 5], function(elem) {
	if (elem > 0) {return true;} else {return false;}});*/
//стрелочная функция


<p>1</p>
<p>2</p>
<p>3</p>

<script>
let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', () =>  {
		elem.textContent += '!';
	});
}
</script>
//стрелочная функция


let i = 1;
function func(){
	console.log(i);
	i++;
		if (i <= 10){
		func(); // здесь функция вызывает сама себя // рекурсия
	}
}
func(); //числа от 1 до 10
// рекурсия


function func(arr) {
	console.log(arr.shift(), arr);
	if (arr.length != 0) {
		func(arr); // рекурсия
	}
}
func([1, 2, 3]);
//вырезает и возвращает первый элемент, массив уменьшается на элемент


function getSum(arr) {
	let sum = arr.shift()**2;
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	return sum;
}
console.log(getSum([1, 2, 3])); // сумма квадратов


let arr = [1, 2, 3, 4, 5];
function func(arr) {
	for (let elem of arr) {
		console.log(elem);
  }
}
func(arr);
// 1-5 выведите элементы этого массива в консоль
//нет рекурсии


function extractElements(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			extractElements(elem);
		} else {
			console.log(elem);
		}
	}
}
extractElements([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
//перебор многомерного массива и вывод элементов


function extractElements(obj) {
	for (let elem in obj) {
		if (typeof obj[elem] == 'object') {
			extractElements(obj[elem]);
		} else {
			console.log(obj[elem]);
		}
	}
}
extractElements({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});
//перебор многомерного объекта и вывод элементов


let arrResult = [];
function getArray(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			getArray(elem);
		} else {
			arrResult.push(elem);
		}
	}
	return arrResult;
}
console.log(getArray([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));
//ИЛИ
let arrResult = [];
function getArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] == 'object') {
			arr[i] = getArray(arr[i]);
		} else {
			arrResult.push(arr[i]);
		}
	}
	return arrResult;
}
console.log(getArray([1, [2, 7, 8], [3, 4, [5, 6]]]));
//[1, 2, 7, 8, 3, 4, 5, 6]
//элементы массива в один массив рекурсией !!!! OK


function getSum(arr) {
	let sum = 0;
		for (let elem of arr) {
		if (typeof elem == 'object') {
			sum += getSum(elem);
		} else {
			sum += elem;
		}
	}
	return sum;
}
console.log(getSum([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));
// сумма элементов массива рекурсией


function getSum(obj) {
	let sum = 0;
	for (let elem in obj) {
		if (typeof obj[elem] == 'object') {
			sum += getSum(obj[elem]);
		} else {
			sum += obj[elem];
		}
	}
		return sum;
}
console.log(getSum({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}));
// сумма элементов объекта рекурсией


function getString(arr) {
	let string = '';
	for (let elem of arr) {
		if (typeof elem == 'object') {
			string += getString(elem);
		} else {
			string += elem;
		}
	}
	return string;
}
console.log(getString(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]));
//abcdefgjk элементы массива в одну строку рекурсией !!!!


function func(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] == 'object') {
			arr[i] = func(arr[i]);
		} else {
			arr[i] = arr[i] **2;
		}
	}
	return arr;
}
console.log(func([1, [2, 7, 8], [3, 4, [5, 6]]]));
//квадрат элементов массива рекурсией !!!!
