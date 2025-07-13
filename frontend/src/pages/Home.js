import React, { useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '../components/Tooltip';
import ProgressIndicator from '../components/ProgressIndicator';
import Modal from '../components/Modal';
import LoadingSpinner from '../components/LoadingSpinner';
const BenefitsSection = React.lazy(() => import('../components/BenefitsSection'));
const ComparisonSection = React.lazy(() => import('../components/ComparisonSection'));
const FAQSection = React.lazy(() => import('../components/FAQSection'));
const CTASection = React.lazy(() => import('../components/CTASection'));
const Footer = React.lazy(() => import('../components/Footer'));

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowModal(true);
    setIsLoading(true);
    setDownloadProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          setTimeout(() => {
            setShowModal(false);
            // Open actual download link
            window.open('https://ubuntu.com/download', '_blank');
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const stats = [
    {
      number: "55M+",
      label: "Active Users",
      icon: "👥",
      tooltip: "Ubuntu has over 55 million active users worldwide, making it the most popular Linux distribution",
      progress: 85
    },
    {
      number: "200+",
      label: "Countries",
      icon: "🌍",
      tooltip: "Ubuntu is used in over 200 countries and territories around the globe",
      progress: 95
    },
    {
      number: "20+",
      label: "Years Stable",
      icon: "⏰",
      tooltip: "Ubuntu has been providing stable, reliable computing for over 20 years",
      progress: 100
    },
    {
      number: "100%",
      label: "Free Forever",
      icon: "💎",
      tooltip: "Ubuntu will always be free - no licensing fees, no subscriptions, no hidden costs",
      progress: 100
    }
  ];

  return (
    <main id="main-content" className="pt-0 min-h-screen dark:bg-gray-900" role="main">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-mesh min-h-screen flex items-center dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-600/20 to-purple-600/20 dark:from-orange-500/10 dark:via-red-600/10 dark:to-purple-600/10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1634715841611-67741dc71459')` }}
        ></div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-3xl opacity-20 animate-float animate-morphing"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20 animate-float animate-morphing" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '6s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="animate-bounceIn">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none">
                Why Pay for an OS
                <span className="block text-gradient-animated animate-pulse">
                  When Ubuntu is Free?
                </span>
              </h1>
            </div>

            <div className="animate-slideInFromBottom delay-200">
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join 55+ million users who've ditched expensive, restrictive operating systems
                for something <span className="font-bold text-yellow-300 animate-pulse">better</span>.
              </p>
            </div>

            {/* Enhanced Interactive Stats Row */}
            <div className="animate-slideInFromLeft delay-300 mb-12">
              <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <Tooltip key={index} content={stat.tooltip} position="top">
                    <div className="card-glass rounded-2xl p-3 md:p-4 text-center animate-bounceIn hover-lift hover-glow cursor-pointer" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                      <div className="text-xl md:text-2xl mb-2 animate-pulse">{stat.icon}</div>
                      <div className="text-lg md:text-2xl font-bold text-white text-gradient-animated">{stat.number}</div>
                      <div className="text-xs md:text-sm text-white/80 mb-2">{stat.label}</div>
                      <div className="mt-2">
                        <ProgressIndicator
                          value={stat.progress}
                          size="sm"
                          showValue={false}
                          animated={true}
                        />
                      </div>
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
            
            <div className="animate-slideInFromRight delay-400 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <Tooltip content="Start your free Ubuntu download - no registration required!" position="top">
                <button
                  onClick={handleDownloadClick}
                  className="btn btn-gradient text-base md:text-lg px-6 md:px-10 py-3 md:py-4 group hover-lift"
                >
                  <span className="flex items-center space-x-2 md:space-x-3">
                    <span>Download Ubuntu Free</span>
                    <span className="group-hover:scale-110 group-hover:rotate-12 transition-transform">⬇️</span>
                  </span>
                </button>
              </Tooltip>
              <Tooltip content="Experience Ubuntu in your browser without installing anything" position="top">
                <Link
                  to="/try"
                  className="btn btn-secondary text-base md:text-lg px-6 md:px-10 py-3 md:py-4 group hover-glow"
                >
                  <span className="flex items-center space-x-2 md:space-x-3">
                    <span>Try Ubuntu Online</span>
                    <span className="group-hover:scale-110 group-hover:rotate-12 transition-transform">🖥️</span>
                  </span>
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <BenefitsSection />
      </Suspense>

      {/* Section Divider */}
      <div className="my-16 w-full flex justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 rounded-full opacity-30"></div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ComparisonSection />
      </Suspense>

      {/* Section Divider */}
      <div className="my-16 w-full flex justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-orange-400 to-red-400 rounded-full opacity-30"></div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <FAQSection />
      </Suspense>

      {/* Section Divider */}
      <div className="my-16 w-full flex justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-red-400 via-purple-400 to-orange-400 rounded-full opacity-30"></div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>

      {/* Download Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Preparing Your Ubuntu Download"
        size="md"
        closeOnOverlayClick={false}
      >
        <div className="text-center py-6">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-4xl text-white">🐧</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {isLoading ? 'Preparing Download...' : 'Ready to Download!'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {isLoading
                ? 'We\'re getting everything ready for your Ubuntu experience'
                : 'Your download will start automatically'
              }
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-4">
              <ProgressIndicator
                value={downloadProgress}
                max={100}
                size="md"
                animated={true}
                showValue={true}
              />
              <LoadingSpinner
                variant="dots"
                color="orange"
                text="Optimizing download..."
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-green-600 dark:text-green-400 text-6xl animate-bounceIn">✅</div>
              <p className="text-green-600 dark:text-green-400 font-semibold">
                Download starting in your browser...
              </p>
            </div>
          )}
        </div>
      </Modal>

      {/* Live region for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {isLoading && 'Download preparation in progress'}
        {downloadProgress === 100 && 'Download ready'}
      </div>
    </main>
  );
}

export default Home;