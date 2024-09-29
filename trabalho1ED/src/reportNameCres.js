const report = document.getElementById("reportCrescAlunos")
let alunos = JSON.parse(localStorage.getItem('alunos')) || []
const gerarRelatorioBtn = document.getElementById("gerarRelatorio")

function bubbleSort(arr) {
    let trocou
    for (let i = 0; i < arr.length; i++) {
        trocou = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].nome > arr[j+1].nome) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                trocou = true
            }
        }
        if (!trocou) {
            break
        }
    }
    return arr
}

function exibirRelatorio() {
    report.innerHTML = ""
    
    alunos = bubbleSort(alunos)

    alunos.forEach(aluno => {
        let row = `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.ra}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.media}</td>
                <td>${aluno.status}</td>
            </tr>`
        
        report.innerHTML += row
    })
}

gerarRelatorioBtn.addEventListener('click', exibirRelatorio)
