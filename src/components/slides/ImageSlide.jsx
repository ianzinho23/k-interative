function ImageSlide() {
  const hotspots = [
    "Cabeçote",
    "Barramento",
    "Avental",
    "Placa",
    "Torre",
    "Fuso",
  ];

  return (
    <div className="img-placeholder-wrap">
      <div className="img-placeholder-frame">
        <div className="img-scan-line"></div>
        <div className="img-camera-icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF6B35"
            strokeWidth="1.5"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
        <h3>Foto Interativa do Torno</h3>
        <p>
          Espaço reservado para imagem interativa em alta resolução com pontos
          de destaque clicáveis.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "0 16px",
          }}
        >
          {hotspots.slice(0, 3).map((h, i) => (
            <div className="hotspot-mock" key={i}>
              <div className="hotspot-dot"></div>
              {h}
            </div>
          ))}
        </div>
        <div className="hotspot-hint">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8A9BB0"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          Clique nos pontos para identificar cada componente
        </div>
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            fontFamily: "var(--font-display)",
            fontSize: "10px",
            color: "rgba(255,107,53,0.4)",
            letterSpacing: "2px",
          }}
        >
          ESPAÇO RESERVADO
        </div>
      </div>
      <div className="hotspot-example">
        <span
          style={{
            fontSize: "12px",
            color: "#8A9BB0",
            letterSpacing: "1px",
            alignSelf: "center",
          }}
        >
          Hotspots disponíveis:
        </span>
        {hotspots.map((h, i) => (
          <div className="hotspot-mock" key={i}>
            <div className="hotspot-dot"></div>
            {h}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlide;
