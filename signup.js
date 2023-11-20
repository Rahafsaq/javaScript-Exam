let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
	let enteredName = document.getElementById('name');
	let userName = document.getElementById('user-name');
	let email = document.getElementById('email');
	let password = document.getElementById('password');

	let nameValidation = /^[A-Za-z]{3,}$/;
	let userNameValidation = /[A-Z][a-z]*/;
	let emailValidation = /^([a-za-z0-9_\-\.])+\@([a-za-z0-9_\-\.])+\.([a-za-z]{2,4})$/;
	let passwordValidation = /^\d{4,}$/;

	if (enteredName.value === '' || userName.value === '' || email.value === '' || password.value === '') {
		alert('inputs should not be empty');
	} else if (!enteredName.value.match(nameValidation)) {
		alert('name should be more than 3 letters');
	} else if (!userName.value.match(userNameValidation)) {
		alert('userName should start with upperCase');
	} else if (!email.value.match(emailValidation)) {
		alert('wrong Email');
	} else if (!password.value.match(passwordValidation)) {
		alert('password should be more than 4 numbers');
	} else {
		fetch('https://655a3b1e6981238d054d479a.mockapi.io/users', {
			method: 'POST',
			body: JSON.stringify({
				name: enteredName.value,
				userName: userName.value,
				email: email.value,
				password: password.value,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((data) => (window.location.href = 'login.html'));
	}
});
