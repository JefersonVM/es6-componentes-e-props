const user = {
  name: "Mariana",
  lastName: "Rocha",
  stack: "JavaScript",
};

const userAdress = {
  city: "São Paulo",
  state: "SP",
  country: "Brasil",
};

const userComplete = { ...user, ...userAdress };

console.log(userComplete);
