

//ADDING ELEMENTS ADDING ELEMENTS ADDING ELEMENTS ADDING ELEMENTS ADDING ELEMENTS ADDING ELEMENTS ADDING ELEMENTS ADDING ELEMENTS ADDING ELEMENTS



<ol id="elem"></ol>

<script>
let ol = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'item';
ol.appendChild(li);
</script>
//добавление элемента в конец родителя


<ul id="parent"></ul>

<script>
let ul = document.querySelector('#parent');

for (let i = 1; i <= 10; i++) {
	let li = document.createElement('li');
	li.textContent = ++ul.children.length;
;
	ul.appendChild(li);
}
</script> //!!!!
/*Запустите цикл, который вставит в него 10 тегов li.
Сделайте так, чтобы текстом каждой li был ее порядковый номер.*/


<p>elem 1</p>
<p>elem 2</p>
<p>elem 3</p>
<p>elem 4</p>
<p>elem 5</p>

<script>
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function() {
		elem.remove();
	});
}
</script>
//любой абзац удалялся по клику на нем


<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>

<input type="submit" id="button">

<script>
let ul = document.querySelector('#parent');
let lis = document.querySelector('li');
let input = document.querySelector('#button');

	input.addEventListener('click', function() {
		ul.lastElementChild.remove();
	});
</script>
//по каждому клику на кнопку удалялся последний элемент из #parent.


<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

<script>
let parent = document.querySelector('#parent');

let p1 = document.createElement('p');
p1.innerHTML = 'a';
let p2 = document.createElement('p');
p2.innerHTML = 'b';

parent.append(p1, p2, '!');
</script>
//Поместим сразу несколько элементов в конец блока #parent


<ul id="parent"></ul>

<script>
let parent = document.querySelector('#parent');

for (let i = 1; i <= 9; i++) {
	let li = document.createElement('li');
	li.innerHTML = i;
	parent.append(li);
}
</script>
/*Дан ul. Давайте разместим в нем 9 тегов li, при этом их текстом сделаем порядковые номера*/// !!!!


<table id="table"></table>

<script>
let table = document.querySelector('#table');

for (let i = 1; i <= 3; i++) {
	let tr = document.createElement('tr');

	for (let j = 1; j <= 3; j++) {
		let td = document.createElement('td');
		td.innerHTML = j;
		tr.append(td); // добавляем созданную td-шку в конец tr-ки
	}
		table.append(tr); // добавляем созданную tr-ку в конец таблицы
}
</script>
//заполним таблицу tr-ками и td-шками


<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>

<script>
let parent = document.querySelector('#parent');
let p1 = document.createElement('p');
p1.innerHTML = 'a';
let p2 = document.createElement('p');
p2.innerHTML = 'b';
parent.prepend(p1, p2);
</script>
//Поместим сразу несколько абзацев в начало блока #parent


<div id="parent">
	<p>elem 1</p>
	<p id="before">elem 2</p>
	<p>elem 3</p>
</div>

<script>
let parent = document.querySelector('#parent');
let before = document.querySelector('#before');

let p = document.createElement('p');
p.innerHTML = '!';
parent.insertBefore(p, before);
</script>
/*Метод insertBefore позволяет вставить элемент перед другим элементом.  */


 <ul id="elem">
 	<li>text</li>
 </ul>

 <script>
 let ul = document.querySelector('#elem');

 let li1 = document.createElement('li');
 li1.innerHTML = 'start';
 ul.prepend(li1);

 let li2 = document.createElement('li');
 li2.innerHTML = 'finish';
 ul.append(li2);
  </script>
/*Вставьте ul в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.*/


<ul id="parent">
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
</ul>

<script>
let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');

let li = document.createElement('li');
li.innerHTML = 'new';
parent.insertBefore(li, elem);
li.addEventListener('click', function() {
  li.innerHTML = li.innerHTML + '!';
});
</script>


<div id="target">
	<p>elem</p>
</div>

<script>
let p1 = document.createElement('p');
p1.innerHTML = '1!';
let p2 = document.createElement('p');
p2.innerHTML = '2!';
let p3 = document.createElement('p');
p3.innerHTML = '3!';
let p4 = document.createElement('p');
p4.innerHTML = '4!';

