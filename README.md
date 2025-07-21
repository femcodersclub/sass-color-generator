# 🎨 FemPalette - Generador y Tutorial de SASS

Un proyecto educativo interactivo que combina un generador de paletas de colores con un tutorial completo de SASS. Perfecto para aprender SASS de forma práctica mientras generas variables útiles para tus proyectos.

**📖 Post relacionado:** [SASS Next Level - FemCoders Club](https://www.femcodersclub.com/recursos/css/sass-next-level)

## 🎬 Vista Previa

![FemPalette Demo](assets/sass.gif)

*🎯 Genera paletas de colores y aprende SASS en tiempo real con FemPalette*

## ✨ Características

### �️ Arquitectura SASS 7-1 Profesional

- **Estructura modular** con carpetas organizadas por responsabilidad
- **Sistema de variables** centralizado y reutilizable
- **Mixins y funciones** avanzadas para desarrollo rápido
- **Auto-compilación** en modo desarrollo con watch mode
- **Optimización** para producción con CSS comprimido

### �🎨 Generador de Paletas

- **Selector visual de colores** con vista previa en tiempo real
- **Generación automática de variables SCSS** con funciones útiles
- **Exportación de archivos .scss** listos para usar
- **Vista previa del código** generado en tiempo real

### 📚 Tutorial Interactivo

- **Conceptos fundamentales** de SASS explicados paso a paso
- **Ejemplos de código** con sintaxis highlight
- **Casos de uso reales** con arquitectura profesional
- **Mejores prácticas** y tips de expertos

### 💡 Ejemplos Prácticos

- **Sistema de colores completo** con mapas y funciones
- **Breakpoints responsivos** con mixins
- **Arquitectura 7-1** para proyectos escalables
- **Componentes reutilizables** con mixins y placeholders

## 🚀 Cómo usar

### Método 1: Abrir directamente

1. Abre `index.html` en tu navegador
2. Explora las tres pestañas disponibles:
   - 🎨 **Generador**: Crea tu paleta de colores
   - 📚 **Tutorial**: Aprende SASS paso a paso  
   - 💡 **Ejemplos**: Ve casos reales de implementación

### Método 2: Servidor local (recomendado)

```bash
# Con Python
python -m http.server 8000

# Con Node.js (si tienes live-server instalado)
npx live-server

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## 📁 Estructura del proyecto

```
SassColorGenerator/
├── index.html                     # Aplicación principal  
├── scripts/
│   └── main.js                    # Lógica JavaScript separada
├── styles/                        # 🏗️ Arquitectura SASS 7-1
│   ├── abstracts/                 # Variables, funciones, mixins
│   │   ├── _variables.scss
│   │   ├── _functions.scss  
│   │   ├── _mixins.scss
│   │   └── _placeholders.scss
│   ├── base/                      # Estilos base
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── layout/                    # Estructura de página
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   └── _grid.scss
│   ├── components/                # Componentes reutilizables
│   │   ├── _buttons.scss
│   │   ├── _cards.scss
│   │   ├── _forms.scss
│   │   └── _notifications.scss
│   ├── pages/                     # Estilos específicos
│   │   └── _home.scss
│   ├── utilities/                 # Clases utilitarias
│   │   └── _utilities.scss
│   ├── main.scss                  # Archivo principal SASS
│   └── main.css                   # CSS compilado
├── assets/
│   ├── logo-femcodersclub.jpg     # Logo del proyecto
│   └── sass.gif                   # Vista previa animada
├── example-sass-architecture.scss # Ejemplo educativo completo
├── ARCHITECTURE.md                # Documentación de la arquitectura
└── README.md                      # Esta documentación
```

## 🛠️ Comandos de Desarrollo

### Instalación

```bash
npm install
```

### Desarrollo

```bash
# Modo desarrollo completo (SASS watch + Live Server)
npm run dev

# Solo compilar SASS una vez
npm run build:sass

# Solo watch de SASS (auto-recompilación)  
npm run watch:sass

# Solo servidor (requiere CSS ya compilado)
npm run start
```

### Tareas de VS Code

- `Ctrl+Shift+P` → `Tasks: Run Task` → `Dev Mode`
- O usa las tareas: `Build SASS`, `Watch SASS`, `Start Live Server`

## 🎯 Casos de uso

### Para estudiantes

- **Aprender SASS** de forma visual e interactiva
- **Comprender conceptos** como variables, mixins y funciones
- **Ver ejemplos reales** de arquitectura SASS

### Para desarrolladores

- **Generar paletas** rápidamente para nuevos proyectos
- **Obtener código SASS** listo para usar
- **Consultar ejemplos** de mejores prácticas

### Para equipos

- **Estandarizar colores** en proyectos
- **Compartir configuraciones** de SASS
- **Enseñar mejores prácticas** a miembros junior

## 📚 Conceptos cubiertos

### Variables y Funciones

```scss
$primary: #821ad4;
$colors: (primary: $primary, secondary: $secondary);

@function color($name) {
  @return map-get($colors, $name);
}
```

### Mixins Reutilizables

```scss
@mixin flex-center($direction: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
```

### Anidación Inteligente

```scss
.nav {
  ul {
    li {
      a {
        &:hover { color: $accent; }
      }
    }
  }
}
```

### Arquitectura SASS 7-1

Este proyecto implementa la **arquitectura 7-1**, considerada la mejor práctica para proyectos SASS escalables:

```scss
// main.scss - Archivo principal
@use 'abstracts/variables';   // 🔧 Variables globales
@use 'abstracts/functions';   // ⚙️ Funciones SASS
@use 'abstracts/mixins';      // 🧩 Mixins reutilizables

@use 'base/reset';            // 🏛️ Reset CSS moderno
@use 'base/typography';       // 📝 Sistema tipográfico

@use 'layout/header';         // 📐 Estructura de página
@use 'layout/footer';
@use 'layout/grid';

@use 'components/buttons';    // 🧩 Componentes UI
@use 'components/cards';
@use 'components/forms';

@use 'pages/home';           // 📄 Estilos específicos
@use 'utilities/utilities';  // 🛠️ Clases utilitarias
```

**Beneficios:**

- ✅ **Modularidad**: Cada archivo tiene una responsabilidad
- ✅ **Reutilización**: Variables, mixins y funciones centralizados  
- ✅ **Escalabilidad**: Fácil agregar nuevos componentes
- ✅ **Mantenimiento**: Cambios globales desde variables
- ✅ **Rendimiento**: Un solo archivo CSS compilado

📖 **Documentación completa**: Ver [ARCHITECTURE.md](ARCHITECTURE.md)

## 🛠️ Instalación de SASS (opcional)

Si quieres compilar el archivo de ejemplo:

```bash
# Instalar SASS globalmente
npm install -g sass

# Compilar el archivo de ejemplo
sass example-sass-architecture.scss output.css

# Modo watch para desarrollo
sass --watch example-sass-architecture.scss:output.css
```

## 🎨 Personalización

### Colores por defecto

Puedes cambiar los colores iniciales en `index.html`:

```html
<input type="color" name="primary" value="#821ad4">
<input type="color" name="secondary" value="#ea4f33">
<input type="color" name="accent" value="#4737bb">
<input type="color" name="neutral" value="#ffffff">
```

### Estilos de la interfaz

Modifica `styles/main.css` para personalizar la apariencia de la aplicación.

## 📖 Recursos adicionales

### Documentación oficial

- [SASS Oficial](https://sass-lang.com/)
- [SASS Guidelines](https://sass-guidelin.es/)

### Herramientas recomendadas

- [VS Code SASS Extension](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

### Arquitecturas recomendadas

- [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)
- [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

## 🤝 Contribuir

¿Tienes ideas para mejorar FemPalette? ¡Las contribuciones son bienvenidas!

### Ideas para nuevas características

- [ ] Exportar a CSS Custom Properties
- [ ] Generador de gradientes
- [ ] Temas predefinidos (Material, Bootstrap, etc.)
- [ ] Integración con Figma/Adobe XD
- [ ] Generador de componentes SASS
- [ ] Validador de contraste automático

### Cómo contribuir

1. Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente en proyectos personales y comerciales.

## 👥 Créditos

Desarrollado con ❤️ por la comunidad **[femCoders Club](https://femcodersclub.com)**.

### Tecnologías utilizadas

- HTML5 semántico
- CSS3 con Custom Properties
- JavaScript vanilla
- SASS/SCSS

### Enlaces oficiales de femCoders Club

- 🌐 **Web**: [femcodersclub.com](https://femcodersclub.com)
- 💬 **Slack**: [Únete a la comunidad](https://communityinviter.com/apps/femcodersclub/femcoders-club)
- 🐦 **X (Twitter)**: [@FemCodersClub](https://x.com/FemCodersClub)
- 💼 **LinkedIn**: [femCoders Club](https://www.linkedin.com/company/100394366/)
- 📸 **Instagram**: [@femcoders_club](https://www.instagram.com/femcoders_club/)
- ⚡ **GitHub**: [femcodersclub](https://github.com/femcodersclub)

---

**¿Te gusta el proyecto?** ⭐ Dale una estrella en GitHub y compártelo con la comunidad.

**¿Necesitas ayuda?** 💬 Únete a nuestro [Slack de femCoders Club](https://communityinviter.com/apps/femcodersclub/femcoders-club) y pregunta a la comunidad.