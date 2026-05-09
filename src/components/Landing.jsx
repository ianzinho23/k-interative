import { useNavigate } from "react-router-dom";
import SENAI_logo from "../img/SENAI_logo_2024.png";
import K_logo from "../img/Kinterativo.jpeg";

function Landing({ onAccess }) {
  const navigate = useNavigate();

  return (
    <div className="screen" id="landing">
      <div className="senai-logo-wrap">
        <img src={SENAI_logo} alt="SENAI" className="senai-logo-img" />
        <div className="senai-label">
          Serviço Nacional
          <br />
          de Aprendizagem
        </div>
      </div>

      <div className="landing-center">
        <div className="k-logo-ring">
          <img src={K_logo} alt="K Interativo" className="k-logo-img" />
        </div>

        <div className="landing-title">
          <h1>K INTERATIVO</h1>
          <p>Solução em Elétrica e Mecânica Industrial.</p>
        </div>

        <button className="btn-acessar" onClick={onAccess}>
          <span>⬡ &nbsp;Acessar</span>
        </button>

        <div className="landing-links">
          <button onClick={() => navigate("/sobre")}>Sobre o Projeto</button>
          <button onClick={() => navigate("/teoria")}>Teoria</button>
          <button onClick={() => navigate("/video")}>Vídeo</button>
          <button onClick={() => navigate("/equipe")}>Equipe</button>
        </div>
      </div>

      <div className="landing-corner">
        <div className="corner-dot"></div>
        <span className="corner-text">Sistema Interativo v1.0</span>
      </div>
    </div>
  );
}

export default Landing;
