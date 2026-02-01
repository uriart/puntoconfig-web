# ⚙️ PuntoConfig.dev

PuntoConfig.dev es un blog técnico y portafolio personal diseñado para entusiastas del self-hosting, la ciberseguridad y la optimización de entornos digitales. Este sitio funciona como un repositorio central de guías prácticas, "cheat sheets" de configuración y un escaparate de hardware optimizado.

---

## 🎨 Estética y Diseño
El sitio está construido bajo la paleta de colores **[Catppuccin Mocha/Latte](https://catppuccin.com/)**, ofreciendo una experiencia visual relajada (low-eye-strain) pero vibrante, ideal para lectura técnica prolongada.

- **Framework:** [Astro 5.x](https://astro.build/) (Modo Estático)
- **Estilos:** Tailwind CSS con temas personalizados.
- **Tipografía:** System Sans para interfaz y Mono para bloques de código.

---

## 🚀 Stack Tecnológico

* **Core:** Astro (Engine de nueva generación con Zero-JS por defecto).
* **Contenido:** MDX (Markdown + Componentes de Astro) para artículos interactivos.
* **Despliegue:** [Cloudflare Pages](https://pages.cloudflare.com/) para una latencia mínima y seguridad máxima.
* **Optimización:** SEO friendly con sitemaps dinámicos y feeds RSS.

---

## 🛠️ Estructura del Proyecto

```text
.
├── src/
│   ├── content/
│   │   ├── blog/        # Guías y tutoriales (Markdown/MDX)
│   │   └── projects/    # El "Laboratorio" y Mi Setup
│   ├── components/      # Componentes UI reutilizables
│   ├── layouts/         # Plantillas de página (Blog, Proyectos, Home)
│   └── styles/          # Configuración de Tailwind y Catppuccin
├── public/              # Assets estáticos (imágenes, favicons)
└── astro.config.mjs     # Configuración de integraciones (MDX, Tailwind)