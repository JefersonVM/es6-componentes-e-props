const usuarios = {
  nome: "Diego",
  idade: 23,
  stack: "Javascript",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};

const {
  nome: nomeUsuario,
  idade,
  stack,
  endereco: { cidade, estado },
} = usuarios;

console.log(nomeUsuario);
console.log(idade);
console.log(stack);
console.log(cidade);
console.log(estado);
