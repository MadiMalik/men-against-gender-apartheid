import React from 'react';

const WhySection = () => {
  return (
    <section id="why" className="w-full flex flex-col lg:flex-row items-start justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white text-dark-blue">
      <div className="lg:w-1/3 w-full mb-6 sm:mb-8 lg:mb-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">WHY</h2>
      </div>
      <div className="lg:w-2/3 w-full lg:pl-8 xl:pl-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight">
          THE WOMEN AND GIRLS OF AFGHANISTAN AND IRAN HAVE UNITED IN A CALL TO END GENDER APARTHEID.
        </h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 leading-relaxed">
          In Afghanistan, the Taliban has launched an extreme, systematic gender-based war, issuing and enforcing over 100 decrees that severely restrict the daily lives of women, girls, and gender diverse persons—systematically cutting them off from equal education, work, healthcare, justice, political power, and movement, erasing them from public life, and relegating them to child bearers, child rearers, and free domestic labor at home.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          In Iran, the Islamic Republic systematically oppresses women, girls, and gender diverse persons through laws and policies that restrict their rights in marriage, property, work, justice, political office, travel, and lifestyle—using their bodies and freedoms as tools of domination.
        </p>
      </div>
    </section>
  );
};

export default WhySection;
