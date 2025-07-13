import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { useTheme } from '../contexts/ThemeContext';

// Memoized navigation item component for better performance
const NavigationItem = memo(({ item, isActive, isDarkMode, isNavigating, onNavClick }) => (
  <Link
    to={item.path}
    onClick={(e) => onNavClick(e, item.path)}
    className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 hover-lift ripple-effect gpu-accelerated ${
      isActive
        ? 'text-orange-600 bg-orange-50 shadow-md dark:bg-orange-900/30 dark:text-orange-400'
        : isDarkMode
          ? 'text-gray-200 hover:text-orange-400 hover:bg-orange-900/20'
          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
    } ${isNavigating && isActive ? 'loading-shimmer' : ''}`}
    aria-current={isActive ? 'page' : undefined}
  >
    <span className="text-base group-hover:scale-110 transition-transform duration-300 will-change-transform">
      {item.icon}
    </span>
    <span className="relative">
      {item.label}
      {isNavigating && isActive && (
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
      )}
    </span>
    {isActive && (
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
    )}
  </Link>
));

NavigationItem.displayName = 'NavigationItem';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Debounced scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 20);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/try', label: 'Try Ubuntu', icon: '🖥️' },
    { path: '/installation', label: 'Installation', icon: '⚙️' },
    { path: '/software', label: 'Software', icon: '📦' },
    { path: '/community', label: 'Community', icon: '👥' },
    { path: '/why-ubuntu', label: 'Why Ubuntu?', icon: '❓' }
  ];

  // Enhanced mobile menu toggle with animation state management
  const toggleMobileMenu = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsOpen(prev => !prev);

    // Reset animation state after transition completes
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) &&
          hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        toggleMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, toggleMobileMenu]);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        toggleMobileMenu();
        // Return focus to hamburger button
        hamburgerRef.current?.focus();
      }

      // Handle arrow key navigation in mobile menu
      if (isOpen && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault();
        const menuItems = mobileMenuRef.current?.querySelectorAll('a[role="menuitem"]');
        if (!menuItems) return;

        const currentIndex = Array.from(menuItems).findIndex(item => item === document.activeElement);
        let nextIndex;

        if (event.key === 'ArrowDown') {
          nextIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
        }

        menuItems[nextIndex]?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggleMobileMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Handle navigation loading state
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  // Enhanced navigation link handler
  const handleNavClick = useCallback((e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      return;
    }
    setIsNavigating(true);
  }, [location.pathname]);

  return (
    <>
      {/* Skip Links for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <a href="#navigation" className="skip-link">
        Skip to navigation
      </a>

      {/* Screen Reader Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        role="status"
      >
        {isNavigating && "Navigating to new page"}
        {isOpen && "Navigation menu opened"}
        {!isOpen && isAnimating && "Navigation menu closed"}
      </div>

      <nav
        id="navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-orange-400/20 shadow-md ${
          scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
        } ${isDarkMode ? 'dark' : ''}`}
        role="navigation"
        aria-label="Main navigation"
        aria-describedby="nav-description"
      >
        <div id="nav-description" className="sr-only">
          Main navigation with {navItems.length} menu items. Use arrow keys to navigate when mobile menu is open.
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-lg p-1"
              aria-label="Ubuntu Guide - Go to homepage"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-lg" aria-hidden="true">U</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Switch to Ubuntu
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Free • Secure • Fast</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.slice(0, 4).map((item) => (
              <NavigationItem
                key={item.path}
                item={{ ...item, icon: null }} // Hide icon on desktop
                isActive={isActive(item.path)}
                isDarkMode={isDarkMode}
                isNavigating={isNavigating}
                onNavClick={handleNavClick}
              />
            ))}
            {/* More dropdown for remaining items */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                <span>More</span>
                <span className="ml-1">▼</span>
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {navItems.slice(4).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4 py-3 text-sm font-medium transition-all duration-300 first:rounded-t-xl last:rounded-b-xl ${
                      isActive(item.path)
                        ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400'
                        : isDarkMode
                          ? 'text-gray-200 hover:text-orange-400 hover:bg-orange-900/20'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-8 pl-6 border-l border-gray-200 dark:border-gray-600 flex items-center space-x-4">
              <DarkModeToggle />
              <a
                href="https://ubuntu.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-xs px-4 py-2 font-semibold group relative overflow-hidden focus-ring"
                style={{ boxShadow: 'none', fontWeight: 500 }}
              >
                <span className="relative z-10 flex items-center">
                  <span>Download</span>
                </span>
              </a>
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                  isActive(item.path)
                    ? 'text-orange-600 bg-orange-50 shadow-md dark:bg-orange-900/30 dark:text-orange-400'
                    : isDarkMode
                      ? 'text-gray-200 hover:text-orange-400 hover:bg-orange-900/20'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="hidden xl:inline">{item.label}</span>
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
                )}
              </Link>
            ))}

            {/* More menu for remaining items */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'text-gray-200 hover:text-orange-400 hover:bg-orange-900/20'
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}>
                <span>⋯</span>
                <span className="hidden xl:inline">More</span>
              </button>

              {/* Dropdown for remaining items */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {navItems.slice(4).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-300 first:rounded-t-xl last:rounded-b-xl ${
                      isActive(item.path)
                        ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400'
                        : isDarkMode
                          ? 'text-gray-200 hover:text-orange-400 hover:bg-orange-900/20'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-600 flex items-center space-x-3">
              <DarkModeToggle className="scale-90" />
              <a
                href="https://ubuntu.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-xs px-4 py-2 font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <span>Download</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">⬇️</span>
                </span>
              </a>
            </div>
          </div>


          {/* Enhanced Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <DarkModeToggle className="scale-90" />
            <button
              ref={hamburgerRef}
              onClick={toggleMobileMenu}
              disabled={isAnimating}
              className={`relative p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 min-h-12 min-w-12 ${
                isDarkMode
                  ? 'text-gray-200 hover:text-orange-400 hover:bg-gray-700/50 active:bg-gray-800/50'
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50/80 active:bg-orange-100/80'
              } hover:scale-105 active:scale-95 ${isAnimating ? 'pointer-events-none' : ''}`}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-200 ease-in-out ${
                  isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>

              {/* Ripple effect */}
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                isOpen ? 'bg-orange-500/10 scale-110' : 'scale-100'
              }`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          />
        )}

        {/* Enhanced Mobile Navigation */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className={`md:hidden fixed top-16 left-0 right-0 z-50 transition-all duration-300 ease-out ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          role="menu"
          aria-labelledby="mobile-menu-button"
        >
          <div className={`mx-4 py-6 space-y-3 backdrop-blur-xl rounded-2xl border shadow-2xl nav-mobile ${
            isDarkMode
              ? 'bg-gray-800/95 border-gray-600/30'
              : 'bg-white/95 border-white/30'
          }`}>
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMobileMenu}
                role="menuitem"
                className={`nav-item flex items-center space-x-4 px-6 py-4 mx-3 rounded-xl text-lg font-medium transition-all duration-300 hover-lift focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                  isActive(item.path)
                    ? 'text-orange-600 bg-orange-50 shadow-lg dark:bg-orange-900/40 dark:text-orange-400 border-l-4 border-orange-500'
                    : isDarkMode
                      ? 'text-gray-200 hover:text-orange-400 hover:bg-orange-900/20 active:bg-orange-900/30'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100'
                } ${isOpen ? 'animate-slideInFromLeft' : ''}`}
                style={{
                  animationDelay: isOpen ? `${index * 0.1}s` : '0s',
                  animationFillMode: 'both'
                }}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                <span className={`text-2xl transition-transform duration-300 ${
                  isOpen ? 'animate-fadeInScale' : ''
                }`} style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>
                {isActive(item.path) && (
                  <span className="text-orange-500 animate-pulse">●</span>
                )}
                <span className={`text-orange-400 transition-transform duration-300 ${
                  isActive(item.path) ? 'translate-x-0' : 'translate-x-2 opacity-0'
                }`}>
                  →
                </span>
              </Link>
            ))}
            <div className="mx-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="flex justify-center mb-4">
                <DarkModeToggle />
              </div>
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
    </>
  );
}

export default memo(Navigation);