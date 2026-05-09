import { useNavigate } from "react-router-dom";
import SENAI_logo from "../img/SENAI_logo_2024.png";
import K_logo from "../img/Kinterativo.jpeg";

function TeamPage() {
  const navigate = useNavigate();

  return (
    <div className="screen" id="detail-screen">
      <div className="topbar">
        <div className="topbar-left">
          <img src={SENAI_logo} alt="SENAI" className="topbar-senai-logo" />
          <div className="topbar-title">
            Equipe <span>& Docência</span>
          </div>
        </div>
        <button className="back-btn" onClick={() => navigate("/")}>← Início</button>
      </div>

      <div className="detail-content">
        <div className="page-logos">
          <img src={K_logo} alt="K Interativo" className="page-logo" />
          <img src={SENAI_logo} alt="SENAI" className="page-logo" />
        </div>
        <div className="page-actions">
          <button className="secondary-btn" onClick={() => navigate("/")}>
            Voltar ao Início
          </button>
        </div>
        <h2>K INTERATIVO</h2>
        <p className="detail-subtitle">
          Solução em Elétrica e Mecânica Industrial.
        </p>
        <div className="detail-card">
          <h3>Integrantes</h3>
          <ul>
            <li>Luan Henrique</li>
            <li>Eduardo Henrique</li>
            <li>Bruno Oliveira</li>
            <li>Michael Slater</li>
          </ul>
        </div>
        <div className="detail-card">
          <h3>Orientador</h3>
          <p>Prof. Maurício Gomes</p>
        </div>
        <div className="detail-card detail-card-small">
          <h3>Instituição</h3>
          <p>SENAI DENDEZEIROS · Ano: 2026</p>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
