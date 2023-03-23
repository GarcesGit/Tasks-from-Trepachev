


//Таймеры Таймеры Таймеры Таймеры Таймеры Таймеры  Timer Timer Timer Timer Timer Timer Timer Timer Timer Timer Timer Timer



<script>

setInterval(timer, 3000);
function timer() {
	alert('!');
}
//ИЛИ
setInterval(function () {
	console.log('?');
}, 3000);

</script>
/*Запустите таймер, который каждые 3 секунды будет
что-нибудь выводить в консоль.*/


<script>
let i = 0;
setInterval(function() {
	i++;
	console.log(i);
}, 1000);

//ИЛИ
let j = 0;
setInterval(() => console.log(++j),
1000);
</script>
//каждую секунду в консоль выводились числа по возрастанию


<script>
let i = 10;
let timerId = setInterval(function() {
	console.log(--i);
	if (i == 0) {
		clearInterval(timerId);
	}
}, 1000);
</script>
//Как только значение переменной достигнет нуля - остановите таймер.


<button id="start">start</button>

<script>
let start = document.querySelector('#start');
start.addEventListener('click', function() {
	let i = 100;
	setInterval(function() {
		console.log(i--);
  }, 1000);
});
</script>
/*Сделайте кнопку, по нажатию на которую в консоль будет
 выводится обратный отсчет, начиная с 100.*/


 <button id="start">start</button>

<script>
let start = document.querySelector('#start');
start.addEventListener('click', function func()
 	 {
 	let i = 0;

 	setInterval(function() {
 		console.log(++i);
 	}, 1000);

 	this.removeEventListener('click', func);
 });
</script>
/* отвязываем обработчик чтобы повторное нажатие на кнопку
не приводило к новому запуску таймера*/


<button id="start">start</button>
<button id="stop">stop</button>

<script>

let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let timerId;

start.addEventListener('click', function func() {
	let i = 100;

	timerId = setInterval(function () {
		console.log(i--);
	}, 1000);
  	this.removeEventListener('click', func);
});

stop.addEventListener('click', function () {
	clearInterval(timerId);
});
</script>
/*По нажатию на первую кнопку запустите таймер,
По нажатию на вторую кнопку остановите таймер. */


<p id="elem">0</p>
<button id="button-start">start</button>
<button id="button-stop" disabled>stop</button>

<script>
let elem = document.querySelector('#elem');
let buttonStart = document.querySelector('#button-start');
let buttonStop = document.querySelector('#button-stop');

buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);
let id;

function start() {
	id = setInterval(function() {
		elem.innerHTML = Number(elem.innerHTML) + 1;
	}, 1000);
	console.log(id);
	this.disabled = true;
	buttonStop.disabled = false;
}

function stop() {
	clearInterval(id);
	this.disabled = true;
	buttonStart.disabled = false;
}
</script>
/* 2По нажатию на первую кнопку запустите таймер,
По нажатию на вторую кнопку остановите таймер. */


<p id="elem">0</p>
<button id="button">start</button>

<script>
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', start);
let id;

function start() {
	id = setInterval(function() {
		elem.innerHTML = Number(elem.innerHTML)
			+ 1;
	}, 1000);
	this.removeEventListener('click', start);
	this.addEventListener('click', stop);
	this.innerHTML = 'stop';
}

function stop() {
	clearInterval(id);
	this.removeEventListener('click', stop);
	this.addEventListener('click', start);
	this.innerHTML = 'start';
}
</script>
/* По нажатию на одну кнопку запустите или остановите таймер. */


<input type="submit" id="start" value="start">
<input type="submit" id="stop" 	value="stop">

<script>
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let timerId;
start.addEventListener('click', function() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getHours() + ':' +	date.getMinutes() + ':' +	date.getSeconds());
	}, 1000);
	this.removeEventListener('click', func);
});
stop.addEventListener('click', function() {
	clearInterval(timerId);
});
</script>
/*по нажатию на кнопку запускает/останавливает таймер, выводящий
в консоль текущий момент времени*/


<input id="elem" value="1">

<script>
let elem = document.querySelector('#elem');
setInterval(function () {
  elem.value = Number(elem.value) + 1;
}, 1000);
</script>
/*таймер, который каждую секунду увеличивает значение
атрибута value нашего инпута на единицу*/


<input id="elem" value="10">

<script>
let elem = document.querySelector('#elem');

