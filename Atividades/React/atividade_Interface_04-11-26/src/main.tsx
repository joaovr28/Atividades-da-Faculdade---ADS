import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Views/Home.tsx";
import Login from "./Views/Login.tsx";
import Contatos from "./Views/Contatos.tsx";
import Servicos from "./Views/Servicos.tsx";
import Mais_informacoes from "./Views/Mais_informacoes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contatos" element={<Contatos />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/Mais-informacoes" element={<Mais_informacoes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
