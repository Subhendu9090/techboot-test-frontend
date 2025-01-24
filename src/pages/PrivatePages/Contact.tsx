import React, { useState } from 'react';
import { Mail, Phone, Send, Globe } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Left Side - Animated Gradient Background */}
      <div className="relative flex items-center justify-center p-6 overflow-hidden md:w-1/2 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 md:p-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-gradient-shift opacity-70"></div>

        <div className="z-10 px-6 space-y-6 text-center text-white md:px-12">
          <div className="relative">
            <Globe className="absolute w-24 h-24 mx-auto mb-6 text-white transform -translate-x-1/2 -translate-y-1/2 animate-orbit top-1/2 left-1/2 opacity-20" />
            <Globe className="relative z-10 w-24 h-24 mx-auto mb-6 text-white animate-pulse" />
          </div>

          <h2 className="mb-4 text-2xl font-bold md:text-4xl">
            Connect With Us
          </h2>
          <p className="mb-6 text-base md:text-xl">
            We're here to help and answer any question you might have.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 transition-transform transform hover:translate-x-2">
              <Mail className="w-6 h-6" />
              <span>support@company.com</span>
            </div>
            <div className="flex items-center justify-center space-x-4 transition-transform transform hover:translate-x-2">
              <Phone className="w-6 h-6" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex items-center justify-center p-6 bg-gray-100 md:w-1/2 md:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h3 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Send a Message
          </h3>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center w-full py-3 space-x-2 text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <Send className="w-6 h-6" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
