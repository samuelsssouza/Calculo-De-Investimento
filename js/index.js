const valorInicial = document.querySelector('#valorInicial');
const taxaDeJuros = document.querySelector('#taxaDeJuros');
const periodo = document.querySelector('#periodo');
const botao = document.querySelector('#btn');
const resultadoFinal = document.querySelector('#resultado');

botao.addEventListener('click', calculoInvestimento);

function calculoInvestimento(){
    event.preventDefault();


   let resultado  = Number(valorInicial.value) + Number(taxaDeJuros.value) * (Number(periodo.value) / 100) * Number(periodo.value);
   resultadoFinal.value = resultado;
}