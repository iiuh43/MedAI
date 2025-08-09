import React from 'react';
import { Shield, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">AI Gov Standards</span>
            </div>
            <p className="text-gray-300 mb-4">
              America's First Comprehensive Repository for Healthcare AI Governance Standards.
              Standardizing and improving AI governance to ensure ethical, equitable, and safe clinical AI use.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/map" className="text-gray-300 hover:text-blue-400 transition-colors">Interactive Map</a></li>
              <li><a href="/search" className="text-gray-300 hover:text-blue-400 transition-colors">Search Standards</a></li>
              <li><a href="/contribute" className="text-gray-300 hover:text-blue-400 transition-colors">Contribute</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Project</a></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://haclab.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  HACLab
                </a>
              </li>
              <li>
                <a 
                  href="https://www.emory.edu/home/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Emory University
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AI Governance Standards Repository. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;