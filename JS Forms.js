"use strict";



//Формы Формы Формы Формы Формы Формы Forms Forms Forms Forms Forms Forms Forms Forms Forms Forms Формы Формы Формы Формы Формы Формы



<textarea id="elem">text</textarea>
<p id = 'p'>  </p>

<script>
let elem = document.querySelector('#elem');
let p = document.querySelector('p');
elem.addEventListener('blur', function () {
p.textContent = elem.value;
});
</script>
//По потери фокуса в текстареа запишите его текст в абзац.


<input id="elem" >
<button id = 'button1'> &#10007; </button>
<button id = 'button2'> &#10003; </button>

<script>
let elem = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', function() {
  elem.disabled = true;
  console.log(elem.disabled);
});
button2.addEventListener('click', function() {
  elem.disabled = false;
  console.log(elem.disabled);
});
</script>
//заблокируем/ разблокируем элемента


<input id= "elem" type="checkbox" checked >
<button id = 'button1'> &#128059; </button>
<button id = 'button2'> &#128060; </button>

<script>
let elem = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', function() {
  elem.checked = true;
});
button2.addEventListener('click', function() {
  elem.checked = false;
});
</script></script>
/*По нажатию на первую кнопку установите чекбокс в
отмеченное состояние, а по нажатию на вторую - в неотмеченное.*/


<input id= "elem" disabled>
<button id = 'button1'> &#x1F609; </button>

<script>
let elem = document.querySelector('#elem');
let button = document.querySelector('#button1');
button.addEventListener('click', function() {
	if (elem.disabled) {
		elem.disabled = false;
	} else {
		elem.disabled = true;
	}
});
</script>
//или короче
<script>
button.addEventListener('click', function() {
	elem.disabled = !elem.disabled;
});
</script>
/*каждое нажатие на кнопку приводило к смене состояния
инпута - с заблокированного на разблокированное и наоборот.*/


<input type="submit" id="button">
<input type="radio" name="elem" value="1" checked>
<input type="radio" name="elem" value="2">
<input type="radio" name="elem" value="3">

<script>
let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');
button.addEventListener('click', function() {
	for (let radio of radios) {
		if (radio.checked) {
			console.log(radio.value);
		}
	}
});
</script>
/*по нажатию на кнопку на экран вывелось value той радиокнопочки,
которая отмечена в данный момент.*/


<input id="elem" value="text">

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('change', function() {
	console.log(this.value);
});
</script>
//по потере фокуса в консоль выводится его новое значение инпута


<input id="elem" >

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('input', function() {
  let value = this.value;
  if (value.length >= 5) {
    elem.disabled = true;
  }
	console.log(this.value);
});
</script>
//в фокусе инпута в консоль выводятся все изменения посимвольно
//разрешено ввести 5 символов, затем инпут блокируется


<input id="elem1" value="">
<input id="elem2" value="">

<script>
let elem1   = document.querySelector('#elem1');
let elem2   = document.querySelector('#elem2');
let button = document.querySelector('#button');

elem1.addEventListener('input', function() {
  let value1 = elem1.value;
  if (value1.length >= 2) {
    elem2.focus();
  }
});
elem2.addEventListener('input', function() {
  let value2 = elem2.value;
  if (value2.length >= 2) {
    elem2.blur();
  }
});
</script>
/*после ввода двух символов фокус ввода переходил ко второму
 инпуту, а после ввода двух символов фокус из него убирался.*/


 <select id="select">
 	<option value="1">one</option>
 	<option value="2" selected>two</option>
 	<option value="3">three</option>
 </select>

 <script>
 let select = document.querySelector('#select');
 select.addEventListener('change', function(){
 	console.log(this.value);
 });
 </script>
 //при изменении селекта выведем на экран value выбранного пункта


 <select id="select">
 	<option value="one">один</option>
 	<option value="two" selected>два</option>
 	<option value="three">три</option>
 </select>
 <input type="submit" id="button">

 <script>
 let select = document.querySelector('#select');
 let button = document.querySelector('#button');
 button.addEventListener('click', function() {
 	select.value = 'one';
 });
 </script>
//при нажатии на кнопку наш селект сменил выбор


