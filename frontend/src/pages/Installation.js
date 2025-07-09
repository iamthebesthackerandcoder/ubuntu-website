import React from 'react';
import { Link } from 'react-router-dom';

function Installation() {
  const steps = [
    {
      number: 1,
      title: "Download Ubuntu",
      description: "Get the latest Ubuntu LTS (Long Term Support) version for stability and 5 years of updates.",
      image: "https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d",
      action: "Download ISO file (~3GB)",
      tip: "Choose LTS version for maximum stability"
    },
    {
      number: 2,
      title: "Create Installation Media",
      description: "Use a USB drive (8GB+) to create a bootable Ubuntu installer.",
      image: "https://images.pexels.com/photos/4409969/pexels-photo-4409969.jpeg",
      action: "Use Rufus (Windows) or Etcher (Mac/Linux)",
      tip: "Backup any important data on the USB drive first"
    },
    {
      number: 3,
      title: "Boot from USB",
      description: "Restart your computer and boot from the USB drive to start the Ubuntu installer.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      action: "Press F12/F2/Del during startup to access boot menu",
      tip: "You can try Ubuntu live without installing first"
    },
    {
      number: 4,
      title: "Install Ubuntu",
      description: "Follow the guided installer to set up Ubuntu on your computer.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      action: "Choose installation type and create user account",
      tip: "Dual boot option keeps your existing OS safe"
    }
  ];

  const installationOptions = [
    {
      title: "Replace Existing OS",
      description: "Complete switch to Ubuntu",
      pros: ["Maximum performance", "Full disk space", "Clean start"],
      cons: ["Removes current OS", "Need backup"],
      recommended: "For dedicated Ubuntu users"
    },
    {
      title: "Dual Boot",
      description: "Keep both operating systems",
      pros: ["Try Ubuntu safely", "Keep current OS", "Best of both worlds"],
      cons: ["Requires disk space", "Slightly complex"],
      recommended: "For beginners (RECOMMENDED)"
    },
    {
      title: "Virtual Machine",
      description: "Run Ubuntu inside current OS",
      pros: ["Zero risk", "Easy to try", "No rebooting"],
      cons: ["Slower performance", "Uses more RAM"],
      recommended: "For testing only"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Install Ubuntu in 4 Easy Steps
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Ready to make the switch? Installing Ubuntu is easier than you think.
            Follow our step-by-step guide and you'll be up and running in 30 minutes.
          </p>
          <Link
            to="/try"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            Try Ubuntu First
          </Link>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Installation Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to install Ubuntu on your computer.
              The entire process takes about 30 minutes.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-lg">{step.description}</p>
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="font-semibold text-orange-600 mb-2">Action Required:</div>
                      <div className="text-gray-800">{step.action}</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="font-semibold text-blue-600 mb-2">💡 Pro Tip:</div>
                      <div className="text-blue-800">{step.tip}</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Options */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Installation Method
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pick the installation method that's right for your situation and comfort level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {installationOptions.map((option, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-2 ${
                index === 1 ? 'border-orange-300 bg-orange-50' : 'border-gray-200'
              }`}>
                {index === 1 && (
                  <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 text-center">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600 mb-2">✅ Pros:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {option.pros.map((pro, proIndex) => (
                      <li key={proIndex}>• {pro}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-red-600 mb-2">⚠️ Cons:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {option.cons.map((con, conIndex) => (
                      <li key={conIndex}>• {con}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="font-semibold text-gray-800 text-sm">Best for:</div>
                  <div className="text-gray-700 text-sm">{option.recommended}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Requirements */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              System Requirements
            </h2>
            <p className="text-xl text-gray-600">
              Ubuntu runs great on most computers. Check if your system is compatible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ Minimum Requirements</h3>
              <div className="space-y-3 text-gray-700">
                <div><strong>Processor:</strong> 2 GHz dual core</div>
                <div><strong>Memory:</strong> 4 GB RAM</div>
                <div><strong>Storage:</strong> 25 GB free space</div>
                <div><strong>Graphics:</strong> 1024x768 resolution</div>
                <div><strong>Internet:</strong> Required for updates</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🚀 Recommended</h3>
              <div className="space-y-3 text-gray-700">
                <div><strong>Processor:</strong> 2.4 GHz quad core</div>
                <div><strong>Memory:</strong> 8 GB RAM or more</div>
                <div><strong>Storage:</strong> 50 GB+ free space</div>
                <div><strong>Graphics:</strong> Dedicated graphics card</div>
                <div><strong>USB:</strong> 8 GB+ for installation</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h3 className="text-lg font-bold text-orange-800 mb-2">💡 Good News!</h3>
            <p className="text-orange-700">
              Ubuntu often runs better than Windows on the same hardware. Many users report 
              improved performance, especially on older computers!
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Install Ubuntu?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Download Ubuntu now and follow our step-by-step guide. 
            Join millions of users who've made the switch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ubuntu.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              Download Ubuntu
            </a>
            <Link
              to="/try"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Try Before Installing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Installation;