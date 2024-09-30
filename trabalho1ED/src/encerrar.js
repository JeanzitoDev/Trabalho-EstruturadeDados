const limparDados = document.getElementById("limpar");
const avisoLimpeza = document.getElementById("limpeza");

function limparLocalStorage() {
    localStorage.clear();
}

limparDados.addEventListener('click', function(event) {
    event.preventDefault();
    limparLocalStorage();

    avisoLimpeza.textContent = "Programa encerrado com sucesso!";
    avisoLimpeza.style.display = "block";
    avisoLimpeza.style.opacity = "1";  

    setTimeout(function() {
        avisoLimpeza.style.opacity = "0";  

        setTimeout(function() {
            avisoLimpeza.style.display = "none";
        }, 1000); 
    }, 5000);
});
