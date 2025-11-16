import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHomePage 
          ? isScrolled 
            ? 'bg-white shadow-md py-4' 
            : 'bg-transparent py-6'
          : 'bg-white shadow-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavigation('/')} 
            className={`text-2xl font-bold ${
              isHomePage && !isScrolled ? 'text-white' : 'text-indigo-600'
            }`}
          >
            ADRIXA
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['/', '/about', '/services', '/campaigns', '/contact'].map((path) => (
              <button 
                key={path}
                onClick={() => handleNavigation(path)}
                className={`${
                  isHomePage && !isScrolled 
                    ? 'text-white hover:text-indigo-200' 
                    : 'text-gray-700 hover:text-indigo-600'
                } transition-colors`}
              >
                {path === '/' ? 'Home' : 
                 path === '/about' ? 'About Us' :
                 path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </button>
            ))}
            <button 
              onClick={() => handleNavigation('/contact')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'} />
            ) : (
              <Menu className={isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {['/', '/about', '/services', '/campaigns', '/contact'].map((path) => (
                <button 
                  key={path}
                  onClick={() => handleNavigation(path)}
                  className={`${
                    isHomePage && !isScrolled 
                      ? 'text-white hover:text-indigo-200' 
                      : 'text-gray-700 hover:text-indigo-600'
                  } transition-colors text-left`}
                >
                  {path === '/' ? 'Home' : 
                   path === '/about' ? 'About Us' :
                   path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </button>
              ))}
              <button 
                onClick={() => handleNavigation('/contact')}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;