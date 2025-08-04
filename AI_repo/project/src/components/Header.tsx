import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Interactive Map', href: '/map', current: location.pathname === '/map' },
    { name: 'Search Standards', href: '/search', current: location.pathname === '/search' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Team', href: '/team', current: location.pathname === '/team' },
    { name: 'Contribute', href: '/contribute', current: location.pathname === '/contribute' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Partner Logos as Main Navigation Brand */}
            <Link to="/" className="flex items-center space-x-4">
              <a href="https://emory.edu" target="_blank" rel="noopener noreferrer" className="flex items-center" onClick={(e) => e.stopPropagation()}>
                <img 
                  src="/images/logos/Emory-University-Logo.png" 
                  alt="Emory University" 
                  className="h-10 w-auto hover:opacity-80 transition-opacity duration-200"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/150x40/012169/ffffff?text=EMORY';
                  }}
                />
              </a>
              <a href="https://www.haclab.org/" target="_blank" rel="noopener noreferrer" className="flex items-center" onClick={(e) => e.stopPropagation()}>
                <img 
                  src="/images/logos/haclab_logo.png" 
                  alt="HACLab" 
                  className="h-10 w-auto hover:opacity-80 transition-opacity duration-200"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/150x40/1f2937/ffffff?text=HACLab';
                  }}
                />
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;