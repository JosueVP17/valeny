// Las ilustraciones animadas arrancan una sola vez, cuando entran en pantalla.
// Con movimiento reducido (o sin JavaScript) se quedan en su estado final.
const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const objetivos = document.querySelectorAll<HTMLElement>("[data-en-vista]");

if (!reducido && "IntersectionObserver" in window) {
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        (e.target as HTMLElement).classList.add("corre");
        observador.unobserve(e.target);
      }
    },
    { threshold: 0.45 },
  );
  objetivos.forEach((el) => {
    el.classList.add("listo"); // estado inicial de la animación
    observador.observe(el);
  });
}
