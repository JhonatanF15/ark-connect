/**
 * ANOVA ARK CLUSTER — CONEXÃO RÁPIDA & PORTAL GITHUB PAGES
 * Gerenciador de conexão simplificado via console in-game (Steam & Epic Games)
 */

// Configuração do Servidor
const SERVERS = {
  server1: {
    id: "server1",
    name: "ANOVA The Island",
    gamePort: 7777,
    queryPort: 27015
  }
};

const DEFAULT_PUBLIC_HOST = "200.181.245.38";

// Dicionário Multilíngue (PT, EN, ES)
const I18N = {
  pt: {
    clusterStatus: "SERVIDOR ONLINE",
    heroTitlePrefix: "CONECTAR AO",
    steamTitle: "Steam",
    steamSub: "Conexão via Console no Jogo",
    steamSteps: [
      "Abra o ARK na Steam.",
      "No menu principal ou em qualquer mapa, aperte a tecla <kbd>TAB</kbd>.",
      "Cole o comando abaixo e aperte <kbd>ENTER</kbd>:"
    ],
    epicTitle: "Epic Games",
    epicSub: "Conexão via Console no Jogo",
    epicSteps: [
      "Abra o ARK na Epic Games.",
      "No menu principal ou em qualquer mapa, aperte a tecla <kbd>TAB</kbd>.",
      "Cole o comando abaixo e aperte <kbd>ENTER</kbd>:"
    ],
    favTitle: "Lista de Favoritos",
    favSub: "Para ver sempre dentro do jogo",
    favSteps: [
      "Na Steam, clique em <strong>Exibir</strong> ➔ <strong>Servidores de Jogos</strong>.",
      "Selecione a aba <strong>Favoritos</strong> e clique no <strong>+</strong>.",
      "Adicione o endereço com a QueryPort:"
    ],
    favNote: "⚠️ Importante: Após salvar, entre pelo filtro Favorites dentro do ARK.",
    discordTitle: "Comunidade & Discord",
    discordSub: "Suporte, Kits e Registro de Tribo",
    discordDesc: "Registre sua tribo para garantir plataforma oceânica grátis, use comandos como <code>/kit iniciante</code> e tire dúvidas com a administração!",
    copiedSuccess: "Copiado com sucesso para a área de transferência!",
    modalTitle: "⚙️ Configurações do Cluster",
    modalDesc: "Defina o IP público ou domínio DDNS (ex: No-IP, DuckDNS) que os jogadores devem usar para conectar:"
  },
  en: {
    clusterStatus: "SERVER ONLINE",
    heroTitlePrefix: "CONNECT TO",
    steamTitle: "Steam",
    steamSub: "In-Game Console Connection",
    steamSteps: [
      "Launch ARK on Steam.",
      "In the main menu or inside any map, press <kbd>TAB</kbd>.",
      "Paste the command below and press <kbd>ENTER</kbd>:"
    ],
    epicTitle: "Epic Games",
    epicSub: "In-Game Console Connection",
    epicSteps: [
      "Launch ARK on Epic Games.",
      "In the main menu or inside any map, press <kbd>TAB</kbd>.",
      "Paste the command below and press <kbd>ENTER</kbd>:"
    ],
    favTitle: "Steam Favorites List",
    favSub: "Always accessible inside the game",
    favSteps: [
      "In Steam, click <strong>View</strong> ➔ <strong>Game Servers</strong>.",
      "Select the <strong>Favorites</strong> tab and click <strong>+</strong>.",
      "Add the address with the QueryPort:"
    ],
    favNote: "⚠️ Important: After adding, join from the in-game Favorites filter inside ARK.",
    discordTitle: "Community & Discord",
    discordSub: "Support, Starter Kits & Tribe Register",
    discordDesc: "Register your tribe to receive a free Metal Ocean Platform, use commands like <code>/kit iniciante</code> and get support!",
    copiedSuccess: "Copied to clipboard successfully!",
    modalTitle: "⚙️ Cluster Settings",
    modalDesc: "Set the public IP or DDNS hostname (e.g. No-IP, DuckDNS) players should use to connect:"
  },
  es: {
    clusterStatus: "SERVIDOR EN LÍNEA",
    heroTitlePrefix: "CONECTAR A",
    steamTitle: "Steam",
    steamSub: "Conexión por Consola en el Juego",
    steamSteps: [
      "Abra ARK en Steam.",
      "En el menú principal o dentro del juego, presione <kbd>TAB</kbd>.",
      "Pegue el comando de abajo y presione <kbd>ENTER</kbd>:"
    ],
    epicTitle: "Epic Games",
    epicSub: "Conexión por Consola en el Juego",
    epicSteps: [
      "Abra ARK en Epic Games.",
      "En el menú principal o dentro del juego, presione <kbd>TAB</kbd>.",
      "Pegue el comando de abajo y presione <kbd>ENTER</kbd>:"
    ],
    favTitle: "Lista de Favoritos",
    favSub: "Para verlo siempre dentro del juego",
    favSteps: [
      "En Steam, haga clic en <strong>Ver</strong> ➔ <strong>Servidores de Juegos</strong>.",
      "Seleccione la pestaña <strong>Favoritos</strong> y haga clic en <strong>+</strong>.",
      "Agregue la dirección con la QueryPort:"
    ],
    favNote: "⚠️ Importante: Después de guardar, entre desde la pestaña Favoritos dentro de ARK.",
    discordTitle: "Comunidad y Discord",
    discordSub: "Soporte, Kits de Inicio e Registro de Tribu",
    discordDesc: "¡Registre su tribu para ganar una plataforma oceánica gratis, use comandos como <code>/kit iniciante</code> y resuelva dudas!",
    copiedSuccess: "¡Copiado al portapapeles con éxito!",
    modalTitle: "⚙️ Configuración del Cluster",
    modalDesc: "Defina la IP pública o dominio DDNS (ej: No-IP, DuckDNS) que los jugadores usarán para conectar:"
  }
};

