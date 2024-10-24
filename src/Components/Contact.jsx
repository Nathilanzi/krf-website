import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Get in touch with the Office of Kgosana Koketso Rakhudu:
      </p>

      <div className="text-center mb-8">
        <p className="text-gray-700">Email: <a href="mailto:executivesupport@koketsorakhudu.com" className="text-blue-500 hover:underline">executivesupport@koketsorakhudu.com</a></p>
        <p className="text-gray-700">Phone: +27 63 644 5723 | +27 82 948 1438</p>
      </div>

      <form className="max-w-lg mx-auto space-y-4">
        <div>
          <label className="block text-gray-700">Your Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Enter your name" />
        </div>

        <div>
          <label className="block text-gray-700">Your Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-md" placeholder="Enter your email" />
        </div>

        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-md" placeholder="Enter your message"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
