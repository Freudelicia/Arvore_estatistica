// ======= Função para adicionar tooltips automáticos =======
function addTooltips(text) {
  const terms = {
    "Paramétrica": "Análises que assumem distribuição normal e utilizam estatísticas baseadas em média e variância.",
    "Não paramétrica": "Análises que não exigem distribuição normal; baseiam-se em postos ou frequências.",
    "Ordinal": "Variáveis com ordem, mas sem intervalos iguais entre os valores (ex: nível de satisfação).",
    "Nominal": "Categorias sem ordem (ex: gênero, cor dos olhos).",
    "Escalar": "Variáveis numéricas contínuas com intervalos iguais (ex: idade, peso, pontuação)."
  };
  for (const [term, def] of Object.entries(terms)) {
    const regex = new RegExp(`\\b${term}\\b`, "g");
    text = text.replace(regex, `<span class="tooltip" data-tooltip="${def}">${term}</span>`);
  }
  return text;
}

// ======= Árvore de decisão =======
const decisionTree = {
  start: {
    header: "Tomada de decisão estatística",
    text: "Qual é o objetivo da sua pesquisa?",
    image: "img/estatistica.jpg",
    options: [
      { text: "Descrever / Avaliar", next: "descrever" },
      { text: "Correlacionar", next: "correlacionar" },
      { text: "Comparar", next: "comparar" },
      { text: "Predizer", next: "predizer" },
      { text: "Validar / Adaptar (Psicometria)", next: "validar" }
    ]
  },

  // ======= DESCREVER =======
  descrever: {
    header: "Descrição / Avaliação",
    text: "O tipo de variável é <b>Ordinal ou Escalar</b>, ou <b>Nominal</b>?",
    image: "img/descrever.jpg",
    options: [
      { text: "Ordinal ou Escalar", next: "descr_ordinal" },
      { text: "Nominal", next: "descr_nominal" }
    ]
  },

  descr_ordinal: {
    header: "Variáveis Ordinais ou Escalares",
    text: "Escolha as medidas descritivas desejadas:",
    image: "img/medidas.jpg",
    options: [
      { text: "Desvio Padrão", next: "final_descr" },
      { text: "Média", next: "final_descr" },
      { text: "Mediana", next: "final_descr" }
    ]
  },

  descr_nominal: {
    header: "Variáveis Nominais",
    text: "Para variáveis nominais, utilize medidas de <b>Frequência</b>.",
    image: "img/frequencia.jpg",
    options: [{ text: "Entendido", next: "final_descr" }]
  },

  // ======= CORRELACIONAR =======
  correlacionar: {
    header: "Correlação entre variáveis",
    text: "Sua análise será <b>Paramétrica</b> ou <b>Não Paramétrica</b>?",
    image: "img/correlacionar.jpg",
    options: [
      { text: "Paramétrica", next: "corr_param" },
      { text: "Não Paramétrica", next: "corr_nparam" }
    ]
  },

  corr_param: {
    header: "Correlação Paramétrica",
    text: "As variáveis são <b>Ordinal ou Escalar</b>, ou <b>Nominal</b>?",
    image: "img/parametrica.jpg",
    options: [
      { text: "Ordinal ou Escalar", next: "pearson" },
      { text: "Nominal", next: "ponto_biserial" }
    ]
  },

  corr_nparam: {
    header: "Correlação Não Paramétrica",
    text: "As variáveis são <b>Ordinal ou Escalar</b>, ou <b>Nominal</b>?",
    image: "img/nparametrica.jpg",
    options: [
      { text: "Ordinal ou Escalar", next: "spearman" },
      { text: "Nominal", next: "chi_quadrado" }
    ]
  },

  pearson: {
    header: "Correlação de Pearson",
    text: "Indicado para variáveis <b>Escalares</b> e distribuição normal.",
    image: "img/pearson.jpg",
    options: [{ text: "Finalizar", next: "final" }]
  },

  ponto_biserial: {
    header: "Correlação Ponto-Biserial",
    text: "Usada quando há uma variável <b>Nominal</b> dicotômica e outra <b>Escalar</b>.",
    image: "img/ponto_biserial.jpg",
    options: [{ text: "Finalizar", next: "final" }]
  },

  spearman: {
    header: "Correlação de Spearman",
    text: "Usada para variáveis <b>Ordinais</b> ou quando há violação de normalidade.",
    image: "img/spearman.jpg",
    options: [{ text: "Finalizar", next: "final" }]
  },

  chi_quadrado: {
    header: "Qui-Quadrado",
    text: "Usado para avaliar associação entre variáveis <b>Nominais</b>.",
    image: "img/chi2.jpg",
    options: [{ text: "Finalizar", next: "final" }]
  },

  // ======= PLACEHOLDERS =======
  comparar: {
    header: "Comparar grupos",
    text: "Aqui futuramente você poderá escolher entre análises <b>Paramétricas</b> e <b>Não Paramétricas</b> para comparação de médias.",
    image: "img/comparar.jpg",
    options: [{ text: "Voltar", next: "start" }]
  },

  predizer: {
    header: "Predição de variáveis",
    text: "Esta seção abordará modelos de regressão e predição estatística.",
    image: "img/predizer.jpg",
    options: [{ text: "Voltar", next: "start" }]
  },

  validar: {
    header: "Validação / Psicometria",
    text: "Nesta seção, serão incluídos métodos de <b>análise fatorial</b>, <b>alfa de Cronbach</b> e <b>correlação item-total</b>.",
    image: "img/validar.jpg",
    options: [{ text: "Voltar", next: "start" }]
  },

  // ======= FINAIS =======
  final_descr: {
    header: "Medidas descritivas",
    text: "Você pode complementar sua análise com gráficos e medidas de dispersão.",
    image: "img/final.jpg",
    options: []
  },

  final: {
    header: "Interpretação dos resultados",
    text: "Lembre-se de reportar o <b>tamanho de efeito</b> e o <b>valor p</b> para suas análises de comparação ou correlação.",
    image: "img/final.jpg",
    options: []
  }
};

// ======= Lógica de navegação =======
let history = [];

function displayNode(nodeKey) {
  const node = decisionTree[nodeKey];
  if (!node) return;

  if (history.length === 0 || history[history.length - 1] !== nodeKey) {
    history.push(nodeKey);
  }

  document.getElementById("node-header").textContent = node.header;
  document.getElementById("node-text").innerHTML = addTooltips(node.text);
  document.getElementById("node-image").src = node.image;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  node.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-button";
    btn.innerHTML = addTooltips(opt.text);
    btn.onclick = () => displayNode(opt.next);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("back-button").style.display = history.length > 1 ? "inline-block" : "none";
}

document.getElementById("back-button").addEventListener("click", () => {
  if (history.length > 1) {
    history.pop();
    const previousNode = history[history.length - 1];
    displayNode(previousNode);
  }
});

displayNode("start");