// Estado da Aplicação
let currentLang = localStorage.getItem("ark_lang") || "pt";
let currentServerId = "server1";
let currentHost = resolveHost();

// Resolver IP ou Host Atual
function resolveHost() {
  const urlParams = new URLSearchParams(window.location.search);
  const paramHost = urlParams.get("ip") || urlParams.get("host");
  if (paramHost) return paramHost.trim();
  
  const savedHost = localStorage.getItem("ark_cluster_host");
  if (savedHost) return savedHost.trim();

  return DEFAULT_PUBLIC_HOST;
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  setupLanguage();
  setupMapTabs();
  setupSettingsModal();
  setupCopyButtons();

  // Se veio parâmetro de servidor ?server=server2
  const urlParams = new URLSearchParams(window.location.search);
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
  const elPrefix = document.getElementById("txtHeroPrefix");
  const elServerName = document.getElementById("txtCurrentServerName");
  if (elPrefix && t && t.heroTitlePrefix) elPrefix.textContent = t.heroTitlePrefix;
  if (elServerName && srv && srv.name) elServerName.textContent = srv.name;
  
  // Valores de Conexão
  const consoleCommand = `open ${currentHost}:${srv.gamePort}`;
  const favAddress = `${currentHost}:${srv.queryPort}`;

  // Atualizar Steam (estilo igual à Epic Games)
  const inputSteam = document.getElementById("inputSteamCmd");
  if (inputSteam) inputSteam.value = consoleCommand;
  const lblSteamPort = document.getElementById("lblSteamPort");
  if (lblSteamPort) lblSteamPort.textContent = `Porta de Jogo: ${srv.gamePort}`;

  // Atualizar Epic Games
  const inputEpic = document.getElementById("inputEpicCmd");
  if (inputEpic) inputEpic.value = consoleCommand;
  const lblEpicPort = document.getElementById("lblEpicPort");
  if (lblEpicPort) lblEpicPort.textContent = `Porta de Jogo: ${srv.gamePort}`;

  // Atualizar Favoritos
  const inputFav = document.getElementById("inputFavAddr");
  if (inputFav) inputFav.value = favAddress;

  // Atualizar Textos de Idioma
  applyTranslations();
}

// Tradução de Textos da Página
function applyTranslations() {
  const t = I18N[currentLang];
  const setTxt = (id, val, isHtml = false) => {
    const el = document.getElementById(id);
    if (el) {
      if (isHtml) el.innerHTML = val;
      else el.textContent = val;
    }
  };

  setTxt("txtClusterStatus", t.clusterStatus);

  setTxt("txtSteamTitle", t.steamTitle);
  setTxt("txtSteamSub", t.steamSub);
  if (t.steamSteps) {
    setTxt("txtSteamSteps", t.steamSteps.map(step => `<li>${step}</li>`).join(""), true);
  }

  setTxt("txtEpicTitle", t.epicTitle);
  setTxt("txtEpicSub", t.epicSub);
  if (t.epicSteps) {
    setTxt("txtEpicSteps", t.epicSteps.map(step => `<li>${step}</li>`).join(""), true);
  }

  setTxt("txtFavTitle", t.favTitle);
  setTxt("txtFavSub", t.favSub);
  if (t.favSteps) {
    setTxt("txtFavSteps", t.favSteps.map(step => `<li>${step}</li>`).join(""), true);
  }
  setTxt("txtFavNote", t.favNote, true);

  setTxt("txtDiscordTitle", t.discordTitle);
  setTxt("txtDiscordSub", t.discordSub);
  setTxt("txtDiscordDesc", t.discordDesc, true);

  setTxt("txtModalTitle", t.modalTitle);
  setTxt("txtModalDesc", t.modalDesc);

  // Botões de Idioma
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
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
    currentHost = DEFAULT_PUBLIC_HOST;
    localStorage.removeItem("ark_cluster_host");
    inputHost.value = DEFAULT_PUBLIC_HOST;
    updateDisplay();
    showToast("Host restaurado para o padrão!");
    modal.classList.remove("active");
  });
}

// Botões de Cópia
function setupCopyButtons() {
  const copyMap = [
    { btnId: "btnCopySteam", inputId: "inputSteamCmd" },
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
