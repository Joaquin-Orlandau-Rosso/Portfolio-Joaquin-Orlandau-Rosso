// Capas del hero: cada [data-profundidad] se corre un poco con el scroll y con el mouse.
// Sale de la plantilla propia "hero-animado" (sin dependencias), recortada a lo que usa este sitio.
// El scroll es siempre el nativo: nada escucha la rueda ni mueve la página.

const consulta = (texto) => (typeof matchMedia === 'function' ? matchMedia(texto) : { matches: false });
const damp = (actual, objetivo, lambda, dt) => actual + (objetivo - actual) * (1 - Math.exp(-lambda * dt));

// raiz: la sección. data-mouse = px de desplazamiento con profundidad 1; data-scroll = cuánto pesa el scroll.
// soloSi: media query; fuera de ella las capas quedan quietas (en celular el hero es una sola columna).
// Con "reducir movimiento" también quedan quietas, aunque la preferencia cambie con la página abierta.
// Devuelve la función que deshace todo (para el cleanup de un useEffect).
export function capas(raiz, soloSi = '(min-width: 60em)') {
  if (!raiz || typeof matchMedia !== 'function') return () => {};
  const els = [...raiz.querySelectorAll('[data-profundidad]')].map((el) => ({
    el,
    p: parseFloat(el.dataset.profundidad) || 0,
  }));
  if (!els.length) return () => {};

  const conMouse = !consulta('(pointer: coarse)').matches;
  const fuerzaMouse = parseFloat(raiz.dataset.mouse || '24');
  const fuerzaScroll = parseFloat(raiz.dataset.scroll || '0.4');
  const ancho = consulta(soloSi);
  const reducido = consulta('(prefers-reduced-motion: reduce)');
  let visible = true;
  let quieto = false; // true cuando ya se limpiaron los transform por no corresponder moverse
  let raf = 0;
  let ultimo = 0;
  const puntero = { x: 0, y: 0 };
  const suave = { x: 0, y: 0, s: 0 };

  const cuadro = (t) => {
    raf = 0;
    if (!ancho.matches || reducido.matches) {
      if (!quieto) {
        els.forEach(({ el }) => {
          el.style.transform = '';
        });
        quieto = true;
      }
      ultimo = 0;
      return;
    }
    quieto = false;
    const dt = ultimo ? Math.min((t - ultimo) / 1000, 1 / 20) : 1 / 60;
    ultimo = t;
    const s = Math.max(0, -raiz.getBoundingClientRect().top); // cuánto se scrolleó dentro de la sección
    suave.x = damp(suave.x, puntero.x, 4, dt);
    suave.y = damp(suave.y, puntero.y, 4, dt);
    suave.s = damp(suave.s, s, 12, dt);
    for (const { el, p } of els) {
      const x = suave.x * p * fuerzaMouse;
      const y = suave.s * p * fuerzaScroll + suave.y * p * fuerzaMouse;
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    }
    const llego =
      Math.abs(suave.x - puntero.x) < 0.001 && Math.abs(suave.y - puntero.y) < 0.001 && Math.abs(suave.s - s) < 0.1;
    if (!llego) pedir();
    else ultimo = 0;
  };

  function pedir() {
    if (!raf && visible && !document.hidden) raf = requestAnimationFrame(cuadro);
  }

  const alMover = (e) => {
    puntero.x = (e.clientX / window.innerWidth) * 2 - 1;
    puntero.y = (e.clientY / window.innerHeight) * 2 - 1;
    pedir();
  };

  let io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      ([entrada]) => {
        visible = entrada.isIntersecting;
        pedir();
      },
      { rootMargin: '20% 0px' }
    );
    io.observe(raiz);
  }
  window.addEventListener('scroll', pedir, { passive: true });
  window.addEventListener('resize', pedir, { passive: true });
  if (conMouse) window.addEventListener('pointermove', alMover, { passive: true });
  pedir();

  return () => {
    cancelAnimationFrame(raf);
    if (io) io.disconnect();
    window.removeEventListener('scroll', pedir);
    window.removeEventListener('resize', pedir);
    window.removeEventListener('pointermove', alMover);
    els.forEach(({ el }) => {
      el.style.transform = '';
    });
  };
}
