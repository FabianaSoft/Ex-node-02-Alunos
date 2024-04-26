const { encontrarAluno, filtrarAlunos, construirAluno } = require('./aluno');

test ('Teste de encontrarAluno', () => {
    expect(encontrarAluno('João', ['João', 'Maria', 'José'])).toBe(true);
    expect(encontrarAluno('Pedro', ['João', 'Maria', 'José'])).toBe(false);
});

test ('Teste de filtrarAlunos', () => { 
    expect(filtrarAlunos('João', ['João', 'Maria', 'José'])).toEqual(['João']);
    expect(filtrarAlunos('i', ['João', 'Maria', 'José'])).toEqual(['Maria']);
});

test ('Teste de construirAluno', () => {    
    expect(construirAluno('João', 20)).toEqual({ nome: 'João', idade: 20 });
});