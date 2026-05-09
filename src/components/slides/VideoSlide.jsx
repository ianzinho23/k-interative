function VideoSlide() {
  return (
    <div className="video-wrap">
      <div className="video-placeholder">
        <div className="video-filmstrip">
          {[...Array(8)].map((_, i) => (
            <div className="film-cell" key={i}></div>
          ))}
        </div>
        <div className="video-filmstrip bottom">
          {[...Array(8)].map((_, i) => (
            <div className="film-cell" key={i}></div>
          ))}
        </div>
        <div className="video-corner">
          <div className="video-rec"></div>
        </div>
        <div className="play-btn-outer">
          <div className="play-triangle"></div>
        </div>
        <h3>Vídeo Prático</h3>
        <p
          style={{
            fontSize: "12px",
            color: "#8A9BB0",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          Espaço Reservado
        </p>
        <div className="video-timecode">00:00 / --:--</div>
      </div>
      <div className="video-meta">
        <div className="video-meta-chip">Demonstração Prática</div>
        <div className="video-meta-chip">Torno Mecânico</div>
        <div className="video-meta-chip">HD · Em Breve</div>
      </div>
      <div
        style={{
          background: "rgba(20,32,53,0.85)",
          border: "1px solid rgba(255,107,53,0.15)",
          borderRadius: "4px",
          padding: "14px 16px",
        }}
      >
        <p style={{ fontSize: "12px", color: "#8A9BB0", lineHeight: "1.7" }}>
          <span
            style={{
              color: "#FF6B35",
              fontWeight: "600",
              fontFamily: "Barlow Condensed,sans-serif",
              letterSpacing: "1px",
            }}
          >
            CONTEÚDO FUTURO ·{" "}
          </span>
          Este espaço será preenchido com um vídeo demonstrativo do torno
          mecânico em operação, incluindo procedimentos de segurança, ajuste de
          velocidade, posicionamento de ferramentas e execução de um torneamento
          cilíndrico completo.
        </p>
      </div>
      <div className="video-summary">
        <div className="summary-header">
          <h2>K INTERATIVO</h2>
          <p>Solução em Elétrica e Mecânica Industrial.</p>
        </div>

        <div className="summary-card">
          <h3>Sobre o Projeto</h3>
          <p>
            Implementação de QR Codes nos maquinários do bloco K, informando
            componentes e modo de funcionamento dos equipamentos.
          </p>
        </div>

        <div className="summary-card">
          <h3>Equipe & Docência</h3>
          <ul>
            <li>Luan Henrique</li>
            <li>Eduardo Henrique</li>
            <li>Bruno Oliveira</li>
            <li>Michael Slater</li>
          </ul>
          <p>
            Orientador: <strong>Prof. Maurício Gomes</strong>
          </p>
        </div>

        <div className="summary-card summary-card-small">
          <p>SENAI DENDEZEIROS · Ano: 2026</p>
        </div>
      </div>
    </div>
  );
}

export default VideoSlide;
