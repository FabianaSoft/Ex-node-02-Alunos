function encontrarAluno(nomeAluno, listaNomeAlunos) {
    for (let i = 0; i < listaNomeAlunos.length; i++) {
        if (listaNomeAlunos[i] === nomeAluno) {
            return true
        }
    }
    return false
}

function filtrarAlunos(nomeAluno, listaNomeAlunos) {
    let alunosFiltrados = []
    for (let i = 0; i < listaNomeAlunos.length; i++) {
        if (listaNomeAlunos[i].includes(nomeAluno)) {
            alunosFiltrados.push(listaNomeAlunos[i])
        }
    }
    return alunosFiltrados
}

function construirAluno(nomeAluno, idadeAluno) {
    return {
        nome: nomeAluno,
        idade: idadeAluno
    }
}

module.exports = {
    encontrarAluno,
    filtrarAlunos,
    construirAluno
}