// Character-specific themes and animations
export const CHARACTER_THEMES = {
  // Pandavas
  'Yudhishthira': {
    colors: {
      primary: '#FFD700',
      secondary: '#FFA500',
      accent: '#FFFFFF',
      glow: 'rgba(255, 215, 0, 0.3)'
    },
    background: {
      pattern: 'dharma-wheel',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(139, 69, 19, 0.05) 100%)'
    },
    typingIndicator: 'dharma-wheel-spin',
    icon: '⚖️',
    aura: 'golden-righteousness'
  },
  'Bhima': {
    colors: {
      primary: '#DC143C',
      secondary: '#8B0000',
      accent: '#FF4500',
      glow: 'rgba(220, 20, 60, 0.4)'
    },
    background: {
      pattern: 'mace-pattern',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.08) 0%, rgba(139, 0, 0, 0.05) 100%)'
    },
    typingIndicator: 'pulsing-strength',
    icon: '💪',
    aura: 'crimson-power'
  },
  'Arjuna': {
    colors: {
      primary: '#87CEEB',
      secondary: '#4682B4',
      accent: '#FFFFFF',
      glow: 'rgba(135, 206, 235, 0.4)'
    },
    background: {
      pattern: 'arrows-pattern',
      gradient: 'linear-gradient(135deg, rgba(135, 206, 235, 0.06) 0%, rgba(70, 130, 180, 0.04) 100%)',
      className: 'bg-arrows-pattern'
    },
    typingIndicator: 'bowDrawing',
    icon: '🏹',
    aura: 'celestial-archer'
  },
  'Nakula': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#DDA0DD',
      glow: 'rgba(147, 112, 219, 0.3)'
    },
    background: {
      pattern: 'horses-pattern',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.05) 0%, rgba(138, 43, 226, 0.03) 100%)'
    },
    typingIndicator: 'graceful-pulse',
    icon: '🐴',
    aura: 'violet-grace'
  },
  'Sahadeva': {
    colors: {
      primary: '#4B0082',
      secondary: '#483D8B',
      accent: '#9370DB',
      glow: 'rgba(75, 0, 130, 0.35)'
    },
    background: {
      pattern: 'stars-constellation',
      gradient: 'linear-gradient(135deg, rgba(75, 0, 130, 0.06) 0%, rgba(72, 61, 139, 0.04) 100%)'
    },
    typingIndicator: 'cosmic-wisdom',
    icon: '⭐',
    aura: 'mystic-indigo'
  },
  'Draupadi': {
    colors: {
      primary: '#FF6347',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.45)'
    },
    background: {
      pattern: 'flames-pattern',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.08) 0%, rgba(220, 20, 60, 0.06) 100%)',
      className: 'bg-flames-pattern'
    },
    typingIndicator: 'flickeringFlame',
    icon: '🔥',
    aura: 'fiery-vengeance'
  },
  'Krishna': {
    colors: {
      primary: '#4169E1',
      secondary: '#FFD700',
      accent: '#00CED1',
      glow: 'rgba(65, 105, 225, 0.5)'
    },
    background: {
      pattern: 'peacock-feather',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(255, 215, 0, 0.05) 100%)',
      className: 'bg-peacock-feather'
    },
    typingIndicator: 'sudarshanaChakra',
    icon: '🪶',
    aura: 'divine-blue'
  },
  'Abhimanyu': {
    colors: {
      primary: '#FF8C00',
      secondary: '#CD853F',
      accent: '#FFD700',
      glow: 'rgba(255, 140, 0, 0.35)'
    },
    background: {
      pattern: 'chakravyuha',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.06) 0%, rgba(205, 133, 63, 0.04) 100%)'
    },
    typingIndicator: 'youthful-valor',
    icon: '⚔️',
    aura: 'brave-orange'
  },
  
  // Kauravas
  'Duryodhana': {
    colors: {
      primary: '#8B0000',
      secondary: '#000000',
      accent: '#B8860B',
      glow: 'rgba(139, 0, 0, 0.4)'
    },
    background: {
      pattern: 'crown-pattern',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.06) 100%)'
    },
    typingIndicator: 'pulsing-crown',
    icon: '👑',
    aura: 'royal-crimson'
  },
  'Dushasana': {
    colors: {
      primary: '#4B0000',
      secondary: '#8B0000',
      accent: '#696969',
      glow: 'rgba(75, 0, 0, 0.35)'
    },
    background: {
      pattern: 'dark-chains',
      gradient: 'linear-gradient(135deg, rgba(75, 0, 0, 0.07) 0%, rgba(139, 0, 0, 0.05) 100%)'
    },
    typingIndicator: 'aggressive-pulse',
    icon: '⛓️',
    aura: 'dark-red'
  },
  'Karna': {
    colors: {
      primary: '#FFD700',
      secondary: '#DC143C',
      accent: '#FF8C00',
      glow: 'rgba(255, 215, 0, 0.45)'
    },
    background: {
      pattern: 'sun-rays',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(220, 20, 60, 0.06) 100%)'
    },
    typingIndicator: 'radiant-sun',
    icon: '☀️',
    aura: 'tragic-gold'
  },
  'Shakuni': {
    colors: {
      primary: '#8B008B',
      secondary: '#2F4F4F',
      accent: '#696969',
      glow: 'rgba(139, 0, 139, 0.4)'
    },
    background: {
      pattern: 'dice-pattern',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 139, 0.07) 0%, rgba(47, 79, 79, 0.05) 100%)'
    },
    typingIndicator: 'rolling-dice',
    icon: '🎲',
    aura: 'cunning-purple'
  },
  'Dhritarashtra': {
    colors: {
      primary: '#696969',
      secondary: '#2F4F4F',
      accent: '#A9A9A9',
      glow: 'rgba(105, 105, 105, 0.3)'
    },
    background: {
      pattern: 'blind-darkness',
      gradient: 'linear-gradient(135deg, rgba(105, 105, 105, 0.06) 0%, rgba(47, 79, 79, 0.04) 100%)'
    },
    typingIndicator: 'shadowy-regret',
    icon: '🙈',
    aura: 'gray-sorrow'
  },
  'Gandhari': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#DEB887',
      glow: 'rgba(139, 69, 19, 0.35)'
    },
    background: {
      pattern: 'blindfold',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.06) 0%, rgba(160, 82, 45, 0.04) 100%)'
    },
    typingIndicator: 'maternal-strength',
    icon: '🎭',
    aura: 'bronze-devotion'
  },
  
  // Elders
  'Bhishma': {
    colors: {
      primary: '#87CEEB',
      secondary: '#FFFFFF',
      accent: '#B0C4DE',
      glow: 'rgba(135, 206, 235, 0.4)'
    },
    background: {
      pattern: 'arrows-bed',
      gradient: 'linear-gradient(135deg, rgba(135, 206, 235, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)'
    },
    typingIndicator: 'falling-star',
    icon: '🌟',
    aura: 'ancient-blue'
  },
  'Dronacharya': {
    colors: {
      primary: '#DAA520',
      secondary: '#B8860B',
      accent: '#FFD700',
      glow: 'rgba(218, 165, 32, 0.35)'
    },
    background: {
      pattern: 'weapons-arsenal',
      gradient: 'linear-gradient(135deg, rgba(218, 165, 32, 0.06) 0%, rgba(184, 134, 11, 0.04) 100%)'
    },
    typingIndicator: 'guru-wisdom',
    icon: '🎓',
    aura: 'golden-knowledge'
  },
  'Vidura': {
    colors: {
      primary: '#20B2AA',
      secondary: '#008B8B',
      accent: '#AFEEEE',
      glow: 'rgba(32, 178, 170, 0.35)'
    },
    background: {
      pattern: 'wisdom-scrolls',
      gradient: 'linear-gradient(135deg, rgba(32, 178, 170, 0.06) 0%, rgba(0, 139, 139, 0.04) 100%)'
    },
    typingIndicator: 'tranquil-wisdom',
    icon: '📖',
    aura: 'teal-truth'
  },
  'Kunti': {
    colors: {
      primary: '#CD853F',
      secondary: '#DEB887',
      accent: '#FFD700',
      glow: 'rgba(205, 133, 63, 0.35)'
    },
    background: {
      pattern: 'maternal-embrace',
      gradient: 'linear-gradient(135deg, rgba(205, 133, 63, 0.06) 0%, rgba(222, 184, 135, 0.04) 100%)'
    },
    typingIndicator: 'nurturing-glow',
    icon: '🤱',
    aura: 'warm-bronze'
  },
  
  // Others
  'Ashwatthama': {
    colors: {
      primary: '#8B0000',
      secondary: '#4B0082',
      accent: '#FF4500',
      glow: 'rgba(139, 0, 0, 0.45)'
    },
    background: {
      pattern: 'cursed-gem',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(75, 0, 130, 0.06) 100%)'
    },
    typingIndicator: 'eternal-suffering',
    icon: '💎',
    aura: 'cursed-crimson'
  },
  'Sanjaya': {
    colors: {
      primary: '#708090',
      secondary: '#778899',
      accent: '#C0C0C0',
      glow: 'rgba(112, 128, 144, 0.3)'
    },
    background: {
      pattern: 'divine-vision',
      gradient: 'linear-gradient(135deg, rgba(112, 128, 144, 0.06) 0%, rgba(119, 136, 153, 0.04) 100%)'
    },
    typingIndicator: 'witnessing-eye',
    icon: '👁️',
    aura: 'slate-witness'
  },
  'Ekalavya': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#D2691E',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'forest-tribal',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.06) 0%, rgba(160, 82, 45, 0.04) 100%)',
      className: 'bg-tribal-pattern'
    },
    typingIndicator: 'bowDrawing',
    icon: '🎯',
    aura: 'earthy-devotion'
  },
  'Barbarika': {
    colors: {
      primary: '#00CED1',
      secondary: '#20B2AA',
      accent: '#48D1CC',
      glow: 'rgba(0, 206, 209, 0.4)'
    },
    background: {
      pattern: 'three-arrows',
      gradient: 'linear-gradient(135deg, rgba(0, 206, 209, 0.06) 0%, rgba(32, 178, 170, 0.04) 100%)',
      className: 'bg-three-arrows'
    },
    typingIndicator: 'threeArrows',
    icon: '⚡',
    aura: 'turquoise-sacrifice'
  },
  'Uttara': {
    colors: {
      primary: '#FFB6C1',
      secondary: '#FF69B4',
      accent: '#FFC0CB',
      glow: 'rgba(255, 182, 193, 0.4)'
    },
    background: {
      pattern: 'lotus-dance',
      gradient: 'linear-gradient(135deg, rgba(255, 182, 193, 0.06) 0%, rgba(255, 105, 180, 0.04) 100%)',
      className: 'bg-lotus-pattern'
    },
    typingIndicator: 'gracefulSway',
    icon: '💃',
    aura: 'pink-grace'
  },
  'Ghatotkacha': {
    colors: {
      primary: '#8B008B',
      secondary: '#4B0082',
      accent: '#9370DB',
      glow: 'rgba(139, 0, 139, 0.5)'
    },
    background: {
      pattern: 'demon-maya',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 139, 0.08) 0%, rgba(75, 0, 130, 0.06) 100%)',
      className: 'bg-demon-pattern'
    },
    typingIndicator: 'shapeshifting',
    icon: '👹',
    aura: 'purple-maya'
  },
  'Shikhandi': {
    colors: {
      primary: '#FF6347',
      secondary: '#FF8C00',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.4)'
    },
    background: {
      pattern: 'dual-flames',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.06) 0%, rgba(255, 140, 0, 0.04) 100%)',
      className: 'bg-flames-pattern'
    },
    typingIndicator: 'dualFlame',
    icon: '🔥',
    aura: 'flame-rebirth'
  },

  // ==========================================
  // RAMAYANA CHARACTERS
  // ==========================================
  
  'Rama': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#87CEEB',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'divine-blue',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-divine-aura'
    },
    typingIndicator: 'dharma-pulse',
    icon: '🏹',
    aura: 'blue-divinity'
  },

  'Sita': {
    colors: {
      primary: '#FFD700',
      secondary: '#FF69B4',
      accent: '#FFFACD',
      glow: 'rgba(255, 215, 0, 0.4)'
    },
    background: {
      pattern: 'earth-lotus',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.06) 0%, rgba(255, 105, 180, 0.04) 100%)',
      className: 'bg-lotus-pattern'
    },
    typingIndicator: 'gentle-glow',
    icon: '🪷',
    aura: 'golden-purity'
  },

  'Lakshmana': {
    colors: {
      primary: '#FF6347',
      secondary: '#DC143C',
      accent: '#FF4500',
      glow: 'rgba(255, 99, 71, 0.4)'
    },
    background: {
      pattern: 'loyal-flame',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.06) 0%, rgba(220, 20, 60, 0.04) 100%)',
      className: 'bg-flames-pattern'
    },
    typingIndicator: 'fierce-devotion',
    icon: '⚔️',
    aura: 'crimson-loyalty'
  },

  'Hanuman': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FF4500',
      accent: '#FFD700',
      glow: 'rgba(255, 140, 0, 0.5)'
    },
    background: {
      pattern: 'devotion-fire',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.08) 0%, rgba(255, 69, 0, 0.06) 100%)',
      className: 'bg-hanuman-pattern'
    },
    typingIndicator: 'jai-shri-ram',
    icon: '🐒',
    aura: 'orange-devotion'
  },

  'Ravana': {
    colors: {
      primary: '#8B0000',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(139, 0, 0, 0.5)'
    },
    background: {
      pattern: 'ten-heads',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(220, 20, 60, 0.06) 100%)',
      className: 'bg-ravana-pattern'
    },
    typingIndicator: 'ten-headed',
    icon: '👑',
    aura: 'dark-crimson'
  },

  'Bharata': {
    colors: {
      primary: '#4682B4',
      secondary: '#5F9EA0',
      accent: '#B0E0E6',
      glow: 'rgba(70, 130, 180, 0.4)'
    },
    background: {
      pattern: 'selfless-service',
      gradient: 'linear-gradient(135deg, rgba(70, 130, 180, 0.06) 0%, rgba(95, 158, 160, 0.04) 100%)',
      className: 'bg-arrows-pattern'
    },
    typingIndicator: 'humble-pulse',
    icon: '👣',
    aura: 'steel-blue-duty'
  },

  'Dasharatha': {
    colors: {
      primary: '#DAA520',
      secondary: '#B8860B',
      accent: '#FAFAD2',
      glow: 'rgba(218, 165, 32, 0.4)'
    },
    background: {
      pattern: 'royal-sorrow',
      gradient: 'linear-gradient(135deg, rgba(218, 165, 32, 0.06) 0%, rgba(184, 134, 11, 0.04) 100%)',
      className: 'bg-manuscript'
    },
    typingIndicator: 'sorrowful-glow',
    icon: '👴',
    aura: 'golden-grief'
  },

  'Kaikeyi': {
    colors: {
      primary: '#9370DB',
      secondary: '#8B008B',
      accent: '#DDA0DD',
      glow: 'rgba(147, 112, 219, 0.4)'
    },
    background: {
      pattern: 'regret-shadow',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.06) 0%, rgba(139, 0, 139, 0.04) 100%)',
      className: 'bg-stars-constellation'
    },
    typingIndicator: 'regretful-pulse',
    icon: '💔',
    aura: 'purple-regret'
  },

  'Vibhishana': {
    colors: {
      primary: '#20B2AA',
      secondary: '#48D1CC',
      accent: '#AFEEEE',
      glow: 'rgba(32, 178, 170, 0.4)'
    },
    background: {
      pattern: 'righteous-demon',
      gradient: 'linear-gradient(135deg, rgba(32, 178, 170, 0.06) 0%, rgba(72, 209, 204, 0.04) 100%)',
      className: 'bg-tribal-pattern'
    },
    typingIndicator: 'dharma-choice',
    icon: '⚖️',
    aura: 'turquoise-dharma'
  },

  'Sugriva': {
    colors: {
      primary: '#CD853F',
      secondary: '#D2691E',
      accent: '#F4A460',
      glow: 'rgba(205, 133, 63, 0.4)'
    },
    background: {
      pattern: 'monkey-king',
      gradient: 'linear-gradient(135deg, rgba(205, 133, 63, 0.06) 0%, rgba(210, 105, 30, 0.04) 100%)',
      className: 'bg-tribal-pattern'
    },
    typingIndicator: 'grateful-bounce',
    icon: '🐵',
    aura: 'peru-gratitude'
  },

  'Vali': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#D2691E',
      glow: 'rgba(139, 69, 19, 0.5)'
    },
    background: {
      pattern: 'mighty-strength',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(160, 82, 45, 0.06) 100%)',
      className: 'bg-mace-pattern'
    },
    typingIndicator: 'powerful-pulse',
    icon: '💪',
    aura: 'saddle-brown-power'
  },

  'Jatayu': {
    colors: {
      primary: '#B8860B',
      secondary: '#DAA520',
      accent: '#F0E68C',
      glow: 'rgba(184, 134, 11, 0.4)'
    },
    background: {
      pattern: 'noble-wings',
      gradient: 'linear-gradient(135deg, rgba(184, 134, 11, 0.06) 0%, rgba(218, 165, 32, 0.04) 100%)',
      className: 'bg-arrows-pattern'
    },
    typingIndicator: 'wing-flutter',
    icon: '🦅',
    aura: 'goldenrod-courage'
  },

  'Urmila': {
    colors: {
      primary: '#DDA0DD',
      secondary: '#EE82EE',
      accent: '#E6E6FA',
      glow: 'rgba(221, 160, 221, 0.4)'
    },
    background: {
      pattern: 'silent-waiting',
      gradient: 'linear-gradient(135deg, rgba(221, 160, 221, 0.06) 0%, rgba(238, 130, 238, 0.04) 100%)',
      className: 'bg-lotus-pattern'
    },
    typingIndicator: 'patient-glow',
    icon: '😴',
    aura: 'plum-patience'
  },

  'Kumbhakarna': {
    colors: {
      primary: '#483D8B',
      secondary: '#4B0082',
      accent: '#9370DB',
      glow: 'rgba(72, 61, 139, 0.5)'
    },
    background: {
      pattern: 'sleeping-giant',
      gradient: 'linear-gradient(135deg, rgba(72, 61, 139, 0.08) 0%, rgba(75, 0, 130, 0.06) 100%)',
      className: 'bg-demon-pattern'
    },
    typingIndicator: 'drowsy-pulse',
    icon: '😴',
    aura: 'dark-slate-blue'
  },

  'Mandodari': {
    colors: {
      primary: '#DB7093',
      secondary: '#C71585',
      accent: '#FFB6C1',
      glow: 'rgba(219, 112, 147, 0.4)'
    },
    background: {
      pattern: 'wise-sorrow',
      gradient: 'linear-gradient(135deg, rgba(219, 112, 147, 0.06) 0%, rgba(199, 21, 133, 0.04) 100%)',
      className: 'bg-lotus-pattern'
    },
    typingIndicator: 'sorrowful-wisdom',
    icon: '👑',
    aura: 'pale-violet-wisdom'
  },

  'Surpanakha': {
    colors: {
      primary: '#8B008B',
      secondary: '#9932CC',
      accent: '#BA55D3',
      glow: 'rgba(139, 0, 139, 0.5)'
    },
    background: {
      pattern: 'vengeful-shadow',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 139, 0.08) 0%, rgba(153, 50, 204, 0.06) 100%)',
      className: 'bg-demon-pattern'
    },
    typingIndicator: 'bitter-pulse',
    icon: '😈',
    aura: 'dark-magenta-rage'
  },

  'Angada': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FF6347',
      accent: '#FFD700',
      glow: 'rgba(255, 140, 0, 0.4)'
    },
    background: {
      pattern: 'fearless-youth',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.06) 0%, rgba(255, 99, 71, 0.04) 100%)',
      className: 'bg-tribal-pattern'
    },
    typingIndicator: 'bold-stance',
    icon: '👊',
    aura: 'dark-orange-valor'
  },

  'Tara': {
    colors: {
      primary: '#5F9EA0',
      secondary: '#4682B4',
      accent: '#B0E0E6',
      glow: 'rgba(95, 158, 160, 0.4)'
    },
    background: {
      pattern: 'wise-counsel',
      gradient: 'linear-gradient(135deg, rgba(95, 158, 160, 0.06) 0%, rgba(70, 130, 180, 0.04) 100%)',
      className: 'bg-manuscript'
    },
    typingIndicator: 'thoughtful-glow',
    icon: '💭',
    aura: 'cadet-blue-wisdom'
  },

  'Shatrughna': {
    colors: {
      primary: '#708090',
      secondary: '#778899',
      accent: '#C0C0C0',
      glow: 'rgba(112, 128, 144, 0.4)'
    },
    background: {
      pattern: 'quiet-service',
      gradient: 'linear-gradient(135deg, rgba(112, 128, 144, 0.06) 0%, rgba(119, 136, 153, 0.04) 100%)',
      className: 'bg-arrows-pattern'
    },
    typingIndicator: 'humble-glow',
    icon: '🛡️',
    aura: 'slate-gray-service'
  },

  'Lava': {
    colors: {
      primary: '#4169E1',
      secondary: '#FF6347',
      accent: '#FFD700',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'warrior-son',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.06) 0%, rgba(255, 99, 71, 0.04) 100%)',
      className: 'bg-arrows-pattern'
    },
    typingIndicator: 'young-warrior',
    icon: '⚔️',
    aura: 'royal-blue-legacy'
  },

  'Kusha': {
    colors: {
      primary: '#6A5ACD',
      secondary: '#4169E1',
      accent: '#FFD700',
      glow: 'rgba(106, 90, 205, 0.4)'
    },
    background: {
      pattern: 'poet-warrior',
      gradient: 'linear-gradient(135deg, rgba(106, 90, 205, 0.06) 0%, rgba(65, 105, 225, 0.04) 100%)',
      className: 'bg-manuscript'
    },
    typingIndicator: 'poetic-flow',
    icon: '📜',
    aura: 'slate-blue-art'
  },

  'Manthara': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#556B2F',
      accent: '#8B8B00',
      glow: 'rgba(47, 79, 79, 0.5)'
    },
    background: {
      pattern: 'poison-shadow',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.08) 0%, rgba(85, 107, 47, 0.06) 100%)',
      className: 'bg-demon-pattern'
    },
    typingIndicator: 'cunning-whisper',
    icon: '🐍',
    aura: 'dark-slate-poison'
  },

  'Janaka': {
    colors: {
      primary: '#FFD700',
      secondary: '#FFA500',
      accent: '#FFFACD',
      glow: 'rgba(255, 215, 0, 0.4)'
    },
    background: {
      pattern: 'philosopher-king',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.06) 0%, rgba(255, 165, 0, 0.04) 100%)',
      className: 'bg-manuscript'
    },
    typingIndicator: 'wisdom-glow',
    icon: '📖',
    aura: 'gold-knowledge'
  },

  'Sampati': {
    colors: {
      primary: '#A0522D',
      secondary: '#8B4513',
      accent: '#D2691E',
      glow: 'rgba(160, 82, 45, 0.4)'
    },
    background: {
      pattern: 'wingless-vision',
      gradient: 'linear-gradient(135deg, rgba(160, 82, 45, 0.06) 0%, rgba(139, 69, 19, 0.04) 100%)',
      className: 'bg-tribal-pattern'
    },
    typingIndicator: 'far-seeing',
    icon: '👁️',
    aura: 'sienna-vision'
  },

  'Shabari': {
    colors: {
      primary: '#8FBC8F',
      secondary: '#2E8B57',
      accent: '#98FB98',
      glow: 'rgba(143, 188, 143, 0.4)'
    },
    background: {
      pattern: 'pure-devotion',
      gradient: 'linear-gradient(135deg, rgba(143, 188, 143, 0.06) 0%, rgba(46, 139, 87, 0.04) 100%)',
      className: 'bg-tribal-pattern'
    },
    typingIndicator: 'humble-bhakti',
    icon: '🫐',
    aura: 'dark-sea-green-love'
  },

  // ==========================================
  // PURANAS CHARACTERS
  // ==========================================
  
  // Trimurti
  'Brahma': {
    colors: {
      primary: '#FFD700',
      secondary: '#FFA500',
      accent: '#FFFACD',
      glow: 'rgba(255, 215, 0, 0.4)'
    },
    background: {
      pattern: 'cosmic-lotus',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(255, 165, 0, 0.06) 100%)',
      className: 'bg-cosmic-lotus'
    },
    typingIndicator: 'creator-spin',
    icon: '🪷',
    aura: 'creator-golden'
  },
  'Vishnu': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E3A8A',
      accent: '#BFDBFE',
      glow: 'rgba(65, 105, 225, 0.5)'
    },
    background: {
      pattern: 'cosmic-ocean',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.1) 0%, rgba(30, 58, 138, 0.08) 100%)',
      className: 'bg-cosmic-ocean'
    },
    typingIndicator: 'preserver-pulse',
    icon: '🪔',
    aura: 'preserver-blue'
  },
  'Shiva': {
    colors: {
      primary: '#9CA3AF',
      secondary: '#4B5563',
      accent: '#E0F2FE',
      glow: 'rgba(156, 163, 175, 0.5)'
    },
    background: {
      pattern: 'ash-dance',
      gradient: 'linear-gradient(135deg, rgba(156, 163, 175, 0.1) 0%, rgba(75, 85, 99, 0.08) 100%)',
      className: 'bg-ash-dance'
    },
    typingIndicator: 'destroyer-dance',
    icon: '🔱',
    aura: 'destroyer-ash'
  },

  // Devis
  'Durga': {
    colors: {
      primary: '#DC2626',
      secondary: '#991B1B',
      accent: '#FEF3C7',
      glow: 'rgba(220, 38, 38, 0.5)'
    },
    background: {
      pattern: 'tiger-stripes',
      gradient: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(153, 27, 27, 0.08) 100%)',
      className: 'bg-tiger-stripes'
    },
    typingIndicator: 'warrior-goddess',
    icon: '🦁',
    aura: 'fierce-red'
  },
  'Kali': {
    colors: {
      primary: '#1F2937',
      secondary: '#7F1D1D',
      accent: '#B91C1C',
      glow: 'rgba(31, 41, 55, 0.6)'
    },
    background: {
      pattern: 'dark-dance',
      gradient: 'linear-gradient(135deg, rgba(31, 41, 55, 0.15) 0%, rgba(127, 29, 29, 0.12) 100%)',
      className: 'bg-dark-dance'
    },
    typingIndicator: 'dark-mother',
    icon: '👅',
    aura: 'beyond-time'
  },
  'Lakshmi': {
    colors: {
      primary: '#F59E0B',
      secondary: '#D97706',
      accent: '#FEF3C7',
      glow: 'rgba(245, 158, 11, 0.5)'
    },
    background: {
      pattern: 'golden-lotus',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.08) 100%)',
      className: 'bg-golden-lotus'
    },
    typingIndicator: 'prosperity-flow',
    icon: '💰',
    aura: 'golden-fortune'
  },
  'Saraswati': {
    colors: {
      primary: '#F8FAFC',
      secondary: '#E0F2FE',
      accent: '#DBEAFE',
      glow: 'rgba(248, 250, 252, 0.5)'
    },
    background: {
      pattern: 'swan-flow',
      gradient: 'linear-gradient(135deg, rgba(248, 250, 252, 0.15) 0%, rgba(224, 242, 254, 0.12) 100%)',
      className: 'bg-swan-flow'
    },
    typingIndicator: 'knowledge-flow',
    icon: '📚',
    aura: 'pure-white'
  },
  'Parvati': {
    colors: {
      primary: '#86EFAC',
      secondary: '#16A34A',
      accent: '#FEF3C7',
      glow: 'rgba(134, 239, 172, 0.4)'
    },
    background: {
      pattern: 'mountain-grace',
      gradient: 'linear-gradient(135deg, rgba(134, 239, 172, 0.1) 0%, rgba(22, 163, 74, 0.08) 100%)',
      className: 'bg-mountain-grace'
    },
    typingIndicator: 'divine-mother',
    icon: '🏔️',
    aura: 'mountain-green'
  },

  // Vishnu Avatars
  'Matsya': {
    colors: {
      primary: '#0EA5E9',
      secondary: '#0284C7',
      accent: '#BAE6FD',
      glow: 'rgba(14, 165, 233, 0.4)'
    },
    background: {
      pattern: 'ocean-waves',
      gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(2, 132, 199, 0.08) 100%)',
      className: 'bg-ocean-waves'
    },
    typingIndicator: 'fish-swim',
    icon: '🐟',
    aura: 'ocean-blue'
  },
  'Narasimha': {
    colors: {
      primary: '#F97316',
      secondary: '#EA580C',
      accent: '#FED7AA',
      glow: 'rgba(249, 115, 22, 0.5)'
    },
    background: {
      pattern: 'lion-roar',
      gradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.12) 0%, rgba(234, 88, 12, 0.1) 100%)',
      className: 'bg-lion-roar'
    },
    typingIndicator: 'fierce-protection',
    icon: '🦁',
    aura: 'man-lion-fury'
  },
  'Vamana': {
    colors: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#DDD6FE',
      glow: 'rgba(139, 92, 246, 0.4)'
    },
    background: {
      pattern: 'cosmic-steps',
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.08) 100%)',
      className: 'bg-cosmic-steps'
    },
    typingIndicator: 'small-to-vast',
    icon: '👣',
    aura: 'humble-cosmic'
  },
  'Parashurama': {
    colors: {
      primary: '#B91C1C',
      secondary: '#7F1D1D',
      accent: '#FEE2E2',
      glow: 'rgba(185, 28, 28, 0.5)'
    },
    background: {
      pattern: 'axe-swings',
      gradient: 'linear-gradient(135deg, rgba(185, 28, 28, 0.1) 0%, rgba(127, 29, 29, 0.08) 100%)',
      className: 'bg-axe-swings'
    },
    typingIndicator: 'warrior-sage',
    icon: '🪓',
    aura: 'blood-red-rage'
  },
  'Kalki': {
    colors: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
      accent: '#60A5FA',
      glow: 'rgba(248, 250, 252, 0.6)'
    },
    background: {
      pattern: 'future-dawn',
      gradient: 'linear-gradient(135deg, rgba(248, 250, 252, 0.15) 0%, rgba(148, 163, 184, 0.1) 100%)',
      className: 'bg-future-dawn'
    },
    typingIndicator: 'apocalypse-ride',
    icon: '🐎',
    aura: 'future-white'
  },

  // Divine Sons
  'Ganesha': {
    colors: {
      primary: '#FB923C',
      secondary: '#EA580C',
      accent: '#FEF3C7',
      glow: 'rgba(251, 146, 60, 0.4)'
    },
    background: {
      pattern: 'elephant-wisdom',
      gradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1) 0%, rgba(234, 88, 12, 0.08) 100%)',
      className: 'bg-elephant-wisdom'
    },
    typingIndicator: 'om-ganesha',
    icon: '🐘',
    aura: 'elephant-orange'
  },
  'Kartikeya': {
    colors: {
      primary: '#22C55E',
      secondary: '#16A34A',
      accent: '#FEF3C7',
      glow: 'rgba(34, 197, 94, 0.4)'
    },
    background: {
      pattern: 'peacock-feather',
      gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.08) 100%)',
      className: 'bg-peacock-feather'
    },
    typingIndicator: 'vel-thrust',
    icon: '🦚',
    aura: 'peacock-green'
  },

  // Great Sages
  'Narada': {
    colors: {
      primary: '#A855F7',
      secondary: '#9333EA',
      accent: '#FAE8FF',
      glow: 'rgba(168, 85, 247, 0.4)'
    },
    background: {
      pattern: 'cosmic-veena',
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(147, 51, 234, 0.08) 100%)',
      className: 'bg-cosmic-veena'
    },
    typingIndicator: 'narayana-pulse',
    icon: '🎵',
    aura: 'divine-messenger'
  },
  'Vyasa': {
    colors: {
      primary: '#78716C',
      secondary: '#57534E',
      accent: '#FEF3C7',
      glow: 'rgba(120, 113, 108, 0.4)'
    },
    background: {
      pattern: 'ancient-text',
      gradient: 'linear-gradient(135deg, rgba(120, 113, 108, 0.1) 0%, rgba(87, 83, 78, 0.08) 100%)',
      className: 'bg-ancient-text'
    },
    typingIndicator: 'sage-writing',
    icon: '📜',
    aura: 'ancient-wisdom'
  },
  'Vashistha': {
    colors: {
      primary: '#F9FAFB',
      secondary: '#E5E7EB',
      accent: '#DBEAFE',
      glow: 'rgba(249, 250, 251, 0.5)'
    },
    background: {
      pattern: 'wish-cow',
      gradient: 'linear-gradient(135deg, rgba(249, 250, 251, 0.12) 0%, rgba(229, 231, 235, 0.1) 100%)',
      className: 'bg-wish-cow'
    },
    typingIndicator: 'brahmin-power',
    icon: '🐄',
    aura: 'pure-light'
  },
  'Vishwamitra': {
    colors: {
      primary: '#EF4444',
      secondary: '#B91C1C',
      accent: '#FEE2E2',
      glow: 'rgba(239, 68, 68, 0.5)'
    },
    background: {
      pattern: 'penance-fire',
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(185, 28, 28, 0.08) 100%)',
      className: 'bg-penance-fire'
    },
    typingIndicator: 'willpower-surge',
    icon: '🔥',
    aura: 'fire-determination'
  },
  'Agastya': {
    colors: {
      primary: '#0891B2',
      secondary: '#0E7490',
      accent: '#CFFAFE',
      glow: 'rgba(8, 145, 178, 0.4)'
    },
    background: {
      pattern: 'ocean-drink',
      gradient: 'linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(14, 116, 144, 0.08) 100%)',
      className: 'bg-ocean-drink'
    },
    typingIndicator: 'mountain-bow',
    icon: '🌊',
    aura: 'ocean-cyan'
  },

  // Devotees
  'Prahlada': {
    colors: {
      primary: '#F472B6',
      secondary: '#EC4899',
      accent: '#FCE7F3',
      glow: 'rgba(244, 114, 182, 0.4)'
    },
    background: {
      pattern: 'child-devotion',
      gradient: 'linear-gradient(135deg, rgba(244, 114, 182, 0.1) 0%, rgba(236, 72, 153, 0.08) 100%)',
      className: 'bg-child-devotion'
    },
    typingIndicator: 'pure-faith',
    icon: '🙏',
    aura: 'innocent-pink'
  },
  'Dhruva': {
    colors: {
      primary: '#60A5FA',
      secondary: '#3B82F6',
      accent: '#DBEAFE',
      glow: 'rgba(96, 165, 250, 0.5)'
    },
    background: {
      pattern: 'north-star',
      gradient: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(59, 130, 246, 0.08) 100%)',
      className: 'bg-north-star'
    },
    typingIndicator: 'steadfast-star',
    icon: '⭐',
    aura: 'eternal-blue'
  },
  'Markandeya': {
    colors: {
      primary: '#34D399',
      secondary: '#10B981',
      accent: '#D1FAE5',
      glow: 'rgba(52, 211, 153, 0.4)'
    },
    background: {
      pattern: 'eternal-youth',
      gradient: 'linear-gradient(135deg, rgba(52, 211, 153, 0.1) 0%, rgba(16, 185, 129, 0.08) 100%)',
      className: 'bg-eternal-youth'
    },
    typingIndicator: 'conquer-death',
    icon: '♾️',
    aura: 'immortal-green'
  },

  // Demons
  'Hiranyakashipu': {
    colors: {
      primary: '#FBBF24',
      secondary: '#D97706',
      accent: '#1F2937',
      glow: 'rgba(251, 191, 36, 0.5)'
    },
    background: {
      pattern: 'golden-tyranny',
      gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(217, 119, 6, 0.08) 100%)',
      className: 'bg-golden-tyranny'
    },
    typingIndicator: 'demon-pride',
    icon: '👑',
    aura: 'golden-demon'
  },
  'Mahishasura': {
    colors: {
      primary: '#57534E',
      secondary: '#292524',
      accent: '#DC2626',
      glow: 'rgba(87, 83, 78, 0.5)'
    },
    background: {
      pattern: 'buffalo-power',
      gradient: 'linear-gradient(135deg, rgba(87, 83, 78, 0.12) 0%, rgba(41, 37, 36, 0.1) 100%)',
      className: 'bg-buffalo-power'
    },
    typingIndicator: 'buffalo-charge',
    icon: '🐃',
    aura: 'dark-buffalo'
  },
  'Bhasmasura': {
    colors: {
      primary: '#71717A',
      secondary: '#52525B',
      accent: '#FCA5A5',
      glow: 'rgba(113, 113, 122, 0.4)'
    },
    background: {
      pattern: 'ash-touch',
      gradient: 'linear-gradient(135deg, rgba(113, 113, 122, 0.1) 0%, rgba(82, 82, 91, 0.08) 100%)',
      className: 'bg-ash-touch'
    },
    typingIndicator: 'deadly-touch',
    icon: '💀',
    aura: 'ash-gray'
  },
  'Raktabija': {
    colors: {
      primary: '#7F1D1D',
      secondary: '#450A0A',
      accent: '#FCA5A5',
      glow: 'rgba(127, 29, 29, 0.5)'
    },
    background: {
      pattern: 'blood-multiply',
      gradient: 'linear-gradient(135deg, rgba(127, 29, 29, 0.12) 0%, rgba(69, 10, 10, 0.1) 100%)',
      className: 'bg-blood-multiply'
    },
    typingIndicator: 'blood-seed',
    icon: '🩸',
    aura: 'blood-dark'
  },

  // Celestial Beings
  'Indra': {
    colors: {
      primary: '#FBBF24',
      secondary: '#F59E0B',
      accent: '#FEF3C7',
      glow: 'rgba(251, 191, 36, 0.5)'
    },
    background: {
      pattern: 'thunder-storm',
      gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.08) 100%)',
      className: 'bg-thunder-storm'
    },
    typingIndicator: 'vajra-strike',
    icon: '⚡',
    aura: 'thunder-gold'
  },
  'Yama': {
    colors: {
      primary: '#1F2937',
      secondary: '#111827',
      accent: '#6B7280',
      glow: 'rgba(31, 41, 55, 0.6)'
    },
    background: {
      pattern: 'death-judgment',
      gradient: 'linear-gradient(135deg, rgba(31, 41, 55, 0.15) 0%, rgba(17, 24, 39, 0.12) 100%)',
      className: 'bg-death-judgment'
    },
    typingIndicator: 'death-march',
    icon: '💀',
    aura: 'death-dark'
  },
  'Kubera': {
    colors: {
      primary: '#F59E0B',
      secondary: '#D97706',
      accent: '#FEF3C7',
      glow: 'rgba(245, 158, 11, 0.5)'
    },
    background: {
      pattern: 'treasure-vault',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.08) 100%)',
      className: 'bg-treasure-vault'
    },
    typingIndicator: 'wealth-flow',
    icon: '💎',
    aura: 'treasure-gold'
  },

  // Divine Vehicles
  'Garuda': {
    colors: {
      primary: '#EAB308',
      secondary: '#CA8A04',
      accent: '#FEF3C7',
      glow: 'rgba(234, 179, 8, 0.5)'
    },
    background: {
      pattern: 'eagle-flight',
      gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(202, 138, 4, 0.08) 100%)',
      className: 'bg-eagle-flight'
    },
    typingIndicator: 'swift-wings',
    icon: '🦅',
    aura: 'golden-eagle'
  },
  'Nandi': {
    colors: {
      primary: '#F8FAFC',
      secondary: '#E2E8F0',
      accent: '#CBD5E1',
      glow: 'rgba(248, 250, 252, 0.5)'
    },
    background: {
      pattern: 'sacred-bull',
      gradient: 'linear-gradient(135deg, rgba(248, 250, 252, 0.12) 0%, rgba(226, 232, 240, 0.1) 100%)',
      className: 'bg-sacred-bull'
    },
    typingIndicator: 'eternal-service',
    icon: '🐂',
    aura: 'white-devotion'
  },
  'Kashyapa': {
    colors: {
      primary: '#8B7355',
      secondary: '#654321',
      accent: '#D2B48C',
      glow: 'rgba(139, 115, 85, 0.4)'
    },
    background: {
      pattern: 'progenitor-tree',
      gradient: 'linear-gradient(135deg, rgba(139, 115, 85, 0.1) 0%, rgba(101, 67, 33, 0.08) 100%)',
      className: 'bg-progenitor-tree'
    },
    typingIndicator: 'lineage-flow',
    icon: '🌳',
    aura: 'ancestral-brown'
  },

  // Cosmic Powers
  'Shakti': {
    colors: {
      primary: '#EC4899',
      secondary: '#BE185D',
      accent: '#FCE7F3',
      glow: 'rgba(236, 72, 153, 0.5)'
    },
    background: {
      pattern: 'cosmic-power',
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(190, 24, 93, 0.1) 100%)',
      className: 'bg-cosmic-power'
    },
    typingIndicator: 'shakti-surge',
    icon: '⚡',
    aura: 'primal-power'
  },
  'Chitragupta': {
    colors: {
      primary: '#6B7280',
      secondary: '#4B5563',
      accent: '#F3F4F6',
      glow: 'rgba(107, 114, 128, 0.4)'
    },
    background: {
      pattern: 'karma-records',
      gradient: 'linear-gradient(135deg, rgba(107, 114, 128, 0.1) 0%, rgba(75, 85, 99, 0.08) 100%)',
      className: 'bg-karma-records'
    },
    typingIndicator: 'record-keeping',
    icon: '📖',
    aura: 'ledger-gray'
  },

  // More Saptarishi
  'Atri': {
    colors: {
      primary: '#E0E7FF',
      secondary: '#C7D2FE',
      accent: '#A5B4FC',
      glow: 'rgba(224, 231, 255, 0.5)'
    },
    background: {
      pattern: 'moon-birth',
      gradient: 'linear-gradient(135deg, rgba(224, 231, 255, 0.12) 0%, rgba(199, 210, 254, 0.1) 100%)',
      className: 'bg-moon-birth'
    },
    typingIndicator: 'moon-glow',
    icon: '🌙',
    aura: 'lunar-light'
  },
  'Bharadvaja': {
    colors: {
      primary: '#A78BFA',
      secondary: '#8B5CF6',
      accent: '#DDD6FE',
      glow: 'rgba(167, 139, 250, 0.4)'
    },
    background: {
      pattern: 'infinite-learning',
      gradient: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(139, 92, 246, 0.08) 100%)',
      className: 'bg-infinite-learning'
    },
    typingIndicator: 'knowledge-hunger',
    icon: '📚',
    aura: 'purple-wisdom'
  },
  'Gautama': {
    colors: {
      primary: '#FBBF24',
      secondary: '#F59E0B',
      accent: '#FEF3C7',
      glow: 'rgba(251, 191, 36, 0.4)'
    },
    background: {
      pattern: 'redemption-path',
      gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.08) 100%)',
      className: 'bg-redemption-path'
    },
    typingIndicator: 'forgiveness-pulse',
    icon: '🙏',
    aura: 'golden-redemption'
  },
  'Jamadagni': {
    colors: {
      primary: '#DC2626',
      secondary: '#991B1B',
      accent: '#FEE2E2',
      glow: 'rgba(220, 38, 38, 0.5)'
    },
    background: {
      pattern: 'martyred-sage',
      gradient: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(153, 27, 27, 0.08) 100%)',
      className: 'bg-martyred-sage'
    },
    typingIndicator: 'ascetic-rage',
    icon: '🐄',
    aura: 'martyr-red'
  },
  'Bhrigu': {
    colors: {
      primary: '#6366F1',
      secondary: '#4F46E5',
      accent: '#E0E7FF',
      glow: 'rgba(99, 102, 241, 0.5)'
    },
    background: {
      pattern: 'god-tester',
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(79, 70, 229, 0.08) 100%)',
      className: 'bg-god-tester'
    },
    typingIndicator: 'testing-kick',
    icon: '👣',
    aura: 'indigo-test'
  },

  // More Great Sages
  'Durvasa': {
    colors: {
      primary: '#7C2D12',
      secondary: '#991B1B',
      accent: '#FEE2E2',
      glow: 'rgba(124, 45, 18, 0.6)'
    },
    background: {
      pattern: 'wrathful-fire',
      gradient: 'linear-gradient(135deg, rgba(124, 45, 18, 0.12) 0%, rgba(153, 27, 27, 0.1) 100%)',
      className: 'bg-wrathful-fire'
    },
    typingIndicator: 'curse-storm',
    icon: '😠',
    aura: 'wrath-brown'
  },
  'Dattatreya': {
    colors: {
      primary: '#F59E0B',
      secondary: '#D97706',
      accent: '#FEF3C7',
      glow: 'rgba(245, 158, 11, 0.5)'
    },
    background: {
      pattern: 'triple-face',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.08) 100%)',
      className: 'bg-triple-face'
    },
    typingIndicator: 'twenty-four-gurus',
    icon: '🐕',
    aura: 'trimurti-gold'
  },
  'Brihaspati': {
    colors: {
      primary: '#FBBF24',
      secondary: '#F59E0B',
      accent: '#FFFBEB',
      glow: 'rgba(251, 191, 36, 0.5)'
    },
    background: {
      pattern: 'jupiter-wisdom',
      gradient: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.08) 100%)',
      className: 'bg-jupiter-wisdom'
    },
    typingIndicator: 'deva-guidance',
    icon: '🪐',
    aura: 'jupiter-gold'
  },
  'Shukracharya': {
    colors: {
      primary: '#F8FAFC',
      secondary: '#E2E8F0',
      accent: '#CBD5E1',
      glow: 'rgba(248, 250, 252, 0.6)'
    },
    background: {
      pattern: 'venus-knowledge',
      gradient: 'linear-gradient(135deg, rgba(248, 250, 252, 0.12) 0%, rgba(226, 232, 240, 0.1) 100%)',
      className: 'bg-venus-knowledge'
    },
    typingIndicator: 'sanjeevani-pulse',
    icon: '💫',
    aura: 'venus-white'
  },

  // More Cosmic Deities
  'Surya': {
    colors: {
      primary: '#FB923C',
      secondary: '#F97316',
      accent: '#FFEDD5',
      glow: 'rgba(251, 146, 60, 0.6)'
    },
    background: {
      pattern: 'solar-rays',
      gradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.12) 0%, rgba(249, 115, 22, 0.1) 100%)',
      className: 'bg-solar-rays'
    },
    typingIndicator: 'sun-witness',
    icon: '☀️',
    aura: 'solar-orange'
  },
  'Vayu': {
    colors: {
      primary: '#A5F3FC',
      secondary: '#67E8F9',
      accent: '#CFFAFE',
      glow: 'rgba(165, 243, 252, 0.5)'
    },
    background: {
      pattern: 'wind-flow',
      gradient: 'linear-gradient(135deg, rgba(165, 243, 252, 0.1) 0%, rgba(103, 232, 249, 0.08) 100%)',
      className: 'bg-wind-flow'
    },
    typingIndicator: 'breath-life',
    icon: '💨',
    aura: 'wind-cyan'
  },
  'Agni': {
    colors: {
      primary: '#EF4444',
      secondary: '#DC2626',
      accent: '#FEE2E2',
      glow: 'rgba(239, 68, 68, 0.6)'
    },
    background: {
      pattern: 'sacred-flame',
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(220, 38, 38, 0.1) 100%)',
      className: 'bg-sacred-flame'
    },
    typingIndicator: 'consuming-fire',
    icon: '🔥',
    aura: 'sacred-red'
  },
  'Varuna': {
    colors: {
      primary: '#1E40AF',
      secondary: '#1E3A8A',
      accent: '#DBEAFE',
      glow: 'rgba(30, 64, 175, 0.5)'
    },
    background: {
      pattern: 'cosmic-law',
      gradient: 'linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(30, 58, 138, 0.08) 100%)',
      className: 'bg-cosmic-law'
    },
    typingIndicator: 'noose-bind',
    icon: '🌊',
    aura: 'deep-blue-law'
  },

  // More Avatars
  'Kurma': {
    colors: {
      primary: '#059669',
      secondary: '#047857',
      accent: '#D1FAE5',
      glow: 'rgba(5, 150, 105, 0.4)'
    },
    background: {
      pattern: 'tortoise-shell',
      gradient: 'linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(4, 120, 87, 0.08) 100%)',
      className: 'bg-tortoise-shell'
    },
    typingIndicator: 'steady-foundation',
    icon: '🐢',
    aura: 'tortoise-green'
  },
  'Varaha': {
    colors: {
      primary: '#92400E',
      secondary: '#78350F',
      accent: '#FED7AA',
      glow: 'rgba(146, 64, 14, 0.5)'
    },
    background: {
      pattern: 'boar-rescue',
      gradient: 'linear-gradient(135deg, rgba(146, 64, 14, 0.1) 0%, rgba(120, 53, 15, 0.08) 100%)',
      className: 'bg-boar-rescue'
    },
    typingIndicator: 'earth-lift',
    icon: '🐗',
    aura: 'earth-brown'
  },

  // MAURYA EMPIRE CHARACTERS
  'Chandragupta Maurya': {
    colors: {
      primary: '#8B4513',
      secondary: '#D2691E',
      accent: '#FFD700',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'empire-builder',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(210, 105, 30, 0.05) 100%)',
      className: 'bg-empire-builder'
    },
    typingIndicator: 'empire-expansion',
    icon: '👑',
    aura: 'imperial-gold'
  },
  'Chanakya': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#556B2F',
      accent: '#F0E68C',
      glow: 'rgba(47, 79, 79, 0.4)'
    },
    background: {
      pattern: 'strategic-web',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.08) 0%, rgba(85, 107, 47, 0.05) 100%)',
      className: 'bg-strategic-web'
    },
    typingIndicator: 'strategic-thinking',
    icon: '🧠',
    aura: 'wisdom-aura'
  },
  'Ashoka the Great': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#FFFFFF',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'dharma-chakra',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-dharma-chakra'
    },
    typingIndicator: 'dharma-wheel-spin',
    icon: '☸️',
    aura: 'peaceful-blue'
  },
  'Bindusara': {
    colors: {
      primary: '#CD853F',
      secondary: '#8B4513',
      accent: '#FFD700',
      glow: 'rgba(205, 133, 63, 0.4)'
    },
    background: {
      pattern: 'conquest-south',
      gradient: 'linear-gradient(135deg, rgba(205, 133, 63, 0.08) 0%, rgba(139, 69, 19, 0.05) 100%)',
      className: 'bg-conquest-south'
    },
    typingIndicator: 'territorial-expansion',
    icon: '⚔️',
    aura: 'conquering-bronze'
  },
  "Chanakya's Spy Master": {
    colors: {
      primary: '#1C1C1C',
      secondary: '#3C3C3C',
      accent: '#DC143C',
      glow: 'rgba(220, 20, 60, 0.3)'
    },
    background: {
      pattern: 'shadow-network',
      gradient: 'linear-gradient(135deg, rgba(28, 28, 28, 0.15) 0%, rgba(60, 60, 60, 0.10) 100%)',
      className: 'bg-shadow-network'
    },
    typingIndicator: 'spy-pulse',
    icon: '🕵️',
    aura: 'shadow-cloak'
  },
  'Susima': {
    colors: {
      primary: '#8B0000',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(139, 0, 0, 0.4)'
    },
    background: {
      pattern: 'bitter-crown',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(220, 20, 60, 0.05) 100%)',
      className: 'bg-bitter-crown'
    },
    typingIndicator: 'resentment-pulse',
    icon: '👿',
    aura: 'dark-crimson'
  },
  'Karuvaki': {
    colors: {
      primary: '#FF69B4',
      secondary: '#FFB6C1',
      accent: '#FFFFFF',
      glow: 'rgba(255, 105, 180, 0.3)'
    },
    background: {
      pattern: 'loving-devotion',
      gradient: 'linear-gradient(135deg, rgba(255, 105, 180, 0.06) 0%, rgba(255, 182, 193, 0.04) 100%)',
      className: 'bg-loving-devotion'
    },
    typingIndicator: 'gentle-heartbeat',
    icon: '💖',
    aura: 'loving-pink'
  },
  'Radhagupta': {
    colors: {
      primary: '#DAA520',
      secondary: '#B8860B',
      accent: '#FFFACD',
      glow: 'rgba(218, 165, 32, 0.3)'
    },
    background: {
      pattern: 'loyal-service',
      gradient: 'linear-gradient(135deg, rgba(218, 165, 32, 0.06) 0%, rgba(184, 134, 11, 0.04) 100%)',
      className: 'bg-loyal-service'
    },
    typingIndicator: 'devotion-pulse',
    icon: '🙏',
    aura: 'loyal-gold'
  },
  'Bhadrabahu': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FFA500',
      accent: '#FFFFFF',
      glow: 'rgba(255, 140, 0, 0.3)'
    },
    background: {
      pattern: 'jain-wisdom',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.06) 0%, rgba(255, 165, 0, 0.04) 100%)',
      className: 'bg-jain-wisdom'
    },
    typingIndicator: 'spiritual-glow',
    icon: '🕉️',
    aura: 'saffron-peace'
  },
  'Megasthenes': {
    colors: {
      primary: '#4682B4',
      secondary: '#5F9EA0',
      accent: '#F0E68C',
      glow: 'rgba(70, 130, 180, 0.3)'
    },
    background: {
      pattern: 'greek-columns',
      gradient: 'linear-gradient(135deg, rgba(70, 130, 180, 0.06) 0%, rgba(95, 158, 160, 0.04) 100%)',
      className: 'bg-greek-columns'
    },
    typingIndicator: 'scholarly-observation',
    icon: '📜',
    aura: 'hellenic-blue'
  },
  'Dhana Nanda': {
    colors: {
      primary: '#800020',
      secondary: '#A0522D',
      accent: '#FFD700',
      glow: 'rgba(128, 0, 32, 0.4)'
    },
    background: {
      pattern: 'tyrant-throne',
      gradient: 'linear-gradient(135deg, rgba(128, 0, 32, 0.08) 0%, rgba(160, 82, 45, 0.05) 100%)',
      className: 'bg-tyrant-throne'
    },
    typingIndicator: 'oppressive-weight',
    icon: '😈',
    aura: 'burgundy-tyrant'
  },
  'Pushyamitra Shunga': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#DC143C',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'usurper-shadow',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(160, 82, 45, 0.05) 100%)',
      className: 'bg-usurper-shadow'
    },
    typingIndicator: 'betrayal-pulse',
    icon: '🗡️',
    aura: 'treacherous-brown'
  },

  // GUPTA EMPIRE CHARACTERS
  'Chandragupta I': {
    colors: {
      primary: '#FFD700',
      secondary: '#FFA500',
      accent: '#FFFFFF',
      glow: 'rgba(255, 215, 0, 0.4)'
    },
    background: {
      pattern: 'golden-age-dawn',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(255, 165, 0, 0.05) 100%)',
      className: 'bg-golden-age-dawn'
    },
    typingIndicator: 'dynasty-founding',
    icon: '🌅',
    aura: 'golden-dawn'
  },
  'Samudragupta': {
    colors: {
      primary: '#DC143C',
      secondary: '#B22222',
      accent: '#FFD700',
      glow: 'rgba(220, 20, 60, 0.4)'
    },
    background: {
      pattern: 'veena-warrior',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.08) 0%, rgba(178, 34, 34, 0.05) 100%)',
      className: 'bg-veena-warrior'
    },
    typingIndicator: 'conquest-rhythm',
    icon: '🎵',
    aura: 'warrior-crimson'
  },
  'Chandragupta II Vikramaditya': {
    colors: {
      primary: '#FFD700',
      secondary: '#DAA520',
      accent: '#FFFFFF',
      glow: 'rgba(255, 215, 0, 0.5)'
    },
    background: {
      pattern: 'cultural-zenith',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.10) 0%, rgba(218, 165, 32, 0.06) 100%)',
      className: 'bg-cultural-zenith'
    },
    typingIndicator: 'golden-age-pulse',
    icon: '✨',
    aura: 'supreme-gold'
  },
  'Kalidasa': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#E6E6FA',
      glow: 'rgba(147, 112, 219, 0.4)'
    },
    background: {
      pattern: 'poetic-verses',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.08) 0%, rgba(138, 43, 226, 0.05) 100%)',
      className: 'bg-poetic-verses'
    },
    typingIndicator: 'lyrical-flow',
    icon: '📖',
    aura: 'poetic-purple'
  },
  'Aryabhata': {
    colors: {
      primary: '#4169E1',
      secondary: '#0000CD',
      accent: '#F0E68C',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'mathematical-cosmos',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(0, 0, 205, 0.05) 100%)',
      className: 'bg-mathematical-cosmos'
    },
    typingIndicator: 'calculation-spin',
    icon: '🔢',
    aura: 'scientific-blue'
  },
  'Kumaragupta I': {
    colors: {
      primary: '#CD853F',
      secondary: '#D2691E',
      accent: '#FFD700',
      glow: 'rgba(205, 133, 63, 0.4)'
    },
    background: {
      pattern: 'sustained-glory',
      gradient: 'linear-gradient(135deg, rgba(205, 133, 63, 0.08) 0%, rgba(210, 105, 30, 0.05) 100%)',
      className: 'bg-sustained-glory'
    },
    typingIndicator: 'steady-reign',
    icon: '🏛️',
    aura: 'sustained-gold'
  },
  'Skandagupta': {
    colors: {
      primary: '#8B0000',
      secondary: '#DC143C',
      accent: '#C0C0C0',
      glow: 'rgba(139, 0, 0, 0.4)'
    },
    background: {
      pattern: 'last-defender',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(220, 20, 60, 0.05) 100%)',
      className: 'bg-last-defender'
    },
    typingIndicator: 'defensive-stand',
    icon: '🛡️',
    aura: 'defender-red'
  },
  'Dhruvadevi': {
    colors: {
      primary: '#FF1493',
      secondary: '#FF69B4',
      accent: '#FFB6C1',
      glow: 'rgba(255, 20, 147, 0.3)'
    },
    background: {
      pattern: 'queen-wisdom',
      gradient: 'linear-gradient(135deg, rgba(255, 20, 147, 0.06) 0%, rgba(255, 105, 180, 0.04) 100%)',
      className: 'bg-queen-wisdom'
    },
    typingIndicator: 'regal-grace',
    icon: '👸',
    aura: 'royal-pink'
  },
  'Fa-Hien': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FFD700',
      accent: '#FFFACD',
      glow: 'rgba(255, 140, 0, 0.3)'
    },
    background: {
      pattern: 'pilgrim-journey',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.06) 0%, rgba(255, 215, 0, 0.04) 100%)',
      className: 'bg-pilgrim-journey'
    },
    typingIndicator: 'wandering-monk',
    icon: '🙏',
    aura: 'dharma-orange'
  },
  'Vatsyayana': {
    colors: {
      primary: '#DC143C',
      secondary: '#FF1493',
      accent: '#FFB6C1',
      glow: 'rgba(220, 20, 60, 0.3)'
    },
    background: {
      pattern: 'kama-sutra',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.06) 0%, rgba(255, 20, 147, 0.04) 100%)',
      className: 'bg-kama-sutra'
    },
    typingIndicator: 'desire-pulse',
    icon: '💘',
    aura: 'passionate-red'
  },
  'Toramana': {
    colors: {
      primary: '#696969',
      secondary: '#A9A9A9',
      accent: '#DC143C',
      glow: 'rgba(105, 105, 105, 0.4)'
    },
    background: {
      pattern: 'huna-invasion',
      gradient: 'linear-gradient(135deg, rgba(105, 105, 105, 0.08) 0%, rgba(169, 169, 169, 0.05) 100%)',
      className: 'bg-huna-invasion'
    },
    typingIndicator: 'nomad-advance',
    icon: '🐎',
    aura: 'steel-invader'
  },
  'Mihirakula': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#696969',
      accent: '#8B0000',
      glow: 'rgba(47, 79, 79, 0.4)'
    },
    background: {
      pattern: 'destructive-conquest',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.10) 0%, rgba(105, 105, 105, 0.06) 100%)',
      className: 'bg-destructive-conquest'
    },
    typingIndicator: 'cruel-advance',
    icon: '☠️',
    aura: 'dark-destroyer'
  },

  // CHOLA EMPIRE CHARACTERS
  'Raja Raja Chola I': {
    colors: {
      primary: '#FF6347',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.4)'
    },
    background: {
      pattern: 'temple-glory',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.08) 0%, rgba(220, 20, 60, 0.05) 100%)',
      className: 'bg-temple-glory'
    },
    typingIndicator: 'temple-construction',
    icon: '🏰',
    aura: 'chola-crimson'
  },
  'Rajendra Chola I': {
    colors: {
      primary: '#B22222',
      secondary: '#8B0000',
      accent: '#FFD700',
      glow: 'rgba(178, 34, 34, 0.4)'
    },
    background: {
      pattern: 'ganges-conquest',
      gradient: 'linear-gradient(135deg, rgba(178, 34, 34, 0.08) 0%, rgba(139, 0, 0, 0.05) 100%)',
      className: 'bg-ganges-conquest'
    },
    typingIndicator: 'naval-expansion',
    icon: '⛵',
    aura: 'conqueror-red'
  },
  'Karikala Chola': {
    colors: {
      primary: '#4682B4',
      secondary: '#5F9EA0',
      accent: '#FFD700',
      glow: 'rgba(70, 130, 180, 0.4)'
    },
    background: {
      pattern: 'grand-anicut',
      gradient: 'linear-gradient(135deg, rgba(70, 130, 180, 0.08) 0%, rgba(95, 158, 160, 0.05) 100%)',
      className: 'bg-grand-anicut'
    },
    typingIndicator: 'water-engineering',
    icon: '🌊',
    aura: 'river-blue'
  },
  'Kundavai Pirattiyar': {
    colors: {
      primary: '#FF1493',
      secondary: '#FF69B4',
      accent: '#FFD700',
      glow: 'rgba(255, 20, 147, 0.3)'
    },
    background: {
      pattern: 'diplomatic-grace',
      gradient: 'linear-gradient(135deg, rgba(255, 20, 147, 0.06) 0%, rgba(255, 105, 180, 0.04) 100%)',
      className: 'bg-diplomatic-grace'
    },
    typingIndicator: 'royal-influence',
    icon: '👑',
    aura: 'princess-pink'
  },
  'Rajaraja Narendra': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#FFD700',
      glow: 'rgba(147, 112, 219, 0.3)'
    },
    background: {
      pattern: 'alliance-bridge',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.06) 0%, rgba(138, 43, 226, 0.04) 100%)',
      className: 'bg-alliance-bridge'
    },
    typingIndicator: 'cultural-fusion',
    icon: '🤝',
    aura: 'purple-alliance'
  },
  'Kulottunga Chola I': {
    colors: {
      primary: '#DAA520',
      secondary: '#B8860B',
      accent: '#FFD700',
      glow: 'rgba(218, 165, 32, 0.4)'
    },
    background: {
      pattern: 'reform-prosperity',
      gradient: 'linear-gradient(135deg, rgba(218, 165, 32, 0.08) 0%, rgba(184, 134, 11, 0.05) 100%)',
      className: 'bg-reform-prosperity'
    },
    typingIndicator: 'benevolent-rule',
    icon: '⚖️',
    aura: 'reformer-gold'
  },
  'Nangai (Temple Devadasi)': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      glow: 'rgba(255, 140, 0, 0.3)'
    },
    background: {
      pattern: 'sacred-dance',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.06) 0%, rgba(255, 215, 0, 0.04) 100%)',
      className: 'bg-sacred-dance'
    },
    typingIndicator: 'bharatanatyam-flow',
    icon: '💃',
    aura: 'dancer-orange'
  },
  'Admiral Sivalinga Chetty': {
    colors: {
      primary: '#1E90FF',
      secondary: '#4169E1',
      accent: '#FFFFFF',
      glow: 'rgba(30, 144, 255, 0.4)'
    },
    background: {
      pattern: 'naval-supremacy',
      gradient: 'linear-gradient(135deg, rgba(30, 144, 255, 0.08) 0%, rgba(65, 105, 225, 0.05) 100%)',
      className: 'bg-naval-supremacy'
    },
    typingIndicator: 'ocean-conquest',
    icon: '⚓',
    aura: 'ocean-blue'
  },
  'Ottakoothar': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#F0E68C',
      glow: 'rgba(139, 69, 19, 0.3)'
    },
    background: {
      pattern: 'tamil-poetry',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.06) 0%, rgba(160, 82, 45, 0.04) 100%)',
      className: 'bg-tamil-poetry'
    },
    typingIndicator: 'verse-composition',
    icon: '✍️',
    aura: 'poet-brown'
  },
  'Vira Rajendra Chola': {
    colors: {
      primary: '#8B0000',
      secondary: '#A0522D',
      accent: '#C0C0C0',
      glow: 'rgba(139, 0, 0, 0.4)'
    },
    background: {
      pattern: 'twilight-glory',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(160, 82, 45, 0.05) 100%)',
      className: 'bg-twilight-glory'
    },
    typingIndicator: 'declining-empire',
    icon: '🌅',
    aura: 'sunset-red'
  },
  'Someshvara IV (Chalukya)': {
    colors: {
      primary: '#696969',
      secondary: '#A9A9A9',
      accent: '#FFD700',
      glow: 'rgba(105, 105, 105, 0.3)'
    },
    background: {
      pattern: 'rival-conflict',
      gradient: 'linear-gradient(135deg, rgba(105, 105, 105, 0.06) 0%, rgba(169, 169, 169, 0.04) 100%)',
      className: 'bg-rival-conflict'
    },
    typingIndicator: 'endless-warfare',
    icon: '⚔️',
    aura: 'gray-rivalry'
  },
  'Pandya Rebel King': {
    colors: {
      primary: '#8B4513',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'rebellion-spirit',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(220, 20, 60, 0.05) 100%)',
      className: 'bg-rebellion-spirit'
    },
    typingIndicator: 'resistance-pulse',
    icon: '✊',
    aura: 'rebel-brown'
  },

  // MARATHA EMPIRE CHARACTERS
  'Chhatrapati Shivaji Maharaj': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FF6347',
      accent: '#FFD700',
      glow: 'rgba(255, 140, 0, 0.5)'
    },
    background: {
      pattern: 'swarajya-glory',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.10) 0%, rgba(255, 99, 71, 0.06) 100%)',
      className: 'bg-swarajya-glory'
    },
    typingIndicator: 'bhavani-blessing',
    icon: '🦁',
    aura: 'saffron-king'
  },
  'Sambhaji Maharaj': {
    colors: {
      primary: '#DC143C',
      secondary: '#8B0000',
      accent: '#FFD700',
      glow: 'rgba(220, 20, 60, 0.4)'
    },
    background: {
      pattern: 'martyr-defiance',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.08) 0%, rgba(139, 0, 0, 0.05) 100%)',
      className: 'bg-martyr-defiance'
    },
    typingIndicator: 'unyielding-spirit',
    icon: '⚔️',
    aura: 'martyr-crimson'
  },
  'Jijabai': {
    colors: {
      primary: '#FFD700',
      secondary: '#FFA500',
      accent: '#FFFFFF',
      glow: 'rgba(255, 215, 0, 0.3)'
    },
    background: {
      pattern: 'mother-guidance',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.06) 0%, rgba(255, 165, 0, 0.04) 100%)',
      className: 'bg-mother-guidance'
    },
    typingIndicator: 'maternal-wisdom',
    icon: '🙏',
    aura: 'mother-gold'
  },
  'Peshwa Baji Rao I': {
    colors: {
      primary: '#DC143C',
      secondary: '#B22222',
      accent: '#FFD700',
      glow: 'rgba(220, 20, 60, 0.5)'
    },
    background: {
      pattern: 'undefeated-cavalry',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.10) 0%, rgba(178, 34, 34, 0.06) 100%)',
      className: 'bg-undefeated-cavalry'
    },
    typingIndicator: 'rapid-conquest',
    icon: '🐎',
    aura: 'peshwa-red'
  },
  'Tarabai Bhosale': {
    colors: {
      primary: '#8B0000',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(139, 0, 0, 0.4)'
    },
    background: {
      pattern: 'warrior-queen',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(220, 20, 60, 0.05) 100%)',
      className: 'bg-warrior-queen'
    },
    typingIndicator: 'fierce-resistance',
    icon: '👸',
    aura: 'queen-warrior-red'
  },
  'Ahilyabai Holkar': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#E6E6FA',
      glow: 'rgba(147, 112, 219, 0.3)'
    },
    background: {
      pattern: 'dharmic-governance',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.06) 0%, rgba(138, 43, 226, 0.04) 100%)',
      className: 'bg-dharmic-governance'
    },
    typingIndicator: 'compassionate-rule',
    icon: '🕉️',
    aura: 'purple-dharma'
  },
  'Tanaji Malusare': {
    colors: {
      primary: '#FF6347',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.4)'
    },
    background: {
      pattern: 'sinhagad-climb',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.08) 0%, rgba(220, 20, 60, 0.05) 100%)',
      className: 'bg-sinhagad-climb'
    },
    typingIndicator: 'lion-courage',
    icon: '🦁',
    aura: 'lion-orange'
  },
  'Maharani Yesubai': {
    colors: {
      primary: '#4682B4',
      secondary: '#5F9EA0',
      accent: '#FFFFFF',
      glow: 'rgba(70, 130, 180, 0.3)'
    },
    background: {
      pattern: 'enduring-captivity',
      gradient: 'linear-gradient(135deg, rgba(70, 130, 180, 0.06) 0%, rgba(95, 158, 160, 0.04) 100%)',
      className: 'bg-enduring-captivity'
    },
    typingIndicator: 'dignified-suffering',
    icon: '💎',
    aura: 'sapphire-dignity'
  },
  'Santaji Ghorpade': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#556B2F',
      accent: '#FFD700',
      glow: 'rgba(47, 79, 79, 0.4)'
    },
    background: {
      pattern: 'guerrilla-tactics',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.08) 0%, rgba(85, 107, 47, 0.05) 100%)',
      className: 'bg-guerrilla-tactics'
    },
    typingIndicator: 'swift-raids',
    icon: '⚡',
    aura: 'guerrilla-green'
  },
  'Ramchandra Pant Amatya': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#F0E68C',
      glow: 'rgba(139, 69, 19, 0.3)'
    },
    background: {
      pattern: 'administrative-order',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.06) 0%, rgba(160, 82, 45, 0.04) 100%)',
      className: 'bg-administrative-order'
    },
    typingIndicator: 'systematic-governance',
    icon: '📜',
    aura: 'administrator-brown'
  },
  'Aurangzeb': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#1C1C1C',
      accent: '#8B0000',
      glow: 'rgba(47, 79, 79, 0.5)'
    },
    background: {
      pattern: 'tyrant-reign',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.12) 0%, rgba(28, 28, 28, 0.08) 100%)',
      className: 'bg-tyrant-reign'
    },
    typingIndicator: 'oppressive-advance',
    icon: '👿',
    aura: 'dark-tyrant'
  },
  'Shaista Khan': {
    colors: {
      primary: '#696969',
      secondary: '#808080',
      accent: '#8B0000',
      glow: 'rgba(105, 105, 105, 0.4)'
    },
    background: {
      pattern: 'humiliated-general',
      gradient: 'linear-gradient(135deg, rgba(105, 105, 105, 0.08) 0%, rgba(128, 128, 128, 0.05) 100%)',
      className: 'bg-humiliated-general'
    },
    typingIndicator: 'shame-pulse',
    icon: '🤕',
    aura: 'gray-shame'
  },

  // AHOM KINGDOM CHARACTERS
  'Chaolung Sukapha': {
    colors: {
      primary: '#228B22',
      secondary: '#32CD32',
      accent: '#FFD700',
      glow: 'rgba(34, 139, 34, 0.4)'
    },
    background: {
      pattern: 'kingdom-founding',
      gradient: 'linear-gradient(135deg, rgba(34, 139, 34, 0.08) 0%, rgba(50, 205, 50, 0.05) 100%)',
      className: 'bg-kingdom-founding'
    },
    typingIndicator: 'brahmaputra-flow',
    icon: '🌿',
    aura: 'founder-green'
  },
  'Lachit Borphukan': {
    colors: {
      primary: '#DC143C',
      secondary: '#FF6347',
      accent: '#FFD700',
      glow: 'rgba(220, 20, 60, 0.5)'
    },
    background: {
      pattern: 'saraighat-victory',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.10) 0%, rgba(255, 99, 71, 0.06) 100%)',
      className: 'bg-saraighat-victory'
    },
    typingIndicator: 'naval-heroism',
    icon: '⚔️',
    aura: 'hero-crimson'
  },
  'Chakradhwaj Singha': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#FFFFFF',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'resurgence-pride',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-resurgence-pride'
    },
    typingIndicator: 'cultural-revival',
    icon: '🏰',
    aura: 'royal-blue'
  },
  'Rudra Singha': {
    colors: {
      primary: '#DAA520',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      glow: 'rgba(218, 165, 32, 0.4)'
    },
    background: {
      pattern: 'golden-prosperity',
      gradient: 'linear-gradient(135deg, rgba(218, 165, 32, 0.08) 0%, rgba(255, 215, 0, 0.05) 100%)',
      className: 'bg-golden-prosperity'
    },
    typingIndicator: 'cultural-zenith',
    icon: '👑',
    aura: 'golden-king'
  },
  'Joymoti Konwari': {
    colors: {
      primary: '#FF1493',
      secondary: '#FF69B4',
      accent: '#FFFFFF',
      glow: 'rgba(255, 20, 147, 0.3)'
    },
    background: {
      pattern: 'martyrdom-light',
      gradient: 'linear-gradient(135deg, rgba(255, 20, 147, 0.06) 0%, rgba(255, 105, 180, 0.04) 100%)',
      className: 'bg-martyrdom-light'
    },
    typingIndicator: 'sacrifice-glow',
    icon: '🌸',
    aura: 'martyr-pink'
  },
  'Gadadhar Singha': {
    colors: {
      primary: '#8B0000',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(139, 0, 0, 0.4)'
    },
    background: {
      pattern: 'restoration-power',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(220, 20, 60, 0.05) 100%)',
      className: 'bg-restoration-power'
    },
    typingIndicator: 'kingdom-restoration',
    icon: '⚔️',
    aura: 'restorer-red'
  },
  'Suhungmung (Swarganarayana)': {
    colors: {
      primary: '#4B0082',
      secondary: '#8A2BE2',
      accent: '#FFD700',
      glow: 'rgba(75, 0, 130, 0.4)'
    },
    background: {
      pattern: 'territorial-expansion',
      gradient: 'linear-gradient(135deg, rgba(75, 0, 130, 0.08) 0%, rgba(138, 43, 226, 0.05) 100%)',
      className: 'bg-territorial-expansion'
    },
    typingIndicator: 'expansion-wave',
    icon: '🗺️',
    aura: 'indigo-expander'
  },
  'Sati Sadhani': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      glow: 'rgba(255, 140, 0, 0.3)'
    },
    background: {
      pattern: 'devotion-sacrifice',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.06) 0%, rgba(255, 215, 0, 0.04) 100%)',
      className: 'bg-devotion-sacrifice'
    },
    typingIndicator: 'eternal-devotion',
    icon: '🕉️',
    aura: 'orange-devotion'
  },
  'Pratap Singha': {
    colors: {
      primary: '#B22222',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(178, 34, 34, 0.4)'
    },
    background: {
      pattern: 'military-might',
      gradient: 'linear-gradient(135deg, rgba(178, 34, 34, 0.08) 0%, rgba(220, 20, 60, 0.05) 100%)',
      className: 'bg-military-might'
    },
    typingIndicator: 'strategic-warfare',
    icon: '⚔️',
    aura: 'warrior-red'
  },
  'Momai Tamuli Borbarua': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#F0E68C',
      glow: 'rgba(139, 69, 19, 0.3)'
    },
    background: {
      pattern: 'administrative-excellence',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.06) 0%, rgba(160, 82, 45, 0.04) 100%)',
      className: 'bg-administrative-excellence'
    },
    typingIndicator: 'efficient-governance',
    icon: '📜',
    aura: 'administrator-brown'
  },
  'Mir Jumla II': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#696969',
      accent: '#8B0000',
      glow: 'rgba(47, 79, 79, 0.4)'
    },
    background: {
      pattern: 'doomed-invasion',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.08) 0%, rgba(105, 105, 105, 0.05) 100%)',
      className: 'bg-doomed-invasion'
    },
    typingIndicator: 'retreat-despair',
    icon: '☠️',
    aura: 'invader-gray'
  },
  'Ram Singh I (Mughal)': {
    colors: {
      primary: '#696969',
      secondary: '#A9A9A9',
      accent: '#8B0000',
      glow: 'rgba(105, 105, 105, 0.3)'
    },
    background: {
      pattern: 'defeated-general',
      gradient: 'linear-gradient(135deg, rgba(105, 105, 105, 0.06) 0%, rgba(169, 169, 169, 0.04) 100%)',
      className: 'bg-defeated-general'
    },
    typingIndicator: 'humiliation-pulse',
    icon: '🛡️',
    aura: 'defeated-gray'
  },

  // VIJAYANAGARA EMPIRE CHARACTERS
  'Krishnadevaraya': {
    colors: {
      primary: '#FFD700',
      secondary: '#FFA500',
      accent: '#FF6347',
      glow: 'rgba(255, 215, 0, 0.5)'
    },
    background: {
      pattern: 'golden-prosperity',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.10) 0%, rgba(255, 165, 0, 0.06) 100%)',
      className: 'bg-golden-prosperity'
    },
    typingIndicator: 'imperial-glory',
    icon: '👑',
    aura: 'emperor-gold'
  },
  'Harihara I': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#FFD700',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'empire-foundation',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-empire-foundation'
    },
    typingIndicator: 'founding-vision',
    icon: '🏛️',
    aura: 'founder-blue'
  },
  'Bukka Raya I': {
    colors: {
      primary: '#8B0000',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(139, 0, 0, 0.4)'
    },
    background: {
      pattern: 'consolidation-power',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(220, 20, 60, 0.05) 100%)',
      className: 'bg-consolidation-power'
    },
    typingIndicator: 'empire-building',
    icon: '⚔️',
    aura: 'consolidator-red'
  },
  'Deva Raya II': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#FFD700',
      glow: 'rgba(147, 112, 219, 0.4)'
    },
    background: {
      pattern: 'military-reform',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.08) 0%, rgba(138, 43, 226, 0.05) 100%)',
      className: 'bg-military-reform'
    },
    typingIndicator: 'strategic-innovation',
    icon: '🐎',
    aura: 'purple-strategist'
  },
  'Tenali Ramakrishna': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      glow: 'rgba(255, 140, 0, 0.3)'
    },
    background: {
      pattern: 'witty-wisdom',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.06) 0%, rgba(255, 215, 0, 0.04) 100%)',
      className: 'bg-witty-wisdom'
    },
    typingIndicator: 'clever-jest',
    icon: '😄',
    aura: 'jester-orange'
  },
  'Aliya Rama Raya': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#DC143C',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'tragic-ambition',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(160, 82, 45, 0.05) 100%)',
      className: 'bg-tragic-ambition'
    },
    typingIndicator: 'downfall-shadow',
    icon: '💔',
    aura: 'tragic-brown'
  },
  'Gangadevi': {
    colors: {
      primary: '#4682B4',
      secondary: '#5F9EA0',
      accent: '#E6E6FA',
      glow: 'rgba(70, 130, 180, 0.3)'
    },
    background: {
      pattern: 'literary-queen',
      gradient: 'linear-gradient(135deg, rgba(70, 130, 180, 0.06) 0%, rgba(95, 158, 160, 0.04) 100%)',
      className: 'bg-literary-queen'
    },
    typingIndicator: 'poetic-composition',
    icon: '✍️',
    aura: 'poet-blue'
  },
  'Vidyaranya Swami': {
    colors: {
      primary: '#FF6347',
      secondary: '#FF8C00',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.3)'
    },
    background: {
      pattern: 'sage-guidance',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.06) 0%, rgba(255, 140, 0, 0.04) 100%)',
      className: 'bg-sage-guidance'
    },
    typingIndicator: 'spiritual-wisdom',
    icon: '🕉️',
    aura: 'saffron-sage'
  },
  'Timmarusu': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#556B2F',
      accent: '#FFD700',
      glow: 'rgba(47, 79, 79, 0.3)'
    },
    background: {
      pattern: 'loyal-minister',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.06) 0%, rgba(85, 107, 47, 0.04) 100%)',
      className: 'bg-loyal-minister'
    },
    typingIndicator: 'dedicated-service',
    icon: '🙏',
    aura: 'loyal-green'
  },
  'Domingo Paes': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#F0E68C',
      glow: 'rgba(139, 69, 19, 0.3)'
    },
    background: {
      pattern: 'chronicler-observation',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.06) 0%, rgba(160, 82, 45, 0.04) 100%)',
      className: 'bg-chronicler-observation'
    },
    typingIndicator: 'record-keeping',
    icon: '📖',
    aura: 'chronicler-brown'
  },
  'Muhammad Shah Bahmani': {
    colors: {
      primary: '#696969',
      secondary: '#808080',
      accent: '#8B0000',
      glow: 'rgba(105, 105, 105, 0.3)'
    },
    background: {
      pattern: 'sultanate-rivalry',
      gradient: 'linear-gradient(135deg, rgba(105, 105, 105, 0.06) 0%, rgba(128, 128, 128, 0.04) 100%)',
      className: 'bg-sultanate-rivalry'
    },
    typingIndicator: 'eternal-conflict',
    icon: '⚔️',
    aura: 'rival-gray'
  },
  'Adil Shah (Bijapur)': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#1C1C1C',
      accent: '#8B0000',
      glow: 'rgba(47, 79, 79, 0.4)'
    },
    background: {
      pattern: 'empire-destroyer',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.08) 0%, rgba(28, 28, 28, 0.05) 100%)',
      className: 'bg-empire-destroyer'
    },
    typingIndicator: 'destructive-coalition',
    icon: '☠️',
    aura: 'destroyer-dark'
  },

  // 1857 REBELLION CHARACTERS
  'Mangal Pandey': {
    colors: {
      primary: '#DC143C',
      secondary: '#8B0000',
      accent: '#FFD700',
      glow: 'rgba(220, 20, 60, 0.5)'
    },
    background: {
      pattern: 'rebellion-spark',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.10) 0%, rgba(139, 0, 0, 0.06) 100%)',
      className: 'bg-rebellion-spark'
    },
    typingIndicator: 'revolutionary-fire',
    icon: '🔥',
    aura: 'rebel-crimson'
  },
  'Rani Lakshmibai': {
    colors: {
      primary: '#FF6347',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.5)'
    },
    background: {
      pattern: 'warrior-queen',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.10) 0%, rgba(220, 20, 60, 0.06) 100%)',
      className: 'bg-warrior-queen-1857'
    },
    typingIndicator: 'sword-swing',
    icon: '⚔️',
    aura: 'queen-warrior-fire'
  },
  'Tatya Tope': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#FFD700',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'guerrilla-master',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(160, 82, 45, 0.05) 100%)',
      className: 'bg-guerrilla-master'
    },
    typingIndicator: 'tactical-movement',
    icon: '🎯',
    aura: 'strategist-brown'
  },
  'Nana Sahib': {
    colors: {
      primary: '#DAA520',
      secondary: '#B8860B',
      accent: '#FFD700',
      glow: 'rgba(218, 165, 32, 0.4)'
    },
    background: {
      pattern: 'peshwa-heir',
      gradient: 'linear-gradient(135deg, rgba(218, 165, 32, 0.08) 0%, rgba(184, 134, 11, 0.05) 100%)',
      className: 'bg-peshwa-heir'
    },
    typingIndicator: 'royal-defiance',
    icon: '👑',
    aura: 'golden-peshwa'
  },
  'Begum Hazrat Mahal': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#FFD700',
      glow: 'rgba(147, 112, 219, 0.4)'
    },
    background: {
      pattern: 'awadh-resistance',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.08) 0%, rgba(138, 43, 226, 0.05) 100%)',
      className: 'bg-awadh-resistance'
    },
    typingIndicator: 'regal-rebellion',
    icon: '👸',
    aura: 'purple-queen'
  },
  'Kunwar Singh': {
    colors: {
      primary: '#B22222',
      secondary: '#8B0000',
      accent: '#C0C0C0',
      glow: 'rgba(178, 34, 34, 0.5)'
    },
    background: {
      pattern: 'aged-valor',
      gradient: 'linear-gradient(135deg, rgba(178, 34, 34, 0.10) 0%, rgba(139, 0, 0, 0.06) 100%)',
      className: 'bg-aged-valor'
    },
    typingIndicator: 'warrior-wisdom',
    icon: '🦁',
    aura: 'aged-warrior-red'
  },
  'Bahadur Shah Zafar': {
    colors: {
      primary: '#4B0082',
      secondary: '#8A2BE2',
      accent: '#E6E6FA',
      glow: 'rgba(75, 0, 130, 0.4)'
    },
    background: {
      pattern: 'last-mughal',
      gradient: 'linear-gradient(135deg, rgba(75, 0, 130, 0.08) 0%, rgba(138, 43, 226, 0.05) 100%)',
      className: 'bg-last-mughal'
    },
    typingIndicator: 'poetic-melancholy',
    icon: '📜',
    aura: 'royal-purple-fading'
  },
  'Bakht Khan': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#556B2F',
      accent: '#FFD700',
      glow: 'rgba(47, 79, 79, 0.4)'
    },
    background: {
      pattern: 'military-commander',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.08) 0%, rgba(85, 107, 47, 0.05) 100%)',
      className: 'bg-military-commander'
    },
    typingIndicator: 'disciplined-command',
    icon: '⚔️',
    aura: 'commander-green'
  },
  'Rao Tula Ram': {
    colors: {
      primary: '#8B4513',
      secondary: '#D2691E',
      accent: '#FFD700',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'peasant-leader',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(210, 105, 30, 0.05) 100%)',
      className: 'bg-peasant-leader'
    },
    typingIndicator: 'earthy-resistance',
    icon: '🌾',
    aura: 'earth-brown'
  },
  'Maulvi Ahmadullah Shah': {
    colors: {
      primary: '#228B22',
      secondary: '#006400',
      accent: '#FFD700',
      glow: 'rgba(34, 139, 34, 0.4)'
    },
    background: {
      pattern: 'spiritual-warrior',
      gradient: 'linear-gradient(135deg, rgba(34, 139, 34, 0.08) 0%, rgba(0, 100, 0, 0.05) 100%)',
      className: 'bg-spiritual-warrior'
    },
    typingIndicator: 'prophetic-vision',
    icon: '☪️',
    aura: 'green-faith'
  },
  'Azimullah Khan': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#FFFFFF',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'diplomatic-strategist',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-diplomatic-strategist'
    },
    typingIndicator: 'strategic-intelligence',
    icon: '🎓',
    aura: 'blue-diplomat'
  },
  'General Hugh Rose': {
    colors: {
      primary: '#696969',
      secondary: '#A9A9A9',
      accent: '#8B0000',
      glow: 'rgba(105, 105, 105, 0.4)'
    },
    background: {
      pattern: 'british-suppressor',
      gradient: 'linear-gradient(135deg, rgba(105, 105, 105, 0.08) 0%, rgba(169, 169, 169, 0.05) 100%)',
      className: 'bg-british-suppressor'
    },
    typingIndicator: 'military-efficiency',
    icon: '🎖️',
    aura: 'colonial-gray'
  },

  // FREEDOM FIGHTERS CHARACTERS
  'Mahatma Gandhi': {
    colors: {
      primary: '#FFFFFF',
      secondary: '#FFD700',
      accent: '#FF9933',
      glow: 'rgba(255, 255, 255, 0.5)'
    },
    background: {
      pattern: 'satyagraha',
      gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 215, 0, 0.06) 100%)',
      className: 'bg-satyagraha'
    },
    typingIndicator: 'peaceful-resistance',
    icon: '☮️',
    aura: 'white-peace'
  },
  'Jawaharlal Nehru': {
    colors: {
      primary: '#DC143C',
      secondary: '#B22222',
      accent: '#FFD700',
      glow: 'rgba(220, 20, 60, 0.4)'
    },
    background: {
      pattern: 'tryst-destiny',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.08) 0%, rgba(178, 34, 34, 0.05) 100%)',
      className: 'bg-tryst-destiny'
    },
    typingIndicator: 'visionary-speech',
    icon: '🌹',
    aura: 'red-rose'
  },
  'Sardar Vallabhbhai Patel': {
    colors: {
      primary: '#A0522D',
      secondary: '#8B4513',
      accent: '#FFD700',
      glow: 'rgba(160, 82, 45, 0.5)'
    },
    background: {
      pattern: 'iron-man',
      gradient: 'linear-gradient(135deg, rgba(160, 82, 45, 0.10) 0%, rgba(139, 69, 19, 0.06) 100%)',
      className: 'bg-iron-man'
    },
    typingIndicator: 'firm-determination',
    icon: '🗿',
    aura: 'iron-brown'
  },
  'Gopal Krishna Gokhale': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#F0E68C',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'moderate-reformer',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(160, 82, 45, 0.05) 100%)',
      className: 'bg-moderate-reformer'
    },
    typingIndicator: 'wise-counsel',
    icon: '📖',
    aura: 'brown-wisdom'
  },
  'Annie Besant': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#FFD700',
      glow: 'rgba(147, 112, 219, 0.4)'
    },
    background: {
      pattern: 'home-rule-champion',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.08) 0%, rgba(138, 43, 226, 0.05) 100%)',
      className: 'bg-home-rule'
    },
    typingIndicator: 'eloquent-advocacy',
    icon: '🏛️',
    aura: 'purple-advocate'
  },
  'Khan Abdul Ghaffar Khan': {
    colors: {
      primary: '#8B4513',
      secondary: '#D2691E',
      accent: '#FFFFFF',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'frontier-gandhi',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(210, 105, 30, 0.05) 100%)',
      className: 'bg-frontier-gandhi'
    },
    typingIndicator: 'gentle-strength',
    icon: '🕌',
    aura: 'brown-pashtun'
  },
  'Shaheed Bhagat Singh': {
    colors: {
      primary: '#FFD700',
      secondary: '#FFA500',
      accent: '#DC143C',
      glow: 'rgba(255, 215, 0, 0.5)'
    },
    background: {
      pattern: 'inquilab-zindabad',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.10) 0%, rgba(255, 165, 0, 0.06) 100%)',
      className: 'bg-inquilab'
    },
    typingIndicator: 'revolutionary-thought',
    icon: '✊',
    aura: 'golden-martyr'
  },
  'Lala Lajpat Rai': {
    colors: {
      primary: '#FF6347',
      secondary: '#FF4500',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.5)'
    },
    background: {
      pattern: 'punjab-kesari',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.10) 0%, rgba(255, 69, 0, 0.06) 100%)',
      className: 'bg-punjab-kesari'
    },
    typingIndicator: 'lion-roar',
    icon: '🦁',
    aura: 'lion-orange'
  },
  'Bal Gangadhar Tilak': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FF6347',
      accent: '#FFD700',
      glow: 'rgba(255, 140, 0, 0.5)'
    },
    background: {
      pattern: 'swaraj-birthright',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.10) 0%, rgba(255, 99, 71, 0.06) 100%)',
      className: 'bg-swaraj-birthright'
    },
    typingIndicator: 'militant-nationalism',
    icon: '🔱',
    aura: 'saffron-militant'
  },
  'Bipin Chandra Pal': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#FFD700',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'intellectual-revolution',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-intellectual-revolution'
    },
    typingIndicator: 'visionary-writing',
    icon: '✍️',
    aura: 'blue-intellectual'
  },
  'Maulana Abul Kalam Azad': {
    colors: {
      primary: '#228B22',
      secondary: '#32CD32',
      accent: '#FFFFFF',
      glow: 'rgba(34, 139, 34, 0.4)'
    },
    background: {
      pattern: 'composite-nationalism',
      gradient: 'linear-gradient(135deg, rgba(34, 139, 34, 0.08) 0%, rgba(50, 205, 50, 0.05) 100%)',
      className: 'bg-composite-nationalism'
    },
    typingIndicator: 'scholarly-wisdom',
    icon: '📚',
    aura: 'green-scholar'
  },
  'Dr. Rajendra Prasad': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#F0E68C',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'constitutional-foundation',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(160, 82, 45, 0.05) 100%)',
      className: 'bg-constitutional'
    },
    typingIndicator: 'gentle-authority',
    icon: '⚖️',
    aura: 'brown-wisdom'
  },
  'Chakravarti Rajagopalachari': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#FFD700',
      glow: 'rgba(147, 112, 219, 0.4)'
    },
    background: {
      pattern: 'sage-statesman',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.08) 0%, rgba(138, 43, 226, 0.05) 100%)',
      className: 'bg-sage-statesman'
    },
    typingIndicator: 'principled-independence',
    icon: '🎭',
    aura: 'purple-sage'
  },
  'Lord Mountbatten': {
    colors: {
      primary: '#696969',
      secondary: '#A9A9A9',
      accent: '#C0C0C0',
      glow: 'rgba(105, 105, 105, 0.3)'
    },
    background: {
      pattern: 'partition-architect',
      gradient: 'linear-gradient(135deg, rgba(105, 105, 105, 0.08) 0%, rgba(169, 169, 169, 0.05) 100%)',
      className: 'bg-partition'
    },
    typingIndicator: 'diplomatic-haste',
    icon: '🇬🇧',
    aura: 'british-gray'
  },

  // REVOLUTIONARY HEROES CHARACTERS
  'Chandrasekhar Azad': {
    colors: {
      primary: '#DC143C',
      secondary: '#8B0000',
      accent: '#FFD700',
      glow: 'rgba(220, 20, 60, 0.6)'
    },
    background: {
      pattern: 'absolute-freedom',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.12) 0%, rgba(139, 0, 0, 0.08) 100%)',
      className: 'bg-absolute-freedom'
    },
    typingIndicator: 'fearless-defiance',
    icon: '🔫',
    aura: 'azad-crimson'
  },
  'Bhagat Singh (Revolutionary)': {
    colors: {
      primary: '#FF6347',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.5)'
    },
    background: {
      pattern: 'martyr-intellectual',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.10) 0%, rgba(220, 20, 60, 0.06) 100%)',
      className: 'bg-martyr-intellectual'
    },
    typingIndicator: 'revolutionary-reading',
    icon: '📖',
    aura: 'red-martyr'
  },
  'Shivaram Rajguru': {
    colors: {
      primary: '#8B0000',
      secondary: '#DC143C',
      accent: '#C0C0C0',
      glow: 'rgba(139, 0, 0, 0.5)'
    },
    background: {
      pattern: 'sharpshooter-precision',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.10) 0%, rgba(220, 20, 60, 0.06) 100%)',
      className: 'bg-sharpshooter'
    },
    typingIndicator: 'silent-precision',
    icon: '🎯',
    aura: 'maroon-precise'
  },
  'Sukhdev Thapar': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FF6347',
      accent: '#FFD700',
      glow: 'rgba(255, 140, 0, 0.5)'
    },
    background: {
      pattern: 'revolutionary-organizer',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.10) 0%, rgba(255, 99, 71, 0.06) 100%)',
      className: 'bg-revolutionary-organizer'
    },
    typingIndicator: 'strategic-planning',
    icon: '🗂️',
    aura: 'orange-organizer'
  },
  'Ram Prasad Bismil': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#FFD700',
      glow: 'rgba(147, 112, 219, 0.4)'
    },
    background: {
      pattern: 'poet-revolutionary',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.08) 0%, rgba(138, 43, 226, 0.05) 100%)',
      className: 'bg-poet-revolutionary'
    },
    typingIndicator: 'poetic-rebellion',
    icon: '✒️',
    aura: 'purple-poet'
  },
  'Ashfaqulla Khan': {
    colors: {
      primary: '#228B22',
      secondary: '#32CD32',
      accent: '#FFD700',
      glow: 'rgba(34, 139, 34, 0.4)'
    },
    background: {
      pattern: 'secular-patriot',
      gradient: 'linear-gradient(135deg, rgba(34, 139, 34, 0.08) 0%, rgba(50, 205, 50, 0.05) 100%)',
      className: 'bg-secular-patriot'
    },
    typingIndicator: 'loyal-friendship',
    icon: '🤝',
    aura: 'green-unity'
  },
  'Udham Singh': {
    colors: {
      primary: '#8B0000',
      secondary: '#A0522D',
      accent: '#FFD700',
      glow: 'rgba(139, 0, 0, 0.5)'
    },
    background: {
      pattern: 'patient-vengeance',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.10) 0%, rgba(160, 82, 45, 0.06) 100%)',
      className: 'bg-patient-vengeance'
    },
    typingIndicator: 'long-memory',
    icon: '⏳',
    aura: 'dark-red-justice'
  },
  'Rash Behari Bose': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#FFD700',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'international-revolutionary',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-international-revolutionary'
    },
    typingIndicator: 'global-strategy',
    icon: '🌏',
    aura: 'blue-international'
  },
  'Jatin Das': {
    colors: {
      primary: '#DAA520',
      secondary: '#B8860B',
      accent: '#FFFFFF',
      glow: 'rgba(218, 165, 32, 0.4)'
    },
    background: {
      pattern: 'hunger-strike-martyr',
      gradient: 'linear-gradient(135deg, rgba(218, 165, 32, 0.08) 0%, rgba(184, 134, 11, 0.05) 100%)',
      className: 'bg-hunger-martyr'
    },
    typingIndicator: 'suffering-strength',
    icon: '🕯️',
    aura: 'golden-sacrifice'
  },
  'Batukeshwar Dutt': {
    colors: {
      primary: '#696969',
      secondary: '#808080',
      accent: '#C0C0C0',
      glow: 'rgba(105, 105, 105, 0.3)'
    },
    background: {
      pattern: 'forgotten-hero',
      gradient: 'linear-gradient(135deg, rgba(105, 105, 105, 0.06) 0%, rgba(128, 128, 128, 0.04) 100%)',
      className: 'bg-forgotten-hero'
    },
    typingIndicator: 'survivor-bitterness',
    icon: '💔',
    aura: 'gray-forgotten'
  },
  'Kartar Singh Sarabha': {
    colors: {
      primary: '#FF6347',
      secondary: '#FF8C00',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.5)'
    },
    background: {
      pattern: 'youthful-idealism',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.10) 0%, rgba(255, 140, 0, 0.06) 100%)',
      className: 'bg-youthful-idealism'
    },
    typingIndicator: 'young-passion',
    icon: '🌟',
    aura: 'youth-orange'
  },
  "Michael O'Dwyer": {
    colors: {
      primary: '#2F4F4F',
      secondary: '#1C1C1C',
      accent: '#8B0000',
      glow: 'rgba(47, 79, 79, 0.4)'
    },
    background: {
      pattern: 'jallianwala-horror',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.10) 0%, rgba(28, 28, 28, 0.06) 100%)',
      className: 'bg-jallianwala-horror'
    },
    typingIndicator: 'colonial-arrogance',
    icon: '💀',
    aura: 'dark-colonial'
  },

  // WOMEN FREEDOM FIGHTERS CHARACTERS
  'Pritilata Waddedar': {
    colors: {
      primary: '#DC143C',
      secondary: '#8B0000',
      accent: '#FFD700',
      glow: 'rgba(220, 20, 60, 0.6)'
    },
    background: {
      pattern: 'revolutionary-martyr-woman',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.12) 0%, rgba(139, 0, 0, 0.08) 100%)',
      className: 'bg-revolutionary-martyr-woman'
    },
    typingIndicator: 'armed-courage',
    icon: '�',
    aura: 'crimson-martyr'
  },
  'Sarojini Naidu': {
    colors: {
      primary: '#FF69B4',
      secondary: '#FF1493',
      accent: '#FFD700',
      glow: 'rgba(255, 105, 180, 0.4)'
    },
    background: {
      pattern: 'nightingale-india',
      gradient: 'linear-gradient(135deg, rgba(255, 105, 180, 0.08) 0%, rgba(255, 20, 147, 0.05) 100%)',
      className: 'bg-nightingale'
    },
    typingIndicator: 'poetic-eloquence',
    icon: '🎵',
    aura: 'pink-nightingale'
  },
  'Kasturba Gandhi': {
    colors: {
      primary: '#FFFFFF',
      secondary: '#F0E68C',
      accent: '#FF9933',
      glow: 'rgba(255, 255, 255, 0.4)'
    },
    background: {
      pattern: 'quiet-strength-ba',
      gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(240, 230, 140, 0.05) 100%)',
      className: 'bg-ba-strength'
    },
    typingIndicator: 'patient-endurance',
    icon: '🙏',
    aura: 'white-dignity'
  },
  'Aruna Asaf Ali': {
    colors: {
      primary: '#FF6347',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.5)'
    },
    background: {
      pattern: 'flag-hoister',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.10) 0%, rgba(220, 20, 60, 0.06) 100%)',
      className: 'bg-flag-hoister'
    },
    typingIndicator: 'fearless-defiance-woman',
    icon: '🚩',
    aura: 'red-defiance'
  },
  'Bhikaji Cama': {
    colors: {
      primary: '#FF9933',
      secondary: '#FFFFFF',
      accent: '#138808',
      glow: 'rgba(255, 153, 51, 0.4)'
    },
    background: {
      pattern: 'tricolor-abroad',
      gradient: 'linear-gradient(135deg, rgba(255, 153, 51, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%)',
      className: 'bg-tricolor-abroad'
    },
    typingIndicator: 'patriotic-exile',
    icon: '🇮🇳',
    aura: 'tricolor-glow'
  },
  'Kamala Nehru': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#E6E6FA',
      glow: 'rgba(147, 112, 219, 0.3)'
    },
    background: {
      pattern: 'emerging-voice',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.06) 0%, rgba(138, 43, 226, 0.04) 100%)',
      className: 'bg-emerging-voice'
    },
    typingIndicator: 'quiet-transformation',
    icon: '🌸',
    aura: 'purple-grace'
  },
  'Vijaya Lakshmi Pandit': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#FFD700',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'diplomat-pioneer',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-diplomat-pioneer'
    },
    typingIndicator: 'diplomatic-grace',
    icon: '🌐',
    aura: 'blue-diplomat-woman'
  },
  'Dr. Usha Mehta': {
    colors: {
      primary: '#228B22',
      secondary: '#32CD32',
      accent: '#FFD700',
      glow: 'rgba(34, 139, 34, 0.4)'
    },
    background: {
      pattern: 'secret-radio',
      gradient: 'linear-gradient(135deg, rgba(34, 139, 34, 0.08) 0%, rgba(50, 205, 50, 0.05) 100%)',
      className: 'bg-secret-radio'
    },
    typingIndicator: 'underground-broadcast',
    icon: '📻',
    aura: 'green-radio'
  },
  'Sucheta Kripalani': {
    colors: {
      primary: '#DAA520',
      secondary: '#B8860B',
      accent: '#FFD700',
      glow: 'rgba(218, 165, 32, 0.4)'
    },
    background: {
      pattern: 'first-woman-cm',
      gradient: 'linear-gradient(135deg, rgba(218, 165, 32, 0.08) 0%, rgba(184, 134, 11, 0.05) 100%)',
      className: 'bg-first-woman-cm'
    },
    typingIndicator: 'political-leadership',
    icon: '⚖️',
    aura: 'golden-leader'
  },
  'Durgabai Deshmukh': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      glow: 'rgba(255, 140, 0, 0.4)'
    },
    background: {
      pattern: 'social-reformer',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.08) 0%, rgba(255, 215, 0, 0.05) 100%)',
      className: 'bg-social-reformer'
    },
    typingIndicator: 'reform-dedication',
    icon: '📚',
    aura: 'orange-reform'
  },
  'Matangini Hazra': {
    colors: {
      primary: '#8B0000',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(139, 0, 0, 0.5)'
    },
    background: {
      pattern: 'elderly-martyr',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.10) 0%, rgba(220, 20, 60, 0.06) 100%)',
      className: 'bg-elderly-martyr'
    },
    typingIndicator: 'fearless-elderly',
    icon: '🚩',
    aura: 'maroon-courage'
  },
  'Lady Charlotte Canning': {
    colors: {
      primary: '#9370DB',
      secondary: '#DDA0DD',
      accent: '#E6E6FA',
      glow: 'rgba(147, 112, 219, 0.3)'
    },
    background: {
      pattern: 'colonial-observer',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.06) 0%, rgba(221, 160, 221, 0.04) 100%)',
      className: 'bg-colonial-observer'
    },
    typingIndicator: 'artistic-documentation',
    icon: '🎨',
    aura: 'lavender-observer'
  },

  // INDIAN NATIONAL ARMY CHARACTERS
  'Netaji Subhas Chandra Bose (INA)': {
    colors: {
      primary: '#FF6347',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.6)'
    },
    background: {
      pattern: 'jai-hind',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.12) 0%, rgba(220, 20, 60, 0.08) 100%)',
      className: 'bg-jai-hind'
    },
    typingIndicator: 'supreme-command',
    icon: '🎖️',
    aura: 'netaji-supreme'
  },
  'Captain Lakshmi Sahgal (INA)': {
    colors: {
      primary: '#DC143C',
      secondary: '#8B0000',
      accent: '#FFD700',
      glow: 'rgba(220, 20, 60, 0.5)'
    },
    background: {
      pattern: 'rani-jhansi-regiment',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.10) 0%, rgba(139, 0, 0, 0.06) 100%)',
      className: 'bg-rani-regiment'
    },
    typingIndicator: 'women-combat',
    icon: '💪',
    aura: 'rani-red'
  },
  'Colonel Shah Nawaz Khan': {
    colors: {
      primary: '#228B22',
      secondary: '#006400',
      accent: '#FFD700',
      glow: 'rgba(34, 139, 34, 0.4)'
    },
    background: {
      pattern: 'red-fort-trial',
      gradient: 'linear-gradient(135deg, rgba(34, 139, 34, 0.08) 0%, rgba(0, 100, 0, 0.05) 100%)',
      className: 'bg-red-fort-trial'
    },
    typingIndicator: 'military-honor',
    icon: '🎖️',
    aura: 'green-honor'
  },
  'Colonel Prem Kumar Sahgal': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#FFD700',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'guerrilla-regiment',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-guerrilla-regiment'
    },
    typingIndicator: 'idealistic-soldier',
    icon: '⚔️',
    aura: 'blue-guerrilla'
  },
  'Colonel Gurbaksh Singh Dhillon': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FF6347',
      accent: '#FFD700',
      glow: 'rgba(255, 140, 0, 0.5)'
    },
    background: {
      pattern: 'sikh-warrior-ina',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.10) 0%, rgba(255, 99, 71, 0.06) 100%)',
      className: 'bg-sikh-warrior-ina'
    },
    typingIndicator: 'martial-pride',
    icon: '🗡️',
    aura: 'saffron-warrior'
  },
  'Captain Abdul Rashid': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#556B2F',
      accent: '#FFD700',
      glow: 'rgba(47, 79, 79, 0.4)'
    },
    background: {
      pattern: 'intelligence-operations',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.08) 0%, rgba(85, 107, 47, 0.05) 100%)',
      className: 'bg-intelligence-ops'
    },
    typingIndicator: 'strategic-analysis',
    icon: '🔍',
    aura: 'green-intelligence'
  },
  'Major Janaki Thevar': {
    colors: {
      primary: '#8B0000',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(139, 0, 0, 0.4)'
    },
    background: {
      pattern: 'burma-campaign',
      gradient: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(220, 20, 60, 0.05) 100%)',
      className: 'bg-burma-campaign'
    },
    typingIndicator: 'combat-reality',
    icon: '🎖️',
    aura: 'maroon-soldier'
  },
  'Lieutenant Ram Prasad Dutt': {
    colors: {
      primary: '#DAA520',
      secondary: '#B8860B',
      accent: '#FFD700',
      glow: 'rgba(218, 165, 32, 0.4)'
    },
    background: {
      pattern: 'civilian-volunteer',
      gradient: 'linear-gradient(135deg, rgba(218, 165, 32, 0.08) 0%, rgba(184, 134, 11, 0.05) 100%)',
      className: 'bg-civilian-volunteer'
    },
    typingIndicator: 'enthusiastic-patriotism',
    icon: '✊',
    aura: 'golden-volunteer'
  },
  'Rani Gaidinliu': {
    colors: {
      primary: '#228B22',
      secondary: '#32CD32',
      accent: '#FFD700',
      glow: 'rgba(34, 139, 34, 0.4)'
    },
    background: {
      pattern: 'naga-resistance',
      gradient: 'linear-gradient(135deg, rgba(34, 139, 34, 0.08) 0%, rgba(50, 205, 50, 0.05) 100%)',
      className: 'bg-naga-resistance'
    },
    typingIndicator: 'spiritual-leadership',
    icon: '👸',
    aura: 'green-naga'
  },
  'Rash Behari Bose (INA)': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#FFFFFF',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'exile-strategy',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-exile-strategy'
    },
    typingIndicator: 'long-term-vision',
    icon: '🌏',
    aura: 'blue-exile'
  },
  'Captain Mohan Singh': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#FFD700',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'first-ina-founder',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(160, 82, 45, 0.05) 100%)',
      className: 'bg-first-ina'
    },
    typingIndicator: 'principled-resignation',
    icon: '⚔️',
    aura: 'brown-founder'
  },
  'General Reginald Dyer': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#1C1C1C',
      accent: '#8B0000',
      glow: 'rgba(47, 79, 79, 0.5)'
    },
    background: {
      pattern: 'jallianwala-butcher',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.12) 0%, rgba(28, 28, 28, 0.08) 100%)',
      className: 'bg-jallianwala-butcher'
    },
    typingIndicator: 'colonial-brutality',
    icon: '💀',
    aura: 'dark-butcher'
  },

  // SOCIAL REFORMERS CHARACTERS
  'Raja Ram Mohan Roy': {
    colors: {
      primary: '#FFD700',
      secondary: '#FFA500',
      accent: '#FFFFFF',
      glow: 'rgba(255, 215, 0, 0.5)'
    },
    background: {
      pattern: 'renaissance-reformer',
      gradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.10) 0%, rgba(255, 165, 0, 0.06) 100%)',
      className: 'bg-renaissance-reformer'
    },
    typingIndicator: 'enlightened-wisdom',
    icon: '🌅',
    aura: 'golden-renaissance'
  },
  'Swami Dayanand Saraswati': {
    colors: {
      primary: '#FF8C00',
      secondary: '#FF6347',
      accent: '#FFD700',
      glow: 'rgba(255, 140, 0, 0.5)'
    },
    background: {
      pattern: 'vedic-revival',
      gradient: 'linear-gradient(135deg, rgba(255, 140, 0, 0.10) 0%, rgba(255, 99, 71, 0.06) 100%)',
      className: 'bg-vedic-revival'
    },
    typingIndicator: 'fearless-reform',
    icon: '🔱',
    aura: 'saffron-vedic'
  },
  'Ishwar Chandra Vidyasagar': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#E6E6FA',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'compassionate-scholar',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-compassionate-scholar'
    },
    typingIndicator: 'gentle-scholarship',
    icon: '📖',
    aura: 'blue-compassion'
  },
  'Jyotirao Phule': {
    colors: {
      primary: '#DC143C',
      secondary: '#8B0000',
      accent: '#FFD700',
      glow: 'rgba(220, 20, 60, 0.5)'
    },
    background: {
      pattern: 'social-justice-pioneer',
      gradient: 'linear-gradient(135deg, rgba(220, 20, 60, 0.10) 0%, rgba(139, 0, 0, 0.06) 100%)',
      className: 'bg-social-justice'
    },
    typingIndicator: 'revolutionary-equality',
    icon: '✊',
    aura: 'red-justice'
  },
  'Savitribai Phule': {
    colors: {
      primary: '#FF69B4',
      secondary: '#FF1493',
      accent: '#FFD700',
      glow: 'rgba(255, 105, 180, 0.4)'
    },
    background: {
      pattern: 'first-teacher-woman',
      gradient: 'linear-gradient(135deg, rgba(255, 105, 180, 0.08) 0%, rgba(255, 20, 147, 0.05) 100%)',
      className: 'bg-first-teacher'
    },
    typingIndicator: 'courageous-teaching',
    icon: '📚',
    aura: 'pink-courage'
  },
  'Swami Vivekananda': {
    colors: {
      primary: '#FF6347',
      secondary: '#DC143C',
      accent: '#FFD700',
      glow: 'rgba(255, 99, 71, 0.6)'
    },
    background: {
      pattern: 'spiritual-cyclone',
      gradient: 'linear-gradient(135deg, rgba(255, 99, 71, 0.12) 0%, rgba(220, 20, 60, 0.08) 100%)',
      className: 'bg-spiritual-cyclone'
    },
    typingIndicator: 'fiery-eloquence',
    icon: '🔥',
    aura: 'orange-spiritual'
  },
  'Periyar E.V. Ramasamy': {
    colors: {
      primary: '#2F4F4F',
      secondary: '#1C1C1C',
      accent: '#DC143C',
      glow: 'rgba(47, 79, 79, 0.5)'
    },
    background: {
      pattern: 'rationalist-revolutionary',
      gradient: 'linear-gradient(135deg, rgba(47, 79, 79, 0.10) 0%, rgba(28, 28, 28, 0.06) 100%)',
      className: 'bg-rationalist'
    },
    typingIndicator: 'blunt-rationalism',
    icon: '⚡',
    aura: 'dark-rationalist'
  },
  'Dr. B.R. Ambedkar': {
    colors: {
      primary: '#000080',
      secondary: '#4169E1',
      accent: '#FFD700',
      glow: 'rgba(0, 0, 128, 0.5)'
    },
    background: {
      pattern: 'constitutional-father',
      gradient: 'linear-gradient(135deg, rgba(0, 0, 128, 0.10) 0%, rgba(65, 105, 225, 0.06) 100%)',
      className: 'bg-constitutional-father'
    },
    typingIndicator: 'dignified-authority',
    icon: '⚖️',
    aura: 'navy-constitution'
  },
  'Sree Narayana Guru': {
    colors: {
      primary: '#9370DB',
      secondary: '#8A2BE2',
      accent: '#E6E6FA',
      glow: 'rgba(147, 112, 219, 0.4)'
    },
    background: {
      pattern: 'spiritual-equality',
      gradient: 'linear-gradient(135deg, rgba(147, 112, 219, 0.08) 0%, rgba(138, 43, 226, 0.05) 100%)',
      className: 'bg-spiritual-equality'
    },
    typingIndicator: 'serene-wisdom',
    icon: '🕉️',
    aura: 'purple-sage'
  },
  'Pandita Ramabai': {
    colors: {
      primary: '#4169E1',
      secondary: '#1E90FF',
      accent: '#FFD700',
      glow: 'rgba(65, 105, 225, 0.4)'
    },
    background: {
      pattern: 'scholar-saint-woman',
      gradient: 'linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(30, 144, 255, 0.05) 100%)',
      className: 'bg-scholar-saint'
    },
    typingIndicator: 'scholarly-independence',
    icon: '📜',
    aura: 'blue-scholar-woman'
  },
  'Justice Mahadev Govind Ranade': {
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      accent: '#F0E68C',
      glow: 'rgba(139, 69, 19, 0.4)'
    },
    background: {
      pattern: 'judicial-reformer',
      gradient: 'linear-gradient(135deg, rgba(139, 69, 19, 0.08) 0%, rgba(160, 82, 45, 0.05) 100%)',
      className: 'bg-judicial-reformer'
    },
    typingIndicator: 'judicial-wisdom',
    icon: '⚖️',
    aura: 'brown-judicial'
  },
  'Behramji Malabari': {
    colors: {
      primary: '#228B22',
      secondary: '#32CD32',
      accent: '#FFD700',
      glow: 'rgba(34, 139, 34, 0.4)'
    },
    background: {
      pattern: 'parsi-reformer',
      gradient: 'linear-gradient(135deg, rgba(34, 139, 34, 0.08) 0%, rgba(50, 205, 50, 0.05) 100%)',
      className: 'bg-parsi-reformer'
    },
    typingIndicator: 'persistent-journalism',
    icon: '✍️',
    aura: 'green-journalist'
  }
}

// Get theme for a character
export const getCharacterTheme = (characterName) => {
  return CHARACTER_THEMES[characterName] || {
    colors: {
      primary: '#DDA15E',
      secondary: '#BC6C25',
      accent: '#FEFAE0',
      glow: 'rgba(221, 161, 94, 0.3)'
    },
    background: {
      pattern: 'default',
      gradient: 'linear-gradient(135deg, rgba(221, 161, 94, 0.05) 0%, rgba(188, 108, 37, 0.03) 100%)'
    },
    typingIndicator: 'default-pulse',
    icon: '✨',
    aura: 'amber-glow'
  };
};
