import { useNavigate } from "react-router-dom";
import SENAI_logo from "../img/SENAI_logo_2024.png";
import K_logo from "../img/Kinterativo.jpeg";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="screen" id="detail-screen">
      <div className="topbar">
        <div className="topbar-left">
          <img src={SENAI_logo} alt="SENAI" className="topbar-senai-logo" />
          <div className="topbar-title">
            Sobre <span>o Projeto</span>
          </div>
        </div>
        <button className="back-btn" onClick={() => navigate("/")}>← Início</button>
      </div>

      <div className="detail-content">
        <div className="page-logos">
          <img src={K_logo} alt="K Interativo" className="page-logo" />
        </div>
        <h2>K INTERATIVO</h2>
        <p className="detail-subtitle">
          Solução em Elétrica e Mecânica Industrial.
        </p>
        <div className="detail-card">
          <h3>Sobre o Projeto</h3>
          <p>
            Implementação de QR Codes nos maquinários do bloco K,
            informando componentes e modo de funcionamento dos equipamentos.
          </p>
        </div>
        <div className="detail-card">
          <h3>Equipe</h3>
          <ul>
            <li>Luan Henrique</li>
            <li>Eduardo Henrique</li>
            <li>Bruno Oliveira</li>
            <li>Michael Slater</li>
          </ul>
        </div>

        <div className="detail-card">
          <h3>Docência</h3>
          <div className="team-detail">
            <span className="team-label">Orientador</span>
            <span className="team-value">Prof. Maurício Gomes</span>
          </div>
          <div className="team-detail">
            <span className="team-label">Instituição</span>
            <span className="team-value">SENAI DENDEZEIROS · Ano: 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
