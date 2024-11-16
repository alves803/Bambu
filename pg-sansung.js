function toggleDescriçao() {
    var descriçao = document.getElementById("descriçao");
    if (descriçao.style.display === "none"){
        descriçao.style.display = "block";
    }else {
        descriçao.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    const imagensMenores = document.querySelectorAll('#conjutodasimagens img');

    const imagemGrande = document.querySelector('#imagenesquerda');

    imagensMenores.forEach((img) => {
        img.addEventListener('mouseover', () => {
            imagemGrande.src = img.src;
        });
    });
});

document.getElementById('but-carrinho').addEventListener('click', function() {
    var usuario = document.getElementById('itensCarrinho');
    
    var div = document.getElementById('compra');
    
    if (usuario && total) {
        // Atualizar o conteúdo da div diretamente
        div.innerHTML = "<h3 style='color:green'>Compra Realizada com sucesso!</h3>"; 
    } else {
        alert("nenhum item adiciondo ao carrinho");
    }
});

document.querySelectorAll('Compraragora').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('item adicionado ao carrinho');
    });
});