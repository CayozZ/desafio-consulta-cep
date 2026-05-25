const form = document.querySelector('#cep-form');
const inputCep = document.querySelector('#cep');
const resultado = document.querySelector('#resultado');
const erro = document.querySelector('#erro');
const btnLimpar = document.querySelector('#btn-limpar');
inputCep.addEventListener('input', function() {
  let valor = inputCep.value.replace(/\D/g, '');
  if (valor.length > 5) {
    valor = valor.slice(0, 5) + '-' + valor.slice(5, 8);
  }
  inputCep.value = valor;
});

btnLimpar.addEventListener('click', function() {
  inputCep.value = '';
  erro.textContent = '';
  resultado.innerHTML = '';
  resultado.style.display = 'none';
  inputCep.focus();
});

form.addEventListener('submit', async function(evento) {
  evento.preventDefault();

  const cep = inputCep.value.replace(/\D/g, '');

  erro.textContent = '';
  resultado.innerHTML = '';
  resultado.style.display = 'none';

  if (cep.length !== 8) {
    erro.textContent = 'Digite um CEP com 8 números.';
    return;
  }

  resultado.style.display = 'block';
  resultado.innerHTML = '<p>Consultando...</p>';

  try {
    const resposta = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
    const dados = await resposta.json();

    if (dados.erro) {
      resultado.style.display = 'none';
      resultado.innerHTML = '';
      erro.textContent = 'CEP não encontrado. Verifique e tente novamente.';
      return;
    }

    resultado.innerHTML =
      '<h2>Endereço encontrado</h2>' +
      '<p><strong>CEP:</strong> ' + dados.cep + '</p>' +
      '<p><strong>Rua:</strong> ' + dados.logradouro + '</p>' +
      '<p><strong>Bairro:</strong> ' + dados.bairro + '</p>' +
      '<p><strong>Cidade:</strong> ' + dados.localidade + '</p>' +
      '<p><strong>Estado:</strong> ' + dados.uf + '</p>';

  } catch (error) {
    resultado.style.display = 'none';
    resultado.innerHTML = '';
    erro.textContent = 'Não foi possível consultar o CEP. Verifique sua conexão.';
  }
});