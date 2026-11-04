import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Views/home.tsx";
import Login from "./Views/Login.tsx";
import Contatos from "./Views/contatos.tsx";
import Servicos from "./Views/Servicos.tsx";
import Mais_informacoes from "./Views/Mais_informacoes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />"
        <Route path="/Login" element={<Login />} />"
        <Route path="/Contato" element={<Contatos />} />"
        <Route path="/Servicos" element={<Servicos />} />"
        <Route path="/Mais-informações" element={<Mais_informacoes />} />"
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
