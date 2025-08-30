import React from 'react';

const WhatSection = () => {
  return (
    <section id="what" className="w-full flex flex-col lg:flex-row items-start justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white text-dark-blue">
      <div className="lg:w-1/3 w-full mb-6 sm:mb-8 lg:mb-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">WHAT</h2>
      </div>
      <div className="lg:w-2/3 w-full lg:pl-8 xl:pl-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight">
          THE END GENDER APARTHEID CAMPAIGN IS COMMITTED TO DISMANTLING AND PREVENTING GENDER APARTHEID REGIMES THROUGH THE CODIFICATION OF GENDER APARTHEID AS A CRIME UNDER INTERNATIONAL AND DOMESTIC LAW.
        </h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 leading-relaxed">
          Gender apartheid regimes have one purpose: to dehumanize and repress women, girls, and others with the goal of entrenching and maintaining power. But gender apartheid has not been criminalized. This leaves a glaring impunity gap.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          The Campaign aims to expand the existing definition of apartheid as a crime against humanity to encompass gender in addition to race. Mirroring the core elements of the crime of apartheid under international criminal law, the Campaign defines gender apartheid as: inhumane acts committed in the context of an institutionalized regime of systematic oppression and domination by one gender group over another gender group or groups, and committed with the intention of maintaining that regime.
        </p>
      </div>
    </section>
  );
};

export default WhatSection;
