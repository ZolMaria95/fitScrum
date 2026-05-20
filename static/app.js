// Token lives only in memory — never persisted to localStorage for this demo.
let authToken = null;

const $ = id => document.getElementById(id);

// ── Sections ──────────────────────────────────────────────
const sectionLogin   = $("section-login");
const authArea       = $("authenticated-area");
const userLabel      = $("user-label");

function showLogin() {
  sectionLogin.hidden  = false;
  authArea.hidden      = true;
  authToken            = null;
}

function showApp(email) {
  sectionLogin.hidden = true;
  authArea.hidden     = false;
  userLabel.textContent = `Conectado como ${email}`;
  fetchItems();
}

// ── Auth helpers ──────────────────────────────────────────
function authHeaders() {
  return {
    "Content-Type":  "application/json",
    "Authorization": `Bearer ${authToken}`,
  };
}

// ── Login ─────────────────────────────────────────────────
$("login-form").addEventListener("submit", async e => {
  e.preventDefault();
  const msg      = $("login-message");
  const email    = $("login-email").value.trim();
  const password = $("login-password").value;

  msg.textContent = "";
  msg.className   = "message";

  try {
    const res = await fetch("/api/auth/login", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Credenciales inválidas.");
    }

    const data = await res.json();
    authToken  = data.access_token;
    showApp(email);
  } catch (err) {
    msg.textContent = err.message;
    msg.className   = "message error";
  }
});

// ── Logout ────────────────────────────────────────────────
$("btn-logout").addEventListener("click", () => {
  showLogin();
});

// ── Items: fetch ──────────────────────────────────────────
async function fetchItems() {
  const loading = $("items-loading");
  const list    = $("items-list");
  loading.textContent = "Cargando tareas…";
  list.innerHTML      = "";

  try {
    const res = await fetch("/api/items", { headers: authHeaders() });
    if (res.status === 401) { showLogin(); return; }
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

    const items = await res.json();
    loading.textContent = "";
    renderItems(items);
  } catch (err) {
    loading.textContent = `No se pudo cargar la lista: ${err.message}`;
  }
}

function renderItems(items) {
  const list = $("items-list");
  if (!items.length) {
    list.innerHTML = "<li>No hay tareas registradas.</li>";
    return;
  }
  list.innerHTML = items.map(item => `
    <li>
      <strong>${esc(item.title)}</strong>
      <p>${esc(item.description || "Sin descripción")}</p>
      <small>Completado: ${item.completed ? "Sí" : "No"}</small>
    </li>
  `).join("");
}

// ── Items: create ─────────────────────────────────────────
$("item-form").addEventListener("submit", async e => {
  e.preventDefault();
  const msg   = $("form-message");
  const title = $("title").value.trim();
  const desc  = $("description").value.trim();

  msg.textContent = "";
  msg.className   = "message";

  if (!title) {
    msg.textContent = "El título es obligatorio.";
    msg.className   = "message error";
    return;
  }

  try {
    const res = await fetch("/api/items", {
      method:  "POST",
      headers: authHeaders(),
      body:    JSON.stringify({ title, description: desc, completed: false }),
    });

    if (res.status === 401) { showLogin(); return; }
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "No se pudo crear la tarea.");
    }

    $("item-form").reset();
    msg.textContent = "Tarea creada con éxito.";
    msg.className   = "message ok";
    fetchItems();
  } catch (err) {
    msg.textContent = `Error: ${err.message}`;
    msg.className   = "message error";
  }
});

// ── Utilities ─────────────────────────────────────────────
function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ── Init ──────────────────────────────────────────────────
showLogin();
