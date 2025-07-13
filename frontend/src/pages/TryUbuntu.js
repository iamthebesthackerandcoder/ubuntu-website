import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TryUbuntu() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openApps, setOpenApps] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [terminalCommands, setTerminalCommands] = useState([
    { command: 'welcome@ubuntu:~$ ', output: '' },
    { command: '', output: '🎉 Welcome to Ubuntu 24.04 LTS!' },
    { command: '', output: '✨ The world\'s most popular free operating system' },
    { command: '', output: '💡 Type "help" to see available commands.' },
    { command: 'welcome@ubuntu:~$ ', output: '' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Auto-dismiss welcome after 5 seconds
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const openApp = (appId) => {
    if (!openApps.includes(appId)) {
      setOpenApps([...openApps, appId]);
    }
  };

  const closeApp = (appId) => {
    setOpenApps(openApps.filter(app => app !== appId));
  };

  const applications = [
    { id: 'files', name: 'Files', icon: '📁', gradient: 'from-blue-500 to-blue-600' },
    { id: 'firefox', name: 'Firefox', icon: '🌐', gradient: 'from-orange-500 to-red-500' },
    { id: 'terminal', name: 'Terminal', icon: '⌨️', gradient: 'from-gray-700 to-gray-900' },
    { id: 'libreoffice', name: 'LibreOffice', icon: '📄', gradient: 'from-blue-600 to-indigo-600' },
    { id: 'calculator', name: 'Calculator', icon: '🧮', gradient: 'from-green-500 to-emerald-600' },
    { id: 'settings', name: 'Settings', icon: '⚙️', gradient: 'from-gray-600 to-gray-700' },
    { id: 'store', name: 'Software', icon: '📦', gradient: 'from-orange-600 to-red-600' },
    { id: 'music', name: 'Music', icon: '🎵', gradient: 'from-purple-500 to-pink-600' }
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500">
      {/* Beautiful Ubuntu Wallpaper Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1692890846581-da1a95435f34')` }}
      ></div>
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Desktop */}
      <div className="relative h-full flex flex-col">
        
        {/* Enhanced Top Bar */}
        <div className="glass-strong text-white px-6 py-3 flex justify-between items-center border-b border-white/20 backdrop-blur-xl">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <div>
                <div className="text-orange-300 font-bold text-lg">Ubuntu 24.04 LTS</div>
                <div className="text-xs text-white/70">Try Ubuntu Online Demo</div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-white/80">
              <div className="hover:text-white cursor-pointer transition-colors">🔊</div>
              <div className="hover:text-white cursor-pointer transition-colors">📶</div>
              <div className="hover:text-white cursor-pointer transition-colors">🔋</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg">{formatTime(currentTime)}</div>
              <div className="text-xs text-white/70">{formatDate(currentTime)}</div>
            </div>
          </div>
        </div>

        {/* Desktop Content */}
        <div className="flex-1 relative">
          
          {/* Enhanced Desktop Icons */}
          <div className="absolute top-6 left-6 space-y-6">
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-3xl mb-3 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                🗑️
              </div>
              <div className="text-white text-sm font-semibold drop-shadow-lg">Trash</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-3xl mb-3 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                🏠
              </div>
              <div className="text-white text-sm font-semibold drop-shadow-lg">Home</div>
            </div>
          </div>

          {/* Enhanced Welcome Message */}
          {showWelcome && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-scaleIn">
              <div className="glass-strong rounded-3xl p-10 shadow-2xl max-w-lg text-center border border-white/30">
                <div className="text-8xl mb-6 animate-float">🎉</div>
                <h2 className="text-3xl font-black text-white mb-6 drop-shadow-lg">Welcome to Ubuntu!</h2>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Experience the world's most popular free operating system. 
                  Click on apps in the dock below to explore!
                </p>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">🖱️</span>
                    <span>Click apps in the dock to open them</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">⌨️</span>
                    <span>Try the terminal for command line experience</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">📁</span>
                    <span>Explore the file manager</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowWelcome(false)}
                  className="mt-6 btn btn-primary text-sm"
                >
                  Start Exploring
                </button>
              </div>
            </div>
          )}

          {/* Enhanced Open Applications */}
          {openApps.includes('files') && (
            <div className="absolute top-24 left-24 w-[480px] h-[360px] glass-strong rounded-2xl shadow-2xl border border-white/20 overflow-hidden animate-scaleIn">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 flex justify-between items-center text-white">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📁</span>
                  <span className="font-bold text-lg">Files</span>
                </div>
                <button 
                  onClick={() => closeApp('files')}
                  className="text-white/80 hover:text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-xl transition-all"
                >×</button>
              </div>
              <div className="p-6 bg-white/95">
                <div className="space-y-3">
                  {[
                    { icon: '📁', name: 'Documents', items: '24 items' },
                    { icon: '📁', name: 'Downloads', items: '12 items' },
                    { icon: '📁', name: 'Pictures', items: '156 items' },
                    { icon: '🎵', name: 'Music', items: '89 items' },
                    { icon: '🎬', name: 'Videos', items: '34 items' }
                  ].map((folder, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 hover:bg-blue-50 rounded-xl cursor-pointer transition-colors group">
                      <span className="text-3xl group-hover:scale-110 transition-transform">{folder.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{folder.name}</div>
                        <div className="text-sm text-gray-500">{folder.items}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {openApps.includes('terminal') && (
            <div className="absolute top-36 left-36 w-[480px] h-[320px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden animate-scaleIn">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex justify-between items-center border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⌨️</span>
                  <span className="font-bold text-white text-lg">Terminal</span>
                </div>
                <button 
                  onClick={() => closeApp('terminal')}
                  className="text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-xl transition-all"
                >×</button>
              </div>
              <div className="p-6 text-green-400 font-mono text-sm bg-gray-900">
                <div className="space-y-2">
                  {terminalCommands.map((line, index) => (
                    <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                      <span className="text-blue-400">{line.command}</span>
                      <span className="text-green-400">{line.output}</span>
                    </div>
                  ))}
                  <div className="flex animate-fadeInUp" style={{ animationDelay: '1s' }}>
                    <span className="text-blue-400">welcome@ubuntu:~$ </span>
                    <span className="bg-green-400 w-3 h-6 ml-2 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {openApps.includes('firefox') && (
            <div className="absolute top-28 left-48 w-[480px] h-[360px] glass-strong rounded-2xl shadow-2xl border border-white/20 overflow-hidden animate-scaleIn">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 flex justify-between items-center text-white">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌐</span>
                  <span className="font-bold text-lg">Firefox</span>
                </div>
                <button 
                  onClick={() => closeApp('firefox')}
                  className="text-white/80 hover:text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-xl transition-all"
                >×</button>
              </div>
              <div className="p-6 bg-white/95">
                <div className="bg-gray-100 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span>🔒</span>
                    <span className="text-sm font-mono">https://ubuntu.com</span>
                  </div>
                </div>
                <div className="text-center py-8">
                  <div className="text-6xl mb-6 animate-float">🌐</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Firefox on Ubuntu</h3>
                  <p className="text-gray-600">Browse the web with privacy and security</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Dock */}
        <div className="glass-strong px-6 py-4 border-t border-white/20">
          <div className="flex justify-center space-x-3">
            {applications.map((app) => (
              <button
                key={app.id}
                onClick={() => openApp(app.id)}
                className={`relative w-14 h-14 bg-gradient-to-br ${app.gradient} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group ${
                  openApps.includes(app.id) ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' : ''
                }`}
                title={app.name}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{app.icon}</span>
                {openApps.includes(app.id) && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Exit Demo Button */}
      <div className="absolute top-6 right-6">
        <Link
          to="/"
          className="btn btn-secondary backdrop-blur-xl border border-white/30 text-white hover:bg-white/20 group"
        >
          <span className="flex items-center space-x-2">
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>Back to Main Site</span>
          </span>
        </Link>
      </div>

      {/* Enhanced Demo Info */}
      <div className="absolute bottom-6 right-6 glass-strong rounded-2xl p-6 max-w-xs border border-white/20">
        <h4 className="font-bold mb-3 text-white text-lg flex items-center space-x-2">
          <span>🖥️</span>
          <span>Ubuntu Desktop Demo</span>
        </h4>
        <p className="text-white/80 text-sm leading-relaxed">
          This is a realistic simulation of the Ubuntu desktop environment. 
          Click on the dock icons to explore different applications and get a feel for Ubuntu!
        </p>
        <div className="mt-4 flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-300 text-xs font-medium">Live Demo Active</span>
        </div>
      </div>
    </div>
  );
}

export default TryUbuntu;