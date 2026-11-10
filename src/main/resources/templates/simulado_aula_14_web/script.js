const questions = [
  { topic: "Fundamentos", text: "Uma equipe recebe mudanças frequentes e precisa validar hipóteses rapidamente. Qual abordagem é mais coerente?", options: ["Definir todo o escopo antes de iniciar", "Trabalhar em ciclos curtos com feedback", "Evitar contato com o cliente durante o projeto", "Medir sucesso apenas pelo cumprimento do plano"], correct: 1, explanation: "Ciclos curtos permitem entregar, aprender e adaptar o produto com base em evidências." },
  { topic: "Manifesto Ágil", text: "O valor “software em funcionamento mais que documentação abrangente” significa que a equipe deve:", options: ["Eliminar toda documentação", "Documentar somente depois da entrega final", "Priorizar valor entregue sem abandonar documentação útil", "Substituir requisitos por conversas informais"], correct: 2, explanation: "O Manifesto valoriza ambos os lados, mas prioriza resultados utilizáveis e documentação que realmente apoie o trabalho." },
  { topic: "Manifesto Ágil", text: "Durante o projeto, o cliente propõe uma mudança que pode aumentar o valor do produto. A resposta mais ágil é:", options: ["Recusar porque o plano já foi aprovado", "Aceitar imediatamente sem analisar impactos", "Analisar valor, riscos e ajustar o plano de modo transparente", "Esperar o encerramento para registrar a sugestão"], correct: 2, explanation: "Responder a mudanças exige análise e adaptação responsável, não obediência automática nem rigidez." },
  { topic: "Tradicional x Ágil", text: "Qual diferença melhor caracteriza o planejamento ágil?", options: ["Não existe planejamento", "O plano é revisado conforme surge aprendizado", "Prazos e objetivos deixam de existir", "Todas as decisões são adiadas"], correct: 1, explanation: "Planejamento ágil é contínuo e adaptativo; objetivos permanecem, mas detalhes podem evoluir." },
  { topic: "Scrum — empirismo", text: "Uma equipe só descobre no fim da Sprint que o incremento não atende ao esperado. Qual pilar precisa ser fortalecido primeiro?", options: ["Transparência", "Coragem", "Especialização", "Previsibilidade contratual"], correct: 0, explanation: "Sem transparência sobre trabalho, qualidade e progresso, inspeção e adaptação perdem efetividade." },
  { topic: "Scrum Team", text: "Quem é responsável por maximizar o valor do produto e ordenar o Product Backlog?", options: ["Scrum Master", "Product Owner", "Developers", "Stakeholders"], correct: 1, explanation: "O Product Owner responde pela maximização de valor e pela gestão eficaz do Product Backlog." },
  { topic: "Scrum Master", text: "Qual ação representa melhor a atuação do Scrum Master?", options: ["Distribuir tarefas diariamente", "Aprovar tecnicamente cada entrega", "Facilitar a remoção de impedimentos e o uso eficaz do Scrum", "Definir sozinho o Sprint Goal"], correct: 2, explanation: "O Scrum Master atua como líder servidor e facilitador, sem assumir o papel de chefe da equipe." },
  { topic: "Artefatos Scrum", text: "Qual associação entre artefato e compromisso está correta?", options: ["Product Backlog — Sprint Goal", "Sprint Backlog — Product Goal", "Increment — Definition of Done", "Increment — Definition of Ready"], correct: 2, explanation: "O Increment está comprometido com a Definition of Done, que explicita a qualidade necessária." },
  { topic: "Eventos Scrum", text: "Em qual evento os stakeholders inspecionam resultados e discutem adaptações futuras do produto?", options: ["Daily Scrum", "Sprint Review", "Sprint Retrospective", "Sprint Planning"], correct: 1, explanation: "A Sprint Review inspeciona o resultado com interessados e adapta o Product Backlog quando necessário." },
  { topic: "Eventos Scrum", text: "A principal finalidade da Sprint Retrospective é:", options: ["Demonstrar funcionalidades ao cliente", "Reordenar todo o Product Backlog", "Planejar melhorias na qualidade e na forma de trabalhar", "Cobrar tarefas atrasadas individualmente"], correct: 2, explanation: "A retrospectiva inspeciona pessoas, interações, processos e ferramentas para produzir melhorias." },
  { topic: "Histórias de usuário", text: "Qual opção expressa melhor uma história de usuário?", options: ["Criar tabela CLIENTE com cinco campos", "Como cliente, quero remarcar um horário para lidar com imprevistos", "O sistema deve usar tecnologia X", "Implementar tela até sexta-feira"], correct: 1, explanation: "A história descreve usuário, necessidade e benefício, sem antecipar desnecessariamente a solução técnica." },
  { topic: "Critérios de aceitação", text: "Qual é a função principal dos critérios de aceitação?", options: ["Estimar o salário da equipe", "Definir condições verificáveis para aceitar um item", "Substituir a Definition of Done", "Registrar apenas detalhes técnicos"], correct: 1, explanation: "Critérios de aceitação tornam o comportamento esperado verificável e alinham entendimento sobre o item." },
  { topic: "Planejamento Scrum", text: "Qual é o resultado esperado da Sprint Planning?", options: ["Um contrato imutável", "Um Sprint Backlog com Sprint Goal, itens e plano inicial", "Todo o Product Backlog detalhado", "A aprovação formal dos stakeholders"], correct: 1, explanation: "A Sprint Planning cria o Sprint Goal e o plano inicial para entregar os itens selecionados." },
  { topic: "Backlog", text: "Ao ordenar o Product Backlog, qual análise é mais adequada?", options: ["Somente urgência", "Somente esforço", "Valor, risco, aprendizado, dependências e esforço", "Preferência individual do desenvolvedor"], correct: 2, explanation: "A ordenação equilibra múltiplos fatores para maximizar valor e reduzir incerteza." },
  { topic: "Refinamento", text: "Uma história é grande e pouco compreendida. O refinamento deve:", options: ["Transformá-la imediatamente em tarefa individual", "Detalhar tudo até eliminar qualquer mudança futura", "Dividi-la, esclarecer critérios e apoiar estimativas", "Movê-la diretamente para concluído"], correct: 2, explanation: "Refinamento melhora entendimento e tamanho dos itens sem tentar congelar antecipadamente todos os detalhes." },
  { topic: "Kanban", text: "Qual afirmação evita reduzir Kanban a um simples quadro?", options: ["O quadro substitui as conversas", "Kanban combina visualização, limites de WIP, gestão de fluxo e melhoria", "Toda coluna deve ter a mesma quantidade de cartões", "Kanban exige Sprints fixas"], correct: 1, explanation: "O quadro é apenas parte de um método que gerencia fluxo e promove mudança evolutiva." },
  { topic: "WIP", text: "Uma coluna de desenvolvimento acumula muitos itens e poucos terminam. A ação mais coerente é:", options: ["Iniciar ainda mais itens", "Elevar todas as estimativas", "Limitar WIP e ajudar a concluir o trabalho em andamento", "Criar uma reunião diária adicional"], correct: 2, explanation: "Limitar WIP reduz multitarefa, evidencia gargalos e favorece conclusão antes de iniciar novo trabalho." },
  { topic: "Sistema puxado", text: "Em um sistema puxado, um novo item entra em uma etapa quando:", options: ["Alguém o empurra independentemente da capacidade", "Existe capacidade disponível segundo as políticas", "O gerente determina uma urgência", "A etapa anterior termina a reunião"], correct: 1, explanation: "O trabalho é puxado quando há capacidade, respeitando limites e políticas explícitas." },
  { topic: "Métricas de fluxo", text: "Qual métrica mede o tempo entre o início efetivo do trabalho e sua conclusão?", options: ["Lead time", "Cycle time", "Throughput", "WIP"], correct: 1, explanation: "Cycle time mede o intervalo de trabalho iniciado até concluído; lead time começa na solicitação." },
  { topic: "Métricas de fluxo", text: "O throughput de uma equipe representa:", options: ["Itens concluídos por unidade de tempo", "Itens simultaneamente em andamento", "Tempo total de uma solicitação", "Pontos individuais por pessoa"], correct: 0, explanation: "Throughput expressa quantos itens são concluídos em determinado período." },
  { topic: "Adaptação", text: "Uma empresa mantém cerimônias, mas ignora feedback, não entrega incrementos e pune mudanças. Isso indica:", options: ["Adaptação responsável", "Ágil de fachada", "Empirismo avançado", "Liderança distribuída"], correct: 1, explanation: "Usar nomes e rituais sem preservar seus propósitos e valores caracteriza ágil de fachada." },
  { topic: "Escolha de práticas", text: "Antes de combinar Scrum, Kanban e XP, a equipe deve primeiro:", options: ["Escolher a ferramenta mais popular", "Diagnosticar contexto, problema, restrições e resultados desejados", "Copiar o processo de outra empresa", "Eliminar todas as práticas atuais"], correct: 1, explanation: "A customização coerente começa pelo diagnóstico, não pela preferência por uma marca ou ferramenta." },
  { topic: "XP — TDD", text: "Qual sequência representa o ciclo essencial de TDD?", options: ["Green, Refactor, Red", "Red, Green, Refactor", "Plan, Code, Deploy", "Test, Document, Release"], correct: 1, explanation: "Primeiro o teste falha, depois o código mínimo o faz passar e então a solução é refatorada." },
  { topic: "XP — refatoração", text: "Refatorar significa:", options: ["Reescrever todo o sistema", "Alterar a estrutura interna preservando o comportamento observável", "Adicionar novas funcionalidades sem testes", "Trocar obrigatoriamente a tecnologia"], correct: 1, explanation: "Refatoração melhora o desenho interno sem alterar o comportamento externo esperado." },
  { topic: "XP — pares", text: "Na programação em pares, os papéis de piloto e navegador devem:", options: ["Permanecer fixos durante todo o projeto", "Alternar, combinando execução e revisão contínua", "Ser ocupados apenas por especialistas", "Eliminar a necessidade de comunicação"], correct: 1, explanation: "A alternância compartilha conhecimento e mantém revisão contínua da direção e do código." },
  { topic: "Comunicação", text: "Qual feedback é mais eficaz?", options: ["“Seu trabalho está ruim.”", "“Você sempre atrasa tudo.”", "“O critério X não foi atendido; proponho revisar Y até amanhã.”", "“Melhore isso quando puder.”"], correct: 2, explanation: "Feedback eficaz é específico, baseado em evidência e orientado a uma ação ou próximo passo." },
  { topic: "Auto-organização", text: "Auto-organização funciona melhor quando há:", options: ["Autonomia sem objetivos", "Objetivos claros, limites, informação e responsabilidade", "Decisões centralizadas em uma pessoa", "Ausência de políticas"], correct: 1, explanation: "Autonomia precisa de alinhamento, contexto e responsabilidade para gerar decisões coerentes." },
  { topic: "Ferramentas", text: "Ao escolher uma ferramenta de gestão, o critério mais importante é:", options: ["Quantidade de recursos disponíveis", "Popularidade nas redes sociais", "Aderência ao fluxo, colaboração e informação necessária", "Possuir o maior número de automações"], correct: 2, explanation: "A ferramenta deve servir ao processo e às necessidades de informação, não definir a metodologia." },
  { topic: "Estimativas", text: "Story points devem representar principalmente:", options: ["Horas universais", "Tamanho relativo segundo a referência do time", "Prazo contratual garantido", "Produtividade individual"], correct: 1, explanation: "Story points são uma medida relativa contextual, não uma conversão automática em horas." },
  { topic: "Planning Poker", text: "Por que as estimativas são reveladas simultaneamente no Planning Poker?", options: ["Para impedir qualquer divergência", "Para reduzir ancoragem e revelar diferentes entendimentos", "Para converter pontos em horas", "Para premiar quem estima mais baixo"], correct: 1, explanation: "A revelação simultânea reduz influência inicial e torna divergências úteis para a conversa." }
];

