const API_BASE = "/api/items";

const itemForm = document.getElementById("item-form");
const itemsList = document.getElementById("items-list");
const itemsLoading = document.getElementById("items-loading");
const formMessage = document.getElementById("form-message");

async function fetchItems() {
  itemsLoading.textContent = "Cargando tareas...";
  try {
    const response = await fetch(API_BASE);
    if (!response.ok) {
      throw new Error(`Error cargando tareas: ${response.statusText}`);
    }
    const items = await response.json();
    renderItems(items);
  } catch (error) {
    itemsLoading.textContent = "No se pudo cargar la lista de tareas.";
    console.error(error);
  }
}

function renderItems(items) {
  itemsLoading.textContent = "";
  if (!items.length) {
    itemsList.innerHTML = "<li>No hay tareas registradas.</li>";
    return;
  }

  itemsList.innerHTML = items
    .map(
      (item) => `
      <li>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.description || "Sin descripción")}</p>
        <small>Completado: ${item.completed ? "Sí" : "No"}</small>
      </li>
    `
    )
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

itemForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formMessage.textContent = "";
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!title) {
    formMessage.textContent = "El título es obligatorio.";
    return;
  }

  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, completed: false }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "No se pudo crear la tarea.");
    }

    itemForm.reset();
    formMessage.textContent = "Tarea creada con éxito.";
    fetchItems();
  } catch (error) {
    formMessage.textContent = `Error: ${error.message}`;
    console.error(error);
  }
});

fetchItems();
