let user = localStorage.getItem('UserName');

if (!user) {
	window.location.href = 'signup.html';
} else {
	let userName = document.getElementById('welcome-user');
	userName.innerHTML = `welcome ${user}`;
}

let btnPray = document.getElementById('btn1');
let btnWeather = document.getElementById('btn2');
btnPray.addEventListener('click', () => (window.location.href = 'prayTime.html'));
btnWeather.addEventListener('click', () => (window.location.href = 'weather.html'));
