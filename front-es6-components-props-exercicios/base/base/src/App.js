import Card from "../src/components/Card";
import "./App.css";
import imgCookie from "../src/assets/cookie.svg";
import imgSirene from "../src/assets/sirene.svg";

function App() {
  return (
    <div className="container">
      <Card
        imagem={imgCookie}
        titulo="Nós utilizamos cookies para melhorar nossa UX, analytics e marketing."
        textobtn="Tudo bem!"
        btncolor="red"
      />
      <Card
        imagem={imgSirene}
        titulo="Você será deslogado imediatamente!"
        textobtn="Extender login"
        btncolor="blue"
      />
    </div>
  );
}

export default App;
