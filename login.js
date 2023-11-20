let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
	let userName = document.getElementById('user-name');
	let password = document.getElementById('password');

	if (userName.value === '' || password.value === '') {
		alert('inputs should not be empty');
	} else {
		fetch('https://655a3b1e6981238d054d479a.mockapi.io/users')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				let validUser = data.find(
					(item) => userName.value === item.userName && password.value === item.password
				);

				if (!validUser) {
					alert('wrong Email or password');
				} else {
					localStorage.setItem('UserName', userName.value);
					window.location.href = 'index.html';
				}
			});
	}
});