<select id="select">
	<option value='0'>January</option>
	<option value='1'>February</option>
	<option value="2">March</option>
	<option value="3">April</option>
	<option value="4">May</option>
	<option value="5">June</option>
	<option value="6">July</option>
	<option value="7">August</option>
	<option value="8">September</option>
 <option value="9" >October</option>
	<option value="10">November</option>
	<option value="11">December</option>
</select>

<script>
let select = document.querySelector('#select');
for (let month of select) {
	let date = new Date();
	let thisMonth = date.getMonth();
	if (month.value == thisMonth) {
		select.value = thisMonth;
	}
}
 </script>
//по умолчанию выбирал в этом списке текущий месяц
//OK


<select id="select">
	<option value="one">один</option>
	<option value="two" selected>два</option>
	<option value="three">три</option>
</select>

<script>
let select = document.querySelector('#select');
select.selectedIndex = 2; // выберет 'три'
</script>
/*свойство selectedIndex, хранящее в себе номер того
 пункта списка, который сейчас выбран*/


 <select id="select">
 	<option value='0'>Sunday</option>
 	<option value='1'>Monday</option>
 	<option value="2">Tuesday</option>
 	<option value="3">Wednesday</option>
 	<option value="4">Thursday</option>
 	<option value="5">Friday</option>
 	<option value="6">Saturday</option>
 </select>

 <script>
 let select = document.querySelector('#select');
 for (let day of select) {
 	let date = new Date();
 	let thisDay = date.getDay();
 	if (day.value == thisDay) {
 		select.selectedIndex = thisDay;
 	}
 }
  </script>
//по умолчанию выбирал в этом списке текущий день.


<select id="select">
	<option value='0'>Sunday</option>
	<option value='1'>Monday</option>
	<option value="2">Tuesday</option>
	<option value="3">Wednesday</option>
	<option value="4">Thursday</option>
	<option value="5">Friday</option>
	<option value="6" selected> Saturday  </option>
</select>

<script>
let select = document.querySelector('#select');
  for (let option of select) {
		option.textContent += option.value;
}
console.log(select[select.selectedIndex]);
 </script>
//в конец текста каждого пункта добавьте значение value.


<input type="checkbox">
<div></div>
<button>button</button>

<script>
let checkbox = document.querySelector('[type="checkbox"]');
let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', function() {
	if (checkbox.checked) {
		div.textContent = '111';
	} else {
		div.textContent = '222';
	}
});
</script>
//По клику на кнопку в див должно записаться или одно, или другое значение


<button id="elem">text</button>

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(event) {
	console.log(event);
});
</script>
//выведите объект с событием в консоль. Изучите структуру этого объекта.


<div id="elem">0 : 0</div>

<script>
let elem = document.getElementById('elem');
document.addEventListener('mousemove', function(event) {
	elem.innerHTML = event.clientX + ' : ' + event.clientY;
	elem.innerHTML = event.pageX + ' : ' + 	event.pageY;
});
</script>
/*При движении мыши по странице будем выводить ее координаты
относительно окна браузера (clientX и clientY)*/


<button id="elem">click</button>

<script>
let elem = document.getElementById('elem');
elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);
function func(event) {
	if (event.type === 'click') {
  elem.style.backgroundColor = "green";
}
 if (event.type === 'dblclick') {
   elem.style.backgroundColor = "red";
}
};
</script>
/*при клике на элемент этот элемент красился в зеленый цвет,
 а при двойном клике - в красный.*/


 <ul id="elem"> listing
 	<li>text</li>
 	<li>text</li>
 	<li>text</li>
 	<li>text</li>
 	<li>text</li>
 </ul>

 <script>
 let ul = document.querySelector('#elem');
  elem.addEventListener('click', function(event) {
 	if (event.target.tagName === "UL") {
     let newLi = document.createElement('li');
     newLi.innerHTML = 'text';
     elem.appendChild(newLi); //appendChild УСТАРЕВШЕЕ, elem.append(newLi) - OK
   };
   if (event.target.tagName === "LI") {
     event.target.textContent += '!';
   };
 });
 </script>
// НЕ МОЙ
/*проверяйте с помощью свойства tagName, по какому тегу был
 клик. Если клик был по тегу li - добавьте в конец текста
 этого тега восклицательный знак. А если клик был по тегу ul
 - добавьте ему в конец еще один пункт списка.*/


 <input>

 <script>
 let elem = document.querySelector('input');
 elem.addEventListener('keypress', function(event) {
 		console.log(event.key); //4
    console.log(event.code);//Digit4
 });
 </script>
