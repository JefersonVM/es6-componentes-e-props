import "./App.css";
import Card from "./components/Card";
import ImagemKelvin from "./assets/kelvin.png";
import ImagemCharles from "./assets/charles.png";
import ImagemAnna from "./assets/anna.png";
import ImagemMario from "./assets/mario.png";

const users = [
  {
    name: "Kelvin Costa",
    username: "@costa",
    avatar: <img src={ImagemKelvin} alt="Foto Kelvin" />,
    followers: 140,
    following: 207,
  },

  {
    name: "Charles Santos",
    username: "@charles.santos",
    avatar: <img src={ImagemCharles} alt="Foto Charles" />,
    followers: 302,
    following: 419,
  },

  {
    name: "Anna Bia",
    username: "@anab",
    avatar: <img src={ImagemAnna} alt="Foto Anna" />,
    followers: 842,
    following: 150,
  },

  {
    name: "Mario Hisashi",
    username: "@hisashi",
    avatar: <img src={ImagemMario} alt="Foto Mario" />,
    followers: 28,
    following: 17,
  },
];

function App() {
  return (
    <div className="container">
      {users.map((user) => (
        <Card
          name={user.name}
          username={user.username}
          avatar={user.avatar}
          followers={user.followers}
          following={user.following}
        />
      ))}
    </div>
  );
}

export default App;
