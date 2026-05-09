import tornoImg from "../../img/torno.jpeg";

function TheorySlide() {
  const components = [
    "Barramento",
    "Cabeçote Fixo",
    "Cabeçote Móvel",
    "Carro Principal (Longitudinal)",
    "Carro Transversal",
    "Carro Superior (Espera)",
    "Caixa Norton (Engrenagens)",
    "Placa de 3 Castanhas",
    "Torre Porta-Ferramentas",
    "Fuso / Vara",
    "Avental",
    "Motor Elétrico",
  ];

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
            <ul className="components-list">
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Barramento
                </strong>
                : Estrutura de sustentação da máquina, geralmente feita de ferro
                fundido. Possue guias retificadas por onde deslizam o carro
                principal e o cabeçote móvel, garantindo o alinhamento perfeito.
              </li>
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Cabeçote Fixo
                </strong>
                : Localizado à esquerda, abriga o motor, a árvore (eixo
                principal) e as engrenagens de transmissão. É onde se monta a
                Placa, que segura a peça e transmite o movimento de rotação.
              </li>
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Cabeçote Móvel
                </strong>
                : Desliza sobre o barramento e serve para apoiar peças longas
                (usando um contraponto) ou para fixar mandris e brocas para
                furação centralizada.
              </li>
              <li>
                <strong
                  style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
                >
                  Caixa Norton
                </strong>
                : Sistema que permite selecionar a velocidade de rotação e a
                taxa de avanço automático, essencial para a padronização do
                acabamento e para a execução de roscas.
              </li>
            </ul>
            <div className="parts-grid">
              {components.map((comp, i) => (
                <div className="part-pill" key={i}>
                  <div className="part-pill-dot"></div>
                  {comp}
                </div>
              ))}
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
              Na manutenção industrial, o torno é a{" "}
              <strong
                style={{ color: "#F0F4F8", backgroundColor: "transparent" }}
              >
                mãe das máquinas
              </strong>
              . Ele recupera eixos desgastados, cria polias, buchas, pinos e
              parafusos especiais que não são encontrados comercialmente.
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
