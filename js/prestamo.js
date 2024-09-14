const prestamosDiv = document.createElement('div');
prestamosDiv.className = 'prestamos';
const h2 = document.createElement('h2');
h2.textContent = 'Préstamos en Pesos Argentinos';
prestamosDiv.appendChild(h2);
const formulario = document.createElement('form');
formulario.id = 'formulario-prestamo';
prestamosDiv.appendChild(formulario);
const montoLabel = document.createElement('label');
montoLabel.textContent = 'Monto del préstamo:';
montoLabel.htmlFor = 'monto';
formulario.appendChild(montoLabel);
const montoInput = document.createElement('input');
montoInput.type = 'number';
montoInput.id = 'monto';
formulario.appendChild(montoInput);
const cuotasLabel = document.createElement('label');
cuotasLabel.textContent = 'Cuotas:';
cuotasLabel.htmlFor = 'cuotas';
formulario.appendChild(cuotasLabel);
const cuotasSelect = document.createElement('select');
cuotasSelect.id = 'cuotas';
formulario.appendChild(cuotasSelect);
const option6 = document.createElement('option');
option6.value = '6';
option6.textContent = '6 cuotas';
cuotasSelect.appendChild(option6);
const option12 = document.createElement('option');
option12.value = '12';
option12.textContent = '12 cuotas';
cuotasSelect.appendChild(option12);
const option24 = document.createElement('option');
option24.value = '24';
option24.textContent = '24 cuotas';
cuotasSelect.appendChild(option24);
const calcularButton = document.createElement('button');
calcularButton.id = 'calcular';
calcularButton.textContent = 'Calcular';
formulario.appendChild(calcularButton);
const resultadoDiv = document.createElement('div');
resultadoDiv.id = 'resultado';
prestamosDiv.appendChild(resultadoDiv);
const resultadoP = document.createElement('p');
resultadoDiv.id = 'resultado-p';
resultadoDiv.appendChild(resultadoP);
document.body.appendChild(prestamosDiv);

calcularButton.addEventListener('click', () => {
  const monto = montoInput.value;
  const cuotas = cuotasSelect.value;
  let tasa;

  switch (cuotas) {
    case '6':
      tasa = 0.60;
      break;
    case '12':
      tasa = 0.70;
      break;
    case '24':
      tasa = 0.75;
      break;
  }

  const cuota = (monto * tasa) / cuotas;
  const total = cuota * cuotas;

  localStorage.setItem('totalARS', total.toFixed(2));

  resultadoP.innerHTML = `Cuota: ${cuota.toFixed(2)} ARS<br>Total: ${total.toFixed(2)} ARS`;

  
  const totalGuardado = localStorage.getItem('totalARS');
  console.log('Total guardado:', totalGuardado);
});


const totalGuardado = localStorage.getItem('totalARS');
if (totalGuardado) {
  console.log('Total guardado:', totalGuardado);
  resultadoP.innerHTML += `<br>Total guardado: ${totalGuardado} ARS`;
}