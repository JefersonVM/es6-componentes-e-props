const soma = (...args) => {
  const somaNumeros = args.reduce((acc, curr) => acc + curr, 0);

  return somaNumeros;
};

console.log(soma(1, 3, 4, 5, 6, 7, 8, 9, 0, 5));
