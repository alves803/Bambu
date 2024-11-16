


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

