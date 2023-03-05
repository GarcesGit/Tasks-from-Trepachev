

//Перебирающие методы Перебирающие методы Iterating methods Iterating methods Iterating methods Iterating methods Iterating methods



let arr = [1, 2, 3, 4, 5];
let result = arr.map(function(elem) {
	return elem * elem;
});
console.log(result); // выведет [1, 4, 9, 16, 25]
//метод map возведение в квадрат


let arr = [4, 9, 25];
let result = arr.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(result);
//извлеките из каждого элемента массива квадратный корень


let arr2 = ['Дан', 'массив', 'со', 'строками'];
let result2 = arr2.map(function(elem) {
	return elem + '!';
});
console.log(result2);
//['Дан!', 'массив!', 'со!', 'строками!']


let arr2 = ['палиндром:', 'madam', 'racecar'];
let result2 = arr2.map(function(string) {
	return string.split('').reverse().join('');
});
console.log(result2);
//переверните символы каждой строки в обратном порядке


let arr = ['123', '456', '789'];
let result = arr.map(function(string) {
	return string.split('');
});
console.log(result);
/* преобразуйте этот массив в двухмерный
[ [1, 2, 3], [4, 5, 6],	[7, 8, 9] ]; */


let arr = ['a', 'b', 'c', 'd', 'e'];
let result = arr.map(function(elem, index) {
	return elem + index;
});
console.log(result);
/* выведет ['a0', 'b1', 'c2', 'd3', 'e4']
в конец каждого элемента запишем его порядковый номер */


let arr = [1, 2, 3];
let result = arr.map(function(elem, index) {
	return elem * index;
});
console.log(result);
// [0, 2, 6] значение элемента, умноженное на его порядковый номер


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result = arr.map(function(elem) {
	return elem.map(function(num) {
		return num * num;
	});
});
console.log(result);
// возведем квадрат елементы двухмерного массива


let arr = ['a', 'b', 'c', 'd', 'e'];
arr.forEach(function(elem, index) {
	document.write(index + ': ' + elem
		+ '<br>');
}); //столбец элементов массива с индексами


let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function(elem) {
	sum += elem;
});
console.log(sum); //сумма элементов массива


let arr = [1, 2, 3, 4, 5];
let result = arr.filter(function(elem) {
	if (elem % 2 == 0) {
		return true;
	} else {
		return false;
	}
});
console.log(result); // выведет [2, 4]
// TO ЖЕ
let arr = [1, 2, 3, 4, 5];
console.log( arr.filter(elem => elem % 2 == 0) );
//отфильтруем массив, оставив в нем только четные числа


let arr = [1, -2, 3, -4, 5, 11];
let result = arr.filter(function (elem) {
	if (elem > 0 && elem < 10) {
	return true;
} else {
	return false;
}
});console.log(result);
// TO ЖЕ
let arr = [1, -2, 3, -4, 5, 11];
console.log(arr.filter(elem => elem > 0 && elem < 10));
// числа, которые больше нуля, но меньше 10.


let arr = ['АЛЕКСАНДР', 'МАКЕДОНСКИЙ', 'ГЕРОЙ', 'НО', 'ЗАЧЕМ', 'ЖЕ', 'СТУЛЬЯ', 'ЛОМАТЬ?'];
console.log(arr.filter(elem => elem.length > 5 ));
//строки, длина которых больше 5-ти символов.


let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(elem => elem*arr.indexOf(elem) < 30));
//числа, произведение которых на их порядковый номер меньше 30.


let arr = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr.filter(elem => typeof elem != 'object'));
//только обычные элементы, не подмассивы


let arr = [1, 2, 3, 4, 5];
let filtered = arr.filter(elem => elem % 2 == 0);
console.log( filtered.length ); // выведет 2
//TO ЖЕ
let arr = [1, 2, 3, 4, 5];
console.log( arr.filter(elem => elem % 2 == 0).length );
//подсчитаем количество четных элементов в массиве


let arr = [2, 4, 6, 8];
let result = arr.every(elem => elem % 2 == 0);
console.log(result);
//Проверим, что все элементы в массиве - четные


let arr = [2, 4, 6, 8, 9];
let result = arr.every(elem => elem* arr.indexOf(elem) < 30);
console.log(result);
//false произведение значений на их порядковый номер < 30.


let arr = [1, 2, 3, 4];
let result = arr.some(elem => elem % 2 == 0);
console.log(result);
//Проверим,что в массиве есть хотя бы одно четное число




//Операторы spread и rest Операторы spread и rest Операторы spread и rest Операторы spread и rest Операторы spread и rest Операторы




let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));
//spread сумма элементов массива.


function func(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}
console.log( func(1, ...[2, 3, 	4], 5, ...[6], ...[7, 8]) );
//spread произведение сумм элементов


let arr = [1, 2, 3, 4, 5];
let max = Math.max(arr[0], arr[1], arr[2], arr[3], arr[4]);
console.log(max);
//TO ЖЕ
let arr = [1, 2, 3, 4, 5, 6];
let max = Math.max(...arr);
console.log(max);
// найти максимальное число


let arr = [1, 2, 3, 4, 5, 6];
let min = Math.min(...arr);
console.log(min);
// найти минимальное число


let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let arrCombi = [1, ...arr1, 2, 3];
console.log(arrCombi); // выведет [1, 'a', 'b', 'c', 2, 3]
//объединить два массива


let arr = [...'abcde'];
console.log(arr);
// ['a', 'b', 'c', 'd', 'e'] преобразовать строку в массив


let arr = [...String(12345)];
console.log(arr);
// ['1', '2', '3', '4', '5'] преобразовать числа в массив


function func(...nums) {
	let sum = 0;
		for (let num of nums) {
		sum += num;
	}
		return sum;
}
let result = func(1, 2, 3);
console.log(result); // rest сумма чисел


function func(...nums) {
	let sum = 0;
	let average = 0;
		for (let num of nums) {
		sum += num;
		average = sum/nums.length;
	}
		return average;
}
let result = func(1, 2, 3);
console.log(result); //среднее арифметическое


function unite(...arrs) {
	return arrs;
}
let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result);
// выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]
//Функция, сливающая массивы двухмерный


function merge(...arrs) {
	return [].concat(...arrs);
}
let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result);
// выведет 	[1, 2, 3, 4, 5, 6, 7, 8, 9]
//Функция, сливающая массивы в одномерный
