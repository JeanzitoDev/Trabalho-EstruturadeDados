const nota = document.getElementById("media");
const resultado = document.getElementById("resultado");
const nome = document.getElementById("name");
const ra = document.getElementById("ra");
const age = document.getElementById("age");
const button = document.getElementById("cadastrarBtn");
const falied = document.getElementById("faltaDados");

let media = null;
let result = "";

nota.addEventListener('blur', function() {
    media = parseFloat(nota.value);

    if (!isNaN(media)) {
        if (media >= 7) {
            result = "Aprovado";
            resultado.textContent = result;
            resultado.style.fontSize = "20px";
        } else {
            result = "Reprovado";
            resultado.textContent = result;
            resultado.style.fontSize = "20px";
        }
    } else {
        resultado.textContent = "";
    }
});

button.addEventListener('click', function(event) {
    event.preventDefault();

    if (nome.value && ra.value && age.value && !isNaN(media)) {
        const aluno = {
            nome: nome.value,
            ra: ra.value,
            idade: age.value,
            media: media,
            status: result
        };

        let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

        alunos.push(aluno);

        localStorage.setItem("alunos", JSON.stringify(alunos));

        falied.textContent = "Aluno cadastrado com sucesso!";
        falied.textContent.style.fontSize = "20px";

        nome.value = "";
        ra.value = "";
        age.value = "";
        nota.value = "";
        resultado.textContent = "";
        media = null;
        
    } else {
        falied.textContent = "Preencha todos os campos corretamente!";
    }
});
