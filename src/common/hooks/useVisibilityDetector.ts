import { useEffect, useState } from "react";

export const useVisibilityDetector = (ref: HTMLElement | null) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    setObserver(
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { rootMargin: "400px" }
      )
    );
  }, []);

  useEffect(() => {
    if (!ref || !observer) {
      return;
    }

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return observer && isIntersecting;
};
