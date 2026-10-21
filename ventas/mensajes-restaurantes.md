# Mensajes para contactar restaurantes

Textos base para escribir a un restaurante que no nos conoce, con un demo ya hecho. Se adaptan al negocio y al tono del dueño. Los precios y lo que incluye cada plan salen de `src/data/planes.json` (única fuente): si cambian ahí, se actualizan aquí.

## Antes de enviar

- El demo está desplegado en `workers.dev` con `PUBLIC_NOINDEX=1` y `PUBLIC_SITE_URL` (ver el `CLAUDE.md` del repo `design`). Abrirlo en un celular con datos móviles.
- **Probar la vista previa de WhatsApp** pegando el enlace en un chat propio: debe mostrar título e imagen. WhatsApp guarda la vista previa en caché por URL; para probar cambios, agregar `?v=2` (solo para probar; al cliente va el enlace limpio).
- Si no se conoce al dueño, el primer mensaje puede llegar a un empleado: por eso es corto, lleva el enlace y pide que lo comente con quien corresponda.
- Un solo seguimiento, 3 o 4 días después. No insistir más.

## 1. Apertura (formal, con el enlace del demo)

> Buenas tardes. Le saluda Josué Valenzuela, de Valeny (valeny.app), empresa que desarrolla páginas web a la medida para restaurantes.
>
> Elaboramos, sin costo ni compromiso, una propuesta de página web para {Restaurante}. Puede verla desde su celular aquí:
> {enlace del demo}
>
> Si le interesa, ¿podría indicarme con quién puedo comentarla? Agradezco su atención.

El enlace va en el primer mensaje: ver algo propio (logo, fotos, reseñas) quita la sospecha de spam mejor que cualquier presentación.

## 2. Cuando respondan (lo que incluye)

> Muchas gracias. La propuesta incluye el menú, horario, ubicación y las reseñas de Google. Los clientes pueden armar un pedido para recoger, que llega directamente a su WhatsApp, y enviar una solicitud de reservación con día, hora y número de personas. Usted confirma todo por WhatsApp.
>
> También preparamos un menú pensado para las mesas, que se abre al escanear un código QR: solo muestra el menú, por categorías, con un botón para ir a la página completa:
> {enlace del demo}/mesa/

Quitar lo que el negocio no tenga (reservaciones, pedido para recoger).

## 3. Las tarjetas (adjuntar `tarjeta-mesa-DEMO.png` y `tarjeta-resena-DEMO.png`)

> Le comparto dos tarjetas de ejemplo para las mesas. La oscura abre el menú y la clara lleva a sus clientes a dejar una reseña en Google. Son solo de muestra: las finales llevarían el dominio propio de su restaurante.

## 4. Transparencia (siempre, antes de que pregunten)

> Para elaborar la propuesta utilizamos las fotografías publicadas en el Instagram del negocio y las reseñas públicas de Google. Si desea que se retire o modifique algún elemento, con gusto lo hacemos.

Estamos mostrando el nombre, las fotos y las reseñas de un negocio sin que nos lo hayan pedido. Decirlo desde el principio y quitar lo que pidan, sin discutir.

## 5. Si preguntan el costo

Usar los precios vigentes de `planes.json`. Ejemplo con los de hoy:

> Le recomendamos el plan Pedidos: $4,500 MXN de pago único y $250 MXN mensuales. Incluye su dominio propio registrado a su nombre, hospedaje, mantenimiento, soporte por WhatsApp y 2 cambios de menú al mes. Si solo requiere el menú digital con QR, el plan Menú es de $2,500 MXN de pago único y los mismos $250 mensuales.
>
> Más información en valeny.app/webs.

## 6. Si aceptan

> Perfecto. Para continuar necesitaríamos su confirmación por este medio y los datos del titular para registrar el dominio: nombre completo o razón social, correo y teléfono.

- El dominio se compra **solo cuando el cliente confirma**, con sus datos como titular (el cliente figura como dueño; nosotros lo administramos). Si se va, se le da el código de transferencia.
- Con el dominio activo: quitar `PUBLIC_NOINDEX` y `PUBLIC_SITE_URL`, generar el QR y las tarjetas finales, imprimir una prueba y escanearla con un Android y un iPhone.

## 7. Seguimiento (una sola vez)

> Buenas tardes, le doy seguimiento a mi mensaje anterior. La propuesta para {Restaurante} sigue disponible para su revisión sin compromiso. Quedo atento.

## Reglas comerciales vigentes

- La mensualidad es la misma en todos los planes ($250 al mes). La diferencia entre Menú y Pedidos está en el pago único, porque Pedidos lleva más trabajo de construcción.
- El dominio (.mx o .com) va incluido: el primer año en el pago único, la renovación en la mensualidad.
- No incluye fotos profesionales ni redacción de textos.
- No ofrecer ni prometer nada que no esté en `planes.json`. El plan Pro sigue en desarrollo y no se vende.
