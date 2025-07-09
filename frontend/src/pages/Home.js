import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [openFaq, setOpenFaq] = useState(null);
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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  const comparisons = [
    {
      feature: "Cost",
      ubuntu: { text: "Free forever", color: "text-green-600", icon: "✅" },
      mac: { text: "$1,000+ hardware required", color: "text-red-500", icon: "❌" },
      windows: { text: "$139+ license fee", color: "text-red-500", icon: "❌" }
    },
    {
      feature: "Privacy",
      ubuntu: { text: "No tracking or telemetry", color: "text-green-600", icon: "✅" },
      mac: { text: "Some data collection", color: "text-yellow-500", icon: "⚠️" },
      windows: { text: "Extensive telemetry", color: "text-red-500", icon: "❌" }
    },
    {
      feature: "Customization",
      ubuntu: { text: "Unlimited customization", color: "text-green-600", icon: "✅" },
      mac: { text: "Limited options", color: "text-red-500", icon: "❌" },
      windows: { text: "Some customization", color: "text-yellow-500", icon: "⚠️" }
    },
    {
      feature: "Performance",
      ubuntu: { text: "Lightweight & fast", color: "text-green-600", icon: "✅" },
      mac: { text: "Good on new hardware", color: "text-yellow-500", icon: "⚠️" },
      windows: { text: "Resource heavy", color: "text-red-500", icon: "❌" }
    },
    {
      feature: "Security",
      ubuntu: { text: "Excellent built-in security", color: "text-green-600", icon: "✅" },
      mac: { text: "Good security", color: "text-yellow-500", icon: "⚠️" },
      windows: { text: "Requires antivirus", color: "text-red-500", icon: "❌" }
    },
    {
      feature: "Updates",
      ubuntu: { text: "You control when", color: "text-green-600", icon: "✅" },
      mac: { text: "Apple decides", color: "text-red-500", icon: "❌" },
      windows: { text: "Microsoft decides", color: "text-red-500", icon: "❌" }
    }
  ];

  const faqs = [
    {
      question: "Will my favorite software work on Ubuntu?",
      answer: "Most popular software has Linux versions or excellent alternatives. For Windows software, you can use Wine or virtual machines. Web browsers, office suites, media players, and development tools work great on Ubuntu.",
      icon: "🖥️"
    },
    {
      question: "Is Ubuntu difficult to learn?",
      answer: "Modern Ubuntu is as easy as Windows or Mac. It has a user-friendly interface, app store, and most tasks can be done with clicks, not commands. If you can use a smartphone, you can use Ubuntu.",
      icon: "📚"
    },
    {
      question: "What about gaming?",
      answer: "Gaming on Linux has exploded! Steam Proton runs most Windows games, and major titles increasingly support Linux natively. Check ProtonDB to see if your games are supported.",
      icon: "🎮"
    },
    {
      question: "Can I switch back if I don't like it?",
      answer: "Absolutely! You can dual-boot (keep both systems) or try Ubuntu in a virtual machine first. There's no lock-in – your freedom to choose is always preserved.",
      icon: "🔄"
    },
    {
      question: "What about hardware support?",
      answer: "Ubuntu supports most hardware out of the box, often better than Windows. Printers, webcams, and WiFi typically work without hunting for drivers.",
      icon: "🔧"
    }
  ];

  const stats = [
    { number: "55M+", label: "Active Users", icon: "👥" },
    { number: "200+", label: "Countries", icon: "🌍" },
    { number: "20+", label: "Years Stable", icon: "⏰" },
    { number: "100%", label: "Free Forever", icon: "💎" }
  ];

  return (
    <div className="pt-0 min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden hero-bg min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-600/20 to-purple-600/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1634715841611-67741dc71459')` }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none">
                Why Pay for an OS
                <span className="block bg-gradient-to-r from-orange-200 via-yellow-200 to-red-200 bg-clip-text text-transparent animate-glow">
                  When Ubuntu is Free?
                </span>
              </h1>
            </div>
            
            <div className="animate-fadeInUp delay-200">
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join 55+ million users who've ditched expensive, restrictive operating systems 
                for something <span className="font-bold text-yellow-300">better</span>.
              </p>
            </div>

            {/* Stats Row */}
            <div className="animate-fadeInUp delay-300 mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-strong rounded-2xl p-4 text-center animate-scaleIn" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-fadeInUp delay-400 flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://ubuntu.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-10 py-4 group"
              >
                <span className="flex items-center space-x-3">
                  <span>Download Ubuntu Free</span>
                  <span className="group-hover:scale-110 transition-transform">⬇️</span>
                </span>
              </a>
              <Link
                to="/try"
                className="btn btn-secondary text-lg px-10 py-4 group"
              >
                <span className="flex items-center space-x-3">
                  <span>Try Ubuntu Online</span>
                  <span className="group-hover:scale-110 transition-transform">🖥️</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Benefits Section */}
      <div className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Why Switch to <span className="text-gradient">Ubuntu</span>?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stop paying for the privilege of being tracked, restricted, and controlled.
              Ubuntu puts you back in <span className="font-bold text-orange-600">charge</span> of your computer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`card card-feature p-8 group ${
                  visibleCards.includes(index) ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                
                <div className="h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Comparison Section */}
      <div className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Ubuntu vs. <span className="text-gradient">The Competition</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              See how Ubuntu stacks up against Mac and Windows across the things that matter most.
            </p>
          </div>

          <div className="modern-table animate-fadeInUp delay-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-bold">Feature</th>
                    <th className="px-8 py-6 text-center text-lg font-bold">Ubuntu</th>
                    <th className="px-8 py-6 text-center text-lg font-bold">macOS</th>
                    <th className="px-8 py-6 text-center text-lg font-bold">Windows</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className="group">
                      <td className="px-8 py-6 font-bold text-gray-900 text-lg">{row.feature}</td>
                      <td className="px-8 py-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-xl">{row.ubuntu.icon}</span>
                          <span className={`font-semibold ${row.ubuntu.color}`}>{row.ubuntu.text}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-xl">{row.mac.icon}</span>
                          <span className={`font-medium ${row.mac.color}`}>{row.mac.text}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-xl">{row.windows.icon}</span>
                          <span className={`font-medium ${row.windows.color}`}>{row.windows.text}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced FAQ Section */}
      <div className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Your <span className="text-gradient">Concerns</span>, Addressed
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              We get it. Switching operating systems feels like a big decision. 
              Let's clear up the common worries.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="faq-item animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="faq-button w-full px-8 py-6 text-left flex justify-between items-center group"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{faq.icon}</div>
                    <span className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`text-3xl text-orange-500 transform transition-transform duration-300 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 py-6 border-t bg-gradient-to-r from-orange-50 to-red-50">
                    <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
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

      {/* Enhanced Footer */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
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
    </div>
  );
}

export default Home;