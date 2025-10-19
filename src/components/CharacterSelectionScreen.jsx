import { CHARACTERS } from '../data/characters'
import { RAMAYANA_CHARACTERS } from '../data/ramayanaCharacters'
import { PURANAS_CHARACTERS } from '../data/puranasCharacters'
import { MAURYA_CHARACTERS } from '../data/mauryaCharacters'
import { GUPTA_CHARACTERS } from '../data/guptaCharacters'
import { CHOLA_CHARACTERS } from '../data/cholaCharacters'
import { MARATHA_CHARACTERS } from '../data/marathaCharacters'
import { AHOM_CHARACTERS } from '../data/ahomCharacters'
import { VIJAYANAGARA_CHARACTERS } from '../data/vijayanagaraCharacters'
import { REBELLION_1857_CHARACTERS } from '../data/rebellion1857Characters'
import { FREEDOM_FIGHTERS_CHARACTERS } from '../data/freedomFightersCharacters'
import { REVOLUTIONARIES_CHARACTERS } from '../data/revolutionariesCharacters'
import { WOMEN_FREEDOM_FIGHTERS_CHARACTERS } from '../data/womenFreedomFightersCharacters'
import { INA_CHARACTERS } from '../data/inaCharacters'
import { SOCIAL_REFORMERS_CHARACTERS } from '../data/socialReformersCharacters'

const CharacterSelectionScreen = ({ onSelectCharacter, onBack, story }) => {
  // Select the appropriate character set based on story
  const characters = story?.id === 'ramayana' ? RAMAYANA_CHARACTERS 
    : story?.id === 'puranas' ? PURANAS_CHARACTERS
    : story?.id === 'maurya-empire' ? MAURYA_CHARACTERS
    : story?.id === 'gupta-empire' ? GUPTA_CHARACTERS
    : story?.id === 'chola-empire' ? CHOLA_CHARACTERS
    : story?.id === 'maratha-empire' ? MARATHA_CHARACTERS
    : story?.id === 'ahom-kingdom' ? AHOM_CHARACTERS
    : story?.id === 'vijayanagara-empire' ? VIJAYANAGARA_CHARACTERS
    : story?.id === 'indian-rebellion-1857' ? REBELLION_1857_CHARACTERS
    : story?.id === 'freedom-fighters' ? FREEDOM_FIGHTERS_CHARACTERS
    : story?.id === 'revolutionaries' ? REVOLUTIONARIES_CHARACTERS
    : story?.id === 'women-freedom-fighters' ? WOMEN_FREEDOM_FIGHTERS_CHARACTERS
    : story?.id === 'indian-national-army' ? INA_CHARACTERS
    : story?.id === 'social-reformers' ? SOCIAL_REFORMERS_CHARACTERS
    : CHARACTERS
  
  return (
    <div className="min-h-screen py-12 px-4 pb-32 fade-in bg-pattern bg-animated relative">
      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {story && (
            <p className="text-amber-400 text-sm mb-2 font-semibold">
              {story.title}
            </p>
          )}
          <h2 className="font-epic text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500 mb-4">
            Choose Your Guide
          </h2>
          <p className="text-lg text-gray-300">
            Select a character to begin your conversation
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {characters.map((character, index) => {
            const rowNumber = Math.floor(index / 4) + 1
            return (
              <div 
                key={character.id}
                className={`character-card glass rounded-lg p-6 cursor-pointer slide-up grid-row-${rowNumber}`}
                style={{animationDelay: `${(rowNumber - 1) * 0.15}s`}}
                onClick={() => onSelectCharacter(character)}
              >
                <h3 className="font-epic text-2xl font-bold text-amber-400 mb-2">
                  {character.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {character.title}
                </p>
              </div>
            )
          })}
        </div>
        
        <div className="text-center">
          <button 
            onClick={onBack}
            className="glass px-8 py-3 rounded-lg text-gray-300 hover:text-amber-400 transition-colors"
          >
            ← Back to Story Selection
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterSelectionScreen
