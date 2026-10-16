# CLAUDE.md — Sitio de Valeny (valeny.app)

## Qué es
Sitio de la marca Valeny. Presenta sus soluciones y lleva a cada una. Hoy hay dos:
1. **Webs para restaurantes** (`/webs`): página del servicio, con planes y precios. Los sitios de cada restaurante viven en su propio dominio y en otro repositorio (`E:\Valeny\design`, privado).
2. **Licencias de Microsoft**: se venden en `valenystore.com.mx` (Valeny Store). Aquí solo se presenta y se enlaza.

Objetivo único: que el visitante escriba por WhatsApp.

## Reglas
- **Este repositorio no contiene datos de clientes.** Nada de teléfonos, reseñas, fotos ni menús de restaurantes. Si algún día se muestra un caso, solo con permiso escrito del cliente.
- **Sin inventar:** ni testimonios, ni cifras de clientes, ni años de experiencia, ni portafolio sin permiso.
- **Microsoft:** sin logotipos y sin frases de alianza o distribución oficial. Valeny Store es un revendedor independiente. La nota de marca registrada y no afiliación va junto al bloque de licencias de la portada (no en el pie). No afirmar "originales" ni "autorizadas" sin respaldo.
- **Seguridad:** solo afirmaciones verificables. Hoy: el sitio no usa cookies, rastreadores, formularios ni fuentes de terceros. Si eso cambia, se actualiza la página de privacidad.
- Toda la UI en español de México. Cada dependencia nueva se justifica.

## Dirección de diseño: "Papel"
- Paleta (en `src/styles/global.css`): papel `#f7f6fb`, tinta `#16121f`, violeta `#5b2bd9`, lila `#e9e3fb`, gris `#655f78`. Violeta plano, **sin degradados**.
- Una sola familia: Bricolage Grotesque (autoalojada con Fontsource).
- Movimiento: la V de la portada se dibuja una vez al cargar. La ilustración del teléfono (Webs) corre en ciclo de 11 s **solo mientras está a la vista** (QR con barrido, menú con toque, mensaje enviado) y se detiene al salir; la de la licencia (Licencias) corre una vez al entrar en pantalla (`src/scripts/enVista.ts`, `data-repite` para las cíclicas). Todo respeta `prefers-reduced-motion` y se queda en el estado final. Las ilustraciones son genéricas a propósito: no muestran restaurantes reales, claves reales ni logotipos de terceros.
- Escala de 5 tamaños. Sin tarjetas iguales, sin mayúsculas decorativas, sin iconos de adorno.
- Antes de cambiar el diseño, cargar la skill `frontend-design` y revisar la lista anti-slop del CLAUDE.md de `design`.

## Estructura de la portada
Primero la empresa (titular, "Qué es Valeny" con Simple / Seguro / Tecnológico) y después las soluciones, cada una con su logotipo y su animación: **Valeny Webs** (logotipo propio: ventana con la V) y **Valeny Store** (logotipo `src/assets/valeny-store.webp`, entregado por el cliente). Al sumar una solución nueva, agregar un bloque `<article class="solucion">` en `index.astro`.

## Datos
- `src/data/valeny.json`: contacto (WhatsApp, correo), dominio y datos de Valeny Store.
- `src/data/planes.json`: planes, precios y condiciones. Es la única fuente de precios.
- `src/data/index.ts` valida ambos en el build y falla con mensaje claro.
- **Correo:** hoy `soporte@valenystore.com.mx`. Cuando exista `soporte@valeny.app`, cambiar solo `correo` en `valeny.json`.

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
