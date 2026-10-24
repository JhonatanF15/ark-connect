/**
 * ANOVA ARK CLUSTER — CONEXÃO RÁPIDA & PORTAL GITHUB PAGES
 * Gerenciador de conexão em 1 clique, suporte Steam/Epic e correção do bug de AppID
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

const DEFAULT_PUBLIC_HOST = "200.181.245.38";
const LOCAL_HOST = "127.0.0.1";

// Dicionário Multilíngue (PT, EN, ES)
const I18N = {
  pt: {
    clusterStatus: "SERVIDOR ONLINE",
    heroTitlePrefix: "CONECTAR AO",
    heroDesc: "Escolha abaixo o método mais conveniente para a sua plataforma e entre imediatamente no jogo.",
    networkLabel: "ONDE VOCÊ ESTÁ JOGANDO?",
    netPublic: "🌐 Pela Internet (Amigos / Jogadores)",
    netLocal: "🏠 No mesmo PC / Casa do Host (Localhost)",
    noticeTitle: "Aviso sobre o erro \"AppID Inválido\" da Steam:",
    noticeText: "O aplicativo da Steam possui um bug conhecido que falha ao conectar por fora do jogo. O botão \"ENTRAR DIRETO NO ARK\" abaixo usa o AppID oficial <code>346110</code> para contornar essa falha! Ou simplesmente copie o comando e cole no console do jogo com <kbd>TAB</kbd>.",
    selectMap: "SELECIONE O MAPA:",
    steamTitle: "Steam (Conexão Direta)",
    steamSub: "Inicia com AppID 346110 (Sem erro de AppID)",
    steamDesc: "Clique no botão abaixo para abrir o ARK pela Steam já conectando diretamente na partida.",
    btnSteam: "ENTRAR DIRETO NO ARK",
    steamRawLabel: "Comando Direto (Console):",
    epicTitle: "Epic Games & Console",
    epicSub: "100% Funcional e Sem Falhas",
    epicSteps: [
      "Abra o ARK na Epic Games (ou Steam).",
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
    favNote: "⚠️ Importante: Após salvar, entre pelo filtro Favorites dentro do ARK (não clique duas vezes pelo Steam).",
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
    heroDesc: "Choose the most convenient method for your platform below and join the game immediately.",
    networkLabel: "WHERE ARE YOU PLAYING FROM?",
    netPublic: "🌐 Over the Internet (Friends / Players)",
    netLocal: "🏠 Same PC / Host Local Network (Localhost)",
    noticeTitle: "Notice about Steam's \"Invalid AppID\" error:",
    noticeText: "Steam has a known bug when connecting to ARK servers from outside the game. The \"LAUNCH DIRECTLY IN ARK\" button below uses official AppID <code>346110</code> to bypass this! Or simply copy the console command and run it in-game via <kbd>TAB</kbd>.",
    selectMap: "SELECT MAP:",
    steamTitle: "Steam (Direct Launch)",
    steamSub: "Starts with AppID 346110 (Bypasses AppID bug)",
    steamDesc: "Click the button below to launch ARK via Steam and connect directly to the session.",
    btnSteam: "LAUNCH DIRECTLY IN ARK",
    steamRawLabel: "Direct Console Command:",
    epicTitle: "Epic Games & Console",
    epicSub: "100% Reliable & Direct",
    epicSteps: [
      "Launch ARK on Epic Games (or Steam).",
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
    heroDesc: "Elija abajo el método más conveniente para su plataforma y únase de inmediato al juego.",
    networkLabel: "¿DÓNDE ESTÁ JUGANDO?",
    netPublic: "🌐 Por Internet (Amigos / Jugadores)",
    netLocal: "🏠 En la misma PC / Red del Host (Localhost)",
    noticeTitle: "Aviso sobre el error \"AppID Inválido\" de Steam:",
    noticeText: "La aplicación Steam tiene un error conocido al conectar desde fuera del juego. El botón \"ENTRAR DIRECTO EN ARK\" usa el AppID oficial <code>346110</code> para evitar este fallo. O simplemente copie el comando y péguelo en la consola con <kbd>TAB</kbd>.",
    selectMap: "SELECCIONE EL MAPA:",
    steamTitle: "Steam (Conexión Directa)",
    steamSub: "Inicia con AppID 346110 (Sin error de AppID)",
    steamDesc: "Haga clic abajo para abrir ARK por Steam conectando directamente a la partida.",
    btnSteam: "ENTRAR DIRECTO EN ARK",
    steamRawLabel: "Comando Directo (Consola):",
    epicTitle: "Epic Games y Consola",
    epicSub: "100% Funcional y Directo",
    epicSteps: [
      "Abra ARK en Epic Games (o Steam).",
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
    discordSub: "Soporte, Kits de Inicio y Registro de Tribu",
    discordDesc: "¡Registre su tribu para ganar una plataforma oceánica gratis, use comandos como <code>/kit iniciante</code> y resuelva dudas!",
    copiedSuccess: "¡Copiado al portapapeles con éxito!",
    modalTitle: "⚙️ Configuración del Cluster",
    modalDesc: "Defina la IP pública o dominio DDNS (ej: No-IP, DuckDNS) que los jugadores usarán para conectar:"
  }
};

// Estado da Aplicação
let currentLang = localStorage.getItem("ark_lang") || "pt";
let currentServerId = "server1";
let currentNetMode = "public"; // "public" ou "local"
let currentHost = resolveHost();

// Resolver IP ou Host Atual
function resolveHost() {
  if (currentNetMode === "local") {
    return LOCAL_HOST;
  }

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
  setupNetworkToggle();
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

// Alternador de Rede (Internet vs Local)
function setupNetworkToggle() {
  const btnPublic = document.getElementById("btnNetPublic");
  const btnLocal = document.getElementById("btnNetLocal");

  btnPublic.addEventListener("click", () => {
    currentNetMode = "public";
    btnPublic.classList.add("active");
    btnLocal.classList.remove("active");
    currentHost = resolveHost();
    updateDisplay();
    showToast("Modo de Rede: Internet (IP Público)");
  });

  btnLocal.addEventListener("click", () => {
    currentNetMode = "local";
    btnLocal.classList.add("active");
    btnPublic.classList.remove("active");
    currentHost = resolveHost();
    updateDisplay();
    showToast("Modo de Rede: Localhost (Mesmo PC)");
  });
}

// Atualização da Interface
function updateDisplay() {
  const srv = SERVERS[currentServerId];
  const t = I18N[currentLang];
  
  // Título e Nomes
  document.getElementById("txtCurrentServerName").textContent = srv.name;
  document.getElementById("txtHeroTitle").innerHTML = `${t.heroTitlePrefix} <span class="highlight-cyan">${srv.name}</span>`;
  
  // Valores de Conexão
  // Protocolo Direto com AppID 346110 (ARK) que ignora o diálogo de servidor quebrado da Steam
  const steamRunLink = `steam://run/346110//+connect%20${currentHost}:${srv.gamePort}/`;
  const steamLegacyLink = `steam://connect/${currentHost}:${srv.queryPort}`;
  const consoleCommand = `open ${currentHost}:${srv.gamePort}`;
  const favAddress = `${currentHost}:${srv.queryPort}`;

  // Atualizar Botão Steam Direto
  const btnSteam = document.getElementById("btnSteamRun");
  btnSteam.href = steamRunLink;
  document.getElementById("inputSteamConsole").value = consoleCommand;

  // Atualizar Link Legado
  const legacyLink = document.getElementById("linkSteamConnectLegacy");
  if (legacyLink) {
    legacyLink.href = steamLegacyLink;
  }

  // Atualizar Epic Games
  document.getElementById("inputEpicCmd").value = consoleCommand;
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
  document.getElementById("txtNetworkLabel").textContent = t.networkLabel;
  document.getElementById("btnNetPublic").textContent = t.netPublic;
  document.getElementById("btnNetLocal").textContent = t.netLocal;
  document.getElementById("txtNoticeTitle").textContent = t.noticeTitle;
  document.getElementById("txtNoticeText").innerHTML = t.noticeText;
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
  document.getElementById("txtFavNote").innerHTML = t.favNote;

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
    { btnId: "btnCopySteamConsole", inputId: "inputSteamConsole" },
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
