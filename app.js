const parolElement = document.getElementById('pw')
const copyBtn = document.getElementById('copy')
const lengthElement = document.getElementById('len')
const upperElement = document.getElementById('upper')
const lowerElement = document.getElementById('lower')
const numberElement = document.getElementById('number')
const symbolElement = document.getElementById('symbol')
const yaratadiganBtn = document.getElementById('generate')
// console.log(numberElement);

const kattaHarflar = 'ABCDEFGHIJKLMNOPQRSTUVWYZ'
const kichikHarflap = 'abcdefghijklmnopqrstuvwyz'
const numberlar = '0123456789'
const belgilar = '!@#$%^&*()_+'

function getLowercase() {
  return kichikHarflap[Math.floor(Math.random() * kichikHarflap.length)];
}
function getUppercase() {
  return kattaHarflar[Math.floor(Math.random() * kattaHarflar.length)];
}
function getNumbers() {
  return numberlar[Math.floor(Math.random() * numberlar.length)];
}
function getSymbol() {
  return belgilar[Math.floor(Math.random() * belgilar.length)];
}
function generateX() {
  const xs = [];
  if (upperElement.checked){
    xs.push(getUppercase());
  }
  if (lowerElement.checked){
    xs.push(getLowercase());
  }
  if (numberElement.checked){
    xs.push(getNumbers());
  }
  if (symbolElement.checked){
    xs.push(getSymbol());
  }
  if (xs.length === 0) return '';
  return xs[Math.floor(Math.random() * xs.length)];
}
function parolYaratish() {
  let len = lengthElement.value;
  let parol = '';  
  if (upperElement.checked){
    parol += getUppercase();
  }
  if (lowerElement.checked){
    parol += getLowercase();
  }
  if (numberElement.checked){
    parol += getNumbers();
  }
  if (symbolElement.checked){
    parol += getSymbol();
  }
  for (let i = parol.length; i < len; i++ ){
    let x = generateX();
    parol += x;
  }
  parolElement.innerHTML = parol;
  console.log(parol);
}
yaratadiganBtn.addEventListener('click', () => {
  console.log(parolYaratish());
});