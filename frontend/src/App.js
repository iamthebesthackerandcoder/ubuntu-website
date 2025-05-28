import React, { useState } from 'react';
import './App.css';

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: "💰",
      title: "Completely Free",
      description: "No licensing fees, no subscriptions, no hidden costs. Ubuntu is 100% free forever.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      icon: "🔒",
      title: "Privacy & Security",
      description: "No tracking, no telemetry, no backdoors. Your data stays yours.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
    },
    {
      icon: "⚡",
      title: "Lightning Fast Performance",
      description: "Boots faster, runs smoother, and breathes new life into old hardware.",
      image: "https://images.unsplash.com/photo-1692049065982-fc40fa2d4403"
    },
    {
      icon: "🛠️",
      title: "Developer Paradise",
      description: "Native Linux terminal, package managers, and development tools out of the box.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      icon: "🎨",
      title: "Infinite Customization",
      description: "Make your desktop truly yours. Change everything from themes to window managers.",
      image: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc"
    },
    {
      icon: "🧹",
      title: "No Bloatware",
      description: "Clean, focused experience. No Cortana, no forced updates, no unwanted software.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07"
    }
  ];

  const comparisons = [
    {
      feature: "Cost",
      ubuntu: "Free forever",
      mac: "$1,000+ hardware required",
      windows: "$139+ license fee"
    },
    {
      feature: "Privacy",
      ubuntu: "No tracking or telemetry",
      mac: "Some data collection",
      windows: "Extensive telemetry"
    },
    {
      feature: "Customization",
      ubuntu: "Unlimited customization",
      mac: "Limited options",
      windows: "Some customization"
    },
    {
      feature: "Performance",
      ubuntu: "Lightweight & fast",
      mac: "Good on new hardware",
      windows: "Resource heavy"
    },
    {
      feature: "Security",
      ubuntu: "Excellent built-in security",
      mac: "Good security",
      windows: "Requires antivirus"
    },
    {
      feature: "Updates",
      ubuntu: "You control when",
      mac: "Apple decides",
      windows: "Microsoft decides"
    }
  ];

  const faqs = [
    {
      question: "Will my favorite software work on Ubuntu?",
      answer: "Most popular software has Linux versions or excellent alternatives. For Windows software, you can use Wine or virtual machines. Web browsers, office suites, media players, and development tools work great on Ubuntu."
    },
    {
      question: "Is Ubuntu difficult to learn?",
      answer: "Modern Ubuntu is as easy as Windows or Mac. It has a user-friendly interface, app store, and most tasks can be done with clicks, not commands. If you can use a smartphone, you can use Ubuntu."
    },
    {
      question: "What about gaming?",
      answer: "Gaming on Linux has exploded! Steam Proton runs most Windows games, and major titles increasingly support Linux natively. Check ProtonDB to see if your games are supported."
    },
    {
      question: "Can I switch back if I don't like it?",
      answer: "Absolutely! You can dual-boot (keep both systems) or try Ubuntu in a virtual machine first. There's no lock-in – your freedom to choose is always preserved."
    },
    {
      question: "What about hardware support?",
      answer: "Ubuntu supports most hardware out of the box, often better than Windows. Printers, webcams, and WiFi typically work without hunting for drivers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1634715841611-67741dc71459')` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Pay for an OS When You Can Have
              <span className="text-orange-200 block mt-2">Ubuntu for Free?</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join millions who've ditched expensive, restrictive operating systems for something better.
              Ubuntu: Free, fast, secure, and completely yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg">
                Download Ubuntu Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
                See the Comparison
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Switch Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Switch to Ubuntu?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop paying for the privilege of being tracked, restricted, and controlled.
              Ubuntu puts you back in charge of your computer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-orange-100">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{benefit.description}</p>
                <div className="h-32 rounded-lg overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Ubuntu vs. The Competition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Ubuntu stacks up against Mac and Windows across the things that matter most.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold">Ubuntu</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold">macOS</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold">Windows</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">{row.ubuntu}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.mac}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.windows}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Concerns, Addressed
            </h2>
            <p className="text-xl text-gray-600">
              We get it. Switching operating systems feels like a big decision. Let's clear up the common worries.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-orange-500">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Reclaim Your Computer?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Download Ubuntu today and experience what computing feels like when you're in control.
            It's free, it's fast, and it's waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg">
              Download Ubuntu Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Try Ubuntu Online
            </button>
          </div>
          <p className="text-orange-200 mt-6 text-sm">
            No credit card required. No strings attached. Just freedom.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Made with ❤️ for the open source community. Ubuntu is a trademark of Canonical Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;