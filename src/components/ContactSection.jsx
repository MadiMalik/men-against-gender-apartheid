import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email service integration here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="w-full flex flex-col md:flex-row items-start justify-center py-16 px-4 md:px-16 bg-white text-dark-blue min-h-screen">
      <div className="md:w-1/3 w-full mb-8 md:mb-0">
        <h2 className="text-7xl font-extrabold uppercase">CONTACT</h2>
      </div>
      <div className="md:w-2/3 w-full md:pl-16">
        <h3 className="text-4xl font-extrabold mb-6">
          GET IN TOUCH WITH US
        </h3>
        <p className="text-2xl mb-8">
          Have questions, suggestions, or want to get involved? We'd love to hear from you.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Send us a message</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-lg font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-primary text-white px-8 py-4 text-xl font-bold rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Contact Information</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-lg font-semibold mb-2">Email</h5>
                <p className="text-lg">info@menagainstgenderapartheid.org</p>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-2">Social Media</h5>
                <div className="space-y-2">
                  <p className="text-lg">Twitter: @MenAgainstGA</p>
                  <p className="text-lg">LinkedIn: Men Against Gender Apartheid</p>
                </div>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-2">Get Involved</h5>
                <p className="text-lg mb-4">
                  Join our movement and help us end gender apartheid worldwide.
                </p>
                <button className="bg-dark-blue text-white px-6 py-3 text-lg font-bold rounded hover:bg-navy transition-colors">
                  Join Our Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
