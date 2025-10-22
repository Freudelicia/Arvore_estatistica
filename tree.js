const decisionTree = {
  start: {
    header: "Tomada de decisão estatística",
    text: "Qual é o objetivo da sua pesquisa?",
    image: "img/estatistica.jpg",
    options: [
      { text: "Descrever / Avaliar", image: "img/descrever.jpg", next: "descrever" },
      { text: "Correlacionar", image: "img/correlacionar.jpg", next: "correlacionar" },
      { text: "Comparar", image: "img/comparar.jpg", next: "comparar" },
      { text: "Predizer", image: "img/predizer.jpg", next: "predizer" },
      { text: "Validar / Adaptar (Psicometria)", image: "img/validar.jpg", next: "validar" }
    ]
  },

  descrever: {
    header: "Descrição / Avaliação",
    text: "Deseja apenas apresentar estatísticas descritivas ou realizar análises inferenciais?",
    image: "img/descrever.jpg",
    options: [
      { text: "Somente descritivas", image: "img/tabela.jpg", next: "final_descritiva" },
      { text: "Inferenciais", image: "img/inferencial.jpg", next: "final_inferencial" }
    ]
  },

  final_descritiva: {
    header: "Resultado",
    text: "Utilize medidas de tendência central (médias, medianas) e dispersão (desvio padrão, variância).",
    image: "img/tabela.jpg",
    options: []
  },

  final_inferencial: {
    header: "Resultado",
    text: "Considere testes de hipóteses conforme tipo de variável e número de grupos (ex: t, ANOVA, Qui-quadrado).",
    image: "img/inferencial.jpg",
    options: []
  },

  correlacionar: {
    header: "Correlação",
    text: "Você deseja correlacionar variáveis contínuas ou ordinais?",
    image: "img/correlacionar.jpg",
    options: [
      { text: "Contínuas", image: "img/continua.jpg", next: "final_pearson" },
      { text: "Ordinais", image: "img/ordinal.jpg", next: "final_spearman" }
    ]
  },

  final_pearson: {
    header: "Resultado",
    text: "Utilize o coeficiente de correlação de Pearson (r).",
    image: "img/pearson.jpg",
    options: []
  },

  final_spearman: {
    header: "Resultado",
    text: "Utilize o coeficiente de correlação de Spearman (ρ).",
    image: "img/spearman.jpg",
    options: []
  },

  comparar: {
    header: "Comparação",
    text: "Quantos grupos você deseja comparar?",
    image: "img/comparar.jpg",
    options: [
      { text: "2 grupos", image: "img/t.jpg", next: "final_t" },
      { text: "3 ou mais grupos", image: "img/anova.jpg", next: "final_anova" }
    ]
  },

  final_t: {
    header: "Resultado",
    text: "Use o teste t (independente ou pareado, conforme o caso).",
    image: "img/t.jpg",
    options: []
  },

  final_anova: {
    header: "Resultado",
    text: "Use ANOVA (one-way ou repeated measures, conforme o delineamento).",
    image: "img/anova.jpg",
    options: []
  },

  predizer: {
    header: "Predição",
    text: "Seu modelo envolve uma variável dependente contínua ou categórica?",
    image: "img/predizer.jpg",
    options: [
      { text: "Contínua", image: "img/regressao.jpg", next: "final_regressao" },
      { text: "Categórica", image: "img/logistica.jpg", next: "final_logistica" }
    ]
  },

  final_regressao: {
    header: "Resultado",
    text: "Utilize Regressão Linear (simples ou múltipla).",
    image: "img/regressao.jpg",
    options: []
  },

  final_logistica: {
    header: "Resultado",
    text: "Utilize Regressão Logística (binária ou multinomial).",
    image: "img/logistica.jpg",
    options: []
  },

  validar: {
    header: "Validação / Psicometria",
    text: "Deseja realizar uma análise exploratória ou confirmatória?",
    image: "img/validar.jpg",
    options: [
      { text: "Exploratória", image: "img/afe.jpg", next: "final_afe" },
      { text: "Confirmatória", image: "img/afc.jpg", next: "final_afc" }
    ]
  },

  final_afe: {
    header: "Resultado",
    text: "Utilize Análise Fatorial Exploratória (AFE).",
    image: "img/afe.jpg",
    options: []
  },

  final_afc: {
    header: "Resultado",
    text: "Utilize Análise Fatorial Confirmatória (AFC) via Modelagem de Equações Estruturais.",
    image: "img/afc.jpg",
    options: []
  }
};
