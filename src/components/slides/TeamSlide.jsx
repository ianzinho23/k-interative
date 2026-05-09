import K_logo from "../../img/Kinterativo.jpeg";
import SENAI_logo from "../../img/SENAI_logo_2024.png";

function TeamSlide() {
  return (
    <div className="team-slide">
      <div className="section-header">
        <div className="logo-row">
          <div className="logo-pill">
            <img src={K_logo} alt="K Interativo" />
          </div>
          <div className="logo-pill">
            <img src={SENAI_logo} alt="SENAI" />
          </div>
        </div>
        <div className="section-heading">
          <h2>Equipe & Docência</h2>
          <p>Informações da equipe, do orientador e da instituição.</p>
        </div>
      </div>

      <div className="team-grid">
        <div className="team-card">
          <h3>Integrantes</h3>
          <ul>
            <li>Luan Henrique</li>
            <li>Eduardo Henrique</li>
            <li>Bruno Oliveira</li>
            <li>Michael Slater</li>
          </ul>
        </div>

        <div className="team-card team-card-highlight">
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

export default TeamSlide;
