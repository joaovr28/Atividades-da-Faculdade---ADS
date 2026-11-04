import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <br></br>
      <h1>
        Essa é a Página <b>"Home"</b>
      </h1>
      <br></br>
      <hr></hr>
      <br></br>
      <nav>
        <Link to={"/Contatos"}>Contatos</Link>
        <Link to={"/Servicos"}>Serviços</Link>
        <Link to={"/Login"}>Login</Link>
        <Link to={"/Mais-informacoes"}>Mais informações</Link>
      </nav>
    </>
  );
}
