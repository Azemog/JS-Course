//async functions
const checkAge = (age) => {
	return new Promise((resolve, reject) => {
		if (age > 18) {
			resolve();
		} else {
			reject();
		}
	});
};

const checkAgain = () => {
	return new Promise((resolve) => {
		console.log('Sprawdzam jeszcze raz');
		setTimeout(() => resolve('Faktycznie wiek sie zgadza'), 1000);
	});
};

async function test(){
	try{await checkAge(2)
	console.log('Chyba mozesz wejsc');
	await checkAgain()
	console.log('Faktycznie wiek sie zgadza');
	console.log('Weryfikacja zakonczona');}
	catch{
		console.error('Masz za malo lat');
	}
}

test()