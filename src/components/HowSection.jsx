import React, { useState } from 'react';

const HowSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const accordionItems = [
    {
      id: 1,
      question: "How can gender apartheid be codified as a crime under international law?",
      answer: "The deteriorating situation for women and girls in Afghanistan should mobilize international action around codification, just as the brutality of the South African apartheid regime led to the original recognition of apartheid under international law. Many jurists and activists involved in dismantling apartheid in southern Africa have voiced support for the codification of gender apartheid. See the Letter from South African Jurists and Anti-Apartheid Experts for more information."
    },
    {
      id: 2,
      question: "How can the crime of apartheid include gender when its original context was specific to race?",
      answer: "A key driver of the emerging solidarity between South African feminists and women, girls, and gender diverse individuals from Afghanistan has been the parallels between the two regimes: between the two regimes' systematic domination and oppression and their plain intent to entrench and perpetuate totalizing harms; the gendered experiences of apartheid in South Africa, where non-white women, particularly black women, experienced distinct and disproportionate harms, and the concept of apartheid perpetrated based on gender; and the colonial roots of apartheid in South Africa and the colonial legacies responsible for the rise to power of the Taliban in Afghanistan."
    }
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="how" className="w-full flex flex-col md:flex-row items-start justify-center py-16 px-4 md:px-16 bg-dark-blue text-white">
      <div className="md:w-1/3 w-full mb-8 md:mb-0">
        <h2 className="text-7xl font-extrabold uppercase">HOW</h2>
      </div>
      <div className="md:w-2/3 w-full md:pl-16 space-y-8">
        {accordionItems.map((item) => (
          <div key={item.id} className="bg-white text-black rounded shadow cursor-pointer">
            <div 
              className="flex justify-between items-center p-6 text-2xl font-bold"
              onClick={() => toggleAccordion(item.id)}
            >
              <span>{item.question}</span>
              <span className="text-3xl">{openAccordion === item.id ? '−' : '+'}</span>
            </div>
            <div className={`px-6 pb-6 transition-all duration-300 ${openAccordion === item.id ? 'block' : 'hidden'}`}>
              <p className="text-lg">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowSection;
