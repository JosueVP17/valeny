// Las ilustraciones animadas arrancan cuando entran en pantalla.
// - Por defecto corren una sola vez.
// - Con data-repite corren mientras estén a la vista y se detienen al salir.
// Con movimiento reducido (o sin JavaScript) se quedan en su estado final.
const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const objetivos = document.querySelectorAll<HTMLElement>("[data-en-vista]");

if (!reducido && "IntersectionObserver" in window) {
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        const el = e.target as HTMLElement;
        const repite = el.hasAttribute("data-repite");
        if (e.isIntersecting) {
          el.classList.add("corre");
          if (!repite) observador.unobserve(el);
        } else if (repite) {
          el.classList.remove("corre");
        }
      }
    },
    { threshold: 0.45 },
  );
  objetivos.forEach((el) => {
    el.classList.add("listo"); // estado inicial de la animación
    observador.observe(el);
  });
}
