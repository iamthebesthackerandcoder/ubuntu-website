import React, { useState } from 'react';

function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  return (
    <div className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Your <span className="text-gradient">Concerns</span>, Addressed
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
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
  );
}

export default FAQSection; 