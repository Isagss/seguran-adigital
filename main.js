const numeroSenha= document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

cont botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclik = diminuiTamanho;
botoes[1].onclik = aumentoTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
numeroSenha.textContent = tamanhoSenha
geraSenha();
}
fuction aumentaTamanho(){
    if(tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamnhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha);

const letrasMaiuscula = 'ABCDFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();

function geraSenha(){
let senha = '';
    for (let i = 0; i < tamnhoSenha;++){
    let numeroAleatorio = Math.random()*letrasMaiuscula.length;
    numeroAletorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio]/
   }
campoSenha.value = senha;
}


