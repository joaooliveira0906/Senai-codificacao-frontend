const catalogo = [
  { nome: "Notebook Gamer", preco: 4500, categoria: "Eletrônicos", imagem: "notebook.jpg" },
  { nome: "Smartphone 5G", preco: 2500, categoria: "Eletrônicos", imagem: "smartphone.jpg" },
  { nome: "Camiseta Cotton", preco: 80, categoria: "Vestiário", imagem: "camiseta.jpg" },
  { nome: "Tênis Esportivo", preco: 300, categoria: "Vestiário", imagem: "tenis.jpg" },
  { nome: "Cadeira Ergonômica", preco: 1200, categoria: "Móveis", imagem: "cadeira.jpg" }
];

const listarProdutos = (produtos) => {
  produtos.forEach(({ nome, preco, categoria, imagem }) => {
    console.log(`Nome: ${nome} | Preço: R$${preco} | Categoria: ${categoria} | Img: ${imagem}`);
  });
};

const filtrarPorCategoria = (produtos, categoriaFiltro) => {
  return produtos.filter(({ categoria }) => categoria.toLowerCase() === categoriaFiltro.toLowerCase());
};

const [primeiroProduto] = catalogo;
const { nome, preco } = primeiroProduto;

const novoProduto = { nome: "Fone Bluetooth", preco: 200, categoria: "Eletrônicos", imagem: "fone.jpg" };
const catalogoAtualizado = [...catalogo, novoProduto];

listarProdutos(catalogo);
const eletronicos = filtrarPorCategoria(catalogo, "Eletrônicos");
listarProdutos(eletronicos);
listarProdutos(catalogoAtualizado);