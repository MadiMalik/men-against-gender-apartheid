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
    <section id="hero" className="min-h-screen bg-dark-blue text-white flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 lg:py-0">
      {/* Farsi Text */}
      <div className="text-right space-y-1 sm:space-y-2 lg:space-y-2 px-2 sm:px-4 lg:px-8 mb-6 lg:mb-0 lg:mr-8 max-w-xs sm:max-w-sm lg:max-w-md" dir="rtl">
        <h1 ref={faLine1Ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
          <span className="text-primary">م</span>ردان
        </h1>
        <h1 ref={faLine2Ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
          <span className="text-primary">ع</span>لیه
        </h1>
        <h1 ref={faLine3Ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
          <span className="text-primary">آ</span>پارتاید
        </h1>
        <h1 ref={faLine4Ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
          <span className="text-primary">ج</span>نسیتی
        </h1>
      </div>

      {/* English Text */}
      <div className="text-left space-y-2 sm:space-y-3 lg:space-y-4 px-2 sm:px-4 lg:px-8 max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
        <h1 ref={line1Ref} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold leading-tight">
          <span className="text-primary">M</span>EN
        </h1>
        <h1 ref={line2Ref} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold leading-tight">
          <span className="text-primary">A</span>GAINST
        </h1>
        <h1 ref={line3Ref} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold leading-tight">
          <span className="text-primary">G</span>ENDER
        </h1>
        <h1 ref={line4Ref} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold leading-tight">
          <span className="text-primary">A</span>PARTHEID
        </h1>

        <p ref={subtitleRef} className="text-gray-300 text-xs sm:text-sm md:text-base border-t border-white pt-2 sm:pt-3 lg:pt-4 mt-4 sm:mt-6">
          MAGA – Allies Advocating to End Gender Apartheid
        </p>
      </div>
    </section>
  );
};

export default Hero;
