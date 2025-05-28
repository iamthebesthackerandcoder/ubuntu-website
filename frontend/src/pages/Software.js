import React, { useState } from 'react';

function Software() {
  const [activeCategory, setActiveCategory] = useState('productivity');

  const categories = [
    { id: 'productivity', name: 'Productivity', icon: '📊' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'media', name: 'Media & Graphics', icon: '🎨' },
    { id: 'games', name: 'Gaming', icon: '🎮' },
    { id: 'internet', name: 'Internet', icon: '🌐' },
    { id: 'system', name: 'System Tools', icon: '⚙️' }
  ];

  const software = {
    productivity: [
      {
        name: 'LibreOffice',
        description: 'Complete office suite - Word, Excel, PowerPoint alternative',
        icon: '📄',
        free: true,
        preInstalled: true,
        windowsEquivalent: 'Microsoft Office'
      },
      {
        name: 'Thunderbird',
        description: 'Powerful email client with calendar and contacts',
        icon: '📧',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Outlook'
      },
      {
        name: 'Calendar',
        description: 'Built-in calendar app with Google Calendar sync',
        icon: '📅',
        free: true,
        preInstalled: true,
        windowsEquivalent: 'Windows Calendar'
      },
      {
        name: 'OnlyOffice',
        description: 'Microsoft Office compatible suite',
        icon: '📋',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Microsoft Office'
      }
    ],
    development: [
      {
        name: 'Visual Studio Code',
        description: 'Popular code editor with extensions',
        icon: '💻',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'VS Code'
      },
      {
        name: 'Git',
        description: 'Version control system',
        icon: '📊',
        free: true,
        preInstalled: true,
        windowsEquivalent: 'Git for Windows'
      },
      {
        name: 'Terminal',
        description: 'Powerful command line interface',
        icon: '⌨️',
        free: true,
        preInstalled: true,
        windowsEquivalent: 'Command Prompt'
      },
      {
        name: 'Docker',
        description: 'Containerization platform',
        icon: '🐳',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Docker Desktop'
      }
    ],
    media: [
      {
        name: 'GIMP',
        description: 'Professional image editor',
        icon: '🎨',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Photoshop'
      },
      {
        name: 'VLC Media Player',
        description: 'Plays any video or audio format',
        icon: '🎬',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'VLC'
      },
      {
        name: 'Audacity',
        description: 'Audio recording and editing',
        icon: '🎵',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Audacity'
      },
      {
        name: 'Inkscape',
        description: 'Vector graphics editor',
        icon: '✏️',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Illustrator'
      }
    ],
    games: [
      {
        name: 'Steam',
        description: 'Gaming platform with thousands of Linux games',
        icon: '🎮',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Steam'
      },
      {
        name: 'Lutris',
        description: 'Gaming client for managing all games',
        icon: '🕹️',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Various launchers'
      },
      {
        name: 'Wine',
        description: 'Run Windows games on Linux',
        icon: '🍷',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Native Windows'
      },
      {
        name: 'Minecraft',
        description: 'Native Linux version available',
        icon: '⛏️',
        free: false,
        preInstalled: false,
        windowsEquivalent: 'Minecraft'
      }
    ],
    internet: [
      {
        name: 'Firefox',
        description: 'Privacy-focused web browser',
        icon: '🦊',
        free: true,
        preInstalled: true,
        windowsEquivalent: 'Chrome/Edge'
      },
      {
        name: 'Chrome',
        description: 'Google\'s web browser',
        icon: '🌐',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Chrome'
      },
      {
        name: 'Telegram',
        description: 'Secure messaging app',
        icon: '💬',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Telegram'
      },
      {
        name: 'Discord',
        description: 'Gaming and community chat',
        icon: '🎯',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Discord'
      }
    ],
    system: [
      {
        name: 'Software Center',
        description: 'Easy app installation like an app store',
        icon: '📦',
        free: true,
        preInstalled: true,
        windowsEquivalent: 'Microsoft Store'
      },
      {
        name: 'Timeshift',
        description: 'System backup and restore',
        icon: '⏰',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'System Restore'
      },
      {
        name: 'GParted',
        description: 'Disk partitioning tool',
        icon: '💾',
        free: true,
        preInstalled: false,
        windowsEquivalent: 'Disk Management'
      },
      {
        name: 'System Monitor',
        description: 'Task manager and system info',
        icon: '📊',
        free: true,
        preInstalled: true,
        windowsEquivalent: 'Task Manager'
      }
    ]
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ubuntu Software Ecosystem
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Discover thousands of free, open-source applications that rival or exceed
            their paid Windows and Mac counterparts.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
            <div className="text-3xl mb-2">📦</div>
            <div className="text-lg font-semibold">75,000+ Applications</div>
            <div className="text-orange-200">Available in Ubuntu Software Center</div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 py-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Software Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {categories.find(cat => cat.id === activeCategory)?.name} Software
            </h2>
            <p className="text-xl text-gray-600">
              Professional applications that compete with the best commercial software
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {software[activeCategory]?.map((app, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{app.icon}</div>
                  <div className="flex space-x-2">
                    {app.free && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        FREE
                      </span>
                    )}
                    {app.preInstalled && (
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                        PRE-INSTALLED
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{app.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{app.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 font-medium mb-1">Windows/Mac equivalent:</div>
                  <div className="text-sm text-gray-700">{app.windowsEquivalent}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Software Installation */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Install Software on Ubuntu
            </h2>
            <p className="text-xl text-gray-600">
              Installing software on Ubuntu is easier than Windows or Mac
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                📦
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Software Center</h3>
              <p className="text-gray-600">
                Browse and install apps with one click, just like a smartphone app store.
                No hunting for installers or worrying about malware.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                ⌨️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Terminal (Power Users)</h3>
              <p className="text-gray-600">
                Install anything with simple commands like "sudo apt install firefox".
                Fast, efficient, and perfect for developers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                📁
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Package Files</h3>
              <p className="text-gray-600">
                Download .deb files and double-click to install, or use Snap/Flatpak
                for universal packages.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Security & Peace of Mind</h3>
              <p className="text-green-700 text-lg">
                All software in Ubuntu repositories is vetted for security and stability.
                No more worrying about downloading malware or fake installers!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gaming Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gaming on Ubuntu? Absolutely! 🎮
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Thanks to Steam Proton and improved driver support, thousands of Windows games
            now run perfectly on Ubuntu.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🎯 Native Linux Games</h3>
              <p className="text-gray-300">
                CS:GO, Dota 2, Cities: Skylines, Civilization VI, and thousands more
                have native Linux versions.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🍷 Windows Games via Proton</h3>
              <p className="text-gray-300">
                Steam Proton lets you play most Windows games seamlessly.
                Check ProtonDB for compatibility.
              </p>
            </div>
          </div>

          <a
            href="https://www.protondb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Check Game Compatibility
          </a>
        </div>
      </div>
    </div>
  );
}

export default Software;