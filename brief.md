# Brief — Valeny

> Estado: dirección A "Papel" elegida y sitio construido. Pendientes marcados con [PENDIENTE].

## Qué es
Valeny es una marca global de soluciones tecnológicas. El sitio (`valeny.app`) es el punto de entrada: presenta las soluciones y lleva a cada una.

Soluciones hoy (2):
1. **Webs para restaurantes**: sitios a medida con menú digital, QR de mesa, pedido para recoger y solicitud de reservación por WhatsApp. `valeny.app/webs` es la página del servicio; **cada restaurante tiene su propio dominio** (ej. `molcajetegrill.mx`).
2. **Licencias de Microsoft**: venta de licencias. Vive en otro sitio, `valenystore.com.mx` (Valeny Store, ya en uso). Aquí solo se presenta y se enlaza. Valeny Store es un **revendedor pequeño e independiente**; su proveedor es bitcodes.co (Colombia). No hay acreditación de Microsoft.

## Objetivo del sitio
Que el visitante escriba por WhatsApp. Un solo botón principal en todo el sitio.
- WhatsApp Business: +52 411 111 3954 (`524111113954`).

## A quién le habla
- Webs: dueños de restaurantes locales en todo México.
- Licencias: negocios y personas que necesitan software legítimo (el público lo define Valeny Store).

## Marca
- **Color:** morado (pedido explícito del cliente).
- **Personalidad (3 palabras):** minimalista, seguro, tecnológico.
- **Alcance:** "global". Debe poder crecer a más soluciones sin rediseñarse. Idioma inicial: español de México.
- **Logo:** la V madre, tomada de la del logo de Valeny Store y rediseñada como trazo continuo (listón con hueco, barrido y punta hacia la izquierda), con la palabra "valeny" debajo. Valeny Webs = V dentro de un marco de escaneo de QR. Valeny Store conserva su logo (V y S con degradado).

## Quién está detrás
Estudiante de licenciatura e ingeniero de aprendizaje automático (ML). No tiene años de experiencia diseñando webs. El sitio no debe inflar credenciales ni inventar trayectoria: la confianza viene de lo concreto (qué incluye cada plan, cómo se trabaja, qué se promete y qué no).

## Reglas de contenido
- Sin portafolio ni casos por ahora: no hay permiso de ningún cliente para mostrarlos.
- Sin testimonios, cifras de clientes ni logotipos de terceros.
- Sin logotipos de Microsoft ni frases que sugieran alianza o distribución oficial (no hay acreditación). La nota de marca registrada y no afiliación va junto al bloque de licencias. No afirmar "originales" ni "autorizadas" sin respaldo.
- Afirmaciones de seguridad solo si son verificables y concretas (HTTPS, sin base de datos ni cuentas en los sitios de restaurantes, qué datos se guardan y cuáles no). Nada de "máxima seguridad" sin respaldo.

## Planes de webs para restaurantes
Definidos en `src/data/planes.json` (Menú $2,500 + $250/mes; Pedidos $4,500 + $400/mes; Pro en desarrollo). Los precios son propuesta inicial aceptada por el cliente; calibrar con las horas reales por sitio. Idea: precio de lanzamiento para los primeros clientes a cambio de permiso para mostrar su sitio como caso.

## Decisiones técnicas abiertas
- **URL de los sitios de clientes:** cada uno con su propio dominio (resuelto).
- Hosting: Cloudflare (Workers con archivos estáticos), igual que el resto.
- Stack: Astro, sin `core`, repositorio propio (`valeny-web`).

## Contacto
- WhatsApp Business: +52 411 111 3954
- Correo: soporte@valenystore.com.mx (provisional; cambiar a soporte@valeny.app cuando exista)
- Instagram y otras redes: [PENDIENTE]
