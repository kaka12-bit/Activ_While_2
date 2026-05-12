let numeroSecreto = 7;
let palpite;
let tentativas = 0;

do {
    palpite = prompt("Tente advinhar o número de 1 a 10:");
    tentativas = tentativas + 1;

    if(palpite != numeroSecreto) {
        alert("Você errou!");
    }
} while (palpite != numeroSecreto);

alert("Parabéns! Você acertou em" +tentaivas+ "tentaivas.");