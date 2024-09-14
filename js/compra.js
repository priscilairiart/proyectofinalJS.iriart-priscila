const monedas = [
  {
    nombre: 'Euros',
    api: "https://dolarapi.com/v1/cotizaciones/eur",
    cotizacion:''
  },
  {
    nombre: 'Dólar Tarjeta',
    api: "https://dolarapi.com/v1/dolares/tarjeta",
    cotizacion: ''
  },
  {
    nombre: 'Pesos Uruguayos',
    api: "https://dolarapi.com/v1/cotizaciones/uyu",
    cotizacion: ''
  }
];

monedas.forEach((moneda) => {
  const boton = document.createElement('button');
  boton.textContent = `Comprar ${moneda.nombre}`;
  boton.addEventListener('click', () => {
    fetch(moneda.api)
      .then((response) => response.json())
      .then((data) => {
        moneda.cotizacion = data.venta.toFixed(2);
        const formulario = document.createElement('div');
        formulario.className = 'formulario';
        formulario.innerHTML = `
          <label for="cantidad">Cantidad:</label>
          <input type="number" id="cantidad" />
          <label for="cotizacion">Cotización:</label>
          <p id="cotizacion">${moneda.cotizacion} ARS</p>
          <button id="comprar">Comprar</button>
        `;
        document.body.appendChild(formulario);
        const comprar = document.getElementById('comprar');
        comprar.addEventListener('click', () => {
          const cantidad = document.getElementById('cantidad').value;
          const totalARS = cantidad * moneda.cotizacion;
          localStorage.setItem(moneda.nombre, cantidad);
          alert(`Total a pagar: ${totalARS} ARS`);
        });
      });
  });
  document.body.appendChild(boton);
});