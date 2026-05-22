import projectVideo from "../../img/tornoKinterativo.mp4";

function VideoSlide() {
  return (
    <div className="video-wrap">
      <div className="video-player-wrap">
        <video src={projectVideo} controls className="video-player" />
      </div>
      <div className="video-meta">
        <div className="video-meta-chip">Demonstração Prática</div>
        <div className="video-meta-chip">Torno Mecânico</div>
        <div className="video-meta-chip">HD · Gravado</div>
      </div>
      <div className="video-description">
        <p>
          <span className="video-description-title">DEMONSTRAÇÃO · </span>
          Abaixo está o vídeo prático demonstrando as operações de torneamento,
          ajustes e segurança. Use os controles para pausar e avançar.
        </p>
      </div>
    </div>
  );
}

export default VideoSlide;
