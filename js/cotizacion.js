fetch("https://dolarapi.com/v1/cotizaciones/eur")
  .then((response) => response.json())
  .then((data) => {
    const cotizacionEur = data.venta.toFixed(2);
    document.getElementById(
      "eur-cotizacion"
    ).innerText = `Cotización del Euro: ${cotizacionEur} ARS`;
  });

fetch("https://dolarapi.com/v1/cotizaciones/uyu")
  .then((response) => response.json())
  .then((data) => {
    const cotizacionUyu =data.venta.toFixed(2);
    document.getElementById(
      "uyu-cotizacion"
    ).innerText = `Cotización del Peso Uruguayo: ${cotizacionUyu} ARS`;
  });

fetch("https://dolarapi.com/v1/dolares/tarjeta")
  .then((response) => response.json())
  .then((data) => {
    const cotizacionDolarTarjeta = data.venta.toFixed(2);
    document.getElementById(
      "dolar-tarjeta-cotizacion"
    ).innerText = `Cotización del Dólar Tarjeta: ${cotizacionDolarTarjeta} ARS`;
  });
