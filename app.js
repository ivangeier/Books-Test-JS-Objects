const livros = require('./database')
// console.table(livros);
// Capture user input

const readline = require('readline-sync');
const entradaInicial = readline.question('Deseja buscar um livro? S/N ');

// If YES - show categories available and ask to choose
// If NO - show all books available and

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:');
    const categorias = livros.map(livro => livro.categoria);
    console.table(categorias);

    const entradaCategoria = readline.question('Qual categoria deseja ver (insira o nome): ');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);
    console.table(retorno);
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
    console.log('Essas são todas os livros disponíveis: ');
    console.table(livros);
}