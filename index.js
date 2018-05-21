var body = document.querySelector('.content')
// var arr = [];
var arr = [1,1,3,5,5,5,1,2,2];

function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

function arrRandom() {
	var min = 0;
	var max = 100;
	for (let i = min; i < max; i++) {
		arr.push(randomInteger(min, max));
	}
}
// arrRandom()

function sum() {
	var count = 0;
	var count1 = 1;
	var pair = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				console.log(arr[i], arr[j])
				count++;
				count1++;
				if (count % 2 == 0) {
					pair++;
					console.log(pair)
				}
			}
		}
		count = 0;
	}
body.innerHTML = 'Количество повторений:' + count1 + " кол-во пар=" + pair
}
sum()