import { useState } from "react";
import tornoImg from "../../img/torno.jpeg";

function TheorySlide() {
  const componentDetails = {
    "Barramento": "Estrutura e Sustentação: A espinha dorsal do torno, servindo de guia alinhada para o movimento dos carros e do cabeçote móvel. (Acompanha Bandeja: Fica embaixo do barramento para recolher os resíduos/cavacos e o fluido de corte).",
    "Cabeçote Fixo": "Tração e Fixação (Lado Esquerdo): Abriga o motor e as engrenagens que geram a potência e rotação.",
    "Placa de 3 Castanhas": "Eixo-Árvore e Placa: O eixo transmite a rotação para a placa, que segura firmemente a peça a ser usinada.",
    "Caixa Norton(Engrenagens)": "Caixa Norton: Conjunto de engrenagens que define a velocidade de avanço e o passo para fazer roscas.",
    "Carro Principal (Longitudinal)": "Sistema de Corte e Movimentação: Anda paralelo ao barramento (esquerda/direita) para cortes longos. Seu movimento é auxiliado pelo Avental, que fica na frente do carro principal, onde ficam os volantes de controle manual e automático.",
    "Avental": "Avental: Localizado na frente do carro principal, abriga os volantes, alavancas de controle manual e os mecanismos para o avanço automático.",
    "Carro Transversal": "Carro Transversal: Move-se perpendicularmente ao barramento para dar profundidade ao corte ou facear a peça.",
    "Carro Superior (Espera)": "Carro Superior (Charriot): Base giratória para fazer cortes em ângulos e cones.",
    "Torre Porta-Ferramentas": "Torre de Ferramentas: Fica no topo dos carros para fixar firmemente as ferramentas de corte (bits/pastilhas).",
    "Fuso / Vara": "Guias de Avanço: O Fuso é a barra roscada usada exclusivamente para abertura de roscas. A Vara é a barra lisa que puxa o avanço automático no torneamento comum.",
    "Cabeçote Móvel": "Apoio e Guias: Fica na extremidade direita do barramento e serve para apoiar peças longas (evitando vibração) ou fixar mandris para furar o centro da peça.",
    "Motor Elétrico": "Fonte de Potência: Responsável por gerar a força motriz que é transmitida para o cabeçote fixo e demais engrenagens do sistema.",
  };

  const components = Object.keys(componentDetails);
  const [activeComponent, setActiveComponent] = useState(null);

  const operations = [
    "Torneamento cilíndrico externo e interno",
    "Faceamento (planear a face da peça)",
    "Rosqueamento (roscas internas e externas)",
    "Recartilhamento (ranhuras para aderência)",
    "Furação com cabeçote móvel",
    "Sangramento (chanfros e ranhuras)",
    "Cônica (peças troncocônicas)",
    "Acabamento de precisão",
  ];

  return (
    <div className="theory-container">
      <div className="theory-header">
        <div className="theory-icon-box">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF6B35"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        </div>
        <div className="theory-header-text">
          <h2>Torno Mecânico</h2>
          <p>Máquina-Ferramenta de Precisão Industrial</p>
        </div>
      </div>

      <div className="theory-content">
        <div className="theory-image-wrap">
          <img src={tornoImg} alt="Torno Mecânico" className="theory-image" />
        </div>

        <div className="theory-grid">
          <div className="theory-card">
            <h3>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              O que é e para que serve
            </h3>
            <p>
              O torno mecânico é uma das máquinas-ferramenta mais{" "}
              <strong
                style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
              >
                versáteis e fundamentais
              </strong>{" "}
              na indústria metalmecânica. Ele é utilizado para a fabricação e
              acabamento de peças de revolução (cilíndricas, cônicas ou radiais)
              através da remoção progressiva de material.
            </p>
            <p>
              Além do torneamento cilíndrico externo e interno, a máquina
              permite realizar operações como:
            </p>
            <ul>
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Faceamento
                </strong>
                : Deixar a face da peça plana.
              </li>
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Rosqueamento
                </strong>
                : Abertura de roscas internas e externas.
              </li>
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Recartilhamento
                </strong>
                : Criar ranhuras para facilitar a aderência manual.
              </li>
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Furação
                </strong>
                : Utilizando o cabeçote móvel para guiar a broca.
              </li>
            </ul>
          </div>

          <div className="theory-card">
            <h3>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                <path d="M12 8v4l3 3" />
              </svg>
              Modo de Funcionamento
            </h3>
            <p>
              O princípio básico do torno mecânico é o{" "}
              <strong
                style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
              >
                movimento de rotação
              </strong>{" "}
              da peça combinado com o{" "}
              <strong
                style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
              >
                movimento de translação
              </strong>{" "}
              da ferramenta.
            </p>
            <ul>
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Movimento de Corte
                </strong>
                : A peça é fixada na placa (geralmente de três castanhas) e gira
                em alta velocidade em torno de seu próprio eixo.
              </li>
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Movimento de Avanço
                </strong>
                : A ferramenta de corte, fixada no porta-ferramentas, desloca-se
                linearmente ao longo da peça.
              </li>
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Movimento de Penetração
                </strong>
                : A ferramenta é movida em direção ao centro da peça para
                determinar a profundidade do corte e a retirada do cavaco (sobra
                de material).
              </li>
            </ul>
          </div>

          <div className="theory-card theory-card-full orange-accent">
            <h3>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              Componentes Principais
            </h3>
            <p className="components-desc">
              Para garantir precisão e força, o torno é composto por diversas
              partes integradas:
            </p>
            <div className="parts-grid">
              {components.map((comp) => (
                <button
                  type="button"
                  key={comp}
                  className={`part-pill ${activeComponent === comp ? "active" : ""}`}
                  onClick={() => setActiveComponent(comp)}
                  aria-pressed={activeComponent === comp}
                >
                  <div className="part-pill-dot"></div>
                  {comp}
                </button>
              ))}
            </div>
            <div className="component-details-panel">
              <h4>Detalhes do componente</h4>
              <p
                className={`component-detail-text ${activeComponent ? "visible" : ""}`}
                aria-live="polite"
              >
                {activeComponent
                  ? componentDetails[activeComponent]
                  : "Clique em um componente para ver detalhes técnicos e funcionais."}
              </p>
            </div>
          </div>

          <div className="theory-card theory-card-full">
            <h3>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              O que ele faz na prática
            </h3>
            <p className="practice-desc">
              O torno mecânico é uma das máquinas-ferramenta mais versáteis
              e fundamentais da indústria. Na prática, ele é utilizado para
              fabricar ou dar acabamento em peças cilíndricas, fazendo com
              que a matéria-prima (metal, plástico ou madeira) gire em alta
              velocidade contra uma ferramenta de corte que permanece fixa.
            </p>
            <p className="practice-result">
              <strong
                style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
              >
                O resultado final
              </strong>{" "}
              é uma peça com tolerâncias dimensionais rigorosas (muitas vezes na
              casa dos centésimos de milímetro) e excelente qualidade de
              superfície.
            </p>
            <ul className="operations-list">
              {operations.map((op, i) => (
                <li key={i}>{op}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheorySlide;
