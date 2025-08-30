import React from 'react';

const ResourcesSection = () => {
  return (
    <section id="resources" className="w-full flex flex-col md:flex-row items-start justify-center py-16 px-4 md:px-16 bg-white text-black min-h-screen">
      <div className="md:w-1/3 w-full mb-8 md:mb-0">
        <h2 className="text-7xl font-extrabold uppercase">RESOURCES</h2>
      </div>
      <div className="md:w-2/3 w-full md:pl-16">
        <h3 className="text-4xl font-extrabold mb-6">
          EDUCATE YOURSELF AND OTHERS
        </h3>
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h4 className="text-2xl font-bold mb-2">Reports & Research</h4>
            <p className="text-lg">Access comprehensive reports on gender apartheid and human rights violations.</p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <h4 className="text-2xl font-bold mb-2">Educational Materials</h4>
            <p className="text-lg">Download educational resources to share with your community.</p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <h4 className="text-2xl font-bold mb-2">Organizations</h4>
            <p className="text-lg">Connect with organizations working to end gender apartheid.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
