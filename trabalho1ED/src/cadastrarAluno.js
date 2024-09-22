const nota = document.getElementById("media");
const resultado = document.getElementById("resultado");
const nome = document.getElementById("name");
const ra = document.getElementById("ra");
const age = document.getElementById("age");
const button = document.getElementById("cadastrarBtn");
const falied = document.getElementById("faltaDados");

nota.addEventListener('blur', function() {
    const media = parseFloat(nota.value);

    if (!isNaN(media)) {
        let status;
        if (media >= 7) {
            status = "Aprovado";
            resultado.textContent = status;
            resultado.style.fontSize = "20px";
        } else {
            status = "Reprovado";
            resultado.textContent = status;
            resultado.style.fontSize = "20px";

        }

      
        localStorage.setItem("StatusMedia", status);
        localStorage.setItem("mediaValor", media);
    } else {
        resultado.textContent = "";
    }
});

button.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (nome.value && ra.value && age.value && nota.value) {
        localStorage.setItem("nomeValor", nome.value);
        localStorage.setItem("raValor", ra.value);
        localStorage.setItem("idadeValor", age.value);

        falied.textContent = "";
        falied.textContent = "Aluno cadastrado!"
    } else {
        falied.textContent = "Preencha todos os campos!";
    
    }
});
