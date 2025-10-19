import { useState } from 'react'

const STORY_CATEGORIES = {
  mythology: 'Ancient Mythology',
  empires: 'Great Empires & Dynasties',
  freedom: 'Freedom Movement',
  reform: 'Social Reform Movement'
}

const STORIES = [
  // Mythology Section
  {
    id: 'mahabharata',
    title: 'The Mahabharata',
    category: 'mythology',
    description: 'The great epic of the Kurukshetra War, a tale of dharma, duty, and the eternal struggle between righteousness and ambition.',
    status: 'available',
    theme: 'from-amber-600 to-yellow-700',
    icon: '⚔️'
  },
  {
    id: 'ramayana',
    title: 'The Ramayana',
    category: 'mythology',
    description: 'The timeless journey of Lord Rama, an epic of devotion, honor, and the triumph of good over evil.',
    status: 'available',
    theme: 'from-blue-600 to-cyan-700',
    icon: '🏹'
  },
  {
    id: 'puranas',
    title: 'The Puranas',
    category: 'mythology',
    description: 'Ancient tales of gods, demons, and cosmic creation—stories that shaped Hindu mythology and philosophy.',
    status: 'available',
    theme: 'from-purple-600 to-pink-700',
    icon: '🕉️'
  },
  
  // Empires & Dynasties Section
  {
    id: 'maurya-empire',
    title: 'The Maurya Empire',
    category: 'empires',
    description: 'Converse with Chandragupta Maurya, Chanakya, and Ashoka—architects of India\'s first great empire and the spread of Buddhism.',
    status: 'available',
    theme: 'from-yellow-600 to-orange-700',
    icon: '👑'
  },
  {
    id: 'gupta-empire',
    title: 'The Golden Age of Guptas',
    category: 'empires',
    description: 'Meet the scholars and rulers of India\'s Golden Age—Chandragupta II, Kalidasa, Aryabhata, and the flourishing of art and science.',
    status: 'available',
    theme: 'from-amber-500 to-yellow-600',
    icon: '✨'
  },
  {
    id: 'chola-empire',
    title: 'The Chola Dynasty',
    category: 'empires',
    description: 'Explore the maritime glory with Raja Raja Chola, Rajendra Chola, and the magnificent temples and naval expeditions of South India.',
    status: 'available',
    theme: 'from-red-600 to-orange-600',
    icon: '🏛️'
  },
  {
    id: 'maratha-empire',
    title: 'The Maratha Empire',
    category: 'empires',
    description: 'Walk alongside Shivaji Maharaj, Peshwas, and the brave warriors who established Hindavi Swarajya and unified the Deccan.',
    status: 'available',
    theme: 'from-orange-600 to-red-700',
    icon: '🗡️'
  },
  {
    id: 'ahom-kingdom',
    title: 'The Ahom Kingdom',
    category: 'empires',
    description: 'Meet the warriors who ruled Assam for 600 years, defeated Mughal invasions 17 times, and built one of India\'s most resilient kingdoms.',
    status: 'available',
    theme: 'from-amber-600 to-orange-700',
    icon: '⚔️'
  },
  {
    id: 'vijayanagara-empire',
    title: 'Vijayanagara Empire',
    category: 'empires',
    description: 'Meet Krishnadevaraya and the kings who built the last great Hindu empire, defending South India with valor and prosperity.',
    status: 'available',
    theme: 'from-purple-600 to-indigo-700',
    icon: '🏰'
  },
  
  // Freedom Movement Section
  {
    id: 'indian-rebellion-1857',
    title: '1857 Rebellion',
    category: 'freedom',
    description: 'Converse with Mangal Pandey, Rani Lakshmibai, Tatya Tope, and heroes who sparked India\'s first war of independence.',
    status: 'available',
    theme: 'from-red-700 to-orange-700',
    icon: '🔥'
  },
  {
    id: 'freedom-fighters',
    title: 'Freedom Fighters',
    category: 'freedom',
    description: 'Meet Mahatma Gandhi, Gopal Krishna Gokhale, Annie Besant, Khan Abdul Ghaffar Khan, Sardar Patel, and the brave souls who fought for Swaraj.',
    status: 'available',
    theme: 'from-orange-600 to-amber-600',
    icon: '🕊️'
  },
  {
    id: 'revolutionaries',
    title: 'Revolutionary Heroes',
    category: 'freedom',
    description: 'Engage with Chandrasekhar Azad, Bhagat Singh, Rajguru, Sukhdev, and the young revolutionaries who chose martyrdom over surrender.',
    status: 'available',
    theme: 'from-red-600 to-rose-700',
    icon: '⚡'
  },
  {
    id: 'women-freedom-fighters',
    title: 'Women Freedom Fighters',
    category: 'freedom',
    description: 'Talk to Pritilata Waddedar, Sarojini Naidu, Kasturba Gandhi, Aruna Asaf Ali, Matangini Hazra, and the fearless women who led from the front.',
    status: 'available',
    theme: 'from-pink-600 to-rose-700',
    icon: '💪'
  },
  {
    id: 'indian-national-army',
    title: 'Indian National Army',
    category: 'freedom',
    description: 'Join Netaji Subhas Chandra Bose and the INA soldiers who challenged British might with "Jai Hind" on their lips.',
    status: 'available',
    theme: 'from-blue-700 to-indigo-800',
    icon: '🎖️'
  },
  {
    id: 'social-reformers',
    title: 'Social Reformers',
    category: 'reform',
    description: 'Converse with Raja Ram Mohan Roy, Swami Vivekananda, Dr. Ambedkar, Jyotirao and Savitribai Phule, and visionaries who transformed Indian society.',
    status: 'available',
    theme: 'from-teal-600 to-cyan-700',
    icon: '📚'
  }
]

