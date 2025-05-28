import React from 'react';
import { Link } from 'react-router-dom';

function WhyUbuntu() {
  const reasons = [
    {
      title: "Complete Freedom",
      description: "Ubuntu is free software - free to download, use, and modify forever.",
      icon: "🆓",
      details: [
        "No licensing fees or subscriptions",
        "Source code is open and transparent",
        "Freedom to modify and redistribute",
        "No vendor lock-in or restrictions"
      ]
    },
    {
      title: "Superior Security",
      description: "Built with security as a core principle from the ground up.",
      icon: "🔒",
      details: [
        "No viruses or malware by design",
        "Regular security updates",
        "Minimal attack surface",
        "Built-in firewall and encryption"
      ]
    },
    {
      title: "Respect for Privacy",
      description: "Your data stays yours - no tracking, no telemetry, no backdoors.",
      icon: "🛡️",
      details: [
        "No data collection by default",
        "Transparent about what data is used",
        "You control your privacy settings",
        "No advertising or user profiling"
      ]
    },
    {
      title: "Outstanding Performance",
      description: "Ubuntu runs faster and uses fewer resources than Windows or Mac.",
      icon: "⚡",
      details: [
        "Faster boot times",
        "Lower memory usage",
        "Extends laptop battery life",
        "Revives old hardware"
      ]
    },
    {
      title: "Rock-Solid Stability",
      description: "Ubuntu servers power the internet - that reliability comes to desktop too.",
      icon: "🏔️",
      details: [
        "Rarely needs rebooting",
        "No forced updates or restarts",
        "Consistent performance over time",
        "Handles heavy workloads gracefully"
      ]
    },
    {
      title: "Developer-First Design",
      description: "Built by developers for developers with the best tools included.",
      icon: "👨‍💻",
      details: [
        "Full development environment out of box",
        "Native package management",
        "Excellent terminal and command line",
        "Supports all major programming languages"
      ]
    }
  ];

  const comparisons = [
    {
      category: "Cost",
      ubuntu: {
        title: "Always Free",
        description: "Ubuntu will never cost money, no matter how many computers you install it on",
        color: "text-green-600"
      },
      others: {
        title: "Expensive",
        description: "Windows costs $139+, Mac requires $1000+ hardware investment",
        color: "text-red-600"
      }
    },
    {
      category: "Updates",
      ubuntu: {
        title: "You Decide When",
        description: "Install updates when convenient for you, never forced or automatic",
        color: "text-green-600"
      },
      others: {
        title: "Forced Updates",
        description: "Windows/Mac decide when to update, often disrupting your work",
        color: "text-red-600"
      }
    },
    {
      category: "Software Installation",
      ubuntu: {
        title: "App Store + Terminal",
        description: "Install anything with one click or one command, all vetted for security",
        color: "text-green-600"
      },
      others: {
        title: "Hunt for Installers",
        description: "Download random .exe/.dmg files from the internet, risk malware",
        color: "text-red-600"
      }
    },
    {
      category: "Customization",
      ubuntu: {
        title: "Change Everything",
        description: "Modify any aspect of your desktop, from themes to window managers",
        color: "text-green-600"
      },
      others: {
        title: "Limited Options",
        description: "Stuck with what Apple/Microsoft decide looks good",
        color: "text-red-600"
      }
    }
  ];

  const myths = [
    {
      myth: "Linux is only for tech experts",
      reality: "Modern Ubuntu is as easy to use as Windows or Mac",
      explanation: "Ubuntu has a user-friendly interface, graphical applications for everything, and most tasks require no command line knowledge."
    },
    {
      myth: "You can't run popular software",
      reality: "Most software works on Ubuntu or has excellent alternatives",
      explanation: "Web browsers, office suites, media players, and development tools all work great. For Windows software, use Wine or virtual machines."
    },
    {
      myth: "Gaming doesn't work on Linux",
      reality: "Gaming on Linux has exploded in recent years",
      explanation: "Steam Proton runs most Windows games, and many titles have native Linux support. Check ProtonDB for compatibility."
    },
    {
      myth: "Hardware support is poor",
      reality: "Ubuntu often has better hardware support than Windows",
      explanation: "Most devices work out of the box without hunting for drivers. WiFi, printers, and webcams typically just work."
    },
    {
      myth: "It's difficult to get help",
      reality: "Ubuntu has one of the largest support communities",
      explanation: "Forums, Stack Overflow, Reddit, Discord, and local user groups provide fast, friendly help."
    },
    {
      myth: "Companies don't use Linux",
      reality: "Most major companies run Linux in production",
      explanation: "Google, Amazon, Netflix, and virtually every tech company rely on Linux. It powers the internet."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose Ubuntu?
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Beyond being free, Ubuntu offers fundamental advantages that make it
            superior to Windows and Mac for most users.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
            <div className="text-3xl mb-2">🌟</div>
            <div className="text-lg font-semibold">It's not just free</div>
            <div className="text-orange-200">It's better</div>
          </div>
        </div>
      </div>

      {/* Core Reasons */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              6 Fundamental Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just nice-to-haves - they're core differences that affect
              your daily computing experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4 text-center">{reason.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{reason.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Direct Comparisons */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ubuntu vs. The Rest
            </h2>
            <p className="text-xl text-gray-600">
              Side-by-side comparison of what really matters
            </p>
          </div>

          <div className="space-y-8">
            {comparisons.map((comparison, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4">
                  <h3 className="text-xl font-bold text-center">{comparison.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 border-r border-gray-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        U
                      </div>
                      <h4 className={`text-lg font-bold ${comparison.ubuntu.color}`}>
                        Ubuntu: {comparison.ubuntu.title}
                      </h4>
                    </div>
                    <p className="text-gray-700">{comparison.ubuntu.description}</p>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        ⚠
                      </div>
                      <h4 className={`text-lg font-bold ${comparison.others.color}`}>
                        Others: {comparison.others.title}
                      </h4>
                    </div>
                    <p className="text-gray-700">{comparison.others.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Myth Busting */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Busting Ubuntu Myths
            </h2>
            <p className="text-xl text-gray-600">
              Let's address the outdated misconceptions that might be holding you back
            </p>
          </div>

          <div className="space-y-8">
            {myths.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 border-b border-red-200 p-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">❌</span>
                    <h3 className="text-lg font-bold text-red-800">Myth: {item.myth}</h3>
                  </div>
                </div>
                <div className="bg-green-50 border-b border-green-200 p-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✅</span>
                    <h3 className="text-lg font-bold text-green-800">Reality: {item.reality}</h3>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{item.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ubuntu Powers the World
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Some of the world's biggest organizations trust Ubuntu for their most critical systems
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
              <p className="text-blue-100">Netflix, Spotify, and Dropbox serve millions using Ubuntu servers</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Space & Research</h3>
              <p className="text-blue-100">NASA and CERN use Ubuntu for space missions and particle physics</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-blue-100">Banks, governments, and Fortune 500 companies rely on Ubuntu</p>
            </div>
          </div>

          <p className="text-xl text-blue-100">
            If Ubuntu is trusted to run the internet, space missions, and global finance,
            it's probably reliable enough for your computer too! 😉
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            More Than Just Software
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ubuntu represents a philosophy that technology should empower everyone,
            not just those who can afford expensive licenses.
          </p>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-8">
            <blockquote className="text-2xl font-bold mb-4">
              "Ubuntu is an ancient African word meaning 'humanity to others'.
              It also means 'I am what I am because of who we all are'."
            </blockquote>
            <cite className="text-orange-200">— Ubuntu Philosophy</cite>
          </div>

          <p className="text-xl text-gray-300 mt-8 max-w-2xl mx-auto">
            When you choose Ubuntu, you're not just getting better software —
            you're supporting a vision of technology that puts people first.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Better Computing?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            You've seen the advantages. You understand the philosophy.
            Now experience Ubuntu for yourself — it's completely free and risk-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ubuntu.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              Download Ubuntu Free
            </a>
            <Link
              to="/try"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Try Ubuntu Online First
            </Link>
          </div>
          <p className="text-orange-200 mt-6">
            Join 55+ million users who've already made the switch
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUbuntu;