// main.js
const geradorNome = require('gerador-nome');

const nomeAleatorio = geradorNome.geradorNome();
console.log(`Nome Aleatório: ${nomeAleatorio}`);

const nomeFeminino = geradorNome.geradorNomeFeminino();
console.log(`Nome Feminino Aleatório: ${nomeFeminino}`);

const nomeMasculino = geradorNome.geradorNomeMasculino();
console.log(`Nome Masculino Aleatório: ${nomeMasculino}`);

