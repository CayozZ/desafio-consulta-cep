const form = document.querySelector('#cep-form');
const inputCep = document.querySelector('#cep');
const resultado = document.querySelector('#resultado');
const erro = document.querySelector('#erro');

form.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const cep = inputCep.value;

  console.log('CEP digitado:', cep);
});