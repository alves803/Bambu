let total = 0;
var vars = [{}]


function adicionarAoCarrinho(nome, preco) {
    const itensCarrinho = document.getElementById('itensCarrinho');
    //Adicionar o nome e o valor ao dicionario

    //percorrer o dicionario e popular o html "itensCarrinho" com as lis 
    const novoItem = document.createElement('li');
    novoItem.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    itensCarrinho.appendChild(novoItem);
    
    total += preco;
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}



document.getElementById('but-carrinho').addEventListener('click', function() {
    var usuario = document.getElementById('itensCarrinho');
    
    var div = document.getElementById('compra');
    
    if (usuario && total) {
        // Atualizar o conteúdo da div diretamente
        const itensCarrinho = document.getElementById('itensCarrinho');
        const total = document.getElementById('total')
        itensCarrinho.innerHTML = "";
        total.innerHTML = "";
        div.innerHTML = "<h3 style='color:green'>Compra Realizada com sucesso!</h3>"; 
    } else {
        alert("nenhum item adiciondo ao carrinho");
    }
});

    



function togglecarrinhos() {
    var carrinhos = document.getElementById("carrinhos");
    if (carrinhos.style.display === "none"){
        carrinhos.style.display = "block";
    }else {
        carrinhos.style.display = "none";
    }
}


document.querySelectorAll('.botaocelular').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('item adicionado ao carrinho');
    });
});

document.querySelectorAll('.botaonotebook').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('item adicionado ao carrinho');
    });
});