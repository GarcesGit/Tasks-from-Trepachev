

//CLOSURES ЗАМЫКАНИЯ CLOSURES ЗАМЫКАНИЯ CLOSURES ЗАМЫКАНИЯ CLOSURES ЗАМЫКАНИЯ CLOSURES ЗАМЫКАНИЯ CLOSURES ЗАМЫКАНИЯ CLOSURES




<div id="div1">10</div>
<div id="div2">10</div>

<script>
;(function() {
	let elem = document.querySelector('#div1'); // первый див

	function func(num) {
		return num * num;
	}
	elem.addEventListener('click', function() {
		this.textContent = func(elem.textContent);
	});
}) ();

;(function() {
	let elem = document.querySelector('#div2');

	function func(num) {
		return num * num * num;
	}
	elem.addEventListener('click', function() {
		this.textContent = func(elem.textContent);
	});
})();
</script>
/*Модули через замыкания
по клику по первому диву его значение возводилось в квадрат,
а по клику по второму диву - в куб.*/


<div id="div">3</div>
<button id="btn">click me</button>

<script>
;(function(selector1, selector2) {
	let div = document.querySelector(selector1);
	let btn = document.querySelector(selector2);

	function func(num) {
		return num * num;
	}
	btn.addEventListener('click', function() {
		div.textContent = func(div.textContent);
	});
})('#div', '#btn');
</script>
/*селекторы наших элементов  передать  параметрами модуля -
так в дальнейшем мы легко сможем их изменить.*/



<input id="inp1" >
<input id="inp2" >
<button id="btn">click me</button>

<script>
;(function(input1, input2, button) {
	let inp1 = document.querySelector(input1);
  let inp2 = document.querySelector(input2);
	let btn = document.querySelector(button);

	function func(num) {
    return Number(inp1.value) + Number(inp2.value);
}
	btn.addEventListener('click', function() {
		console.log(func());
	});
})('#inp1','#inp2', '#btn');
</script>
//по нажатию на кнопку выведите в консоль сумму введенных чисел.


<input id="inp" >
<input id="inp" >
<input id="inp" >
<button id="btn">click me</button>

<script>
;(function(inputs, button) {
	let inps = document.querySelectorAll(inputs);
	let btn = document.querySelector(button);

	function getSumOfInputs() {
    let sum = 0;
    for (let inp of inps) {
    sum += +inp.value;
}
    return sum;
}
	btn.addEventListener('click', function() {
		console.log(getSumOfInputs());
	});
})('#inp', '#btn');
</script>
//по нажатию на кнопку выведите в консоль сумму введенных чисел.
//!!!! OK


<div id="parent">
	<div id="div1">1</div>
	<div id="div2">2</div>
	<div id="div3">3</div>
	<div id="res"></div>

	<button id="btn">click me</button>
</div>

<script>
;(function(root) {
	let parent = document.querySelector(root);

	let div1 = parent.querySelector('#div1');
	let div2 = parent.querySelector('#div2');
	let div3 = parent.querySelector('#div3');

	let res  = parent.querySelector('#res');
	let btn  = parent.querySelector('#btn');

	btn.addEventListener('click', function() {
		let num1 = Number(div1.textContent);
		let num2 = Number(div2.textContent);
		let num3 = Number(div3.textContent);

		res.textContent = num1 + num2 + num3;
	});
})('#parent');
</script>
/*передают в модуль общего родителя всех элементов,
с которыми работает наш модуль, а уже внутри модуля
получают из этого родителя различные элементы*/


<script>
;(function(root, type, amount) {
	let parent = document.querySelector(root);

	for (let i = 1; i <= amount; i++) {
		let elem = document.createElement(type);
		parent.append(elem);
	}
})('#parent', 'p', 5);
</script>
//меняем парметры на объект с параметрами:
<script>
let config = {root: '#parent',	type: 'p',	amount: 5};

;(function(config) {
let parent = document.querySelector(config.root);

for (let i = 1; i <= config.amount;
	i++) {
	let elem = document.createElement(config.type);
	parent.append(elem);
}
})(config);
</script>
//ИЛИ меняем парметры на объект с параметрами:
<script>
let config = {root: '#parent',	type: 'p',	amount: 5};

;(function({root, type, amount}) {
let parent = document.querySelector(root);

	for (let i = 1; i <= amount; i++) {
		let elem = document.createElement(type);
		parent.append(elem);
	}
})(config);
</script>


<script>
;(function() {
	let str = 'переменная модуля';

	function func() {
		console.log('функция модуля');
	}
func();
})();
</script>
//вызвали функцию внутри модуля - снаружи не работает
//ИЛИ
;(function() {
	let str = 'переменная модуля';

	function func() {
		console.log('функция модуля');
	}
		window.func = func;
})();
window.func(); //ИЛИ
func();
</script>
/*ИЛИ запишем ее в свойство встроенного в браузер объекта window
и вызвали функцию снаружи модуля */


<script>
;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';

	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
  window.str1 = str1;
  window.func1 = func1;
})();
console.log(str1);
func1();
</script>
//Экспортируйте наружу одну из переменных и две любые функции.


<script>
;(function() {
	function func1() {
		alert('функция1 модуля');
	}
	function func2() {
		alert('функция2 модуля');
	}
	function func3() {
		alert('функция3 модуля');
	}
	window.module = {func1: func1, func2: func2, func3: func3};
//ИЛИ короче так как имена совпадают
	window.module = {func1, func2, func3};
})();
window.module.func3();
</script>
/*экспортировать наружу все три функции = записать все
 функции в один объект и выполнить экспорт этого объекта*/
