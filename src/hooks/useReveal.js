import { useEffect, useRef } from 'react';

// Agrega `is-visible` al elemento cuando entra en pantalla (una sola vez).
// Se usa junto con la clase `.reveal` de index.scss.
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return undefined;
    }

    // Sin umbral: alcanza con que asome (un bloque más alto que la pantalla nunca llegaría a un porcentaje).
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