let target = document.querySelector('#target');

target.insertAdjacentElement('beforeBegin', p1);
target.insertAdjacentElement('afterEnd', p2);
target.insertAdjacentElement('afterBegin', p3);
target.insertAdjacentElement('beforeEnd', p4);
</script>
//вставка элементов Методом insertAdjacentElement


<div id="elem" style="border: 1px solid red;">
  <p>text</p>
	<p>text</p>
</div>

<script>
let elem = document.querySelector('#elem');

elem.insertAdjacentHTML('beforeBegin', '<p>!!!</p>');
elem.insertAdjacentHTML('afterBegin', '<p>!!!</p>');
elem.insertAdjacentHTML('beforeEnd', '<p>!!!</p>');
elem.insertAdjacentHTML('afterEnd', '<p>!!!</p>');
</script>
//вставка элементов Методом insertAdjacentHTML


<div id="parent">
	<div class="elem">
		<p>первый абзац</p>
		<p>второй абзац</p>
	</div>
</div>

<script>
let parent = document.querySelector('#parent');
let elem = parent.querySelector('.elem');

let clone = elem.cloneNode(true);
parent.appendChild(clone);
</script>
//клонирование элементов


<p id="elem" class="www"></p>

<script>
let elem = document.querySelector('#elem');
console.log(elem.matches('p.www'));
</script>
/*true Метод matches позволяет проверить, удовлетворяет ли  элемент указанному CSS селектору.*/


 <div id="parent">
 	<p id="child"></p>
 </div>

 <script>
 let parent = document.querySelector('#parent');
 let child = document.querySelector('#child');

 let contains = parent.contains(child);
 console.log(contains);
  </script>
 /*true Метод contains позволяет проверить, содержит ли один элемент внутри себя другой.*/


<div id="parent"></div>

<script>
let parent = document.querySelector('#parent');
let arr = [1,2,3,4,5];

for (let elem of arr) {
  let p = document.createElement('p');
    p.textContent = elem;
    parent.appendChild(p);

  p.addEventListener('click', function (){
    p.textContent = +p.textContent + 1;
  });
};
</script>
/*добавим в наш родитель новые абзацы, текстом которых
будут элементы нашего массива. по клику на абзац к его
содержимому прибавлялась единица.*/


<ul id="elem"></ul>

<script>
let ul = document.querySelector('#elem');
let arr = [1,2,3,4,5];

for(let elem of arr) {
  let li = document.createElement('li');
  li.textContent = elem;
  ul.appendChild(li);

  li.addEventListener('click', function func(){
    li.textContent = li.textContent + '!';
  li.removeEventListener('click', func);
});
}
</script>
/*Вставьте элементы массива в конец ul так, чтобы каждый
элемент стоял в своем li. по клику на li в конец добавлялся '!'.
повторное нажатие на li не приводило к добавлению второго '!'.*/


<table id="table" style="border: 2px solid green;"> </table>
<br> add rows:
<input id='inputTr'>
<br> add columns:
<input id='inputTd'>
<button id='button'> CREATE TABLE </button>

<script>
let table = document.querySelector('#table');
let inputTr = document.querySelector('#inputTr');
let inputTd = document.querySelector('#inputTd');
let button = document.querySelector('#button');

