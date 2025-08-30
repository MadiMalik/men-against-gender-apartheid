import React from 'react';

const WhatSection = () => {
  return (
    <section id="what" className="w-full flex flex-col md:flex-row items-start justify-center py-16 px-4 md:px-16 bg-white text-dark-blue">
      <div className="md:w-1/3 w-full mb-8 md:mb-0">
        <h2 className="text-7xl font-extrabold uppercase">WHAT</h2>
      </div>
      <div className="md:w-2/3 w-full md:pl-16">
        <h3 className="text-4xl font-extrabold mb-6">
          THE END GENDER APARTHEID CAMPAIGN IS COMMITTED TO DISMANTLING AND PREVENTING GENDER APARTHEID REGIMES THROUGH THE CODIFICATION OF GENDER APARTHEID AS A CRIME UNDER INTERNATIONAL AND DOMESTIC LAW.
        </h3>
        <p className="text-2xl mb-6">
          Gender apartheid regimes have one purpose: to dehumanize and repress women, girls, and others with the goal of entrenching and maintaining power. But gender apartheid has not been criminalized. This leaves a glaring impunity gap.
        </p>
        <p className="text-2xl">
          The Campaign aims to expand the existing definition of apartheid as a crime against humanity to encompass gender in addition to race. Mirroring the core elements of the crime of apartheid under international criminal law, the Campaign defines gender apartheid as: inhumane acts committed in the context of an institutionalized regime of systematic oppression and domination by one gender group over another gender group or groups, and committed with the intention of maintaining that regime.
        </p>
      </div>
    </section>
  );
};

export default WhatSection;
