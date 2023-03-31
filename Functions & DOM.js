
//Функции и DOM Functions & DOM Функции и DOM Functions & DOM Функции и DOM Functions & DOM Функции и DOM Functions & DOM Функции и DOM Functions & DOM


<p id="elem1"></p>
<p id="elem2"></p>

<script>
function setText(*, text) {
	let elem = document.getElementById(id);
	elem.textContent = text;
}
setText('*', 'text1');
setText('*', 'text2');
</script>
/*функция, которая первым параметром будет принимать id элемента,
 а вторым - текст элемента, и будет устанавливать этому элементу
  новый текст.*/


	<p class="elem"></p>
	<p class="elem"></p>
	<p class="elem"></p>

	<script>
	function setText(selector, text) {
		let elems = document.querySelectorAll(selector);

		for (let elem of elems) {
			elem.textContent = text;
		}
	}
	setText('.elem', 'new text');
	</script>
/*функцию, которая параметром будет принимать селектор группы
элементов и их новый текст. Пусть эта функция устанавливает
всем подпадающим под селектор элементам новый текст.*/


<p class="elem"></p>
<p class="elem"></p>
<p class="elem"></p>

<script>
function appendText(selector, text, newtext) {
	let elems = document.querySelectorAll(selector);

	for (let elem of elems) {
		elem.textContent = text + newtext;
	}
}
setText('.elem', 'old text', ' some new text ');
</script>
/* Установим всем элементам с классом elem новый текст.
Сделайте функцию appendText, которая первым параметром будет
 принимать селектор, а вторым - текст. Сделайте так, чтобы
 данная функция добавляла текст в конец переданных элементов.*/


 <p class="elem">1</p>
 <p class="elem">2</p>
 <p class="elem">3</p>
 <p class="elem">4</p>
 <p class="elem">5</p>

 <script>
 function forEach(selector, func  /*callback*/) {
 	let elems = document.querySelectorAll(selector);

 	for (let elem of elems) {
 		func(elem); /*callback*/
 	}
 }

 forEach('.elem', function(elem) {
 	elem.textContent = elem.textContent ** 2;
 });

</script>
/*с помощью нашей функции найдем все элементы с классом elem
 и для каждого найденного элемента применим коллбэк, который
 возведет в квадрат текст каждого элемента*/


 <p class="elem">1 </p>
 <p class="elem">2 </p>
 <p class="elem">3 </p>
 <p class="elem">4 </p>
 <p class="elem">5 </p>

 <script>
 function forEach(selector, func) {
 	let elems = document.querySelectorAll(selector);

   for (let i = 0; i < elems.length;
   		i++) {
   		func(elems[i], i);
     }
 }

 forEach('.elem', function(elem, index) {
 	elem.textContent = elem.textContent + index;
 });
</script>
/*в нашей функции-коллбэке написан второй параметр, в него
 пусть попадает порядковый номер элемента в найденном
наборе элементов*/


<p id="elem1"></p>
<p id="elem2"></p>

<script>
function appendText(elem, text, appendText){
	elem.textContent = text + appendText;
}
let elem1 = document.getElementById('elem1');
appendText(elem1, 'Британские ученые ', 'доказали');

let elem2 = document.getElementById('elem2');
appendText(elem2, 'Бытие ', 'определяет сознание');
</script>
/*Сделайте функцию appendText, которая первым параметром
будет принимать DOM элемент, а вторым - текст.
функция добавляла текст в конец этого элемента.*/


<p id="elemP"></p>
<p id="elemP"></p>
<p id="elemP"></p>

<script>
function appendText(elem, text, appendText){
	elem.textContent = text + appendText;
};

let ps = document.querySelectorAll('#elemP');
for (let p of ps) {
appendText(p, 'Валтасаров ', 'пир');
};
</script>
/*Даны абзацы. Получите их, переберите циклом и каждому
добавьте в конец текст с помощью функции appendText*/


<input id="inp" value =''>

<script>
function setValue(elem, text){
	elem.value = text;
};
let input = document.querySelector('#inp');
setValue(input, 'Вальпургиева ночь');
</script>
/*Сделайте функцию setValue, которая первым параметром будет
 принимать ссылку на инпут, а вторым - текст. данная функция
 устанавливала переданный текст в value инпута.*/


 <p class="elem"></p>
 <p class="elem"></p>
 <p class="elem"></p>

 <script>
  function setText(elems, text) {
 	for (let elem of elems) {
 		elem.textContent = text;
 	}
 }
 let els = document.querySelectorAll('.elem');
 setText(els, 'при Ватерлоо была разгромлена армия Наполеона');
  </script>
/*функция setText первым параметром будем принимать
ссылку не на один элемент, а сразу набор элементов
установим всем этим абзацам какой-нибудь текст*/


//CSS
td {
	width: 50px;
	height: 50px;
	border: 1px solid black;
}
//HTML
<div id="elem"></div>

<script>
let div = document.querySelector('#elem');
createTable(3, 4, div);

function createTable(rows, cols, parent) {
	let table = document.createElement('table');

  for (let i = 1; i <= rows; i++) {
  	let tr = document.createElement('tr');

  for (let j = 1; j <= cols; j++) {
		let td = document.createElement('td');
		td.innerHTML = j;
    tr.appendChild(td);
  };
  table.appendChild(tr);
};
	parent.appendChild(table);
};
</script>
//!!!! ОКаааааа
/*сделаем функцию createTable, которая будет будет создавать
 таблицу заданного размера*/


 <div id="elemD"></div>

 <script>
 let div = document.querySelector('#elemD');
 let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 createTableByArr(0, 0, div);//кол-во рядов и колонок = arr

 function createTableByArr(rows, cols, parent) {
 	let table = document.createElement('table');

   for (let subArr of arr) {
   	let tr = document.createElement('tr');

   for (let elem of subArr) {
 		let td = document.createElement('td');
 		td.textContent = elem;
     tr.appendChild(td);
   };
   table.appendChild(tr);
 };
 	parent.appendChild(table);
 };
 </script>
/*сделаем функцию createTableByArr, которая параметром будет
 принимать двухмерный массив и строить на его основе таблицу.
*/