button.addEventListener('click', function () {

for (let i = 0 ; i < inputTr.value; i++) {
  tr = document.createElement('tr');

  for (let i = 0; i < inputTd.value; i++) {
    td = document.createElement('td');
    td.innerHTML = 'чета';
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
button.removeEventListener('click', func);
});

</script>
/*Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах !!!! */


<table id="table" style="border: 1px solid orange;"> </table>

<script>
let table = document.querySelector('#table');
let k = 1;

for (let i = 0; i < 5; i++) {
	let tr = document.createElement('tr');

	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
		td.textContent = k; // записываем счетчик в ячейку
    k++; // увеличиваем счетчик
    		tr.appendChild(td);
	}
		table.appendChild(tr);
}
</script>
//в ячейки записывались числа по возрастанию.


<table id="table" style="border: 1px solid orange;"> </table>

<script>
let table = document.querySelector('#table');
let k = 2;

for (let i = 0; i < 7; i++) {
	let tr = document.createElement('tr');
	for (let i = 0; i < 7; i++) {
		let td = document.createElement('td');

    if (k % 2 == 0 && k <= 50) {
    td.textContent = k;
    }
    k++;
		tr.appendChild(td);
	}
		table.appendChild(tr);
}
</script>
//в ячейки записывались четные числа по возрастанию.


<table id="table" style = 'border: 2px solid green;'> </table>

<script>
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let table = document.querySelector('#table');

for (let subArr of arr) {
	let tr = document.createElement('tr');

	for (let elem of subArr) {
		let td = document.createElement('td');
		td.textContent = elem;
		tr.appendChild(td);
	}
	table.appendChild(tr);
}
</script>
//на основе этого массива сделаем HTML таблицу, заполненную элементами данного массива


<table id="table" style="border: 1px solid blue;"> </table>

<script>
let table = document.querySelector('#table');
let users = [
	{
		name: 'name1',
		surname: 'surname1',
		patronymic: 'patronymic1'
	},
	{
		name: 'name2',
		surname: 'surname2',
		patronymic: 'patronymic2'
	},
	{
		name: 'name3',
		surname: 'surname3',
		patronymic: 'patronymic3'
	},
];

for (let user of users) {
	let tr = document.createElement('tr');

	let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);

	let td2 = document.createElement('td');
	td2.textContent = user.surname;
	tr.appendChild(td2);

	let td3 = document.createElement('td');
	td3.textContent = user.patronymic;
	tr.appendChild(td3);

	table.appendChild(tr);
}
</script>
//сделаем из этого массива объектов HTML таблицу


<table id="table" style="border: 1px solid blue;">
  <tr>
		<td>1</td>
    <td>1</td>
    <td>1</td>
	</tr>
	<tr>
		<td>1</td>
		<td>1</td>
    <td>1</td>
</tr>
</table>

<script>
let table = document.querySelector('#table');

let tr = document.createElement('tr');
for (let i = 1; i <= 3; i++) {
	let td = document.createElement('td');
	td.textContent = 'row';
	tr.appendChild(td);
	table.appendChild(tr);
}

let trs = document.querySelectorAll('#table tr');
for (let tr of trs) {
	let td = document.createElement('td');
  td.textContent = 'col';
	tr.appendChild(td);
}
</script>
//добавление рядов и колонок в таблицу


<table id="table" style="border: 1px solid blue;">
  <tr>
		<td></td>
    <td></td>
	</tr>
	<tr>
		<td></td>
    <td></td>
</tr>
</table>

<script>
let tds = document.querySelectorAll('#table td');
for (let td of tds) {
	td.textContent = '!';
}
</script>
//записать текст в каждую ячейку таблицы


<div id="parent"></div>

<script>
let parent = document.querySelector('#parent');

for (let i = 1; i <= 9; i++) {
	let p = document.createElement('p');
	p.textContent = i;

	p.addEventListener('click', function() {
		this.remove();
	});
	parent.appendChild(p);
}
</script>
//создадим 9 новых абзацев, любой абзац удалялся по клику на нем


<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
<input type="submit" id="button">

<script>
let ul = document.querySelector('#parent');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
  let lis = document.createElement('li');
    ul.appendChild(lis);

  lis = document.querySelectorAll('#parent li');
  	for (let li of lis) {
  		li.addEventListener('click', function() {
    	this.remove();
		});
	}
	for (let i = 0; i <= lis.length;) {
	  let elem = lis[i++]; // = li
	    elem.innerHTML = i;
		}
});
</script>
//ОК !!!! ОКаааааа !!!!
/*по клику на кнопку в список добавлялся новый элемент.
Сделайте так, чтобы любая li удалялась по клику на нее.
Текст li - ее порядковый номер. */


<div id="parent">
	<p id="elem">text</p>
	<a href="#" id="remove">remove</a>
</div>

<script>
let elem   = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function() {
	elem.remove();
  event.preventDefault(); // отменяем переход по ссылке
});
</script>
//сделаем ссылку, с помощью которой этот абзац можно будет удалить.


<div id="parent">
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>
</div>

<script>
let elems = document.querySelectorAll('#parent p');

