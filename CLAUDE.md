# CLAUDE.md — Sitio de Valeny (valeny.app)

## Qué es
Sitio de la marca Valeny. Presenta sus soluciones y lleva a cada una. Hoy hay dos:
1. **Webs para restaurantes** (`/webs`): página del servicio, con planes y precios. Los sitios de cada restaurante viven en su propio dominio y en otro repositorio (`E:\Valeny\design`, privado).
2. **Licencias de software**: se venden en `valenystore.com.mx` (Valeny Store). Aquí solo se presenta y se enlaza.

Objetivo único: que el visitante escriba por WhatsApp.

## Reglas
- **Este repositorio no contiene datos de clientes.** Nada de teléfonos, reseñas, fotos ni menús de restaurantes. Si algún día se muestra un caso, solo con permiso escrito del cliente.
- **Sin inventar:** ni testimonios, ni cifras de clientes, ni años de experiencia, ni portafolio sin permiso.
- **Microsoft y otras marcas:** Arriba (titular, subtítulo, metadatos) se habla de "licencias de software". Microsoft se nombra solo en la descripción del bloque de Valeny Store, junto con antivirus y software de arquitectura. Sin logotipos y sin frases de alianza o distribución oficial. Valeny Store es un revendedor independiente. La nota de marca registrada y no afiliación va junto al bloque de licencias de la portada (no en el pie). No afirmar "originales" ni "autorizadas" sin respaldo.
- **Seguridad:** solo afirmaciones verificables. Hoy: el sitio no usa cookies, rastreadores, formularios ni fuentes de terceros. Si eso cambia, se actualiza la página de privacidad.
- Toda la UI en español de México. Cada dependencia nueva se justifica.

## Dirección de diseño: "Papel"
- Paleta (en `src/styles/global.css`): papel `#f7f6fb`, tinta `#16121f`, violeta `#5b2bd9`, lila `#e9e3fb`, gris `#655f78`. Violeta plano, **sin degradados**.
- Una sola familia: Bricolage Grotesque (autoalojada con Fontsource).
- Movimiento: la V de la portada se revela una vez al cargar. La ilustración del teléfono (Webs) corre en ciclo de 11 s **solo mientras está a la vista** (QR con barrido, menú con toque, mensaje enviado) y se detiene al salir; la de la licencia (Licencias) corre en ciclo de 7 s con la misma regla (`src/scripts/enVista.ts`, atributo `data-repite`). Todo respeta `prefers-reduced-motion` y se queda en el estado final. Las ilustraciones son genéricas a propósito: no muestran restaurantes reales, claves reales ni logotipos de terceros.
- Escala de 5 tamaños. Sin tarjetas iguales, sin mayúsculas decorativas, sin iconos de adorno.
- Antes de cambiar el diseño, cargar la skill `frontend-design` y revisar la lista anti-slop del CLAUDE.md de `design`.

## Estructura de la portada
Primero la empresa (titular, "Qué es Valeny" con Simple / Seguro / Tecnológico) y después las soluciones, cada una con su logotipo y su animación: **Valeny Webs** (logotipo propio: la V con cinco módulos de QR en su hueco) y **Valeny Store** (logotipo `src/assets/valeny-store.webp`, entregado por el cliente). Al sumar una solución nueva, agregar un bloque `<article class="solucion">` en `index.astro`.

## Logotipo
- La V es un listón con hueco (bucle) y un brazo continuo con barrido y punta hacia la izquierda; la palabra "valeny" va en Bricolage Grotesque 600 convertida a curvas. La V parte de la de Valeny Store (V y S entrelazadas), así que la familia se parece: Valeny = V sola, Valeny Webs = V + módulos de QR, Valeny Store = V + S.
- Variantes: horizontal (cabecera), apilada con la palabra del ancho de la V (pie, imagen para compartir) y V sola (favicon). Componente `Logo.astro` con la prop `variante`; geometría en `src/data/marca.ts` (generada, no editar a mano).
- SVG listos para usar en `public/brand/` (horizontal, apilado, apilado-blanco, v, webs).
- Idea reservada para un servicio futuro: V con anillo entrelazado, en `marca/ideas/valeny-anillo.svg` (no se usa en el sitio).
- Pendiente: pedir el vectorial original del logo de Valeny Store; la V de aquí se reconstruyó a partir de una imagen de 1300 px.

## Datos
- `src/data/valeny.json`: contacto (WhatsApp, correo), dominio y datos de Valeny Store.
- `src/data/planes.json`: planes, precios y condiciones. Es la única fuente de precios.
- `src/data/index.ts` valida ambos en el build y falla con mensaje claro.
- **Correo:** `soporte@valeny.app`. Se recibe con Cloudflare Email Routing (reenvía a Gmail) y se responde desde Gmail con SMTP de Resend. Para cambiarlo, solo `correo` en `valeny.json`.

## Comandos
```bash
pnpm install
pnpm dev
pnpm build        # estático, a dist/
pnpm preview
```

## Despliegue (Cloudflare, Workers con archivos estáticos)
- Build command: `pnpm build`. Deploy command: `npx wrangler deploy`.
- Variable `PUBLIC_NOINDEX=1` para demos (agrega `noindex` y bloquea buscadores). **Quitarla al publicar en `valeny.app`.**
- Dominio: `valeny.app` (ya comprado). HTTPS es obligatorio en `.app`.

## Calidad
Lighthouse móvil: Performance ≥ 90, SEO ≥ 95, Accesibilidad ≥ 90. Revisar a 360, 390 px y escritorio antes de publicar.
