import React from 'react';
import Menu from './components/Menu.jsx';
import Hero from './components/Hero.jsx';
import WhySection from './components/WhySection.jsx';
import WhatSection from './components/WhatSection.jsx';
import HowSection from './components/HowSection.jsx';
import WhoSection from './components/WhoSection.jsx';
import ActNowSection from './components/ActNowSection.jsx';
import ResourcesSection from './components/ResourcesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <WhySection />
      <WhatSection />
      <HowSection />
      <WhoSection />
      <ActNowSection />
      <ResourcesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;