const StorySelectionScreen = ({ onSelectStory, onBack }) => {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [selectedStoryName, setSelectedStoryName] = useState('')

  const handleStoryClick = (story) => {
    if (story.status === 'available') {
      onSelectStory(story)
    } else {
      setSelectedStoryName(story.title)
      setShowComingSoon(true)
    }
  }

  const closeComingSoonModal = () => {
    setShowComingSoon(false)
    setSelectedStoryName('')
  }

  // Group stories by category
  const groupedStories = STORIES.reduce((acc, story) => {
    if (!acc[story.category]) {
      acc[story.category] = []
    }
    acc[story.category].push(story)
    return acc
  }, {})

  return (
    <div className="min-h-screen py-12 px-4 pb-32 fade-in bg-pattern bg-animated relative">
      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-epic text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500 mb-6 slide-up" style={{animationDelay: '0.1s'}}>
            Journey Through Indian Heritage
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed slide-up" style={{animationDelay: '0.2s'}}>
            Explore stories from ancient mythology, great empires and dynasties, and the brave freedom fighters 
            who shaped the history and culture of India.
          </p>
          <p className="text-lg text-amber-400 max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
            Each era holds timeless wisdom, valor, and sacrifice. Select a story to converse with its legendary figures.
          </p>
        </div>

        {/* Render stories grouped by category */}
        {Object.entries(groupedStories).map(([category, stories]) => (
          <div key={category} className="mb-12">
            {/* Category Header */}
            <div className="mb-6">
              <h2 className="font-epic text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                {STORY_CATEGORIES[category]}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent rounded"></div>
            </div>

            {/* Story Grid for this category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  className={`character-card glass rounded-lg p-6 cursor-pointer slide-up relative overflow-hidden
                    ${story.status === 'coming-soon' ? 'opacity-90' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleStoryClick(story)}
                >
                  {/* Available Badge */}
                  {story.status === 'available' && (
                    <div className="absolute top-3 right-3 bg-green-500/20 border border-green-500 text-green-400 text-xs px-3 py-1 rounded-full font-semibold">
                      Available Now
                    </div>
                  )}

                  {/* Coming Soon Badge */}
                  {story.status === 'coming-soon' && (
                    <div className="absolute top-3 right-3 bg-gray-500/20 border border-gray-500 text-gray-400 text-xs px-3 py-1 rounded-full font-semibold">
                      Coming Soon
                    </div>
                  )}

                  {/* Icon */}
                  <div className="text-6xl mb-4 text-center">{story.icon}</div>

                  {/* Title */}
                  <h3 className={`font-epic text-2xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r ${story.theme}`}>
                    {story.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {story.description}
                  </p>

                  {/* Call to Action */}
                  <div className="mt-4 text-center">
                    {story.status === 'available' ? (
                      <span className="text-amber-400 text-sm font-semibold">
                        Click to explore →
                      </span>
                    ) : (
                      <span className="text-gray-500 text-sm">
                        Stay tuned...
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={onBack}
            className="glass px-8 py-3 rounded-lg text-gray-300 hover:text-amber-400 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 fade-in px-4">
          <div className="glass rounded-lg p-8 max-w-md w-full slide-up">
            <div className="text-center">
              <div className="text-6xl mb-4">🚧</div>
              <h2 className="font-epic text-3xl font-bold text-amber-400 mb-4">
                Coming Soon!
              </h2>
              <p className="text-gray-300 mb-2 text-lg">
                <span className="text-amber-300 font-semibold">{selectedStoryName}</span>
              </p>
              <p className="text-gray-400 mb-6">
                We're working on bringing this epic to life. Characters from {selectedStoryName} will be available soon. 
                Stay tuned for updates!
              </p>
              <button
                onClick={closeComingSoonModal}
                className="btn-primary px-8 py-3 rounded-lg font-semibold text-gray-900 w-full"
              >
                Explore Available Stories
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StorySelectionScreen
