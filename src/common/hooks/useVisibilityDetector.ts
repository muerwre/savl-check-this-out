import { useEffect, useMemo, useState } from "react";

export const useVisibilityDetector = (
  ref: HTMLElement | null,
  threshold = 0.2
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { threshold }
      ),
    [threshold]
  );

  useEffect(() => {
    if (!ref) {
      return;
    }

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
};
