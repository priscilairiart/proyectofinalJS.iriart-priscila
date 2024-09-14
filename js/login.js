const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);

const registerBtn = document.createElement('button');
registerBtn.setAttribute('id', 'register-btn');
registerBtn.textContent = 'Registrarse';
container.appendChild(registerBtn);

const loginBtn = document.createElement('button');
loginBtn.setAttribute('id', 'login-btn');
loginBtn.textContent = 'Iniciar sesión';
container.appendChild(loginBtn);

const registerForm = document.createElement('form');
registerForm.setAttribute('id', 'register-form');
container.appendChild(registerForm);

const nameLabel = document.createElement('label');
nameLabel.textContent = 'Nombre:';
registerForm.appendChild(nameLabel);

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.setAttribute('id', 'name');
registerForm.appendChild(nameInput);

const emailLabel = document.createElement('label');
emailLabel.textContent = 'Correo electrónico:';
registerForm.appendChild(emailLabel);

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.setAttribute('id', 'email');
registerForm.appendChild(emailInput);

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Contraseña:';
registerForm.appendChild(passwordLabel);

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.setAttribute('id', 'register-password');
registerForm.appendChild(passwordInput);

const registerSubmit = document.createElement('button');
registerSubmit.type = 'button';
registerSubmit.textContent = 'Registrarse';
registerForm.appendChild(registerSubmit);

const loginForm = document.createElement('form');
loginForm.setAttribute('id', 'login-form');
container.appendChild(loginForm);

const usernameLabel = document.createElement('label');
usernameLabel.textContent = 'Usuario:';
loginForm.appendChild(usernameLabel);

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.setAttribute('id', 'username');
loginForm.appendChild(usernameInput);

const passwordLabel2 = document.createElement('label');
passwordLabel2.textContent = 'Contraseña:';
loginForm.appendChild(passwordLabel2);

const passwordInput2 = document.createElement('input');
passwordInput2.type = 'password';
passwordInput2.setAttribute('id', 'login-password');
loginForm.appendChild(passwordInput2);

const loginSubmit = document.createElement('button');
loginSubmit.type = 'button';
loginSubmit.textContent = 'Iniciar sesión';
loginForm.appendChild(loginSubmit);

registerForm.style.display = 'none';
loginForm.style.display = 'none';

registerBtn.addEventListener('click', () => {
  registerForm.style.display = 'block';
  loginForm.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

registerSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('register-password').value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Registro exitoso",
    showConfirmButton: false,
    timer: 1500
  });
});

loginSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('login-password').value;
  if (username === localStorage.getItem('email') && password === localStorage.getItem('password')) {
    localStorage.setItem('isLoggedIn', true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Inicio de sesión exitoso!",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario o contraseña incorrecta!",
      footer: '<a href="#">¿Por qué tengo este problema?</a>'
    });
  }
});