//Получение нажатых клавиш


<input id =input1>
<input id =input2>

<script>
let elem1 = document.querySelector('#input1');
let elem2 = document.querySelector('#input2');
elem1.addEventListener('keypress', function(event) {
  elem2.value = event.key + '(' + event.code + ')';
});
</script>
//инпут, выводит значения введенных клавиш и их коды.


<input id =input>
<p id = p></p>

<script>
let elem = document.querySelector('#input');
let p = document.querySelector('#p');
elem.addEventListener('keypress', function(event) {
   if (event.key == 'Enter') {
    p.textContent = elem.value;
    elem.value = '';
}
});
</script>
/*вводится текст и нажимается клавиша Enter. Сделайте так,
чтобы в этот момент введенный текст попадал в абзац под
 инпутом, а содержимое инпута очищалось.*/
//OK


<button id="elem">text</button>

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(event) {
	if (event.ctrlKey) {
		console.log('нажат Ctrl');
	}
	if (event.altKey) {
		console.log('нажат Alt');
	}
	if (event.shiftKey) {
		console.log('нажат Shift');
	}
});
</script>
/*По клику на кнопку будем выводить сообщение о том, была
ли нажата одна из клавиш Ctrl, Alt и Shift*/


<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>

<script>
let elems = document.querySelectorAll('li');
for (let elem of elems) {
	elem.addEventListener('click', function func(event) {
    if (event.ctrlKey) {
        this.innerHTML += ' 1';
    	}
      if (event.shiftKey) {
          this.innerHTML += ' 2';
      }
	});
}
</script>
/*по клику на любую li, в конец ее текста добавлялось число 1,
 если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.*/


<a href="/" id="elem">ссылка</a>

<script>
 let elem = document.querySelector('#elem');
  elem.addEventListener('click', function(event) {
 	event.preventDefault();
 	console.log('Вы не можете перейти по этой ссылке!');
 });
</script>
//по клику на ссылку не происходило перехода на другую страницу


<div id="elem1"> 1
	<div id="elem2">2
		<div id="elem3">3</div>
	</div>
</div>

<script>
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
elem1.addEventListener('click', function() {
	console.log('зеленый');
});
elem2.addEventListener('click', function() {
	console.log('голубой');
	event.stopPropagation();
});
elem3.addEventListener('click', function() {
	console.log('красный');
});
</script>
/*Нажмите теперь на самый внутренний красный блок - и вы
 увидите, как событие сначала сработает в красном блоке,
 потом в голубом, потом в зеленом.
 Всплытие события остановили после красного */


 <div>1
 	<p>2</p>
 </div>

 <script>
 let div = document.querySelector('div');
 div.addEventListener('click', function(event) {
 	if (event.target.tagName === 'DIV') {
 		console.log('клик именно по диву');
 	}
 	if (event.target.matches('p')) {
 		console.log('клик именно по	абзацу');
 	}
 });
  </script>
//получить именно тот тег, в котором случилось событие.


<div>
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
</div>

<script>
let div = document.querySelector('div');
div.addEventListener('click', function(event) {
  console.log(event.target.tagName);
});
</script>
//определите в каком из тегов сработало событие.

<div>
<ul>
	<li>item</li>
	<li>item</li>
	<li>item</li>
	<li>item</li>
	<li>item</li>
</ul>
</div>

<script>
let div = document.querySelector('div');
let li = document.querySelectorAll('li');
let ul = document.querySelector('ul');

div.addEventListener('click', function(event) {
  if (event.target.matches('li')) {
    event.target.textContent += '!';
  }
 	if (event.target.matches('ul')) {
    let newLi = document.createElement('li');
    newLi.textContent = 1;
    ul.append(newLi);
 	}
 });
</script>
/*при клике на li, ей в конец добавлялся восклицательный
знак, а при клике на ul - ей в конец добавлялась новая li.*/


<div id="elem1"> 1
	<div id="elem2">2
		<div id="elem3">3</div>
	</div>
</div>

