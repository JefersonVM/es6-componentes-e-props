const soma = (...args) => {
  const somaNumeros = args.reduce((acc, curr) => acc + curr, 0);

  return somaNumeros;
};

console.log(soma(1, 4, 9, 10));
