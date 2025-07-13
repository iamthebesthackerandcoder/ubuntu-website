import React, { useState, useEffect } from 'react';

function BenefitsSection() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Stagger card animations
    const timer = setTimeout(() => {
      setVisibleCards(prev => [...prev, 0]);
    }, 200);
    
    for (let i = 1; i < 6; i++) {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, i]);
      }, 200 + (i * 150));
    }

    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: "💰",
      title: "Completely Free",
      description: "No licensing fees, no subscriptions, no hidden costs. Ubuntu is 100% free forever.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: "🔒",
      title: "Privacy & Security",
      description: "No tracking, no telemetry, no backdoors. Your data stays yours.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: "⚡",
      title: "Lightning Fast Performance",
      description: "Boots faster, runs smoother, and breathes new life into old hardware.",
      image: "https://images.unsplash.com/photo-1692049065982-fc40fa2d4403",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: "🛠️",
      title: "Developer Paradise",
      description: "Native Linux terminal, package managers, and development tools out of the box.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      color: "from-purple-400 to-violet-600"
    },
    {
      icon: "🎨",
      title: "Infinite Customization",
      description: "Make your desktop truly yours. Change everything from themes to window managers.",
      image: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc",
      color: "from-pink-400 to-rose-600"
    },
    {
      icon: "🧹",
      title: "No Bloatware",
      description: "Clean, focused experience. No Cortana, no forced updates, no unwanted software.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
      color: "from-indigo-400 to-blue-600"
    }
  ];

  return (
    <div className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-animated opacity-30 dark:opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-slideInFromBottom">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Why Switch to <span className="text-gradient-animated">Ubuntu</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stop paying for the privilege of being tracked, restricted, and controlled.
            Ubuntu puts you back in <span className="font-bold text-orange-600 dark:text-orange-400 animate-pulse">charge</span> of your computer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`card card-feature card-interactive p-8 group hover-lift hover-glow ${visibleCards.includes(index) ? 'animate-bounceIn' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 animate-pulse`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-float`}>
                  {benefit.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{benefit.description}</p>

              <div className="h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 border-gradient-animated">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection; 