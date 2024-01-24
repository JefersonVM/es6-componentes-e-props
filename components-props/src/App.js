import "./App.css";
import UserCard from "./components/UserCard";
import ImagemCard from "./components/ImagemCard";

const peoples = [
  {
    id: 1,
    name: "Carla Rodrigues",
    avatar:
      "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg",
    jobRole: "Desenvolvedora Frontend",
    following: false,
    color: "#c68ece",
    verify: true,
  },
  {
    id: 2,
    name: "Paulo Henrique",
    avatar:
      "https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg",
    jobRole: "Desenvolvedor Backend",
    following: true,
    color: "#45c",
    verify: false,
  },
  {
    id: 3,
    name: "Maria Paula",
    avatar:
      "https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg",
    jobRole: "Product Manager",
    following: false,
    color: "#c68e",
    verify: true,
  },
  {
    id: 2,
    name: "Marcos Paulo",
    avatar:
      "https://cdn.pixabay.com/photo/2019/11/03/23/28/black-businessman-4599849_960_720.jpg",
    jobRole: "Tech Leader",
    following: true,
    color: "#68ce",
    verify: false,
  },

  {
    id: 5,
    name: "Jeferson Vieira",
    avatar: "https://avatars.githubusercontent.com/u/62728162?v=4",
    jobRole: "Desenvolvedor FullStack",
    following: true,
    color: "#68ce",
    verify: true,
  },
];

function App() {
  return (
    <div className="container">
      {/* 
        1 - interpolação {} 
        2 - Percorrer o array utilizando map que é uma expression
        3 - O retorno do map vai ser o nosso component UserCard
        4 - Passamos individualmente cada informação da pessoa
        como prop (propriedade) do nosso component UserCard      
      */}

      {peoples.map((people) => (
        <UserCard
          key={people.id}
          name={people.name}
          jobRole={people.jobRole}
          following={people.following}
          verify={people.verify}
        >
          <ImagemCard avatar={people.avatar} color={people.color} />
        </UserCard>
      ))}
    </div>
  );
}

export default App;
