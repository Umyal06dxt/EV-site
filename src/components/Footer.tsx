import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">EVolution</span>
            </div>
            <p className="text-gray-400">
              Driving the future of sustainable transportation through innovation and technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">EV Models</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Charging Stations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Cost Calculator</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Charging Guide</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EVolution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;