<script>
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
elem1.addEventListener('click', function() {
	console.log('зеленый - погружение');
}, true);
elem1.addEventListener('click', function() {
	console.log('зеленый - всплытие');
}, false);
elem2.addEventListener('click', function() {
	console.log('голубой - погружение');
}, true);
elem2.addEventListener('click', function() {
	console.log('голубой - всплытие');
}, false);
elem3.addEventListener('click', function() {
	console.log('красный - погружение');
}, true);
elem3.addEventListener('click', function() {
	console.log('красный- всплытие');
}, false);
</script>
//проверка стадий погружение-всплытие


<ul>
	<li>item</li>
	<li>item</li>
	<li>item</li>
	<li>item</li>
	<li>item</li>
</ul>
<button>add</button>

<script>
let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');

function handler() {
	this.innerHTML = this.innerHTML + '!';
}

for (let item of items) {
	item.addEventListener('click', handler);
}

button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.innerHTML = 'item';
		item.addEventListener('click', handler);
		list.appendChild(item);
});
</script>
//по клику на любую li ей в конец добавлялся восклицательный знак
//по нажатию на кнопку в конец списка добавлялся новая li и ей добавлялся восклицательный знак


<ul>
	<li>item <i>italic</i> item</li>
	<li>item <i>italic</i> item</li>
	<li>item <i>italic</i> item</li>
	<li>item <i>italic</i> item</li>
	<li>item <i>italic</i> item</li>
</ul>

<script>
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');

list.addEventListener('click', function(event) {
	let li = event.target.closest('li');

	if (li) {
		li.innerHTML = li.innerHTML + '!';
	}
});

</script>
/*метод closest - событие в ближайшем
родительском элементе, включая сам элемент */


<input id="elem1" value="text1">
<input id="elem2" value="text2">

<script>
let elem1 = document.querySelector('#elem1');
elem1.addEventListener('blur', func);

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('blur', func);

function func() {
	console.log(this.value); // выведет или 'text1', или 'text2'
}
</script>
//одна функция привязана к двум событиям


<script>
let timestamp = 3601;
let hours = Math.floor(timestamp/60/60); // 2.628333333 //2
let minutes = Math.floor(timestamp/60)-(hours * 60); //157-120=37
let seconds = timestamp % 60;
let time = [
  hours.toString().padStart(2, '0'),
  minutes.toString().padStart(2, '0'),
  seconds.toString().padStart(2, '0')
].join(':');
console.log(time);
</script>
//ЗАДАЧА
//преобразовать секунды в часы минуты секунды 00:00:00


<input id="elem" value="text">

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);
function parent() {
	console.log(this.value);
	let self = this;
	function child() {
		console.log(self.value);
	}
	child();
}
</script>
// this указывает не на то, что нам нужно = потеря контекста.
// решение - запишем this в любую переменную


<input id="elem" value="3">

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
  let self = this;
	alert( square() );

	function square() {
		return self.value * self.value;
	}
}
</script>
//решение #1 потери контекста


<input id="elem" value="3">

<script>

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
	alert( square(this) );

	function square(param) {
		return param.value * param.value;
	}
}
</script>
//решение #2 потери контекста


<input id="elem" value="3">

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value);

	let child = () => {
		console.log(this.value);
	}
	child();
}
</script>
//решение #3 потери контекста - стрелочная функция


<input id="elem1" value="text1">
<input id="elem2" value="text2">
<input id="elem3" value="text3">

<script>
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
function func() {
	console.log(this.value);
}
func.call(elem1);
func.call(elem2);
func.call(elem3);
</script>
/* С помощью метода call и функции func выведите на
экран value каждого из инпутов.*/


<input id="elem" value="hello">

<script>
let elem = document.querySelector('#elem');
function func(name, surname) {
	console.log(this.value + ', ' + name 	+ ' ' + surname);
}
func.call(elem, 'John', 'Smit');
</script>
// тут должно вывести 'hello, John Smit'
//метод call


<input id="elem" value="hello">

<script>
let elem = document.querySelector('#elem');
function func(name, surname) {
	console.log(this.value + ', ' + name 	+ ' ' + surname);
}
func.apply(elem, ['John', 'Smit']);
</script>
// тут должно вывести 'hello, John Smit'
//метод apply


<input id="elem" value="text">

<script>
let elem = document.querySelector('#elem');
function func(param1, param2) {
	console.log(this.value + param1 + param2);
}
func = func.bind(elem);
func('1', '2');
</script>
//метод bind
