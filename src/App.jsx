import { useState, useEffect } from 'react'
import LandingScreen from './components/LandingScreen'
import StorySelectionScreen from './components/StorySelectionScreen'
import CharacterSelectionScreen from './components/CharacterSelectionScreen'
import ChatScreen from './components/ChatScreen'
import Footer from './components/Footer'
import { checkApiKey } from './utils/apiKeyChecker'

function App() {
  const [screen, setScreen] = useState('landing') // 'landing', 'story-selection', 'character-selection', 'chat'
  const [selectedStory, setSelectedStory] = useState(null)
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  // Check API key on mount
  useEffect(() => {
    checkApiKey()
  }, [])

  const handleBegin = () => {
    setScreen('story-selection')
  }

  const handleSelectStory = (story) => {
    setSelectedStory(story)
    setScreen('character-selection')
  }

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character)
    setScreen('chat')
  }

  const handleBack = () => {
    if (screen === 'chat') {
      setScreen('character-selection')
      setSelectedCharacter(null)
    } else if (screen === 'character-selection') {
      setScreen('story-selection')
      setSelectedStory(null)
    } else if (screen === 'story-selection') {
      setScreen('landing')
    }
  }

  return (
    <>
      {screen === 'landing' && <LandingScreen onBegin={handleBegin} />}
      {screen === 'story-selection' && (
        <StorySelectionScreen 
          onSelectStory={handleSelectStory} 
          onBack={handleBack} 
        />
      )}
      {screen === 'character-selection' && (
        <CharacterSelectionScreen 
          onSelectCharacter={handleSelectCharacter} 
          onBack={handleBack}
          story={selectedStory}
        />
      )}
      {screen === 'chat' && selectedCharacter && (
        <ChatScreen 
          character={selectedCharacter} 
          onBack={handleBack}
          story={selectedStory}
        />
      )}
      <Footer />
    </>
  )
}

export default App
