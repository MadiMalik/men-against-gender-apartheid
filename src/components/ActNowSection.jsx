import React from 'react';

const ActNowSection = () => {
  return (
    <section id="act" className="w-full flex flex-col md:flex-row items-start justify-center py-16 px-4 md:px-16 bg-black text-white min-h-screen">
      <div className="md:w-1/3 w-full mb-8 md:mb-0">
        <h2 className="text-7xl font-extrabold uppercase">ACT NOW</h2>
      </div>
      <div className="md:w-2/3 w-full md:pl-16">
        <h3 className="text-4xl font-extrabold mb-6">
          TAKE ACTION TO END GENDER APARTHEID
        </h3>
        <p className="text-2xl mb-8">
          Your voice matters. Join us in demanding justice and equality for women and girls worldwide.
        </p>
        <div className="space-y-4">
          <button className="bg-primary text-white px-8 py-4 text-xl font-bold rounded hover:bg-blue-700 transition-colors">
            SIGN THE PETITION
          </button>
          <button className="bg-white text-black px-8 py-4 text-xl font-bold rounded hover:bg-gray-100 transition-colors ml-4">
            DONATE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActNowSection;
