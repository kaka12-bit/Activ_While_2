let somaTotal = 0 
let resposta;

do {
    let numeroTexto = prompt("Digite um número para somar:");
    let numeroInteiro = parseInt(numeroTexto);

    somaTotal = somaTotal + numeroInteiro;
    
    resposta = prompt("Deseja inserir outro? Digite 's' para sim ou 'n' para não:");
} while (resposta == 's');

alert ("O resultado final da soma é: "+ somaTotal);
