// Utility to check if API key is properly configured

export const checkApiKey = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  console.log('=== API Key Configuration Check ===');
  console.log('API Key exists:', !!apiKey);
  console.log('API Key length:', apiKey ? apiKey.length : 0);
  console.log('API Key starts with AIza:', apiKey ? apiKey.startsWith('AIza') : false);
  console.log('Environment mode:', import.meta.env.MODE);
  console.log('==================================');
  
  return !!apiKey && apiKey !== 'your_api_key_here';
};

export const getApiKeyStatus = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey || apiKey === 'your_api_key_here') {
    return { 
      valid: false, 
      message: 'API key not configured. Please add your key to the .env file.' 
    };
  }
  
  if (!apiKey.startsWith('AIza')) {
    return { 
      valid: false, 
      message: 'API key format seems incorrect. Gemini keys should start with "AIza".' 
    };
  }
  
  return { 
    valid: true, 
    message: 'API key looks good!' 
  };
};
