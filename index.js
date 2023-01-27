let listaDeConvidados = [];
let quantidadeDeConvidados = listaDeConvidados.length;
let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
if (idade >=18 ){
    if (quantidadeDeConvidados < 100){
        listaDeConvidados.push(nome);
        console.log("Cadastro realizado com sucesso");
    } else {
        console.log("Limite de participantes alcançado. Não é mais permitido cadastros");
    }

} else {
    console.log("Menores de idade não podem ser cadastrados.");
}
