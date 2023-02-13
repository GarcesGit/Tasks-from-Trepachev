"use strict";



//LOOPS//ЦИКЛЫ//LOOPS//LOOPS//LOOPS//LOOPS//LOOPS//LOOPSOOPS//LOOPS//LOOPS//LOOPS//LOOPS//LOOPS


for (let i = 11; i <= 33 ; i++) {
  console.log(i);
}

for (let i = 10; i > 0 ; i--) {
  console.log(i); // from 10 to 0
}

for (let i = 0; i <= 10 ; i++) {
  if (i % 2 == 0)
  console.log(i); //evens
}

for (let i = 1; i <= 10 ; i+=2) {
    if (i % 2 != 0)  ;
  console.log(i);//odds
}

for (let i = 0; i <= 10 ; i++) {
    if (i % 2 == 0) continue ;
  console.log(i);//odds
}

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    console.log( i );
  }
} //odds

let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
  console.log(elem); // 1 2 3 4 5
}

let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(key); //x,y,z
}
for (let key in obj) {
	console.log(obj[key]); //1,2,3
}

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5}; 
for (let elem in obj) {
if (obj[elem] % 2 != 0) {
console.log(obj[elem]); }
} //1 3 5 элементы объекта - нечетные числа !!!!!!!!

let num = 1;
while (num <= 10) {
  console.log(num);
  num ++; // 1-10
}

let num = 10;
while (num <= 100) {
	num = num * 3;
}
console.log(num);// результат умножения на 3 = 270

let arr = [1, 2, 3, 4, 4, 6, 7];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
        console.log(arr[i]);
    }}//4 значение совпадает с порядковым номером в массиве.

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length-1; i >= 0; i--) {
	console.log(arr[i]); //edcba
}

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr.length-1; i++) {
	console.log(arr[i]); //bcd
}

let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
  if (elem > 3 && elem < 10 ) {
    console.log(elem);
  }
} //5 9 4

let res = 0;
for (let i = 2; i <= 10; i++) {
	res = res + i;
}
console.log(res); // сумма 2-10

let res = 0;
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0)
	res = res + i;
}
console.log(res); // сумма четных 2+4+6+8+10=30

let res = 1;
for (let i = 2; i <= 10; i++) {
  if (i % 2 != 0)
	res = res + i;
}
console.log(res); // сумма нечетных 1-9 =25

let res = 1;
for (let i = 1; i <= 5; i++) {
	res = res * i;
}
console.log(res); // произведение 1-5=120 = факториал числа 5

let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	elem = elem ** 2;
  console.log(elem);
} //возвести в квадрат каждый элемент массива

let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
	res += elem;
}
console.log(res); //сумма элементов этого массива

let arr = [2, 1, 4];
let res = 0;
for (let elem of arr) {
	res += elem**2 ;
}
console.log(res); //сумма квадратов элементов массива

let arr = [2, 1, 4];
let res = 1;
for (let elem of arr) {
	res = res*elem;
}
console.log(res); //произведение элементов массива

let str = '';
for (let i = 0; i < 10; i++) {
  str += 'x';
}
console.log(str);//xxxxxxxxxx

let str = '';
for (let i = 1; i <= 9; i++) {
  str += i;
}
console.log(str);//123456789

let str = '';
for (let i = 9; i >= 1; i--) {
  str += i;
}
console.log(str);//987654321

let str = '';
for (let i = 1; i <= 9; i++) {
  str += i + '-';
}
console.log(str);//1-2-3-4-5-6-7-8-9-

for (let i = 1; i <= 100; i++) {
	let str = String(i); // преобразуем число в строку
	if (str[0] === '1' || str[0] === '2') {
	console.log(i);
	}
}// все числа начинаются на 1 или 2

for (let i = 10; i <= 100; i++) {
	let str = String(i);
	console.log(str[0]);	} //все первые цифры

