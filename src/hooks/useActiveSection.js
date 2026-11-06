import { useEffect, useState } from 'react';

// Devuelve el `nav` de la sección que está cruzando una franja a media altura de la pantalla.
// secciones: [{ id: 'clientes', nav: 'clientes' }, ...] en el orden de la página (referencia estable).
export default function useActiveSection(secciones) {
  const [activa, setActiva] = useState(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    let observer = null;
    let espera = 0;

    // La franja va del 40 % al 45 % de la altura. Se pasa en píxeles (no en porcentaje) para no
    // depender de contra qué medida resuelve cada navegador los porcentajes de rootMargin.
    const crear = () => {
      if (observer) observer.disconnect();
      const alto = window.innerHeight;
      const enPantalla = new Set();
      observer = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((entrada) => {
            if (entrada.isIntersecting) enPantalla.add(entrada.target.id);
            else enPantalla.delete(entrada.target.id);
          });
          const actual = secciones.find((s) => enPantalla.has(s.id));
          setActiva(actual ? actual.nav : null);
        },
        { rootMargin: `${-Math.round(alto * 0.4)}px 0px ${-Math.round(alto * 0.55)}px 0px`, threshold: 0 }
      );
      secciones.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
      });
    };

    // Si cambia el alto de la ventana (o gira el celular), la franja se recalcula.
    const alRedimensionar = () => {
      clearTimeout(espera);
      espera = setTimeout(crear, 200);
    };

    crear();
    window.addEventListener('resize', alRedimensionar, { passive: true });
    return () => {
      clearTimeout(espera);
      window.removeEventListener('resize', alRedimensionar);
      if (observer) observer.disconnect();
    };
  }, [secciones]);

  return activa;
}
