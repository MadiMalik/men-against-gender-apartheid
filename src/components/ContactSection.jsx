import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'MAGA Team', // Who the email is addressed to
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full flex flex-col lg:flex-row items-start justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white text-dark-blue min-h-screen">
      <div className="lg:w-1/3 w-full mb-6 sm:mb-8 lg:mb-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">CONTACT</h2>
      </div>
      <div className="lg:w-2/3 w-full lg:pl-8 xl:pl-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight">
          GET IN TOUCH WITH US
        </h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed">
          Have questions, suggestions, or want to get involved? We'd love to hear from you.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Send us a message</h4>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded text-sm sm:text-base">
                Thank you for your message! We will get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded text-sm sm:text-base">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none disabled:opacity-50 text-sm sm:text-base"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h4>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h5 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Email</h5>
                <p className="text-sm sm:text-base md:text-lg">info@menagainstgenderapartheid.org</p>
              </div>
              
              <div>
                <h5 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Social Media</h5>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-sm sm:text-base md:text-lg">Twitter: @MenAgainstGA</p>
                  <p className="text-sm sm:text-base md:text-lg">LinkedIn: Men Against Gender Apartheid</p>
                </div>
              </div>
              
              <div>
                <h5 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">Get Involved</h5>
                <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed">
                  Join our movement and help us end gender apartheid worldwide.
                </p>
                <button className="bg-dark-blue text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-bold rounded hover:bg-navy transition-colors">
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
