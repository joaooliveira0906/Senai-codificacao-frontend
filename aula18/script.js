let productList;
let cartList;
let totalEl;
let btnFinalizar;
let mensagemCompra;

let carrinho = [];

const produtos = [
  { id: 1, nome: "Smartphone", preco: 2500, imagem: "img/poco x8.jpg" },
  { id: 2, nome: "Notebook Gamer", preco: 4500, imagem: "img/notebook.jpg" },
  { id: 3, nome: "Smartwatch", preco: 600, imagem: "img/smartwatch.jpg" },
  { id: 4, nome: "Fone Bluetooth", preco: 200, imagem: "img/fone.jpg" },
  { id: 5, nome: "Tablet", preco: 1800, imagem: "img/tablet.jpg" },
  { id: 6, nome: "Caixa de Som sem Fio", preco: 1990.00, imagem: "img/caixadesom.jpg" }
];

function renderizarProdutos() {
  productList.innerHTML = "";

  produtos.forEach(produto => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button data-id="${produto.id}">Adicionar ao carrinho</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      adicionarAoCarrinho(produto.id);
    });

    productList.appendChild(card);
  });
}

function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);

  if (produto) {
    carrinho.push(produto);
    salvarCarrinho();
  }
}

function renderizarCarrinho() {
  cartList.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
      <button data-id="${item.id}">Remover</button>
    `;

    li.querySelector("button").addEventListener("click", () => {
      removerDoCarrinho(item.id);
    });

    cartList.appendChild(li);
  });

  calcularTotal();
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  salvarCarrinho();
}

function calcularTotal() {
  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizarCarrinho();
}

function carregarCarrinho() {
  const dados = localStorage.getItem("carrinho");
  carrinho = dados ? JSON.parse(dados) : [];
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    mensagemCompra.textContent = "Seu carrinho está vazio!";
    mensagemCompra.style.color = "red";
    return;
  }

  mensagemCompra.textContent = "Compra realizada com sucesso!";
  mensagemCompra.style.color = "green";

  carrinho = [];
  salvarCarrinho();
}

document.addEventListener("DOMContentLoaded", () => {
  productList = document.getElementById("product-list");
  cartList = document.getElementById("cart-list");
  totalEl = document.getElementById("total");
  btnFinalizar = document.getElementById("finalizar-compra");
  mensagemCompra = document.getElementById("mensagem-compra");

  carregarCarrinho();
  renderizarProdutos();
  renderizarCarrinho();

  btnFinalizar.addEventListener("click", finalizarCompra);
});