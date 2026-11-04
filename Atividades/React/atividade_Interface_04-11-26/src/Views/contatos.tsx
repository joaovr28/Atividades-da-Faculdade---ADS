import { Link } from "react-router-dom";

export default function Contatos() {
  return (
    <>
      <br></br>
      <h1>
        Essa é a Página <b>"Contatos"</b>
      </h1>
      <br></br>
      <hr></hr>
      <br></br>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/Servicos"}>Serviços</Link>
        <Link to={"/Login"}>Login</Link>
        <Link to={"/Mais-informacoes"}>Mais informações</Link>
      </nav>
    </>
  );
}
