

//Teremos que construir um formulário, ler o produto selecionado na combobox, 
//extrair o nome, preço, quantidade, fazer um cálculo de soma e também criar um botão de limpar. 
//Porém, tudo isso é possível com nosso conhecimento em lógica de programação.

let totalGeral
limpar();

function adicionar() {
//recuperar valores (nome, quantidade e valor)
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
//calcular preço, subtotal
    let preco = quantidade * valorUnitario;

//adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul"> R$${preco} </span>
    </section>`;

//atualizar o grande total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;     
    document.getElementById('quantidade').value = 0;

    
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
