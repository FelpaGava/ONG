import "./style.css";

document.querySelector("#app").innerHTML = `
  <main id="center">
    <h1>API da ONG</h1>
    <p>Resposta de <code>GET /api/health</code>:</p>
    <pre id="health" role="status" aria-live="polite">Consultando a API...</pre>
  </main>
`;

const health = document.querySelector("#health");

async function loadHealth() {
  try {
    const response = await fetch("/api/health");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    health.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Erro ao consultar a API:", error);
    health.textContent = "Não foi possível consultar a API. Verifique se ela está em execução.";
  }
}

loadHealth();
