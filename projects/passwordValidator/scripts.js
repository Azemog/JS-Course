const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const goodPswd = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = `Kox hasło`;
		p.style.color = 'lime';
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = `Dobre hasło`;
        p.style.color = 'yellow';
	} else if (pass.value.length === 0) {
		p.textContent = `Nie podałeś hasła...`;
        p.style.color = ''
	} else {
		p.textContent = `Złe hasło`;
        p.style.color = 'red';
	}
};

pass.addEventListener('keyup', goodPswd);
