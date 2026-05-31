"use client";

import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export function useScrollAnimation(
  ref: React.RefObject<HTMLElement | null>,
  threshold = 0.15
) {
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, controls, threshold]);

  return controls;
}
