import React from 'react';

function Community() {
  const communityStats = [
    { number: '55M+', label: 'Ubuntu Users Worldwide', icon: '👥' },
    { number: '2,000+', label: 'Contributors', icon: '👨‍💻' },
    { number: '500+', label: 'Local Communities', icon: '🌍' },
    { number: '20+', label: 'Years of Development', icon: '📅' }
  ];

  const supportChannels = [
    {
      title: 'Ubuntu Forums',
      description: 'Get help from experienced users and developers',
      icon: '💬',
      link: 'https://ubuntuforums.org',
      users: '2M+ members',
      responseTime: '< 2 hours average'
    },
    {
      title: 'Ask Ubuntu',
      description: 'Stack Overflow for Ubuntu questions',
      icon: '❓',
      link: 'https://askubuntu.com',
      users: '500K+ questions',
      responseTime: '< 1 hour average'
    },
    {
      title: 'Reddit r/Ubuntu',
      description: 'Casual discussions and quick help',
      icon: '🤖',
      link: 'https://reddit.com/r/ubuntu',
      users: '400K+ subscribers',
      responseTime: '< 30 minutes'
    },
    {
      title: 'Ubuntu Discord',
      description: 'Real-time chat with the community',
      icon: '🎯',
      link: 'https://discord.gg/ubuntu',
      users: '50K+ members',
      responseTime: 'Instant'
    },
    {
      title: 'Launchpad',
      description: 'Official bug reports and development',
      icon: '🚀',
      link: 'https://launchpad.net/ubuntu',
      users: 'Official platform',
      responseTime: 'Developer response'
    },
    {
      title: 'Local Groups',
      description: 'Meet Ubuntu users in your city',
      icon: '📍',
      link: 'https://loco.ubuntu.com',
      users: '500+ groups',
      responseTime: 'In-person meetups'
    }
  ];

  const contributionWays = [
    {
      title: 'Report Bugs',
      description: 'Help improve Ubuntu by reporting issues you find',
      icon: '🐛',
      difficulty: 'Beginner',
      commitment: '5 minutes'
    },
    {
      title: 'Translate',
      description: 'Help translate Ubuntu into your language',
      icon: '🌐',
      difficulty: 'Beginner',
      commitment: '30 minutes'
    },
    {
      title: 'Write Documentation',
      description: 'Improve guides and help documentation',
      icon: '📚',
      difficulty: 'Intermediate',
      commitment: '1-2 hours'
    },
    {
      title: 'Test Software',
      description: 'Test new features and provide feedback',
      icon: '🧪',
      difficulty: 'Intermediate',
      commitment: '2-4 hours'
    },
    {
      title: 'Code Contributions',
      description: 'Submit code improvements and new features',
      icon: '💻',
      difficulty: 'Advanced',
      commitment: '5+ hours'
    },
    {
      title: 'Community Support',
      description: 'Help other users in forums and chat',
      icon: '🤝',
      difficulty: 'Beginner',
      commitment: '30 minutes'
    }
  ];

  const events = [
    {
      title: 'Ubuntu Summit',
      description: 'Annual gathering of Ubuntu community',
      date: 'November 2024',
      location: 'Global Virtual Event',
      image: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c'
    },
    {
      title: 'Local Meetups',
      description: 'Monthly meetups in major cities',
      date: 'Every month',
      location: 'Worldwide',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1'
    },
    {
      title: 'Release Parties',
      description: 'Celebrate new Ubuntu releases',
      date: 'Every 6 months',
      location: '500+ cities',
      image: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join the Ubuntu Community
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Connect with millions of Ubuntu users worldwide. Get help, share knowledge,
            and be part of the open source revolution.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
            <div className="text-3xl mb-2">🌍</div>
            <div className="text-lg font-semibold">One of the largest</div>
            <div className="text-orange-200">Open source communities in the world</div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ubuntu by the Numbers
            </h2>
            <p className="text-xl text-gray-600">
              You're joining a massive, active, and helpful community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Help When You Need It
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stuck on something? The Ubuntu community has multiple channels
              to get you the help you need, fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{channel.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{channel.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Community:</span>
                    <span className="font-medium text-green-600">{channel.users}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Response time:</span>
                    <span className="font-medium text-blue-600">{channel.responseTime}</span>
                  </div>
                </div>

                <a
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-colors"
                >
                  Visit {channel.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contribution Ways */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Give Back to the Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ubuntu is made by people like you. Here's how you can contribute,
              regardless of your technical skill level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributionWays.map((way, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{way.icon}</div>
                  <div className="text-right">
                    <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                      way.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      way.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {way.difficulty}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{way.title}</h3>
                <p className="text-gray-600 mb-4">{way.description}</p>
                
                <div className="bg-white rounded-lg p-3">
                  <div className="text-sm text-gray-500 font-medium">Time commitment:</div>
                  <div className="text-orange-600 font-semibold">{way.commitment}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://ubuntu.com/community/contribute"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-700 transition-colors shadow-lg"
            >
              Start Contributing Today
            </a>
          </div>
        </div>
      </div>

      {/* Community Events */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Events
            </h2>
            <p className="text-xl text-gray-600">
              Meet fellow Ubuntu users in person and online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${event.image}')` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ubuntu Philosophy: "I am because we are"
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Humanity</h3>
              <p className="text-purple-100">
                Showing humanity to others and treating them with dignity
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-purple-100">
                Working together for the benefit of everyone
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-purple-100">
                Constantly improving and advancing technology for all
              </p>
            </div>
          </div>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            These values drive our community and everything we do. 
            When you join Ubuntu, you're not just getting an operating system - 
            you're joining a movement for better, more inclusive technology.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join the Ubuntu Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download Ubuntu today and become part of a global community
            that believes technology should be free, accessible, and empowering for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ubuntu.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-700 transition-colors shadow-lg"
            >
              Download Ubuntu
            </a>
            <a
              href="https://ubuntuforums.org"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors"
            >
              Join the Forums
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;