# Mythos Converse

An immersive, premium web application that allows users to engage in real-time conversations with 244 characters from Indian history, mythology, and the freedom movement.

## 🌟 Features

- **16 Story Collections**: Explore Indian heritage across four major categories:
  - 🕉️ **Ancient Mythology**: Mahabharata (25 characters), Ramayana (25 characters), Puranas (50 characters)
  - 👑 **Great Empires & Dynasties**: Maurya, Gupta, Chola, Maratha, Ahom, Vijayanagara (72 characters total)
  - 🕊️ **Freedom Movement**: 1857 Rebellion, Freedom Fighters, Revolutionary Heroes, Women Freedom Fighters, Indian National Army (60 characters)
  - 📚 **Social Reform Movement**: Raja Ram Mohan Roy, Swami Vivekananda, Dr. Ambedkar, and visionaries who transformed Indian society (12 characters)
- **244 Authentic Characters**: Converse with heroes, reformers, revolutionaries, sages, emperors, and freedom fighters
- **AI-Powered Conversations**: Each character responds with their unique personality using Google's Gemini AI
- **Premium UI/UX**: Glassmorphism effects, smooth animations, character-specific themes, and breathing UI
- **Categorized Navigation**: Stories organized by historical periods with visual category headings
- **Authentic Personas**: Characters interpret modern concepts through their historical worldview
- **Unique Visual Themes**: Each character has custom colors, backgrounds, icons, and auras
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key ([Get one free here](https://aistudio.google.com/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mythos-converse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
mythos-converse/
├── src/
│   ├── components/          # React components
│   │   ├── LandingScreen.jsx
│   │   ├── CharacterSelectionScreen.jsx
│   │   └── ChatScreen.jsx
│   ├── data/
│   │   └── characters.js    # Character data and personas
│   ├── services/
│   │   └── geminiService.js # API service for Gemini
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── .env.example             # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎭 Characters Available

### Pandavas & Allies
- Yudhishthira - The Righteous King
- Bhima - The Mighty Warrior
- Arjuna - The Divine Archer
- Nakula - The Handsome Twin
- Sahadeva - The Wise Astrologer
- Draupadi - The Fire-Born Queen
- Krishna - The Divine Charioteer
- Abhimanyu - The Brave Son

### Kauravas & Allies
- Duryodhana - The Defiant Prince
- Dushasana - The Loyal Brother
- Karna - The Tragic Hero
- Shakuni - The Master Schemer
- Dhritarashtra - The Blind King
- Gandhari - The Blindfolded Queen

### Elders & Gurus
- Bhishma - The Grand Patriarch
- Dronacharya - The Warrior Guru
- Vidura - The Wise Counselor
- Kunti - The Mother of Heroes

### Other Key Figures
- Ashwatthama - The Immortal Warrior
- Sanjaya - The Divine Chronicler

## 🛠️ Built With

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Google Gemini AI** - Large Language Model
- **Google Fonts** - Cinzel Decorative & Jost

## 🎨 Design Theme

- **Color Palette**: Deep darks (#0a0908), bronze (#BC6C25), gold (#DDA15E), cream (#FEFAE0)
- **Typography**: Cinzel Decorative for epic titles, Jost for body text
- **Effects**: Glassmorphism, smooth animations, custom scrollbars
- **Atmosphere**: Mystical, ancient, premium, immersive

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key | Yes |

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Deploy to Vercel, Netlify, or similar

1. Connect your repository
2. Set the build command: `npm run build`
3. Set the output directory: `dist`
4. Add environment variable: `VITE_GEMINI_API_KEY`

## 🔒 Security Notes

- Never commit your `.env` file to version control
- Keep your API key secure and private
- The `.gitignore` file is configured to exclude sensitive files

## 📖 How It Works

1. **Character Selection**: Users choose from 20 Mahabharata characters
2. **Persona Loading**: Each character has a detailed persona with motivations, beliefs, and speaking style
3. **AI Processing**: User messages are sent to Gemini API with character context
4. **Authentic Responses**: AI responds in character, interpreting modern concepts through ancient lens
5. **Conversation Flow**: Chat history maintains context for natural dialogue

## 🎯 Future Enhancements

- Voice input/output
- Character illustrations
- Multiple languages support
- Save conversation history
- Share conversations
- More characters from other epics

## 📜 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- The timeless epic of Mahabharata
- Google Gemini AI team
- The open-source community

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Step into the epic. Experience mythology like never before.** 🏛️✨
