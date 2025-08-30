// GSAP Animations

gsap.set([
  "#fa-line1", "#fa-line2", "#fa-line3", "#fa-line4",
  "#line1", "#line2", "#line3", "#line4", "#subtitle"
], { y: 30, opacity: 0 });

gsap.to("#fa-line1", { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 0.2 });
gsap.to("#fa-line2", { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 0.6 });
gsap.to("#fa-line3", { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 1.0 });
gsap.to("#fa-line4", { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 1.4 });

gsap.to("#line1", { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 2.0 });
gsap.to("#line2", { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 2.4 });
gsap.to("#line3", { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 2.8 });
gsap.to("#line4", { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 3.2 });
gsap.to("#subtitle", { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 3.6 }); 