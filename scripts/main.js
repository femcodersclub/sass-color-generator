// Elementos del DOM
const inputs = document.querySelectorAll('input[type="color"]');
const preview = document.getElementById("preview");
const scssPreview = document.getElementById("scss-preview");

// Paleta de colores inicial
const palette = {
  primary: "#821ad4",
  secondary: "#ea4f33",
  accent: "#4737bb",
  neutral: "#ffffff",
};

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  updatePreview();
  updateSCSSPreview();
  attachEventListeners();
}

function attachEventListeners() {
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      palette[e.target.name] = e.target.value;
      updatePreview();
      updateSCSSPreview();
    });
  });
}

function updatePreview() {
  if (preview) {
    preview.style.backgroundColor = palette.primary;
    preview.style.color = palette.neutral;
    preview.style.borderColor = palette.accent;
  }
}

function updateSCSSPreview() {
  if (scssPreview) {
    scssPreview.textContent = `$primary: ${palette.primary};
$secondary: ${palette.secondary};
$accent: ${palette.accent};
$neutral: ${palette.neutral};
$on-primary: get-contrast($primary);
$on-secondary: get-contrast($secondary);
$on-accent: get-contrast($accent);`;
  }
}

function showTab(tabName) {
  // Ocultar todos los tabs
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remover clase active de botones
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Mostrar tab seleccionado
  const targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.classList.add("active");
  }

  // Activar botón correspondiente
  const targetBtn = document.querySelector(`[onclick="showTab('${tabName}')"]`);
  if (targetBtn) {
    targetBtn.classList.add("active");
  }

  if (event && event.target && event.target.closest(".footer")) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

function generateSCSS() {
  const content = `// Paleta de colores generada por FemPalette
// femCoders Club - Aprende SASS de forma práctica

$primary: ${palette.primary};
$secondary: ${palette.secondary};
$accent: ${palette.accent};
$neutral: ${palette.neutral};

// Colores de contraste automáticos
$on-primary: get-contrast($primary);
$on-secondary: get-contrast($secondary);
$on-accent: get-contrast($accent);

// Función para obtener colores del mapa
$colors: (
  primary: $primary,
  secondary: $secondary,
  accent: $accent,
  neutral: $neutral
);

@function color($name) {
  @return map-get($colors, $name);
}

// Mixins útiles incluidos
@mixin theme-button($bg-color, $text-color: $neutral) {
  background-color: $bg-color;
  color: $text-color;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

// Clases de utilidad
.bg-primary { background-color: $primary; }
.bg-secondary { background-color: $secondary; }
.bg-accent { background-color: $accent; }
.text-primary { color: $primary; }
.text-secondary { color: $secondary; }
.text-accent { color: $accent; }
`;

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "_colors.scss";
  link.click();

  // Mostrar notificación
  showNotification("¡Archivo _colors.scss exportado! 🎉");
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Hacer las funciones globales para que puedan ser llamadas desde el HTML
window.showTab = showTab;
window.generateSCSS = generateSCSS;
