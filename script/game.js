let canvas = document.getElementById('canvas'),
 	context = canvas.getContext('2d'),
 	score = 0,
	arr = [],
 	count = 0;

let play = document.getElementById('sub3');
play.addEventListener("click", function (){
	let inplogin = document.forms['form3'].elements['Вводим логин'].value,
        date = new Date(),
        dd = String(date.getDate()).padStart(2, '0'),
        mm = String(date.getMonth()).padStart(2, '0'),
        yyyy = date.getFullYear();
    date = yyyy + '.' + mm + '.' + dd;
	cellSelection();	
	let timer0 = setInterval(() => game(), 2000);
	setTimeout(() => { 
		clearInterval(timer0);
		cellSelection();
		document.getElementById("login").innerHTML = inplogin;
        document.getElementById("score").innerHTML = score;
        document.getElementById("date").innerHTML = date;
		document.getElementById("place").innerHTML = place = 1;
	}, 20000);
})

function cellSelection(){	
	canvas.addEventListener('click', function (event){
		count++;
		if (count < 5) {
			let x = event.offsetX;
			let y = event.offsetY;
			x = Math.trunc(x/40)*40;
			y = Math.trunc(y/40)*40;
			arr.push(x + ' ' + y);
			context.fillRect(x, y, 40, 40);
		}	
	})	
}

function game() {
	setTimeout(() => context.clearRect(0, 0, canvas.width, canvas.height), 1000);
	for (let i = 0; i < 4; i++ ){
		x = getRandomInt(0, 10) * 40;
		y = getRandomInt(0, 10) * 40;
		context.fillRect(x, y, 40, 40);
		for (let j = 0; j < arr.length; j++) {
			if (x + ' ' + y === arr[j]) {
				score = score + 10;
			}
		}	
	}
	console.log(score);
	document.getElementById('Счёт').innerHTML = score;
	return arr = [],
	 	count = 0;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}