let nomeDoProduto;

do{
    nomeDoProduto = prompt("Digite o nome do produto(mínimo 3 caracteres):");
    //Verificamos se o texto digitado é menor que 3 
    if(nomeDoProduto.length < 3){
        alert("Nome inválido! O produto deve ter no mínimo 3 letras.");
    }
} while (nomeDoProduto.length < 3);

alert("Produto" +nomeDoProduto+ "cadastro!");