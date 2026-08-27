const produtos = [
    {
        nome: "Notebook",
        preco: 3000,
        categoria: "Eletrônicos",
        estoque: 10,
        emPromocao: true
    },
    {
        nome: "Celular",
        preco: 1800,
        categoria: "Eletrônicos",
        estoque: 15,
        emPromocao: false
    },
    {
        nome: "Fone de Ouvido",
        preco: 200,
        categoria: "Acessórios",
        estoque: 20,
        emPromocao: true
    }
];

function calcularDesconto(preco, percentual) {
    const desconto = preco * (percentual / 100);
    return preco - desconto;
}

function exibirProduto(produto) {
    console.log(`Nome: ${produto.nome}`);
    console.log(`Preço: R$ ${produto.preco}`);
    console.log(`Estoque: ${produto.estoque}`);
}

for (let i = 0; i < produtos.length; i++) {
    console.log(`${i + 1} - ${produtos[i].nome}`);
}