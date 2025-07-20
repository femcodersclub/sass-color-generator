# 🏗️ Arquitectura SASS 7-1 - FemPalette

## 📁 Estructura de Carpetas

```styles/
├── abstracts/          # 🔧 Configuración y herramientas
│   ├── _variables.scss    # Variables globales
│   ├── _functions.scss    # Funciones SASS
│   ├── _mixins.scss       # Mixins reutilizables
│   └── _placeholders.scss # Placeholders para @extend
│
├── base/               # 🏛️ Estilos base
│   ├── _reset.scss        # Reset/normalize CSS
│   └── _typography.scss   # Tipografía base
│
├── layout/             # 📐 Estructura de página
│   ├── _header.scss       # Estilos del header
│   ├── _footer.scss       # Estilos del footer
│   └── _grid.scss         # Sistema de grid y layout
│
├── components/         # 🧩 Componentes reutilizables
│   ├── _buttons.scss      # Estilos de botones
│   ├── _cards.scss        # Estilos de cards
│   ├── _forms.scss        # Estilos de formularios
│   └── _notifications.scss # Sistema de notificaciones
│
├── pages/              # 📄 Estilos específicos de páginas
│   └── _home.scss         # Estilos de la página principal
│
├── utilities/          # 🛠️ Clases utilitarias
│   └── _utilities.scss    # Clases de utilidad
│
└── main.scss          # 📋 Archivo principal que importa todo
```

## 🚀 Comandos Disponibles

### Desarrollo

```bash
# Compilar SASS una vez
npm run build:sass

# Compilar SASS en modo watch (auto-recompilación)
npm run watch:sass

# Modo desarrollo completo (SASS + servidor)
npm run dev

# Solo servidor
npm run start
```

### Tareas de VS Code

- **Build SASS**: Compila el SASS una vez
- **Watch SASS**: Compila automáticamente cuando cambias archivos
- **Dev Mode**: Modo desarrollo completo
- **Start Live Server**: Solo el servidor

## 🎯 Beneficios de esta Arquitectura

### 1. **Organización Clara**

- Cada archivo tiene una responsabilidad específica
- Fácil localización de estilos
- Estructura escalable para proyectos grandes

### 2. **Reutilización de Código**

- **Variables**: Colores, espaciado, tipografía centralizados
- **Mixins**: Lógica CSS reutilizable con parámetros
- **Functions**: Cálculos y transformaciones automatizadas
- **Placeholders**: Estilos base para @extend

### 3. **Mantenimiento Simplificado**

- Cambios globales desde variables
- Componentes independientes
- Fácil debugging y modificación

### 4. **Rendimiento Optimizado**

- Un solo archivo CSS compilado
- Eliminación automática de código no usado
- Compresión en producción

## 📝 Ejemplos de Uso

### Variables

```scss
// En _variables.scss
$primary: #821ad4;
$spacing-lg: 1.5rem;

// En cualquier componente
.button {
  background: $primary;
  padding: $spacing-lg;
}
```

### Funciones

```scss
// Uso de funciones
.card {
  background: color(neutral);
  padding: spacing(lg);
  box-shadow: shadow(md);
}
```

### Mixins

```scss
// Uso de mixins responsivos
.container {
  padding: spacing(md);
  
  @include media(tablet) {
    padding: spacing(lg);
  }
}

// Mixin de botones
.btn-custom {
  @include button-style(color(primary), color(neutral));
}
```

### Placeholders

```scss
// Reutilización con placeholders
.notification {
  @extend %card-base;
  background: color(success);
}
```

## 🎨 Metodología BEM + SASS

```scss
// Estructura BEM con anidación SASS
.card {
  @extend %card-base;
  
  &__header {
    padding: spacing(md);
    border-bottom: 1px solid color(neutral);
  }
  
  &__body {
    padding: spacing(lg);
  }
  
  &--featured {
    border-left: 4px solid color(primary);
  }
}
```

## 🔧 Configuración de Desarrollo

### Watch Mode

```bash
# El comando watch detecta cambios y recompila automáticamente
npm run watch:sass
```

### VS Code Integration

- Intellisense para variables SASS
- Autocompletado de funciones y mixins
- Navegación rápida entre archivos
- Live reload automático

## 📚 Recursos Adicionales

- [SASS Guidelines](https://sass-guidelin.es/)
- [Arquitectura 7-1 Original](https://sass-guidelin.es/#the-7-1-pattern)
- [SASS Documentation](https://sass-lang.com/documentation)

## 🎯 Próximos Pasos

1. **Temas**: Implementar sistema de temas (claro/oscuro)
2. **Componentes**: Agregar más componentes reutilizables
3. **Optimización**: Implementar purgeCSS para eliminar CSS no usado
4. **Testing**: Agregar tests para funciones SASS

---

**femCoders Club** - Empoderando el futuro tech 💜
