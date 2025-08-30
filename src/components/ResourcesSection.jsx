import React from 'react';

const ResourcesSection = () => {
  return (
    <section id="resources" className="w-full flex flex-col lg:flex-row items-start justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white text-dark-blue min-h-screen">
      <div className="lg:w-1/3 w-full mb-6 sm:mb-8 lg:mb-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">RESOURCES</h2>
      </div>
      <div className="lg:w-2/3 w-full lg:pl-8 xl:pl-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight">
          EDUCATE YOURSELF AND OTHERS
        </h3>
        <div className="space-y-4 sm:space-y-6">
          <div className="border-l-4 border-primary pl-4 sm:pl-6">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">Reports & Research</h4>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">Access comprehensive reports on gender apartheid and human rights violations.</p>
          </div>
          <div className="border-l-4 border-primary pl-4 sm:pl-6">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">Educational Materials</h4>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">Download educational resources to share with your community.</p>
          </div>
          <div className="border-l-4 border-primary pl-4 sm:pl-6">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">Organizations</h4>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">Connect with organizations working to end gender apartheid.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
