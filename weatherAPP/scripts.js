const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const token = config.MY_API_KEY;
const API_KEY = `&appid=${token}`;
const API_UNITS = '&units=metric';

const getWeather = () => {
	const city = input.value || 'Warsaw';
	const URL = API_LINK + city + API_UNITS + API_KEY;
	axios.get(URL).then((res) => {
		const temp = res.data.main.temp;
		const hum = res.data.main.humidity;
		const status = Object.assign({}, ...res.data.weather);
        const statusId = status.id 

        warning.textContent = ''
        input.value = ''

		switch (true) {
			case statusId >= 200 && statusId < 300 :
			photo.setAttribute('src', './img/thunderstorm.png')
				break;
            case statusId>= 300 && statusId <400 :
			photo.setAttribute('src', './img/drizzle.png')
				break;
            case statusId>= 500 && statusId <600 :
            photo.setAttribute('src', './img/rain.png')
                break;
            case statusId>= 600 && statusId <700 :
            photo.setAttribute('src', './img/snow.png')
                break;
            case statusId>= 700 && statusId <800 :
			photo.setAttribute('src', './img/fog.png')
				break;
            case statusId == 800:
			photo.setAttribute('src', './img/sun.png')
				break;
            case statusId>= 801 && statusId <900 :
            photo.setAttribute('src', './img/cloud.png')
                break;
			default:
                photo.setAttribute('src', './img/unknwown.png')
		}

		cityName.textContent = res.data.name;
		temperature.textContent = Math.floor(temp) + '°C';
		humidity.textContent = hum + '%';
		weather.textContent = status.main;
	}).catch(() => warning.textContent = 'Wpisz poprawną nazwę miasta')
};

const enter = (e) =>{
    if(e.key === 'Enter')
    {
    getWeather()
    } 
}
getWeather()
input.addEventListener('keyup', enter)
button.addEventListener('click', getWeather);
