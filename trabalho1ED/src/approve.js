
const nota = document.getElementById("media");
const resultado = document.getElementById("resultado");

nota.addEventListener('blur', function() {
    const media = parseFloat(nota.value); 


    if (!isNaN(media)) {
        let status
        if (media >= 7) {
            status = "Aprovado"
            resultado.textContent = status
            resultado.style.fontSize = "20px"; 
        } else {
            status = "Reprovado"
            resultado.textContent = status
            resultado.style.fontSize = "20px";
        }

        localStorage.setItem("StatusMedia", status)
        localStorage.setItem("mediaValor", media)

    } else {
        resultado.textContent = ""; 
    }
});

