import { useState, useEffect, useRef } from 'react'
import { sendMessageToGemini } from '../services/geminiService'
import { getCharacterTheme } from '../utils/characterThemes'
import { marked } from 'marked'

const ChatScreen = ({ character, onBack, story }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: character.greeting }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const theme = getCharacterTheme(character.name)

  // Epic information based on story
  const epicInfo = {
    mahabharata: {
      title: 'The Mahabharata',
      description: 'The Mahabharata is one of the greatest epics of ancient India, chronicling the legendary Kurukshetra War between the Pandavas and Kauravas. It is a tale of dharma, duty, honor, betrayal, and the complex nature of righteousness. Within its verses lie profound philosophical teachings, including the Bhagavad Gita, and the stories of heroes whose choices shaped the fate of kingdoms.'
    },
    ramayana: {
      title: 'The Ramayana',
      description: 'The Ramayana is an ancient Indian epic that narrates the life of Lord Rama, the seventh avatar of Vishnu. It tells of his exile, the abduction of his wife Sita by the demon king Ravana, and the subsequent war to rescue her. The epic embodies the ideals of dharma, devotion, courage, and the eternal triumph of good over evil. It remains one of the most beloved and influential texts in Hindu tradition.'
    },
    puranas: {
      title: 'The Puranas',
      description: 'The Puranas are ancient Sanskrit texts that form the foundation of Hindu mythology, cosmology, and philosophy. They chronicle the creation of the universe, the genealogies of gods and sages, the cosmic cycles of creation and destruction, and the legends of divine avatars. Through stories of the Trimurti (Brahma, Vishnu, Shiva), powerful goddesses, devoted sages, legendary devotees, and cosmic battles between gods and demons, the Puranas preserve the timeless wisdom and rich tapestry of Hindu tradition.'
    },
    'maurya-empire': {
      title: 'The Maurya Empire',
      description: 'The Maurya Empire (322-185 BCE) was the first empire to unify most of the Indian subcontinent under one rule. Founded by Chandragupta Maurya with the guidance of the brilliant strategist Chanakya, it reached its zenith under Emperor Ashoka the Great. The empire is renowned for its sophisticated administration, powerful military, extensive spy networks, and Ashoka\'s transformation from a fierce conqueror to a champion of Buddhism and dharma. The Mauryan legacy includes groundbreaking treatises on statecraft, magnificent architecture, and the spread of Buddhist philosophy across Asia.'
    },
    'gupta-empire': {
      title: 'The Gupta Empire',
      description: 'The Gupta Empire (320-550 CE) presided over India\'s Golden Age, a period of unprecedented achievements in science, mathematics, astronomy, literature, and arts. Under rulers like Chandragupta I, Samudragupta, and Chandragupta II Vikramaditya, the empire became a beacon of learning and culture. This era gave the world the concept of zero, accurate calculations of pi, the decimal system, great Sanskrit literature including Kalidasa\'s masterpieces, and advances in metallurgy, medicine, and philosophy. The Gupta period represents the pinnacle of classical Indian civilization.'
    },
    'chola-empire': {
      title: 'The Chola Empire',
      description: 'The Chola Empire (9th-13th centuries CE) was one of the longest-ruling dynasties in South Indian history and a dominant naval power in the Indian Ocean. Under great emperors like Raja Raja Chola I and Rajendra Chola I, the Cholas built magnificent temples including the UNESCO World Heritage Brihadeeswarar Temple, established efficient local governance through village assemblies, conquered lands from Sri Lanka to Southeast Asia, and patronized Tamil literature and arts. The Chola navy controlled trade routes across the Bay of Bengal, making it one of the wealthiest and most powerful empires of medieval Asia.'
    },
    'maratha-empire': {
      title: 'The Maratha Empire',
      description: 'The Maratha Empire (1674-1818 CE) rose from the vision of Chhatrapati Shivaji Maharaj to establish Hindavi Swarajya - self-rule free from oppression. Through guerrilla warfare tactics, fort-based defense systems, and brilliant military leadership, the Marathas challenged the mighty forces that sought to subjugate India. From Shivaji\'s righteous governance to Peshwa Baji Rao I\'s undefeated military record, from Tarabai\'s fierce resistance to Ahilyabai Holkar\'s compassionate administration, the Marathas demonstrated that courage, strategy, and dharma could overcome any tyranny. At their peak, the Marathas controlled most of the Indian subcontinent, representing indigenous resistance and self-governance.'
    },
    'ahom-kingdom': {
      title: 'The Ahom Kingdom',
      description: 'The Ahom Kingdom (1228-1826 CE) ruled Assam for 600 years - one of the longest-ruling dynasties in world history. Founded by Chaolung Sukapha who led his people across mountains to the Brahmaputra valley, the Ahoms created a unique synthesis of Tai and indigenous Assamese cultures. They are legendary for defeating 17 invasion attempts, with the Battle of Saraighat under Lachit Borphukan being one of the greatest military victories in Indian history. The Ahoms maintained a sophisticated administrative system, practiced religious tolerance, preserved their history through Buranjis (chronicles), and protected Assam\'s independence for six centuries against overwhelming odds.'
    },
    'vijayanagara-empire': {
      title: 'The Vijayanagara Empire',
      description: 'The Vijayanagara Empire (1336-1646 CE) was founded by Harihara and Bukka Raya under the guidance of sage Vidyaranya to protect dharma and resist invasions in South India. It reached its zenith under Krishnadevaraya, becoming one of the wealthiest empires in the world. The empire was renowned for its magnificent capital city (whose ruins are now a UNESCO World Heritage site), patronage of multiple languages and literary traditions, efficient administration through the Nayankara system, flourishing trade with Europe and Asia, and architectural marvels. Foreign visitors compared it favorably with contemporary European kingdoms, describing unprecedented prosperity, religious tolerance, and cultural sophistication.'
    },
    'indian-rebellion-1857': {
      title: '1857 Rebellion - The First War of Independence',
      description: 'The Indian Rebellion of 1857, also called the First War of Independence, was a major but ultimately unsuccessful uprising against British colonial rule. Sparked by Mangal Pandey\'s defiance and fueled by grievances over greased cartridges, land annexations through the Doctrine of Lapse, and decades of exploitation, the rebellion spread across North and Central India. Iconic leaders like Rani Lakshmibai of Jhansi, Nana Sahib, Tatya Tope, Begum Hazrat Mahal of Awadh, and 80-year-old Kunwar Singh led heroic resistances. Though brutally suppressed by the British, the rebellion shook the foundations of colonial rule, ended the East India Company\'s administration, and planted seeds of nationalist consciousness that would grow into India\'s freedom movement.'
    },
    'freedom-fighters': {
      title: 'Freedom Fighters - The Independence Movement',
      description: 'India\'s freedom struggle was a multi-generational movement combining diverse ideologies and methods. Mahatma Gandhi\'s non-violent Satyagraha mobilized millions through Salt March and Quit India Movement. Leaders like Jawaharlal Nehru, Sardar Patel, Maulana Azad, and C. Rajagopalachari combined mass politics with sophisticated political strategy. The Lal-Bal-Pal trio (Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal) advocated militant nationalism and Swadeshi. Subhas Chandra Bose challenged British militarily through the Indian National Army. Revolutionaries like Bhagat Singh inspired through martyrdom. This diverse movement finally achieved independence on August 15, 1947, after centuries of colonial rule.'
    },
    'revolutionaries': {
      title: 'Revolutionary Heroes - Armed Resistance',
      description: 'The revolutionary movement represented the armed resistance wing of India\'s freedom struggle. Young intellectuals turned to revolutionary violence when they felt non-violence moved too slowly. The Hindustan Socialist Republican Association (HSRA), led by Chandrasekhar Azad and Bhagat Singh, combined socialist ideology with action. Martyrs like Bhagat Singh, Rajguru, and Sukhdev (hanged March 23, 1931), Ram Prasad Bismil and Ashfaqulla Khan (Kakori Conspiracy), and Udham Singh (who avenged Jallianwala Bagh by assassinating Michael O\'Dwyer in London) inspired generations. Though their methods were controversial, their sacrifice, idealism, and vision of a free, socialist India captured the imagination of youth and contributed to building revolutionary consciousness.'
    },
    'women-freedom-fighters': {
      title: 'Women Freedom Fighters - Breaking Barriers',
      description: 'Women played crucial roles in India\'s freedom struggle, breaking social barriers and proving their courage and leadership. From warrior queens like Rani Lakshmibai who fought with sword in hand, to political leaders like Sarojini Naidu (first woman Congress President), Aruna Asaf Ali (who hoisted the flag during Quit India), and Kasturba Gandhi (who evolved from traditional wife to freedom fighter), women transformed Indian society. Captain Lakshmi Sahgal commanded the Rani of Jhansi Regiment in the INA. Bhikaji Cama unfurled India\'s flag in Germany. Women like Kamala Nehru, Vijaya Lakshmi Pandit, Usha Mehta, and countless others participated in satyagrahas, went to jail, organized movements, and proved that freedom struggle was not just men\'s domain but a national awakening that empowered Indian womanhood.'
    },
    'indian-national-army': {
      title: 'Indian National Army - Netaji\'s Azad Hind Fauj',
      description: 'The Indian National Army (INA), or Azad Hind Fauj, was Netaji Subhas Chandra Bose\'s revolutionary attempt to liberate India through armed struggle. Formed from Indian prisoners of war and expatriates in Southeast Asia, the INA included the historic Rani of Jhansi Regiment—the first all-women combat regiment in Asia commanded by Captain Lakshmi Sahgal. The INA marched on India with "Chalo Dilli!" (March to Delhi!) and "Tum mujhe khoon do, main tumhe azadi doonga!" (Give me blood, I shall give you freedom!). Though militarily unsuccessful, the INA\'s impact was profound—the Red Fort trials of Shah Nawaz Khan, Prem Sahgal, and Gurbaksh Singh Dhillon sparked mass protests that shook British confidence. The INA proved Indians could fight their colonizers as equals, inspiring the Royal Indian Navy mutiny of 1946 and hastening independence.'
    },
    'social-reformers': {
      title: 'Social Reformers - Architects of Modern India',
      description: 'India\'s social reform movement transformed society from within, challenging centuries of orthodoxy, caste discrimination, and gender oppression. Raja Ram Mohan Roy, the Father of Indian Renaissance, fought against Sati and founded Brahmo Samaj. Swami Dayanand Saraswati\'s Arya Samaj championed Vedic equality and gave the nationalist slogan "India for Indians." Ishwar Chandra Vidyasagar achieved widow remarriage rights. Jyotirao and Savitribai Phule opened India\'s first schools for girls and dalits, founding Satyashodhak Samaj to fight caste. Swami Vivekananda electrified the West at the 1893 Chicago Parliament and inspired nationalist youth with practical Vedanta. Dr. B.R. Ambedkar, architect of the Constitution, led the fight for dalit rights and converted to Buddhism. Periyar\'s rationalism challenged Brahminism in Tamil Nadu. Sree Narayana Guru proclaimed "One Caste, One Religion, One God." These visionaries proved that social reform was the foundation for political freedom—without dignity and equality within, no independence could be meaningful.'
    }
  }

  const currentEpic = epicInfo[story?.id] || epicInfo.mahabharata

  // Configure marked for inline rendering
  marked.setOptions({
    breaks: true,
    gfm: true
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const aiResponse = await sendMessageToGemini(character, messages, userMessage)
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }])
    } catch (error) {
      console.error('Error calling Gemini API:', error)
      
      // More detailed error message
      let errorMessage = 'Forgive me, but the divine connection falters. '
      if (error.message.includes('API key')) {
        errorMessage += 'The sacred key seems to be missing or invalid. Please check the .env file.'
      } else if (error.message.includes('400')) {
        errorMessage += 'The message format seems improper.'
      } else if (error.message.includes('429')) {
        errorMessage += 'Too many requests have been made. Please wait a moment.'
      } else if (error.message.includes('403')) {
        errorMessage += 'The API key may be invalid or restricted.'
      } else {
        errorMessage += `Error: ${error.message}`
      }
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: errorMessage
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div 
      className={`screen-enter relative ${theme.background.className || 'bg-pattern'}`}
      style={{
        background: `linear-gradient(135deg, #0a0908 0%, #1a1412 50%, #0a0908 100%)`,
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      {/* Character-themed background overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          background: theme.background.gradient,
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Decorative floating elements */}
      <div className="floating-particles opacity-30">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{ background: `radial-gradient(circle, ${theme.colors.primary}88, transparent)` }}
          ></div>
        ))}
      </div>
      
      {/* Left Panel - Context */}
      <div 
        className="glass border-r p-6 pb-24 overflow-y-auto z-10"
        style={{ 
          borderRightColor: `${theme.colors.primary}33`,
          position: 'fixed',
          left: 0,
          top: 0,
          width: '33.333333%',
          height: '100vh'
        }}
      >
        <div className="mb-6 relative">
          {/* Decorative corners */}
          <div 
            className="corner-ornament corner-ornament-tl"
            style={{ color: theme.colors.primary }}
          ></div>
          <div 
            className="corner-ornament corner-ornament-br"
            style={{ color: theme.colors.secondary }}
          ></div>
          
          <h2 className="font-epic text-3xl font-bold text-amber-400 mb-2">
            {currentEpic.title}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {currentEpic.description}
          </p>
        </div>
        
        <div 
          className="glass rounded-lg p-6 mb-6 relative overflow-hidden"
          style={{ 
            borderColor: `${theme.colors.primary}44`,
            boxShadow: `0 0 20px ${theme.colors.glow}`
          }}
        >
          <div 
            className="absolute top-0 right-0 text-6xl opacity-10"
            style={{ color: theme.colors.primary }}
          >
            {theme.icon}
          </div>
          <h3 
            className="font-epic text-2xl font-bold mb-2 relative z-10"
            style={{ color: theme.colors.primary }}
          >
            {character.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4 relative z-10">
            {character.title}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            You are now in conversation with {character.name}. Each response comes from 
            their unique perspective, shaped by their experiences, beliefs, and place in 
            the epic tale.
          </p>
        </div>
        
        <button 
          onClick={onBack}
          className="glass w-full px-6 py-3 rounded-lg text-gray-300 hover:text-amber-400 transition-colors"
        >
          ← Change Character
        </button>
      </div>
      
      {/* Right Panel - Chat Interface */}
      <div className="w-full md:w-2/3 bg-gradient-to-b from-gray-900/50 to-gray-900/80" style={{ position: 'fixed', right: 0, top: 0, width: '66.666667%', height: '100vh', overflow: 'hidden' }}>
        {/* Messages */}
        <div className="relative overflow-y-auto scrollbar-hidden" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '168px', padding: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Subtle character-themed watermark */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5 pointer-events-none"
            style={{ color: theme.colors.primary }}
          >
            {theme.icon}
          </div>
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`${message.role === 'user' ? 'ml-auto' : ''} 
                         max-w-[85%] rounded-lg p-4 message-appear`}
              style={{
                background: message.role === 'user' 
                  ? 'linear-gradient(135deg, rgba(188, 108, 37, 0.3), rgba(221, 161, 94, 0.2))'
                  : `linear-gradient(135deg, ${theme.colors.primary}15, ${theme.colors.secondary}10)`,
                borderLeft: `3px solid ${message.role === 'user' ? 'var(--color-gold)' : theme.colors.primary}`,
                animationDelay: `${index * 0.05}s`
              }}
            >
              <p 
                className="text-sm font-semibold mb-1"
                style={{ color: message.role === 'user' ? 'var(--color-gold)' : theme.colors.primary }}
              >
                {message.role === 'user' ? 'You' : character.name}
              </p>
              <div 
                className="text-gray-200 leading-relaxed prose prose-invert prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: marked.parse(message.content) }}
              />
            </div>
          ))}
          
          {isLoading && (
            <div className="message-ai max-w-[85%] rounded-lg slide-up">
              <p 
                className="text-sm font-semibold mb-1"
                style={{ color: theme.colors.primary }}
              >
                {character.name}
              </p>
              <div className="typing-indicator flex items-center gap-3">
                <span 
                  className="text-2xl"
                  style={{
                    animation: `${theme.typingIndicator} 2s ease-in-out infinite`,
                    color: theme.colors.primary
                  }}
                >
                  {theme.icon}
                </span>
                <div className="flex gap-1">
                  <div 
                    className="typing-dot"
                    style={{ background: theme.colors.primary }}
                  ></div>
                  <div 
                    className="typing-dot"
                    style={{ background: theme.colors.secondary }}
                  ></div>
                  <div 
                    className="typing-dot"
                    style={{ background: theme.colors.accent }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Input Area */}
        <div className="border-t border-amber-600/20 p-6 glass" style={{ position: 'absolute', bottom: '64px', left: 0, right: 0, height: '104px' }}>
          <form onSubmit={handleSendMessage} className="flex gap-3 items-center" style={{ height: '52px' }}>
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask ${character.name} anything...`}
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-900 text-gray-200 placeholder-gray-500 disabled:opacity-50 outline-none"
              style={{ border: '1px solid rgba(217, 119, 6, 0.3)' }}
            />
                <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-8 py-3 rounded-lg font-semibold text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
                boxShadow: `0 4px 15px ${theme.colors.glow}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = `0 6px 25px ${theme.colors.glow}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = `0 4px 15px ${theme.colors.glow}`
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatScreen
