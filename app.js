/**
 * ANOVA ARK CLUSTER — CONEXÃO RÁPIDA & PORTAL GITHUB PAGES
 * Gerenciador de conexão em 1 clique, cópia de comandos e suporte multilíngue
 */

// Configuração dos Servidores do Cluster
const SERVERS = {
  server1: {
    id: "server1",
    name: "Server 1 (The Island)",
    gamePort: 7777,
    queryPort: 27015
  },
  server2: {
    id: "server2",
    name: "Server 2 (Fjordur)",
    gamePort: 7779,
    queryPort: 27016
  }
};

const DEFAULT_HOST = "200.181.245.38";

// Dicionário Multilíngue (PT, EN, ES)
const I18N = {
  pt: {
    clusterStatus: "SERVIDOR ONLINE",
    heroTitlePrefix: "CONECTAR AO",
    heroDesc: "Escolha abaixo o método mais conveniente para a sua plataforma e entre imediatamente no jogo.",
    autoConnectTitle: "Conexão Automática Steam",
    autoConnectDesc: "Iniciando o ARK e conectando via Steam em instantes...",
    btnConnectNow: "Conectar Agora",
    btnCancelAuto: "Cancelar",
    selectMap: "SELECIONE O MAPA:",
    steamTitle: "Steam (1-Clique)",
    steamSub: "Abre o ARK e conecta diretamente",
    steamDesc: "Clique no botão abaixo. Seu navegador pedirá confirmação para iniciar a Steam e entrará no servidor.",
    btnSteam: "ENTRAR VIA STEAM",
    steamRawLabel: "Link Direto:",
    epicTitle: "Epic Games",
    epicSub: "Conexão via Console no Jogo",
    epicSteps: [
      "Abra o ARK na Epic Games.",
      "No menu principal ou dentro de qualquer mapa, aperte a tecla <kbd>TAB</kbd>.",
      "Cole o comando abaixo e aperte <kbd>ENTER</kbd>:"
    ],
    favTitle: "Favoritos da Steam",
    favSub: "Para o servidor nunca sumir",
    favSteps: [
      "Na Steam, clique em <strong>Exibir</strong> ➔ <strong>Servidores de Jogos</strong>.",
      "Selecione a aba <strong>Favoritos</strong> e clique no <strong>+</strong>.",
      "Adicione o endereço do servidor:"
    ],
    favNote: "Aparecerá automaticamente nos seus Favoritos no ARK!",
    discordTitle: "Comunidade & Discord",
    discordSub: "Suporte, Kits e Registro de Tribo",
    discordDesc: "Registre sua tribo para garantir plataforma oceânica grátis, use comandos como <code>/kit iniciante</code> e vote na rotação de novos mapas!",
    copiedSuccess: "Copiado com sucesso para a área de transferência!",
    modalTitle: "⚙️ Configurações do Cluster",
    modalDesc: "Defina o IP público ou domínio DDNS (ex: No-IP, DuckDNS) que os jogadores devem usar para conectar:"
  },
  en: {
    clusterStatus: "SERVER ONLINE",
    heroTitlePrefix: "CONNECT TO",
    heroDesc: "Choose the most convenient method for your platform below and join the game immediately.",
    autoConnectTitle: "Automatic Steam Connection",
    autoConnectDesc: "Launching ARK and connecting via Steam in a moment...",
    btnConnectNow: "Connect Now",
    btnCancelAuto: "Cancel",
    selectMap: "SELECT MAP:",
    steamTitle: "Steam (1-Click)",
    steamSub: "Launches ARK and connects directly",
    steamDesc: "Click the button below. Your browser will prompt confirmation to launch Steam and join the server.",
    btnSteam: "JOIN VIA STEAM",
    steamRawLabel: "Direct Link:",
    epicTitle: "Epic Games",
    epicSub: "In-Game Console Connection",
    epicSteps: [
      "Launch ARK on Epic Games.",
      "In the main menu or inside any map, press <kbd>TAB</kbd>.",
      "Paste the command below and press <kbd>ENTER</kbd>:"
    ],
    favTitle: "Steam Favorites",
    favSub: "Keep the server saved permanently",
    favSteps: [
      "In Steam, click <strong>View</strong> ➔ <strong>Game Servers</strong>.",
      "Select the <strong>Favorites</strong> tab and click <strong>+</strong>.",
      "Add the server address:"
    ],
    favNote: "Will appear automatically in your Favorites inside ARK!",
    discordTitle: "Community & Discord",
    discordSub: "Support, Starter Kits & Tribe Register",
    discordDesc: "Register your tribe to receive a free Metal Ocean Platform, use commands like <code>/kit iniciante</code> and vote on new map rotations!",
    copiedSuccess: "Copied to clipboard successfully!",
    modalTitle: "⚙️ Cluster Settings",
    modalDesc: "Set the public IP or DDNS hostname (e.g. No-IP, DuckDNS) players should use to connect:"
  },
  es: {
    clusterStatus: "SERVIDOR EN LÍNEA",
    heroTitlePrefix: "CONECTAR A",
    heroDesc: "Elija abajo el método más conveniente para su plataforma y únase de inmediato al juego.",
    autoConnectTitle: "Conexión Automática Steam",
    autoConnectDesc: "Iniciando ARK y conectando mediante Steam en instantes...",
    btnConnectNow: "Conectar Ahora",
    btnCancelAuto: "Cancelar",
    selectMap: "SELECCIONE EL MAPA:",
    steamTitle: "Steam (1-Clic)",
    steamSub: "Abre ARK y conecta directamente",
    steamDesc: "Haga clic en el botón de abajo. Su navegador solicitará confirmación para iniciar Steam y unirse al servidor.",
    btnSteam: "ENTRAR POR STEAM",
    steamRawLabel: "Enlace Directo:",
    epicTitle: "Epic Games",
    epicSub: "Conexión por Consola en el Juego",
    epicSteps: [
      "Abra ARK en Epic Games.",
      "En el menú principal o dentro de cualquier mapa, presione la tecla <kbd>TAB</kbd>.",
      "Pegue el comando de abajo y presione <kbd>ENTER</kbd>:"
    ],
    favTitle: "Favoritos de Steam",
    favSub: "Para que el servidor nunca desaparezca",
    favSteps: [
      "En Steam, haga clic en <strong>Ver</strong> ➔ <strong>Servidores de Juegos</strong>.",
      "Seleccione la pestaña <strong>Favoritos</strong> y haga clic en <strong>+</strong>.",
      "Agregue la dirección del servidor:"
    ],
    favNote: "¡Aparecerá automáticamente en sus Favoritos dentro de ARK!",
    discordTitle: "Comunidad y Discord",
    discordSub: "Soporte, Kits de Inicio y Registro de Tribu",
    discordDesc: "¡Registre su tribu para ganar una plataforma oceánica gratis, use comandos como <code>/kit iniciante</code> y vote en la rotación de mapas!",
    copiedSuccess: "¡Copiado al portapapeles con éxito!",
    modalTitle: "⚙️ Configuración del Cluster",
    modalDesc: "Defina la IP pública o dominio DDNS (ej: No-IP, DuckDNS) que los jugadores usarán para conectar:"
  }
};

// Estado da Aplicação
let currentLang = localStorage.getItem("ark_lang") || "pt";
let currentServerId = "server1";
let currentHost = resolveHost();
let countdownTimer = null;
let remainingSeconds = 3;
let autoConnectCanceled = false;

// Resolver IP ou Host Atual
function resolveHost() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramHost = urlParams.get("ip") || urlParams.get("host");
  if (paramHost) return paramHost.trim();
  
  const savedHost = localStorage.getItem("ark_cluster_host");
  if (savedHost) return savedHost.trim();

  return DEFAULT_HOST;
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  setupLanguage();
  setupMapTabs();
  setupSettingsModal();
  setupCopyButtons();
  
  // Verifica se o auto-connect deve rodar (desativado se ?auto=false)
  const urlParams = new URLSearchParams(window.location.search);
  const autoParam = urlParams.get("auto");
  if (autoParam === "false") {
    cancelAutoConnect();
  } else {
    startAutoConnectCountdown();
  }

  // Se veio parâmetro de servidor ?server=server2
  const serverParam = urlParams.get("server");
  if (serverParam && SERVERS[serverParam]) {
    switchServer(serverParam);
  } else {
    updateDisplay();
  }
});

// Atualização da Interface
function updateDisplay() {
  const srv = SERVERS[currentServerId];
  const t = I18N[currentLang];
  
  // Título e Nomes
  document.getElementById("txtCurrentServerName").textContent = srv.name;
  document.getElementById("txtHeroTitle").innerHTML = `${t.heroTitlePrefix} <span class="highlight-cyan">${srv.name}</span>`;
  
  // Valores de Conexão
  const steamLink = `steam://connect/${currentHost}:${srv.queryPort}`;
  const epicCommand = `open ${currentHost}:${srv.gamePort}`;
  const favAddress = `${currentHost}:${srv.queryPort}`;

  // Atualizar Botão Steam
  const btnSteam = document.getElementById("btnSteamConnect");
  btnSteam.href = steamLink;
  document.getElementById("lblSteamPort").textContent = `QueryPort: ${srv.queryPort}`;
  document.getElementById("inputSteamRaw").value = steamLink;

  // Atualizar Epic Games
  document.getElementById("inputEpicCmd").value = epicCommand;
  document.getElementById("lblEpicPort").textContent = `Porta de Jogo: ${srv.gamePort}`;

  // Atualizar Favoritos
  document.getElementById("inputFavAddr").value = favAddress;

  // Atualizar Textos de Idioma
  applyTranslations();
}

// Tradução de Textos da Página
function applyTranslations() {
  const t = I18N[currentLang];

  document.getElementById("txtClusterStatus").textContent = t.clusterStatus;
  document.getElementById("txtHeroDesc").textContent = t.heroDesc;
  document.getElementById("txtAutoConnectTitle").textContent = t.autoConnectTitle;
  document.getElementById("txtAutoConnectDesc").textContent = t.autoConnectDesc;
  document.getElementById("txtBtnConnectNow").textContent = t.btnConnectNow;
  document.getElementById("txtBtnCancelAuto").textContent = t.btnCancelAuto;
  document.getElementById("txtSelectMap").textContent = t.selectMap;

  document.getElementById("txtSteamTitle").textContent = t.steamTitle;
  document.getElementById("txtSteamSub").textContent = t.steamSub;
  document.getElementById("txtSteamDesc").textContent = t.steamDesc;
  document.getElementById("txtBtnSteam").textContent = t.btnSteam;
  document.getElementById("txtSteamRawLabel").textContent = t.steamRawLabel;

  document.getElementById("txtEpicTitle").textContent = t.epicTitle;
  document.getElementById("txtEpicSub").textContent = t.epicSub;
  document.getElementById("txtEpicSteps").innerHTML = t.epicSteps.map(step => `<li>${step}</li>`).join("");

  document.getElementById("txtFavTitle").textContent = t.favTitle;
  document.getElementById("txtFavSub").textContent = t.favSub;
  document.getElementById("txtFavSteps").innerHTML = t.favSteps.map(step => `<li>${step}</li>`).join("");
  document.getElementById("txtFavNote").textContent = t.favNote;

  document.getElementById("txtDiscordTitle").textContent = t.discordTitle;
  document.getElementById("txtDiscordSub").textContent = t.discordSub;
  document.getElementById("txtDiscordDesc").innerHTML = t.discordDesc;

  document.getElementById("txtModalTitle").textContent = t.modalTitle;
  document.getElementById("txtModalDesc").textContent = t.modalDesc;

  // Botões de Idioma
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

// Contagem Regressiva de Conexão Automática
function startAutoConnectCountdown() {
  const countdownEl = document.getElementById("countdownSec");
  const progressCircle = document.getElementById("timerProgress");
  const total = 3;
  remainingSeconds = total;

  if (countdownTimer) clearInterval(countdownTimer);

  countdownTimer = setInterval(() => {
    if (autoConnectCanceled) {
      clearInterval(countdownTimer);
      return;
    }

    remainingSeconds--;
    if (countdownEl) countdownEl.textContent = remainingSeconds;

    // Atualiza animação circular do SVG
    const percentage = ((total - remainingSeconds) / total) * 100;
    if (progressCircle) {
      progressCircle.setAttribute("stroke-dasharray", `${100 - percentage}, 100`);
    }

    if (remainingSeconds <= 0) {
      clearInterval(countdownTimer);
      executeSteamConnect();
    }
  }, 1000);

  // Botão Conectar Agora
  document.getElementById("btnConnectNow").onclick = () => {
    executeSteamConnect();
  };

  // Botão Cancelar
  document.getElementById("btnCancelAuto").onclick = () => {
    cancelAutoConnect();
  };
}

function cancelAutoConnect() {
  autoConnectCanceled = true;
  if (countdownTimer) clearInterval(countdownTimer);
  const autoBox = document.getElementById("autoConnectBox");
  if (autoBox) {
    autoBox.style.opacity = "0";
    setTimeout(() => autoBox.classList.add("hidden"), 300);
  }
}

function executeSteamConnect() {
  cancelAutoConnect();
  const srv = SERVERS[currentServerId];
  const steamLink = `steam://connect/${currentHost}:${srv.queryPort}`;
  window.location.href = steamLink;
}

// Tabs de Seleção de Mapa
function setupMapTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const serverId = btn.dataset.server;
      switchServer(serverId);
    });
  });
}

function switchServer(serverId) {
  if (!SERVERS[serverId]) return;
  currentServerId = serverId;

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.server === serverId);
  });

  updateDisplay();
}

// Seletor de Idioma
function setupLanguage() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem("ark_lang", currentLang);
      updateDisplay();
    });
  });
}

// Modal de Configurações de Host
function setupSettingsModal() {
  const modal = document.getElementById("settingsModal");
  const openBtn = document.getElementById("openSettingsBtn");
  const closeBtn = document.getElementById("closeSettingsBtn");
  const inputHost = document.getElementById("inputHostConfig");
  const saveBtn = document.getElementById("btnSaveHost");
  const resetBtn = document.getElementById("btnResetHost");

  openBtn.addEventListener("click", () => {
    inputHost.value = currentHost;
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  saveBtn.addEventListener("click", () => {
    const val = inputHost.value.trim();
    if (val) {
      currentHost = val;
      localStorage.setItem("ark_cluster_host", val);
      updateDisplay();
      showToast("Configuração salva com sucesso!");
      modal.classList.remove("active");
    }
  });

  resetBtn.addEventListener("click", () => {
    currentHost = DEFAULT_HOST;
    localStorage.removeItem("ark_cluster_host");
    inputHost.value = DEFAULT_HOST;
    updateDisplay();
    showToast("Host restaurado para o padrão!");
    modal.classList.remove("active");
  });
}

// Botões de Cópia
function setupCopyButtons() {
  const copyMap = [
    { btnId: "btnCopySteamRaw", inputId: "inputSteamRaw" },
    { btnId: "btnCopyEpic", inputId: "inputEpicCmd" },
    { btnId: "btnCopyFav", inputId: "inputFavAddr" }
  ];

  copyMap.forEach(({ btnId, inputId }) => {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    if (!btn || !input) return;

    btn.addEventListener("click", () => {
      copyToClipboard(input.value);
    });
  });
}

// Função de Cópia com Fallback
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(I18N[currentLang].copiedSuccess);
    }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(I18N[currentLang].copiedSuccess);
  } catch (err) {
    showToast("Falha ao copiar automaticamente.");
  }
  document.body.removeChild(textArea);
}

// Notificação Toast
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
