import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const faLine1Ref = useRef(null);
  const faLine2Ref = useRef(null);
  const faLine3Ref = useRef(null);
  const faLine4Ref = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Set initial state
    gsap.set([
      faLine1Ref.current, faLine2Ref.current, faLine3Ref.current, faLine4Ref.current,
      line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current, subtitleRef.current
    ], { y: 30, opacity: 0 });

    // Animate Farsi lines first
    gsap.to(faLine1Ref.current, { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 0.2 });
    gsap.to(faLine2Ref.current, { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 0.6 });
    gsap.to(faLine3Ref.current, { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 1.0 });
    gsap.to(faLine4Ref.current, { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 1.4 });

    // Animate English lines
    gsap.to(line1Ref.current, { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 2.0 });
    gsap.to(line2Ref.current, { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 2.4 });
    gsap.to(line3Ref.current, { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 2.8 });
    gsap.to(line4Ref.current, { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 3.2 });
    gsap.to(subtitleRef.current, { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 3.6 });
  }, []);

  return (
    <section id="hero" className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-right space-y-2 px-4 sm:px-8 md:px-12 lg:px-20 max-w-2xl mb-6" dir="rtl">
        <h1 ref={faLine1Ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <span className="text-primary">م</span>ردان
        </h1>
        <h1 ref={faLine2Ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <span className="text-primary">ع</span>لیه
        </h1>
        <h1 ref={faLine3Ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <span className="text-primary">آ</span>پارتاید
        </h1>
        <h1 ref={faLine4Ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <span className="text-primary">ج</span>نسیتی
        </h1>
      </div>

      <div className="text-left space-y-4 px-4 sm:px-8 md:px-12 lg:px-20 max-w-2xl">
        <h1 ref={line1Ref} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold">
          <span className="text-primary">M</span>EN
        </h1>
        <h1 ref={line2Ref} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold">
          <span className="text-primary">A</span>GAINST
        </h1>
        <h1 ref={line3Ref} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold">
          <span className="text-primary">G</span>ENDER
        </h1>
        <h1 ref={line4Ref} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold">
          <span className="text-primary">A</span>PARTHEID
        </h1>

        <p ref={subtitleRef} className="text-gray-300 text-sm sm:text-base border-t border-white pt-4">
          MAGA – Allies Advocating to End Gender Apartheid
        </p>
      </div>
    </section>
  );
};

export default Hero;