for (let i = 10; i <= 15; i++) {
	let str = String(i);
	console.log(Number(str[0])+Number(str[1]));	} //сумму первой и второй цифры каждого числа

  for (let i = 10; i <= 100; i++) {
  	let str = String(i);
    	if (str[0] === '1') {
  		console.log(i);
  	}
  }// числа, первая цифра которых равна 1

  for (let i = 10; i <= 100; i++) {
  let str = String(i);
  if (Number(str[0]) + Number(str[1]) === 5) {
    console.log(i);
  }
  }//числа, сумма двух первых цифр которых равна 5

  let arr = [1, 2, 3, 4, 0, 5, 0, 6];
  for (let elem of arr) {
    if (elem == 0) {
      console.log('есть');
      break;
    }
  } // нашли первый 0 и выйдем из цикла


	let arr = [1, 2, 7, 8, 3, 4, 5, 6, 3];
			for (let i = 0; i < arr.length; i++) {
	 				if (arr[i] == '3') {
						console.log(i);
						break;
	}
	}//4 // получение позиции первого числа 3 в массиве


  let arr = [1, 2, 3, -4, 5 ];
  let res = 0;
  for (let elem of arr)
  { if (elem > 0)
  { res += elem; }
    else
    break;
    console.log(res);
  } //1,3,6 сумма элементов до первого отрицательного числа


  let a = 0;
  let i = 0;
  for (i=1; i<=100; i++){
  a+=i;
  if (a>100){
  console.log(a);
  console.log(i);
  break;
  }
} // сколько чисел (=14 i) нужно сложить, сумма больше 100= 105a


  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let elem of arr) {
  	let result;

  	if (elem % 2 == 0) {
  		result = elem * elem;
  	} else if (elem % 3 == 0) {
  		result = elem * elem * elem;
  	} else {
  		continue; // перейдем на новую итерацию цикла
  	}
  	console.log(result); }	 // выполнится, если делится на 2 или 3


		let i = 0;
		do {
		  alert( i );
		  i++;
		} while (i < 3); // 0 1 2
// то же ниже
let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}
// то же ниже
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  alert(i);
}


for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
} //111222333444555666777888999


let arr = [0, 1, 2, 3, 4, 5];
for (let elem of arr) {
  document.write(elem + '<br>');
}

let arr = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr); // заполнить массив числами от 1 до 5


let arr = [];
for (let i = 1; i <= 10; i++) {
let xxx = 'x';
arr.push(xxx);
console.log(xxx); } //xxxxxxxxxx

let arr = [1, 2, -3, 4, 5];
let arr2 = [];
for (let elem of arr) {
	if (elem > 0) {
	arr2.push(elem);
	console.log(arr2);
}} //положительные числа из arr в arr2

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) { 
 arr[i] = arr[i] * 2;
} console.log(arr); // выведет [2, 4, 6, 8, 10] 

let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};
for (let i = 0; i <= 4; i++) {
	let key = keys[i];
	let value = values[i];
		obj[key] = value;
}
console.log(obj);//{a: 1, b: 2, c: 3, d: 4, e: 5} !!!!
//или
let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};
for (let i = 0; i <= 4; i++) {
	obj[keys[i]] = values[i];
}
console.log(obj);//{a: 1, b: 2, c: 3, d: 4, e: 5}

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for (let i = 0; i <= 4; i++) {
	obj[arr1[i]] = arr2[i];
}
console.log(obj);//{пн: 1, вт: 2, ср: 3, чт: 4, пт: 5}

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i <= arr.length-1; i++) {
  obj[arr[i]] = i+1;
}
console.log(obj);//{a: 1, b: 2, c: 3, d: 4, e: 5} !!!!


let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
		let obj2 = {};
  		for (let keys in obj) {
				let key = obj[keys];
				let value = keys;
				obj2[key] = value;
}
console.log(obj2); //{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}
/* новый объект: ключи - элементы старого объекта, а значения - ключи !!!!!!!!  */


let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i <= arr.length-1; i++) {
  obj[i+1] = arr[i];
}
console.log(obj);//{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}


let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = [];
let arr2 = [];
for (let elem in obj) {
  arr1.push(elem);
  arr2.push(obj[elem]);
}
console.log(arr1);//['a', 'b', 'c', 'd', 'e']
console.log(arr2);//[1, 2, 3, 4, 5]


let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj2 = {};
for (let elem in obj) {
    if (obj[elem] % 2 == 0) {
    obj2[elem] = obj[elem];
  }
    console.log(obj2);// {b: 2, d: 4}
}


