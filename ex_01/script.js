let senhaSalva = "1234"
let senhaDigitada;

do {
    senhaDigitada = prompt("Para entrar, digite a senha:");

    if (senhaDigitada != senhaSalva) {
        alert("Senha Errada! Tente Novamente.");
    }
} while (senhaDigitada != senhaSalva)

alert("Acesso Permitido");