import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email, show confirmation)
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-800">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Get in touch with the Office of Kgosana Koketso Rakhudu:
      </p>

      <div className="text-center mb-8">
        <p className="text-gray-700">
          Email: 
          <a href="mailto:executivesupport@koketsorakhudu.com" className="text-blue-500 hover:underline">
            executivesupport@koketsorakhudu.com
          </a>
        </p>
        <p className="text-gray-700">Phone: +27 63 644 5723 | +27 82 948 1438</p>
      </div>

      <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-700">Your Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-2 border rounded-md shadow-sm" 
            placeholder="Enter your name" 
            required 
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700">Your Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-2 border rounded-md shadow-sm" 
            placeholder="Enter your email" 
            required 
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea 
            id="message" 
            className="w-full px-4 py-2 border rounded-md shadow-sm" 
            placeholder="Enter your message" 
            rows="4" 
            required 
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