let timer = setInterval(function () {
  elem.value = Number(elem.value) - 1;

  if (elem.value <= 0) {
    clearInterval(timer);
  }
}, 1000);
</script>
/*Запустите таймер, который каждую секунду будет уменьшать число
на единицу.как только станет равно нулю, таймер прекратил */


<input id="elem" value="text">

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
  let self = this;
setInterval(function() {
  console.log(self.value);
}, 1000);
});
</script>
//решения проблем с контекстом (this не указывает на инпут во внутренней функции)


<input id="elem" value="text">

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
	setInterval(() => console.log(this.value),
	 1000);
});
</script>
//решения проблем с контекстом (this не указывает на инпут во внутренней функции)


<input id="elem" value="text">

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
  function func(self) {
    return function() {
      console.log(self.value);
}
}
setInterval(func(this), 1000);
});
</script>
//решения проблем с контекстом (this не указывает на инпут во внутренней функции)


<input id="elem" value="text">

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
	setInterval(func, 1000, this); // параметром 	передаем this

	function func(self) { // в self попадает this
		console.log(self.value);
	}
});
</script>
//ИЛИ
<script>
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function(self) {
		console.log(self.value);
	}, 1000, this);
});
</script>
//решения проблем с контекстом (this не указывает на инпут во внутренней функции)


<input id="elem" value="10">

<script>
let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
	setInterval(function(self) {
		self.value--;
	}, 1000, this);
});
</script>
//по нажатию значение каждую секунду уменьшалось на 1.


<button id="elem"> PUSH </button>
<p> 3 </p>

<script>
let elem = document.querySelector('#elem');
let p = document.querySelector('p');
let num = Number(p.textContent);

elem.addEventListener('click', function () {
	let timer = setInterval(function () {
    --num;
    p.textContent = num;

    if (num == 0) {
    clearInterval(timer);
    }
  }, 1000);
});
</script>
/*По нажатию на кнопку запустите таймер, который каждую секунду
будет уменьшать текст абзаца на 1. Как только значение абзаца
станет равно нулю - остановите таймер.*/


<input id="elem" value = '2'>

<script>
let elem = document.querySelector('#elem');

	setInterval(function () {
    elem.value = Number(elem.value) **2;
  }, 1000);
</script>
/*Дан инпут с числом. Сделайте так, чтобы каждую секунду в
нем появлялся квадрат того числа, которое в нем записано.*/


<input id="elem" value = "">
<p>  </p>

<script>
let elem = document.querySelector('#elem');
let p = document.querySelector('p');

elem.addEventListener('blur', function () {
  let num = elem.value; //новая переменная ДО таймера!!
	let timer = setInterval(function () {
    num--;
    p.textContent = num;

    if (num <= 0) {
      clearInterval(timer);
    }
  }, 1000);
});
</script>
/*В инпут вводится число. По потери фокуса  в абзаце
ниже идет обратный отсчет до нуля*/


<p id = 'red'> чета  </p>

<script>
let p = document.querySelector('#red');
p.style.backgroundColor = 'red';

setInterval(function () {
if (p.style.backgroundColor === 'red') {
  p.style.backgroundColor = 'green';
} else {
  p.style.backgroundColor = 'red';
}
}, 1000);
</script>
/*Дан абзац. Сделайте так, чтобы каждую секунду он
менял свой цвет с красного на зеленый и наоборот.*/


<p>  </p>

<script>
let p = document.querySelector('p');

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

setClock(function () {
let date = new Date();
let moment = addZero(date.getHours()) + ':' +
addZero(date.getMinutes()) + ':' +
addZero(date.getSeconds());

p.textContent = moment;
}, 1000);

</script>
/*Если выводить на экран каждую секунду текущий момент
 времени, то можно сделать тикающие часы. */
//ЗАДАЧА10

 <input type="submit" id="elem">

 <script>
 let elem = document.querySelector('#elem');
  elem.addEventListener('click', function() {
 	setTimeout(function() {
 		alert('!');
 	}, 3000);
 });
  </script>
//Задержка перед выполнением


<p id="elem"> </p>

<script>
let elem = document.querySelector('#elem');
	setTimeout(function() {
    elem.textContent = 'Боливар не вынесет двоих.';
	}, 5000);
</script>
/*Дан абзац. Напишите код, который выведет сообщение
в этот абзац через 5 секунд после загрузки страницы.*/


<script>
let i = 0;
function timer() {
	setTimeout(function() {
		console.log(++i);
		if (i < 10) { // запускаем, только если счетчик меньше 10
			timer();
		}
	}, 1000);
}
timer();
</script>
//создали таймер с ее помощью рекурсии
