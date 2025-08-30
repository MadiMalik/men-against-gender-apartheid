import React from 'react';

const WhoSection = () => {
  return (
    <section id="who" className="w-full flex flex-col md:flex-row items-start justify-center py-16 px-4 md:px-16 bg-white text-black min-h-screen">
      <div className="md:w-1/3 w-full mb-8 md:mb-0">
        <h2 className="text-7xl font-extrabold uppercase">WHO</h2>
      </div>
      <div className="md:w-2/3 w-full md:pl-16">
        <h3 className="text-4xl font-extrabold mb-6">
          WHO WE ARE AND WHAT WE STAND FOR
        </h3>
        <p className="text-2xl mb-6">
          We are a coalition of activists, advocates, and allies committed to ending gender apartheid worldwide. Our mission is to raise awareness, mobilize action, and support the codification of gender apartheid as a crime under international law.
        </p>
        <p className="text-2xl">
          Join us in our fight for justice, equality, and human rights for all.
        </p>
      </div>
    </section>
  );
};

export default WhoSection;
