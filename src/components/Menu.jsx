import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuColor, setMenuColor] = useState('text-white'); // Default to white text

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  // Function to determine menu color based on current section
  const getMenuColor = () => {
    const sections = [
      { id: 'hero', bgColor: 'dark-blue' },
      { id: 'why', bgColor: 'white' },
      { id: 'what', bgColor: 'white' },
      { id: 'how', bgColor: 'dark-blue' },
      { id: 'who', bgColor: 'white' },
      { id: 'act', bgColor: 'dark-blue' },
      { id: 'resources', bgColor: 'white' },
      { id: 'about', bgColor: 'dark-blue' },
      { id: 'contact', bgColor: 'white' }
    ];

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          return section.bgColor === 'dark-blue' ? 'text-white' : 'text-dark-blue';
        }
      }
    }

    return 'text-white'; // Default to white text
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuColor(getMenuColor());
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        onClick={toggleMenu}
        className={`fixed top-3 sm:top-4 left-3 sm:left-4 z-50 flex items-center space-x-2 focus:outline-none ${menuColor}`}
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="font-bold text-sm sm:text-lg uppercase">Menu</span>
      </button>

      {/* Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-dark-blue bg-opacity-100 z-40 flex flex-col items-start px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 transition-transform duration-300 ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <button 
          onClick={closeMenu}
          className="mb-8 sm:mb-12 flex items-center space-x-2 focus:outline-none text-white"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="font-bold text-sm sm:text-lg uppercase">Menu</span>
        </button>
        <nav className="w-full space-y-4 sm:space-y-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-left w-full text-white leading-tight"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('why')}
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-left w-full text-white leading-tight"
          >
            Why
          </button>
          <button 
            onClick={() => scrollToSection('what')}
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-left w-full text-white leading-tight"
          >
            What
          </button>
          <button 
            onClick={() => scrollToSection('how')}
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-left w-full text-white leading-tight"
          >
            How
          </button>
          <button 
            onClick={() => scrollToSection('who')}
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-left w-full text-white leading-tight"
          >
            Who
          </button>
          <button 
            onClick={() => scrollToSection('act')}
            className="block text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-left w-full mt-6 sm:mt-8 text-white leading-tight"
          >
            Act Now
          </button>
          <button 
            onClick={() => scrollToSection('resources')}
            className="block text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-left w-full text-white leading-tight"
          >
            Resources
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="block text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-left w-full text-white leading-tight"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-left w-full text-white leading-tight"
          >
            Contact
          </button>
        </nav>
      </div>
    </>
  );
};

export default Menu;
