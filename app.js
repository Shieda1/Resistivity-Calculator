// https://calculator.swiftutors.com/resistivity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const resistivityRadio = document.getElementById('resistivityRadio');
const resistanceRadio = document.getElementById('resistanceRadio');
const areaRadio = document.getElementById('areaRadio');
const lengthoftheconductorRadio = document.getElementById('lengthoftheconductorRadio');

let resistivity;
let resistance = v1;
let area = v2;
let lengthoftheconductor = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

resistivityRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Resistance (ohms)';
  variable2.textContent = '(A) Area (m²)';
  variable3.textContent = '(L) Length of the conductor (m)';
  resistance = v1;
  area = v2;
  lengthoftheconductor = v3;
  result.textContent = '';
});

resistanceRadio.addEventListener('click', function() {
  variable1.textContent = '(ρ) Resistivity  (ohms x meter)';
  variable2.textContent = '(A) Area (m²)';
  variable3.textContent = '(L) Length of the conductor (m)';
  resistivity = v1;
  area = v2;
  lengthoftheconductor = v3;
  result.textContent = '';
});

areaRadio.addEventListener('click', function() {
  variable1.textContent = '(ρ) Resistivity  (ohms x meter)';
  variable2.textContent = '(R) Resistance (ohms)';
  variable3.textContent = '(L) Length of the conductor (m)';
  resistivity = v1;
  resistance = v2;
  lengthoftheconductor = v3;
  result.textContent = '';
});

lengthoftheconductorRadio.addEventListener('click', function() {
  variable1.textContent = '(ρ) Resistivity  (ohms x meter)';
  variable2.textContent = '(R) Resistance (ohms)';
  variable3.textContent = '(A) Area (m²)';
  resistivity = v1;
  resistance = v2;
  area = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(resistivityRadio.checked)
    result.textContent = `Resistivity = ${computeResistivity().toFixed(2)} ohms x meter`;

  else if(resistanceRadio.checked)
    result.textContent = `Resistance = ${computeResistance().toFixed(2)} ohms`;

  else if(areaRadio.checked)
    result.textContent = `Area = ${computeArea().toFixed(2)} m²`;

  else if(lengthoftheconductorRadio.checked)
    result.textContent = `Length of the conductor = ${computeLengthoftheconductor().toFixed(2)} m`;
})

// calculation

function computeResistivity() {
  return (Number(resistance.value) * Number(area.value)) / Number(lengthoftheconductor.value);
}

function computeResistance() {
  return (Number(resistivity.value) * Number(lengthoftheconductor.value)) / Number(area.value);
}

function computeArea() {
  return (Number(resistivity.value) * Number(lengthoftheconductor.value)) / Number(resistance.value);
}

function computeLengthoftheconductor() {
  return (Number(resistance.value) * Number(area.value)) / Number(resistivity.value);
}