for (let elem of elems) {
	let remove = document.createElement('a');
	remove.href = '';
	remove.textContent = 'remove';
	elem.appendChild(remove);

	remove.addEventListener('click', function(event) {
		elem.remove();
		event.preventDefault();
	});
}
</script>
/*Каждому абзацу в конец добавлялась ссылка на его удаление.
По нажатию на ссылку, удалялся соответствующий ей абзац*/


<table id="table" style="border: 1px solid blue;" width="200">
  <tr>
		<td>1</td>
    <td>2</td>
</tr>
	<tr>
		<td>1</td>
    <td>2</td>
</tr>
</table>

<script>
let table = document.querySelector('#table');

let trs = document.querySelectorAll('#table tr');
for (let tr of trs) {
	let td = document.createElement('td');
	tr.appendChild(td);
}

let tds = document.querySelectorAll('#table tr');
  for (let td of tds) {
	let delet = document.createElement('a');
	delet.href = '#';
	delet.textContent = 'delete row';
	td.appendChild(delet);

	delet.addEventListener('click', function(event) {
		td.remove();
		td.preventDefault();
	});
}
</script>
/*Дана HTML таблица. Добавьте в нее еще одну колонку, в
которой для каждого ряда таблицы будет стоять ссылка
на удаление этого ряда. !!!! */


<div id="parent">
	<p id="elem">text</p>
	<input id="input">
</div>

<script>
let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.textContent; 	// записываем в инпут текст абзаца
input.addEventListener('input', function() {
	elem.textContent = this.value;
});
</script>
/*редактировать тексты элементов с помощью полей ввода.
По заходу на страницу в инпуте уже стоял текст абзаца.
С помощью инпута сможем редактировать текст в абзаце.*/


<div id="parent">
	<p id="elem">text</p>
</div>

<script>
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem.textContent;

  input.addEventListener('blur', function() {
  		elem.textContent = this.value;
      this.remove();
  	});

	elem.parentElement.appendChild(input); //elem.parentElement = div
});
</script>
/*С помощью инпута сможем редактировать текст в абзаце.
Инпут появляется и удаляется*/



<div id="parent">
	<p id="elem">text</p>
</div>

<script>
let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
  let input = document.createElement('input');
    input.value = elem.textContent; // сначала записываем текст абзаца в инпут
    elem.textContent = ''; // затем убираем текст абзаца
    elem.appendChild(input); // затем вставляем инпут

    input.addEventListener('blur', function() {
    elem.textContent = this.value;
    elem.addEventListener('click', func); // повесим событие обратно
  });
    elem.removeEventListener('click', func);
  });
</script>
/*при редактировании инпут появлялся в самом абзаце - вместо
текста этого абзаца. При окончании редактирования инпут будет
 убираться, а вместо него опять появляться текст абзаца*/


//то же для группы элементов
 <p>text1</p>
 <p>text2</p>
 <p>text3</p>

 <script>
 let elems = document.querySelectorAll('p');

 for (let elem of elems) {
 elem.addEventListener('click', function func() {
   let input = document.createElement('input');
     input.value = elem.textContent;
     elem.textContent = '';
     elem.appendChild(input);

     input.addEventListener('blur', function() {
     elem.textContent = this.value;
     elem.addEventListener('click', func);
   });
     elem.removeEventListener('click', func);
   });
 }
 </script>


 <div id="parent">
 	<p><span>text1 </span><a href=""> remove</a></p>
 	<p><span>text2 </span><a href=""> remove</a></p>
 	<p><span>text3 </span><a href=""> remove</a></p>
 </div>

 <script>
 let elems = document.querySelectorAll('span');

 for (let elem of elems) {
 	elem.addEventListener('click', function func() {
 		let input = document.createElement('input');
 		input.value = elem.textContent;
 		elem.textContent = '';
 		elem.appendChild(input);

 		input.addEventListener('blur', function() {
 			elem.textContent = this.value;
 			elem.addEventListener('click', func);
 		});

  		elem.removeEventListener('click', func);
 	});
 }
  </script>
