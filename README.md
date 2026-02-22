# Valentín Valero — Portfolio

Portfolio personal de **Valentín Valero Jiménez**, estudiante de Ingeniería Informática con mención en Tecnologías de la Información y enfoque en ciberseguridad y desarrollo de software.

🔗 [valentin-valero.vercel.app](https://www.vvalero.dev/)

---

## Stack

| Tecnología | Versión |
|---|---|
| Angular | 21.1 |
| Angular SSR | 21.1 |
| TypeScript | 5.9 |
| SCSS | — |
| Vitest | 4.x |
| Node / Express | 5.x |
| Vercel | — |

---

## Características

- **SSR** con Angular Universal (Express + `@angular/ssr`)
- **i18n propio** — español / inglés sin dependencias externas, cambiable en tiempo real con señales Angular
- Diseño **responsive** adaptado a móvil, tablet y escritorio
- Favicon SVG alineado con la identidad visual del portfolio
- **Speed Insights** de Vercel integrado
- Descarga de CV directamente desde la barra de navegación

---

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/       # Barra de navegación con menú móvil
│   │   ├── hero/         # Sección de presentación y skills marquee
│   │   ├── experience/   # Experiencia laboral y formación (tab bar)
│   │   ├── projects/     # Proyectos destacados
│   │   └── contact/      # Sección de contacto
│   ├── i18n/             # Traducciones ES / EN
│   ├── pipes/            # SafeHtmlPipe
│   └── services/         # I18nService (signal-based)
├── styles.scss           # Estilos globales y design tokens
└── index.html
public/
├── favicon.svg
└── cv.pdf
```

## Despliegue

El proyecto se despliega automáticamente en **Vercel** desde la rama `main`.

```bash
npm run build
# outputDirectory: dist/portfolio-valentin/browser
```

---

## Licencia

© 2026 Valentín Valero Jiménez — Todos los derechos reservados.