const STORAGE_KEY = "unialfa-desafio-agil-v2";
const colors = ["#f4b223", "#1ac939", "#45a3ff", "#ff6b6b", "#b98cff", "#ff8f3d", "#42d9c8", "#f26db2"];
const state = { teams: [], turn: 0, order: questions.map((_, i) => i), answers: Array(questions.length).fill(null), current: null, pendingAdvance: false };
const $ = (selector) => document.querySelector(selector);
const screens = { setup: $("#setup-screen"), board: $("#board-screen"), question: $("#question-screen"), finish: $("#finish-screen") };

function shuffle(values) { const copy = [...values]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
function answeredCount() { return state.answers.filter(Boolean).length; }
function currentTeam() { return state.teams[state.turn]; }
function showScreen(name) { Object.entries(screens).forEach(([key, node]) => node.classList.toggle("active", key === name)); window.scrollTo({ top: 0, behavior: "smooth" }); }
function saveGame() { if (state.teams.length >= 2) localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function clearGame() { localStorage.removeItem(STORAGE_KEY); }


function addTeamInput(value = "") {
  const row = document.createElement("div"); row.className = "team-input-row";
  row.innerHTML = `<span class="team-color" style="--team-color:${colors[$("#team-inputs").children.length % colors.length]}"></span><input type="text" maxlength="32" placeholder="Nome da equipe" value="${value.replace(/"/g, "&quot;")}" aria-label="Nome da equipe"><button type="button" class="remove-team" aria-label="Remover equipe">×</button>`;
  row.querySelector(".remove-team").addEventListener("click", () => { if ($("#team-inputs").children.length > 2) row.remove(); else showSetupError("A competição precisa de pelo menos duas equipes."); });
  $("#team-inputs").appendChild(row);
}
function showSetupError(message) { $("#setup-error").textContent = message; $("#setup-error").hidden = false; }
function resetSetup() { $("#team-inputs").innerHTML = ""; addTeamInput(); addTeamInput(); $("#setup-error").hidden = true; updateSummary(); }

function startGame(event) {
  event.preventDefault();
  const names = [...document.querySelectorAll("#team-inputs input")].map(i => i.value.trim()).filter(Boolean);
  if (names.length < 2) return showSetupError("Informe o nome de pelo menos duas equipes.");
  if (new Set(names.map(n => n.toLowerCase())).size !== names.length) return showSetupError("Use nomes diferentes para cada equipe.");
  state.teams = names.map((name, index) => ({ name, score: 0, correct: 0, wrong: 0, color: colors[index % colors.length] }));
  if ($("#shuffle-teams-toggle").checked) state.teams = shuffle(state.teams);
  state.turn = 0; state.current = null; state.pendingAdvance = false; state.answers = Array(questions.length).fill(null);
  state.order = $("#shuffle-toggle").checked ? shuffle(questions.map((_, i) => i)) : questions.map((_, i) => i);
  saveGame(); renderBoard(); showScreen("board");
}

function updateSummary() { $("#team-count").textContent = state.teams.length; $("#answered").textContent = answeredCount(); $("#remaining").textContent = questions.length - answeredCount(); }
function renderRanking(target = $("#team-ranking"), final = false) {
  target.innerHTML = "";
  const teams = final ? [...state.teams].sort((a, b) => b.score - a.score || b.correct - a.correct) : state.teams;
  teams.forEach((team, index) => {
    const card = document.createElement("div"); card.className = `team-card${!final && index === state.turn ? " current" : ""}`; card.style.setProperty("--team-color", team.color);
    card.innerHTML = `<span class="team-position">${final ? `${index + 1}º` : index === state.turn ? "JOGANDO" : "EQUIPE"}</span><strong>${team.name}</strong><b>${team.score} pts</b><small>${team.correct} acerto${team.correct === 1 ? "" : "s"} · ${team.wrong} erro${team.wrong === 1 ? "" : "s"}</small>`;
    target.appendChild(card);
  });
}
function renderBoard() {
  if (!state.teams.length) return showScreen("setup");
  $("#current-team-name").textContent = currentTeam().name; $("#turn-banner").style.setProperty("--team-color", currentTeam().color);
  renderRanking(); const grid = $("#question-grid"); grid.innerHTML = "";
  state.order.forEach((questionIndex, position) => {
    const question = questions[questionIndex]; const answer = state.answers[questionIndex]; const button = document.createElement("button");
    button.type = "button"; button.className = `question-tile${answer ? ` ${answer.correct ? "correct" : "incorrect"}` : ""}`; button.disabled = Boolean(answer);
    button.innerHTML = `<span class="tile-status"></span><span class="number">${String(questionIndex + 1).padStart(2, "0")}</span><span class="topic">${question.topic}</span>${answer ? `<small>${state.teams[answer.team].name}</small>` : ""}`;
    if (!answer) button.addEventListener("click", () => openQuestion(questionIndex)); button.style.animationDelay = `${Math.min(position * 20, 400)}ms`; grid.appendChild(button);
  }); updateSummary(); saveGame();
}
function openQuestion(index) {
  state.current = index; state.pendingAdvance = false; const question = questions[index];
  $("#question-team-name").textContent = currentTeam().name; $("#question-team-name").style.color = currentTeam().color;
  $("#question-number").textContent = `Questão ${String(index + 1).padStart(2, "0")}`; $("#question-topic").textContent = question.topic; $("#question-title").textContent = question.text;
  const options = $("#options");
  options.innerHTML = "";
  $("#feedback").hidden = true;
  $("#feedback").className = "feedback";
  $("#feedback-title").textContent = "";
  $("#feedback-text").textContent = "";
  $("#feedback .feedback-icon").textContent = "";
  $("#return-button").hidden = true;
  question.options.forEach((option, optionIndex) => { const button = document.createElement("button"); button.type = "button"; button.className = "option"; button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span>`; button.addEventListener("click", () => answerQuestion(optionIndex)); options.appendChild(button); });
  showScreen("question");
}
function answerQuestion(selected) {
  if (state.answers[state.current]) return; const question = questions[state.current]; const isCorrect = selected === question.correct; const teamIndex = state.turn; const team = currentTeam();
  state.answers[state.current] = { selected, correct: isCorrect, team: teamIndex }; if (isCorrect) { team.score += 10; team.correct++; } else team.wrong++;
  [...$("#options").children].forEach((button, index) => { button.disabled = true; if (index === question.correct) button.classList.add("correct"); if (index === selected && !isCorrect) button.classList.add("incorrect"); });
  const feedback = $("#feedback"); feedback.hidden = false; feedback.classList.add(isCorrect ? "correct" : "incorrect"); feedback.querySelector(".feedback-icon").textContent = isCorrect ? "+10" : "0";
  $("#feedback-title").textContent = isCorrect ? `${team.name} marcou 10 pontos!` : `${team.name} não pontuou desta vez.`; $("#feedback-text").textContent = question.explanation;
  state.pendingAdvance = true; $("#return-button").hidden = false; updateSummary(); saveGame();
}
function advanceTurn() { if (state.pendingAdvance) { state.turn = (state.turn + 1) % state.teams.length; state.pendingAdvance = false; } state.current = null; if (answeredCount() === questions.length) showFinish(); else { renderBoard(); showScreen("board"); } }
function showFinish() {
  const ranking = [...state.teams].sort((a, b) => b.score - a.score || b.correct - a.correct); const topScore = ranking[0].score; const winners = ranking.filter(t => t.score === topScore);
  $("#finish-message").textContent = winners.length === 1 ? `${winners[0].name} venceu com ${topScore} pontos!` : `Empate entre ${winners.map(t => t.name).join(" e ")} com ${topScore} pontos.`;
  renderRanking($("#final-ranking"), true); saveGame(); showScreen("finish");
}
function restartScores() { state.teams.forEach(t => { t.score = 0; t.correct = 0; t.wrong = 0; }); state.turn = 0; state.current = null; state.pendingAdvance = false; state.answers = Array(questions.length).fill(null); state.order = $("#shuffle-toggle").checked ? shuffle(questions.map((_, i) => i)) : questions.map((_, i) => i); renderBoard(); showScreen("board"); }
function newGame() { clearGame(); state.teams = []; state.answers = Array(questions.length).fill(null); resetSetup(); showScreen("setup"); }
function restoreGame() { try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)); if (!saved?.teams?.length) return false; Object.assign(state, saved); state.current = null; state.pendingAdvance = false; renderBoard(); showScreen(answeredCount() === questions.length ? "finish" : "board"); if (answeredCount() === questions.length) showFinish(); return true; } catch { clearGame(); return false; } }

$("#add-team-button").addEventListener("click", () => addTeamInput()); $("#team-form").addEventListener("submit", startGame); $("#return-button").addEventListener("click", advanceTurn);
$("#reset-button").addEventListener("click", restartScores); $("#restart-button").addEventListener("click", restartScores); $("#new-game-button").addEventListener("click", newGame); $("#change-teams-button").addEventListener("click", newGame);
$("#review-button").addEventListener("click", () => { renderBoard(); showScreen("board"); });
resetSetup(); if (!restoreGame()) updateSummary();
