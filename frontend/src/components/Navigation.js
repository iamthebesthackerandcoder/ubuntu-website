import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/try', label: 'Try Ubuntu', icon: '🖥️' },
    { path: '/installation', label: 'Installation', icon: '⚙️' },
    { path: '/software', label: 'Software', icon: '📦' },
    { path: '/community', label: 'Community', icon: '👥' },
    { path: '/why-ubuntu', label: 'Why Ubuntu?', icon: '❓' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Switch to Ubuntu
                </span>
                <div className="text-xs text-gray-500 font-medium">Free • Secure • Fast</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  isActive(item.path)
                    ? 'text-orange-600 bg-orange-50 shadow-md'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <span className="text-base group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
                )}
              </Link>
            ))}
            
            <div className="ml-6 pl-6 border-l border-gray-200">
              <a
                href="https://ubuntu.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm px-6 py-2.5 font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Download Ubuntu</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">⬇️</span>
                </span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-xl text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:bg-orange-50 focus:text-orange-600 transition-all duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 bg-white/90 backdrop-blur-lg rounded-2xl mt-2 border border-white/20 shadow-xl">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-xl text-base font-medium transition-all duration-300 animate-fadeInUp ${
                  isActive(item.path)
                    ? 'text-orange-600 bg-orange-50 shadow-md'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="mx-2 mt-4 pt-4 border-t border-gray-200">
              <a
                href="https://ubuntu.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-base font-semibold animate-fadeInUp"
                style={{ animationDelay: `${navItems.length * 0.1}s` }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Download Ubuntu</span>
                  <span>⬇️</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;