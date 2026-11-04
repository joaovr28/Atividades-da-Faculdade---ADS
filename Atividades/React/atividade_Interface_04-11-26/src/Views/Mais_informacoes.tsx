import { Link } from "react-router-dom";

export default function Mais_informacoes() {
  return (
    <>
      <br></br>
      <h1>
        Essa é a Página <b>"Mais informações"</b>
      </h1>
      <br></br>
      <hr></hr>
      <br></br>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/Contatos"}>Contatos</Link>
        <Link to={"/Servicos"}>Serviços</Link>
        <Link to={"/Login"}>Login</Link>
      </nav>
    </>
  );
}
