import React from 'react';

function ComparisonSection() {
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

  return (
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
  );
}

export default ComparisonSection; 