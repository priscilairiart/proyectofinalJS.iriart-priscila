const menu = document.getElementById('menu');
const logo = document.createElement('img');
logo.src = './img/LOGO.png';
logo.alt = 'Logo';


const links = [
  { texto: 'Inicio', href: './index.html' },
  { texto: 'login', href: './pages/login.html' },
  { texto: 'prestamo', href: './pages/prestamo.html' },
  { texto: 'cotizacion', href: './pages/cotizacion.html' },
  { texto: 'compra', href: './pages/compra.html' }
];

links.forEach((link) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = link.texto;
  a.href = link.href;
  li.appendChild(a);
  menu.appendChild(li);
});

menu.insertBefore(logo, menu.firstChild); // Agrega el logo al inicio del menú

const menuHamburguesa = document.getElementById('menu-hamburguesa');
menuHamburguesa.addEventListener('click', () => {
  menu.classList.toggle('show');
});