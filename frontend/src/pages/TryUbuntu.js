import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TryUbuntu() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openApps, setOpenApps] = useState(['files']);
  const [terminalCommands, setTerminalCommands] = useState([
    { command: 'welcome@ubuntu:~$ ', output: '' },
    { command: '', output: 'Welcome to Ubuntu 24.04 LTS!' },
    { command: '', output: 'Type "help" to see available commands.' },
    { command: 'welcome@ubuntu:~$ ', output: '' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
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
    { id: 'files', name: 'Files', icon: '📁', color: 'bg-blue-500' },
    { id: 'firefox', name: 'Firefox', icon: '🌐', color: 'bg-orange-500' },
    { id: 'terminal', name: 'Terminal', icon: '⌨️', color: 'bg-gray-800' },
    { id: 'libreoffice', name: 'LibreOffice', icon: '📄', color: 'bg-blue-600' },
    { id: 'calculator', name: 'Calculator', icon: '🧮', color: 'bg-gray-600' },
    { id: 'settings', name: 'Settings', icon: '⚙️', color: 'bg-gray-700' },
    { id: 'store', name: 'Software', icon: '📦', color: 'bg-orange-600' },
    { id: 'music', name: 'Music', icon: '🎵', color: 'bg-purple-600' }
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
    <div className="h-screen bg-cover bg-center relative overflow-hidden"
         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1692890846581-da1a95435f34')` }}>
      
      {/* Desktop */}
      <div className="h-full flex flex-col">
        
        {/* Top Bar */}
        <div className="bg-gray-900 bg-opacity-90 text-white px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-orange-400 font-bold">Ubuntu</div>
            <div className="text-sm text-gray-300">Try Ubuntu Online Demo</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <span>🔊</span>
              <span>📶</span>
              <span>🔋</span>
            </div>
            <div className="text-sm">
              <div className="font-medium">{formatTime(currentTime)}</div>
              <div className="text-xs text-gray-300">{formatDate(currentTime)}</div>
            </div>
          </div>
        </div>

        {/* Desktop Content */}
        <div className="flex-1 relative">
          
          {/* Desktop Icons */}
          <div className="absolute top-4 left-4 space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-2xl mb-2 hover:bg-opacity-20 cursor-pointer transition-all">
                🗑️
              </div>
              <div className="text-white text-sm font-medium text-shadow">Trash</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-2xl mb-2 hover:bg-opacity-20 cursor-pointer transition-all">
                🏠
              </div>
              <div className="text-white text-sm font-medium text-shadow">Home</div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white bg-opacity-95 rounded-xl p-8 shadow-2xl max-w-md text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Ubuntu!</h2>
              <p className="text-gray-600 mb-6">
                This is a demo of the Ubuntu desktop. Click on apps in the dock below to explore!
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>🖱️ Click apps in the dock to open them</p>
                <p>⌨️ Try the terminal for command line experience</p>
                <p>📁 Explore the file manager</p>
              </div>
            </div>
          </div>

          {/* Open Applications */}
          {openApps.includes('files') && (
            <div className="absolute top-20 left-20 w-96 h-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">📁</span>
                  <span className="font-medium">Files</span>
                </div>
                <button 
                  onClick={() => closeApp('files')}
                  className="text-gray-500 hover:text-red-500 text-xl"
                >×</button>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <span className="text-2xl">📁</span>
                    <span>Documents</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <span className="text-2xl">📁</span>
                    <span>Downloads</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <span className="text-2xl">📁</span>
                    <span>Pictures</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <span className="text-2xl">🎵</span>
                    <span>Music</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <span className="text-2xl">🎬</span>
                    <span>Videos</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {openApps.includes('terminal') && (
            <div className="absolute top-32 left-32 w-96 h-64 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex justify-between items-center border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">⌨️</span>
                  <span className="font-medium text-white">Terminal</span>
                </div>
                <button 
                  onClick={() => closeApp('terminal')}
                  className="text-gray-400 hover:text-red-400 text-xl"
                >×</button>
              </div>
              <div className="p-4 text-green-400 font-mono text-sm">
                <div className="space-y-1">
                  {terminalCommands.map((line, index) => (
                    <div key={index}>
                      <span className="text-blue-400">{line.command}</span>
                      <span className="text-green-400">{line.output}</span>
                    </div>
                  ))}
                  <div className="flex">
                    <span className="text-blue-400">welcome@ubuntu:~$ </span>
                    <span className="bg-green-400 w-2 h-5 ml-1 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {openApps.includes('firefox') && (
            <div className="absolute top-24 left-40 w-96 h-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 flex justify-between items-center border-b">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">🌐</span>
                  <span className="font-medium">Firefox</span>
                </div>
                <button 
                  onClick={() => closeApp('firefox')}
                  className="text-gray-500 hover:text-red-500 text-xl"
                >×</button>
              </div>
              <div className="p-4">
                <div className="bg-gray-100 rounded p-2 mb-4">
                  <div className="text-sm text-gray-600">🔒 https://ubuntu.com</div>
                </div>
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-xl font-bold mb-2">Firefox on Ubuntu</h3>
                  <p className="text-gray-600 text-sm">Browse the web with privacy and security</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Dock */}
        <div className="bg-gray-900 bg-opacity-90 px-4 py-3">
          <div className="flex justify-center space-x-2">
            {applications.map((app) => (
              <button
                key={app.id}
                onClick={() => openApp(app.id)}
                className={`w-12 h-12 ${app.color} rounded-lg flex items-center justify-center text-white text-xl hover:scale-110 transition-transform ${
                  openApps.includes(app.id) ? 'ring-2 ring-orange-400' : ''
                }`}
                title={app.name}
              >
                {app.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Exit Demo Button */}
      <div className="absolute top-4 right-4">
        <Link
          to="/"
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
        >
          ← Back to Main Site
        </Link>
      </div>

      {/* Demo Info */}
      <div className="absolute bottom-20 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg max-w-xs">
        <h4 className="font-bold mb-2">🖥️ Ubuntu Desktop Demo</h4>
        <p className="text-sm text-gray-300">
          This is a simulation of the Ubuntu desktop environment. Click on the dock icons to explore different applications!
        </p>
      </div>
    </div>
  );
}

export default TryUbuntu;