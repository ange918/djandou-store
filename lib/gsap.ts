"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export function animateOnScroll(
  target: string | Element,
  vars: gsap.TweenVars = {}
) {
  return gsap.from(target, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: target as Element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    ...vars,
  });
}

export function staggerFadeIn(
  target: string,
  stagger = 0.15,
  vars: gsap.TweenVars = {}
) {
  return gsap.from(target, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger,
    ease: "power2.out",
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    ...vars,
  });
}

export function drawLine(target: string | Element) {
  return gsap.fromTo(
    target,
    { strokeDashoffset: 1000 },
    {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: target as Element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
}
