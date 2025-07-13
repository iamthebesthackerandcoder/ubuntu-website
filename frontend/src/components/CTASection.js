import React from 'react';
import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <div className="py-32 hero-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-red-600/90 to-purple-600/90"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to <span className="text-yellow-300">Reclaim</span> Your Computer?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Download Ubuntu today and experience what computing feels like when 
            <span className="font-bold text-yellow-300"> you're in control</span>.
            It's free, it's fast, and it's waiting for you.
          </p>
        </div>
        
        <div className="animate-fadeInUp delay-200 flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <a
            href="https://ubuntu.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-lg px-10 py-4 bg-white text-orange-600 hover:bg-orange-50 group shadow-2xl"
          >
            <span className="flex items-center space-x-3">
              <span>Download Ubuntu Now</span>
              <span className="group-hover:scale-110 transition-transform">🚀</span>
            </span>
          </a>
          <Link
            to="/try"
            className="btn btn-secondary text-lg px-10 py-4 group"
          >
            <span className="flex items-center space-x-3">
              <span>Try Ubuntu Online</span>
              <span className="group-hover:scale-110 transition-transform">✨</span>
            </span>
          </Link>
        </div>
        
        <div className="animate-fadeInUp delay-300">
          <p className="text-white/70 text-lg">
            <span className="inline-flex items-center space-x-2">
              <span>🔒</span>
              <span>No credit card required</span>
            </span>
            <span className="mx-4">•</span>
            <span className="inline-flex items-center space-x-2">
              <span>🆓</span>
              <span>No strings attached</span>
            </span>
            <span className="mx-4">•</span>
            <span className="inline-flex items-center space-x-2">
              <span>✨</span>
              <span>Just freedom</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CTASection; 