/*Оберните текст абзаца в теги span, добавьте к этим
 тегам возможность редактирования, добавьте в конец каждого
  абзаца ссылку на удаление. ссылка не попадает в инпут*/


	//CSS:
	.hidden {
		display: none; }
	//HTML
	<p id="elem">text</p>
	<input type="submit" id="show" 	value="show">
	<input type="submit" id="hide" 	value="hide">

	<script>
	let elem = document.querySelector('#elem');
	let show = document.querySelector('#show');
	let hide = document.querySelector('#hide');

	hide.addEventListener('click', function() {
		elem.classList.add('hidden');
	});
	show.addEventListener('click', function() {
		elem.classList.remove('hidden');
	});
		</script>
/*по клику на одну кнопку наш абзац скрывался, а на другую - показывался.
Будем для этого давать или убирать элементу соответствующий CSS класс */


//CSS:
.hidden {
	display: none; }
//HTML
<p id="elem">text</p>
<input type="submit" id="hideShow" 	value="Hide/Show">

<script>
let elem = document.querySelector('#elem');
let hideShow = document.querySelector('#hideShow');

hideShow.addEventListener('click', function hide() {
	elem.classList.toggle('hidden');
});
</script>
/*по первому клику на эту кнопку элемент показывается,
а по второму - скрывается.*/


//CSS:
.hidden {
	display: none; }
//HTML
<p>1 </p>  <button>toggle</button>
<p>2 </p>  <button>toggle</button>
<p>3 </p>  <button>toggle</button>

<script>
let buttons = document.querySelectorAll('button');
let elems   = document.querySelectorAll('p');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		elems[i].classList.toggle('hidden');
	});
}
</script>
//по клику на кнопку скрывался или показывался соответствующий ей абзац.
//ИЛИ
<script>
let buttons = document.querySelectorAll('button');

for (let button of buttons) {
	button.addEventListener('click', function() {
		this.previousElementSibling.classList.toggle('hidden');
	});
}
</script>


//CSS:
.active {
	background: red;
}
//HTML
<table id="table" style="border: 1px solid blue;" width="200">
  <tr>
		<td>1</td>
    <td>2</td>
</tr>
	<tr>
		<td>1</td>
    <td>2</td>
</tr>
</table>

<script>
let tds = document.querySelectorAll('#table td');

for (let td of tds) {
	td.addEventListener('click', function() {
		this.classList.toggle('active');
	});
}
</script>
/*по нажатию на любую ячейку она активировалась- становилась
 красного фона. Потом по нажатию на активированный пункт
 активация с него снималась.*/


//CSS
.color1 {
	background: red;}
.color2 {
	background: green;}
//HTML
	<table id="table" style="border: 1px solid blue;" width="200">
	  <tr>
			<td>1</td>
	    <td>2</td>
	</tr>
		<tr>
			<td>1</td>
	    <td>2</td>
	</tr>
	</table>

<script>
	let tds = document.querySelectorAll('#table td');

	let color = 'color1';
	for (let td of tds) {
		td.addEventListener('click', function() {
			if (color == 'color1') {
				color = 'color2'
			} else {
				color = 'color1'
			}
			this.classList.add(color);
		});
	}
</script>
/*чередование цветов: пусть первая ячейка красится в красный,
 вторая - в зеленый, третья - опять в красный и так далее.*/


//CSS
.color1 {
	background: red;}
.color2 {
	background: green;}
.color3 {
	background: yellow;}
	//HTML
		<table id="table" style="border: 1px solid blue;" width="200">
		  <tr>
				<td>1</td>
		    <td>2</td>
		</tr>
			<tr>
				<td>1</td>
		    <td>2</td>
		</tr>
		</table>

		<script>
		let tds = document.querySelectorAll('#table td');

		let i = 0;
		let colors = ['color1', 'color2',
			'color3'];

		for (let td of tds) {
			td.addEventListener('click', function() {
				this.classList.add(colors[i]);

				i++;
				if (i == colors.length) {
					i = 0;
				}
			});
		}
		</script>
/*чередовать не два цвета, а произвольное количество.
Давайте для этого будем хранить массив CSS классов*/


<ul id="parent"></ul>

<script>
let ul = document.querySelector('#parent');
let arr = [1,2,3,4,5];

for (let elem of arr) {
let li = document.createElement('li');
li.textContent = elem;
ul.appendChild(li);
};
</script>
//Дан массив. Выведите его элементы в виде списка ul.
