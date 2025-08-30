import React from 'react';

const WhySection = () => {
  return (
    <section id="why" className="w-full flex flex-col md:flex-row items-start justify-center py-16 px-4 md:px-16 bg-white text-black">
      <div className="md:w-1/3 w-full mb-8 md:mb-0">
        <h2 className="text-7xl font-extrabold uppercase">WHY</h2>
      </div>
      <div className="md:w-2/3 w-full md:pl-16">
        <h3 className="text-4xl font-extrabold mb-6">
          THE WOMEN AND GIRLS OF AFGHANISTAN AND IRAN HAVE UNITED IN A CALL TO END GENDER APARTHEID.
        </h3>
        <p className="text-2xl mb-6">
          In Afghanistan, the Taliban has launched an extreme, systematic gender-based war, issuing and enforcing over 100 decrees that severely restrict the daily lives of women, girls, and gender diverse persons—systematically cutting them off from equal education, work, healthcare, justice, political power, and movement, erasing them from public life, and relegating them to child bearers, child rearers, and free domestic labor at home.
        </p>
        <p className="text-2xl">
          In Iran, the Islamic Republic systematically oppresses women, girls, and gender diverse persons through laws and policies that restrict their rights in marriage, property, work, justice, political office, travel, and lifestyle—using their bodies and freedoms as tools of domination.
        </p>
      </div>
    </section>
  );
};

export default WhySection;
