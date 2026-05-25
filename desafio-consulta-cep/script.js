const form = document.querySelector('#cep-form');
const inputCep = document.querySelector('#cep');
const resultado = document.querySelector('#resultado');
const erro = document.querySelector('#erro');

form.addEventListener('submit', async function(evento) {
  evento.preventDefault();

  const cep = inputCep.value.replace(/\D/g, '');

  erro.textContent = '';
  resultado.style.display = 'none';
  resultado.innerHTML = '';

  if (cep.length !== 8) {
    erro.textContent = 'Digite um CEP com 8 números.';
    return;
  }

  try {
    const resposta = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
    const dados = await resposta.json();

    console.log('Dados recebidos:', dados);
  } catch (error) {
    erro.textContent = 'Não foi possível consultar o CEP. Verifique sua conexão.';
  }
});