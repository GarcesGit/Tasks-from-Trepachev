"use strict";



//МНОГОМЕРНОСТЬ multidimensionality //МНОГОМЕРНОСТЬ multidimensionality //МНОГОМЕРНОСТЬ multidimensionality //МНОГОМЕРНОСТЬ multidimensionality



let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2] +arr[1][1] +arr[2][0] +arr[0][0]);
//выведет строку 'lega'


let arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++)
    sum = sum + arr[i][j]
  }
console.log(sum); //сумма элементов этого двухмерного массива

let arr = [
  [		[1, 2],		[3, 4],	],
	[		[5, 6],		[7, 8],	],
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++)
      for (let k = 0; k < arr[i].length; k++)
    sum = sum + arr[i][j][k]
}
console.log(sum);//сумма элементов этого трехмерного массива

let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
for (let subArr of arr) {
	for (let elem of subArr) {
		console.log(elem);
	}
}

let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let subArr of arr) {
	for (let elem of subArr) {
    sum += elem;
		console.log(sum);
	}
}//сумма элементов этого двухмерного массива

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
  for (let subArr of arr) {
	   for (let subsubArr of subArr) {
       for (let elem of subsubArr) {
       sum += elem;
		   console.log(sum);
	} } }
	//сумма элементов трехмерного массива !!!!!!!!OK

[[1, 2, 3], [1, 2, 3], [1, 2, 3]]//создать такой массив
let arr = [];
for (let i = 0; i < 3; i++) {
arr[i] = []; // создаем подмассив
		for (let j = 0; j < 3; j++) {
		arr[i].push(j + 1); // заполняем подмассив числами
	}} console.log(arr); //двухмерный массив

let arr = [];
for (let i = 0; i < 3; i++) {
arr[i] = []; // создаем подмассив
		for (let j = ''; j < 4; j++) {
		arr[i].push('x'); // заполняем подмассив
		}} console.log(arr);

let arr = [];
for (let i = 0; i < 1;i++) {
arr[i] = [];
		for (let j = 0; j < 1; j++) {
		arr[i][j] = [];
			  for (let k = 1; k <= 5; k++) {
			  arr[i][j].push(k);
}}} console.log(arr); //!!!!!!!!!!!!трехмерный массив

let arr = [];
let k = 1; // счетчик
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i].push(k); // записываем счетчик
		k++; // увеличиваем счетчик
	}} console.log(arr);
// то же короче:
let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
arr[i] = [];
for (let j = 0; j < 3; j++) {
arr[i].push(k++);
}}
console.log(arr); //[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let arr = [];
for (let i = 0, k = 1; i < 4; i++) {
	arr[i] = [];
		for (let j = 0; j < 2; j++) {
		arr[i].push(k++);
	}}
console.log(arr); //[[1, 2], [3, 4], [5, 6], [7, 8]]

let arr = [];
let k = 2;
for (let i = 0; i < 4; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i].push(k); //
		k = k + 2 ;
}} console.log(arr);
//[[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

let arr = [];
let x = 1;
for (let i = 0; i < 1; i++) {
arr[i] = [];
		for (let j = 0; j < 4; j++) {
		arr[i][j] = [];
			  for (let k = 1; k <= 2; k++) {
			  arr[i][j].push(x);
        x++;
}}} console.log(arr);
//[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

let users = [
	{
		name: 'name1',
		surn: 'surn1',
	},
	{
		name: 'name2',
		surn: 'surn2',
	},
	{
		name: 'name3',
		surn: 'surn3',
	},
];
for (let user of users) {
	console.log(user.name + ' ' + user.surn);
} //имена и фамилии

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let sum = 0;
for (let person of employees) {
  sum += person.salary;
  console.log(sum);
} //сумма зарплат

