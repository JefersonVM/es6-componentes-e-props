const area = ({ base, altura }) => {
  return base * altura;
};

const retangulos = [
  { base: 10, altura: 20 },
  { base: 20, altura: 30 },
  { base: 30, altura: 40 },
  { base: 40, altura: 50 },
  { base: 50, altura: 60 },
  { base: 60, altura: 70 },
];

for (const retangulo of retangulos) {
  console.log(area(retangulo));
}
