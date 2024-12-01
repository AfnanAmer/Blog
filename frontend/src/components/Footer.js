import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Afnan's Blog</h3>
            <p className="text-gray-600">
              A platform for sharing thoughts, ideas and stories with the world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-600 hover:text-gray-900 transition duration-300">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-900 transition duration-300">Privacy Policy</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900 transition duration-300">Twitter</a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900 transition duration-300">Facebook</a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900 transition duration-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
