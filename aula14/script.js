// Selecione Elemento pelo id
// o método document.getElementById() retorna o elemento que possui
const titulo = document.getElementById("cardTitulo");
const descricao = document.getElementById("cardDescricao");
const botao = document.getElementById("btnSaibaMais");

//Exibe os elementos selecionados no console do navegador (F12)
console.log("Elemento do título:", titulo);
console.log("Elemento do botão:", botao);

//2. Lendo e Alterando conteúdo(texto)
//podemos ler ou alterar o texto de um elemento com .innerText ou .textContent
console.log("Texto atual do título:", titulo.innerText);

//3. Adicionando um evento de clique com document.getElementById
// Quando o usuario clica no botão, alteramos o conteúdo e o estilo dos elementos na pagina
botao.addEventListener("click", function(){
    titulo.innerText = "JavaScript no Dom! ";

    descricao.innerText = "Você clicou no botão e o texto foi alterado usando document.getElementById() com sucesso!";

    titulo.style.color = "#4f46e5";
    botao.style.backgroundColor = "#10b981";
    botao.innerText = "Texto Atualizado!";
})