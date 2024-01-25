const classA = ["Daniel", "Guido", "Léo", "Vitor", "Ruliana", "Diego", "José"];
const classB = ["Marcos", "Maria", "Juliana", "Cristina", "Paula"];
const classC = ["Marcela", "Pedro", "João", "Jorge", "Carlos", "Henrique"];

allClasses = [...classA, ...classB];

const [zero, one, , , four, five] = classC;

allClasses = [...allClasses, zero, one, four, five];

console.log(allClasses);
