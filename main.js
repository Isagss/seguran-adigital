const numeroSenha= document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

cont botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclik = diminuiTamanho;

function diminuiTamanho(){
tamanhoSenha = tamanhoSenha-1;
numeroSenha.textContent = tamanhoSenha
}
console.log(botoes);