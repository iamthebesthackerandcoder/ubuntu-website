import React from 'react';

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 border-t border-orange-400/20 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <p className="text-gray-400 text-lg">
            Made with <span className="text-red-400 animate-pulse">❤️</span> for the open source community
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Ubuntu is a trademark of Canonical Ltd. This site is not affiliated with Canonical.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer; 