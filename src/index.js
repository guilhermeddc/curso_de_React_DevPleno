import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Componente funcional: functional component
function App() {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  // palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar Jogo</button>;
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };
  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpite} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar Novamente!</button>
      </div>
    );
  }
  // 0 <> 300
  // palpites que a maquina deu.
  return (
    <div className="App">
      <p>O seu numero é {palpite}?</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Guilherme Rodrigues" />, rootElement);
