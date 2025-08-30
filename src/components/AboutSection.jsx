import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="w-full flex flex-col lg:flex-row items-start justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-dark-blue text-white min-h-screen">
      <div className="lg:w-1/3 w-full mb-6 sm:mb-8 lg:mb-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">ABOUT</h2>
      </div>
      <div className="lg:w-2/3 w-full lg:pl-8 xl:pl-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight">
          ABOUT MEN AGAINST GENDER APARTHEID
        </h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 leading-relaxed">
          We are a global movement of men and allies committed to ending gender apartheid and supporting the rights of women, girls, and gender diverse individuals worldwide.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 leading-relaxed">
          Our mission is to raise awareness, mobilize action, and advocate for the codification of gender apartheid as a crime under international law.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Join us in our fight for justice, equality, and human rights for all.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
