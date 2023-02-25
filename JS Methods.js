

//Math methods Math methods Math methods Math methods Math methods Math methods Math methods Math methods Math methods Math methods



let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let elem of arr) {
  sum += elem**3;
}
console.log(sum);
console.log(Math.sqrt(sum));

let num = Math.sqrt(379);
console.log(num.toFixed());//19

let obj = {};
let num = Math.sqrt(587);
obj['floor'] = Math.floor(num);
obj['ceil'] = Math.ceil(num);
console.log(obj); //{floor: 24, ceil: 25}

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(10, 100)); //рандомное

let arr = [];
for (let i = 1; i <= 10; i++) {
  function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;  }
  let a = getRandomInt(10, 100);
  arr.push(a);
}
console.log(arr); //[10 рандомных целых чисел] !!!!!!!! OK

let a= 3;
let b= 9;
console.log(Math.abs(a-b)); // |-6|=6



//String methods String methods String methods String methods String methods String methods String methods String methods



let str = 'js';
console.log(str.toUpperCase());//JS

let str2 = 'JS';
console.log(str2.toLowerCase());//JS

let str3 = 'я учу javascript!';
let sub3 = str3.substr(2, 3);
console.log(sub3); //учу

let str4 = 'я учу javascript!';
let sub4 = str4.substring(2, 5);
console.log(sub4); //учу

let str5 = 'я учу javascript!';
let sub5 = str5.slice(2, 5);
console.log(sub5); //учу

let str = 'abcde';
console.log(str.indexOf('c'));//позиция 2

let str2 = 'abcde';
console.log(str2.indexOf('a'));//позиция 0

let str3 = 'http://code.html';
console.log(str3.startsWith('http://'));//true

let str4 = 'http://code.html';
console.log(str4.endsWith('.html'));//true

let str = '1-2-3-4-5';
let arr = str.split('-');
console.log(arr);//['1', '2', '3', '4', '5']

let str2 = '12345';
let arr2 = str2.split('');
console.log(arr2);//['1', '2', '3', '4', '5']


let arr3 = [1, 2, 3, 4, 5];
let str3 = arr3.join('-');
console.log(str3); //1-2-3-4-5

let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr); //[1, 2, 3, 4, 5, 6]

let arr2 = [1, 2, 3];
arr2.unshift(4, 5, 6);
console.log(arr2); //[ 4, 5, 6, 1, 2, 3]

let arr3 = [1, 2, 3];
let elem = arr3.shift();
console.log(elem); //1

let arr4 = [1, 2, 3];
arr4.shift();
console.log(arr4); //[2, 3]

let arr5 = [1, 2, 3];
let elem5 = arr5.pop();
console.log(elem5); //3

let arr = [1, 2, 3, 4, 5];
let sub = arr.slice(0, 3);
console.log(sub);//[1, 2, 3]

let arr2 = [1, 2, 3, 4, 5];
let sub2 = arr2.splice(1, 2);
console.log(arr2);//[1, 4, 5]

let arr3 = [1, 2, 3, 4, 5];
let sub3 = arr3.splice(3, 0, 'a', 'b', 'c');
//вставляем с позиции 3, удаляем 0=ничего
console.log(arr3);//[1, 2, 3, 'a', 'b', 'c', 4, 5]

let arr3 = [1, 2, 3, 4, 5];
let sub3 = arr3.splice(1, 0, 'a', 'b');
let sub4 = arr3.splice(6, 0, 'c');
let sub5 = arr3.splice(9, 0, 'e');
console.log(arr3);// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.indexOf(3));//2я позиция

let arr = [1, 2, 3, 4, 5];
let result = arr.includes(5);
console.log(result);//true

let str = 'london';
let result = str.slice(0, 1).toUpperCase() + str.slice(1);
//вырезали и увеличили [0] и прибавили вырезанное с [1 до конца]
console.log(result); // выведет 'London'

let str = 'london';
let result = str.slice(str.length-1).toUpperCase();
console.log(result); // N

let str = 'word1 word2 word3';
let split = str.split(' ');
for (let i = 0; i < split.length; i++) {
  split[i] = split[i].slice(0, 1).toUpperCase() + split[i].slice(1);
}
let result = split.join(' ');
console.log(result); //Word1 Word2 Word3

let str = 'поесть нельзя, худеть';
let result = str.split(' ').reverse().join(' ');
console.log(result); // худеть нельзя, поесть

let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += +digit;
}
console.log(sum);//15
