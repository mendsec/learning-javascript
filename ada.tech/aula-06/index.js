console.log("Hello World!");
console.log("Estamos na nossa aula 06!");

// Nome de variáveis
// Utilize sempre camelCase no JavaScript!
// Tipos de variáveis
// JavaScript possui tipagem dinâmica: Infere os tipos de dados
// JavaScript possui uma tipagem fraca

var nomeDoProfessor = "Walisson Silva"; // string (texto): Utilize sempre aspas
var idade = 27; // number
var altura = 1.77 // number
var estudando = true // boolean (booleano: verdadeiro ou falso)

console.log(nomeDoProfessor, typeof nomeDoProfessor);

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

var semConteudo; // declarando uma variável

console.log(semConteudo);

var curso = 'Front-end em React', 
    topico = 'JavaScript Básico I';
console.log(curso, topico);

// ! Não utilize o var nos seus códigos JavaScript

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;
// ! mediaDoAluno = 5; Não é permitido!

console.log(notaDoAluno);
console.log(mediaDoAluno);