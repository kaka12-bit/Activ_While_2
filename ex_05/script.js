let totalDaConta = 0;
let opcaoEscolhida;

do {
    opcaoEscolhida = prompt(
        "---MENU DA CAFETERIA---\n" +
        "1- CAFÉ EXPRESSO (R$5,00)\n" +
        "3- Pão de Queijo (R$ 7,00)\n"+
        "0 - Finalizar Pedido \n" +
        "Escolha o número da opção:"
    );
    if(opcaoEscolhida =="1"){
        totalDaConta = totalDaConta + 5;
        alert("Café Expresso adicionado.");
    } else if (opcaoEscolhida == "2") {
        totalDaConta = totalDaConta + 7;
        alert("Cappuccino adicionado.");
    } else if (opcaoEscolhida == "3") {
        totalDaConta = totalDaConta + 4;
        alert("Pão de Queijo adicionado.");
    } else if (opcaoEscolhida == "0") {
        alert("Finalizando pedido...");
    } else {
        alert("Opção inválida!");
    }
} while(opcaoEscolhida != "0");

alert("Pedido finalizado. O total da sua conta é R$" + totalDaConta)