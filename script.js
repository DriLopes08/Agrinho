const dicas = [
    "Use energia solar para reduzir custos com eletricidade.",
    "Recicle materiais orgânicos para produzir adubo.",
    "Plante árvores para combater a erosão do solo.",
    "Monitore o clima com apps para melhor planejamento da colheita.",
    "Capte água da chuva para irrigação consciente."
  ];
  
  const perguntas = [
    {
      texto: "Você conhece o conceito de agroecologia?",
      correta: true
    },
    {
      texto: "Plantar a mesma cultura todo ano é bom para o solo?",
      correta: false
    },
    {
      texto: "Tecnologia pode ajudar a reduzir o uso de defensivos químicos?",
      correta: true
    },
    {
      texto: "Desmatar para aumentar a produção é uma prática sustentável?",
      correta: false
    },
    {
      texto: "Painéis solares podem ser usados em propriedades rurais?",
      correta: true
    }
  ];
  
  let perguntaAtual = 0;
  
  function mostrarDicas() {
    const lista = document.getElementById("dica-lista");
    dicas.forEach(dica => {
      const li = document.createElement("li");
      li.textContent = dica;
      lista.appendChild(li);
    });
  }
  
  function mostrarPergunta() {
    const container = document.getElementById("pergunta-container");
    container.textContent = perguntas[perguntaAtual].texto;
    document.getElementById("resultado").textContent = "";
  }
  
  function responder(resposta) {
    const resultado = document.getElementById("resultado");
    if (resposta === perguntas[perguntaAtual].correta) {
      resultado.textContent = "Resposta correta! Muito bem.";
      resultado.style.color = "#2e7d32";
    } else {
      resultado.textContent = "Resposta incorreta. Reflita sobre isso.";
      resultado.style.color = "#c62828";
    }
  
    perguntaAtual = (perguntaAtual + 1) % perguntas.length;
    setTimeout(mostrarPergunta, 2500);
  }
  
  window.onload = () => {
    mostrarDicas();
    mostrarPergunta();
  };  