let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
obj[key] = obj[key] * 2;
}
console.log(obj); //{a: 2, b: 4, c: 6}


let obj = {a: 1, b: 2, c: 3};
let sum = 0;
for (let elem in obj) {
	sum += obj[elem];
}
console.log(sum); //сумма элементов объекта


let obj = {1: 6, 2: 7, 3: 8, 4:	9, 5: 10};
let sumkeys = 0;
let sumelem = 0;
for (let elem in obj) {
  sumelem += obj[elem];
  sumkeys += +elem;
}
  console.log(sumelem/sumkeys);//сумму элементов делим на сумму ключей


let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (let elem of arr) {
	if (elem == 'a') {
		flag = true;
		break;
	}
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}


let arr = [1, 2, 3, 4, 5];
let res = false;
for (let elem of arr) {
	if (elem === 3) {
		res = true; //без let
		break;
	}
}
console.log(res);//есть ли в массиве число 3 или нет


let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
let counter2 = 0;
for (let elem of arr) {
  if(elem == 3) {
    counter++;
  }
  if(elem == 2) {
    counter2++;
  }
}
console.log(counter); //4 тройки
console.log(counter2);//3 двойки


let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
let count = {};
for (let elem of arr) {
	if (count[elem] === undefined) {
		count[elem] = 1;
	} else {
		count[elem]++;
	}
}
console.log(count); // {a: 3, b: 2, c: 1, d: 1}


let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {a: 0, b: 0, c: 0};
for (let elem of arr) {
	count[elem]++;
}
console.log(count); // выведет {a: 3, b: 2, c: 1}


let arr = [1, 2, 3, 4, 5];
let sum = 0;
let average = 0;
  for (let elem of arr) {
  sum += elem;
  average = sum / arr.length;
}
console.log(average);


let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += +arr[i]; //второй плюс здесь перевел строчные в числа
}
console.log(sum); // sum = 15


let arr = [1, 2, 3, 4, 5];
for (let i = 1; i < arr.length; i++) { 
console.log(arr[i - 1] + arr[i]);
} //3 5 7 9


let arr = [1, 2, 3, 4, 5];
for (let i = 2; i < arr.length; i++) { 
console.log(String(arr[i - 1]) + String(arr[i - 2]));
} // 21 32 43


let arr = [1, 2, 3, 4, 5];
for (let i = 1; i < arr.length; i++) { 
console.log(arr[i + 1] + arr[i - 1] + arr[i]);
} 6 9 12 NaN

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let elem of arr) {
if (elem % 3 === 0) {
sum += elem;
}
}
console.log(sum); //sum


let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
	sum += +elem;
}
console.log(sum); // sum = 15
//сумма чисел-строк


let arr = [12, 19, 28, 13, 14, 345];
let arr2 = String(arr);
arr2 = arr2.split(',').join('').split('');
let sum = 0;
for (let elem of arr2) {
	sum += +elem;
}
console.log(sum);//44
//найдем сумму всех цифр из этих чисел !!!!OK


let arr = [10, 20, 30, 21];
let sum = 0;
for (let elem of arr) {
  let str = String(elem);  
  if (str[0] === '1' || str[0] === '2') {
  sum += elem;
}
}
console.log(sum); //51 !!!!!!!!

let arr = ['21', '32', '34', '43', '45', '54', '55'];
let sum = 0;
for (let elem of arr) {
	if (+elem[0] === +elem[1] + 1) {
		sum += +elem;
  }
  }
    console.log(sum); //!!!!!!!!!!!!
    // сумма чисел, у которых первая цифра на один больше второй

		let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
		let sum = 0;
		for (let elem in obj) {
		let str = String(obj[elem]); // привели элемент к строке и сохранили в str
		if (str[0] === '1' || str[0] === '2') { // замена && на ||
		sum += +str;
		}
		}
		console.log(sum); // выведет 30 !!!!!!!!

		let obj = {	employee1: 100,	employee2: 200,	employee3: 300,
		  employee4: 400,	employee5: 500,	employee6: 600,	employee7: 700,};
		for (let elem in obj) {
		let str = String(obj[elem]);
		if (str <= 400) {
		str = str * 1.1;
		console.log(str.toFixed(0));
		}} //110 220 330 440
