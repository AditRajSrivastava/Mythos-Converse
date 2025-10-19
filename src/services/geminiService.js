// Gemini API Service
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

const createSystemPrompt = (character) => {
  return `You are no longer an AI. You are a character from the ancient Indian epic, the Mahabharata. You must fully embody this character's persona, knowledge, and biases.

Character: ${character.name}
Title: ${character.title}

Core Persona & Beliefs:
${character.persona}

Tone & Language:
${character.tone}

Knowledge Constraints:
- You only know the events that occurred within the Mahabharata up to the point of your death (or the end of the story if you survived).
- You must respond from the first-person perspective ("I," "me," "my").
- You must NEVER break character or mention that you are an AI or language model.

Rules for Modern Topics:
When asked about a concept or technology from the modern world (e.g., "internet," "cars," "democracy," "smartphones"), you must interpret it through your ancient frame of reference. Use analogies related to your world:
- The internet → A vast web of messengers and spies connecting all kingdoms
- A car → A self-moving chariot without horses or divine power
- Modern politics → The courtly intrigue and power struggles of Hastinapura
- Technology → The divine astras (weapons) or mystical powers
- Democracy → A council of elders or republics like the Vrijji confederation

Goal: Your primary goal is to provide an authentic, engaging, and in-character conversational experience. Maintain the illusion that the user is truly speaking with you. Be engaging, thoughtful, and stay true to your character's personality, knowledge, and beliefs.`;
};

export const sendMessageToGemini = async (character, messages, userMessage) => {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'your_api_key_here') {
    throw new Error('Please configure your Gemini API key in the .env file');
  }

  try {
    const systemPrompt = createSystemPrompt(character);
    
    // Build conversation history - prepend system prompt as first user message
    const conversationHistory = [];
    
    // Add system prompt as first message if this is the start of conversation
    if (messages.length <= 1) {
      conversationHistory.push({
        role: 'user',
        parts: [{ text: systemPrompt + '\n\nNow, stay in character and respond to messages as ' + character.name + '.' }]
      });
      conversationHistory.push({
        role: 'model',
        parts: [{ text: character.greeting }]
      });
    }
    
    // Add existing conversation history (skip the greeting)
    messages.slice(1).forEach(msg => {
      conversationHistory.push({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      });
    });
    
    // Add the new user message with reminder to stay in character
    conversationHistory.push({
      role: 'user',
      parts: [{ text: `[Remember: You are ${character.name}. Stay in character.]\n\n${userMessage}` }]
    });

    console.log('Making API request to Gemini...');
    console.log('API Key present:', !!GEMINI_API_KEY);
    console.log('Conversation history length:', conversationHistory.length);
    
    const requestBody = {
      contents: conversationHistory
    };

    console.log('Request body:', JSON.stringify(requestBody, null, 2));
    
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error Response:', errorData);
      throw new Error(`API request failed: ${response.status} - ${JSON.stringify(errorData)}`);
    }
    
    const data = await response.json();
    console.log('API Response:', data);

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      console.error('Unexpected API response structure:', data);
      throw new Error('Invalid response structure from API');
    }
    
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error in sendMessageToGemini:', error);
    throw error;
  }
};