let employees = [
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let sum = 0;
for (let person of employees) {
  if (person.age >= 30) {
  sum += person.salary;
  console.log(sum);
}} //сумма зарплат с условием

let obj = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
let lang = 'ru';
let day = 3;
console.log(obj[lang][day]); //чт ==
console.log(obj['en'][2]); //wd

let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
};
for (let some in data) {
	for (let dataX of data[some]) {
		console.log(dataX);
	} } //выведите на экран все строки с данными

	let obj = {
		key1: {
			key2: '12',
			key3: '13',
		},
		key2: {				//key1
			key4: '24',	//key2
			key5: '25',
		},
	}
	let key1 = 'key2';
	let key2 = 'key4';
	console.log(obj[key1][key2]); //24

	let obj = {
		key1: {
			key2: '12',
			key3: '13',
		},
		key2: {
			key4: '24',
			key5: '25',
		},
	}
	console.log(obj.key2.key4); //24

	let obj = {
		key1: {
			key2: '12',
			key3: '13',
		},
		key2: {
			key4: '24',
			key5: '25',
		},
	}
		let key1 = 'key2';
	console.log(obj[key1]['key4']); //24

	let obj = {
		a: {
			1: 'a1',
			2: 'a2',
			3: 'a3',
		},
		b: {
			1: 'b1',
			2: 'b2',
			3: 'b3',
		},
		c: {
			1: 'c1',
			2: 'c2',
			3: 'c3',
		},
	}
	for (let key in obj) {
		let subObj = obj[key];
		   for (let subKey in subObj) {
			 console.log(subObj[subKey]);
		}
	} // выведем все элементы двухмерного объекта

	let obj = {
		1: {
			1: 11,
			2: 12,
			3: 13,
		},
		2: {
			1: 21,
			2: 22,
			3: 23,
		},
		3: {
			1: 24,
			2: 25,
			3: 26,
		},
	}
	let sum = 0;
	for (let key in obj) {
		let subObj = obj[key];
		   for (let subKey in subObj) {
	       sum += subObj[subKey];
	  		 console.log(sum);
		}
	} //сумма элементов двухмерного объекта !!!!!!!!!!!!

	let obj = {
		1: {
			1: {
				1: 111,
				2: 112,
				3: 113,
			},
			2: {
				1: 121,
				2: 122,
				3: 123,
			},
		},
		2: {
			1: {
				1: 211,
				2: 212,
				3: 213,
			},
			2: {
				1: 221,
				2: 222,
				3: 223,
			},
		},
		3: {
			1: {
				1: 311,
				2: 312,
				3: 313,
			},
			2: {
				1: 321,
				2: 322,
				3: 323,
			},
		},
	}
	let sum = 0;
	for (let key in obj) {
		let subObj = obj[key];
		   for (let subKey in subObj) {
	       let subSubObj = subObj[subKey];
	          for (let subSubKey in subSubObj) {
	       sum += subSubObj[subSubKey];
	  		 console.log(sum);
		}}}
		//сумма элементов трехмерного объекта !!!!!!!!!!!! OK

		let obj = {
			key1: {
				a: 1, b: 2, c: {
					d: 3,
					e: 4,
				}, f: 5,
			},
			key2: {
				g: 6, h: 7,
			},
		}
		let sum = 0;
		sum = obj.key1.a + obj.key1.b + obj.key1.c.d +obj.key1.c.e+obj.key1.f + obj.key2.g + obj.key2.h;
		console.log(sum); //сумма вручную


let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
let sum = arr[0][0]+ arr[0][1]+ arr[0][2]
		+ arr[0][3][0]+ arr[0][3][1] //3 а не 0 тк массив типа число-массив (нет запятых)
		+ arr[0][3][2][0]+ arr[0][3][2][1]
		+ arr[1][0]+ arr[1][1][0]+arr[1][1][1]
		;
console.log(sum);//55
//Вручную найдите сумму элементов этого массива


		let employees = [
			{
				name: 'name1',
				salary: 300,
				age: 28,
			},
			{
				name: 'name2',
				salary: 400,
				age: 29,
			},
			{
				name: 'name3',
				salary: 500,
				age: 30,
			},
		];
		employees.push({
		  name: 'name4',
		  salary: 600,
		  age: 31,
		})
		console.log(employees); //добавили объект в массив

		let students = {
			'group1': ['student11', 'student12', 'student13'],
			'group2': ['student21', 'student22', 'student23'],
			'group3': ['student31', 'student32'],
		};
		students.group1.push('student14');
		students.group4 = [];
		students.group4.push('student41');
		console.log(students); //добавили в объект

		let students = {
			'group1': {
				'subgroup11': ['student111', 'student112', 'student113'],
				'subgroup12': ['student121', 'student122', 'student123'],
			},
			'group2': {
				'subgroup21': ['student211', 'student212', 'student213'],
				'subgroup22': ['student221', 'student222', 'student223'],
		  }
			};
		students.group1.subgroup11.push('student114');
		students.group3 = [];
		students.group3.subgroup31 = [];
		students.group3.subgroup31.push('student331');
console.log(students); //добавили
