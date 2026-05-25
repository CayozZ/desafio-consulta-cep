const form = document.querySelector('#cep-form');
const inputCep = document.querySelector('#cep');
const resultado = document.querySelector('#resultado');
const erro = document.querySelector('#erro');

form.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const cep = inputCep.value.replace(/\D/g, '');

  erro.textContent = '';
  resultado.style.display = 'none';
  resultado.innerHTML = '';

  if (cep.length !== 8) {
    erro.textContent = 'Digite um CEP com 8 números.';
    return;
  }

  console.log('CEP válido, pronto para consultar:', cep);
});