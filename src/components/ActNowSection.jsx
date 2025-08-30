import React from 'react';

const ActNowSection = () => {
  return (
    <section id="act" className="w-full flex flex-col lg:flex-row items-start justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-dark-blue text-white min-h-screen">
      <div className="lg:w-1/3 w-full mb-6 sm:mb-8 lg:mb-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">ACT NOW</h2>
      </div>
      <div className="lg:w-2/3 w-full lg:pl-8 xl:pl-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight">
          TAKE ACTION TO END GENDER APARTHEID
        </h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed">
          Your voice matters. Join us in demanding justice and equality for women and girls worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded hover:bg-blue-700 transition-colors">
            SIGN THE PETITION
          </button>
          <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded hover:bg-gray-100 transition-colors">
            DONATE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActNowSection;
