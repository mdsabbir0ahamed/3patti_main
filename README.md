# 🎮 3 Patti Game - Complete Full Stack Implementation

A comprehensive 3 Patti (Teen Patti) card game with real-time multiplayer functionality, built with Node.js backend and Next.js frontend.

## 🚀 Quick Start - Clone & Run

### Step 1: Clone the Repository
```bash
git clone https://github.com/mdsabbir0ahamed/3patti_main.git
cd 3patti_main
```

### Step 2: Setup Backend
```bash
cd 3patti-backend
npm install
npm start
```
✅ Backend server will run on `http://localhost:3001`

### Step 3: Setup Frontend
Open a new terminal:
```bash
cd 3patti-frontend
npm install
npm run dev
```
✅ Frontend will run on `http://localhost:3000`

### Step 4: Play the Game!
Open your browser and go to: `http://localhost:3000`

## 📁 Project Structure
```
3patti_main/
├── 3patti-backend/          # Node.js backend
│   ├── classes/             # Game logic classes
│   ├── routes/              # API routes
│   ├── http-3cards-server.js # Main server file
│   └── package.json
└── 3patti-frontend/         # Next.js frontend
    ├── src/app/            # Next.js 14 app directory
    ├── src/components/     # React components
    ├── src/stores/         # State management
    └── package.json
```

## 🎯 Features

### Game Features
- ✅ Real-time multiplayer 3 Patti gameplay
- ✅ Live chat and communication
- ✅ Tournament system
- ✅ Lobby and room management
- ✅ User authentication
- ✅ Chips and coin management
- ✅ Auto-play functionality
- ✅ Timer-based rounds

### Game Variations
1. **Normal Teen Patti** - Classic version
2. **AK47** - Ace, King, 4, and 7 become jokers
3. **Lowest Joker** - Each player's lowest card becomes joker
4. **Muflis** - Lowest ranking combination wins
5. **4X Boot Value** - Boot is 4 times normal
6. **1942 A Love Story** - 1, 9, 4, 2 are jokers
7. **Blackjack** - Sum must be 21 or below
8. **999** - Cards closest to 999 win

## Tech Stack

**Backend:**
- Node.js
- Express.js
- Socket.io
- MongoDB
- Lodash
- Moment.js

**Frontend:**
- Next.js 15
- TypeScript
- Tailwind CSS
- Zustand
- React Hooks

## Environment Variables

Create `.env` file in backend directory:
```
SERVER_PREFIX=s1_*
LOG_ENABLED=true
SERVER_PORT=7002
DB_HOST=localhost
DB_PORT=27017
DB_NAME=TeenPattiEncrypt
NEWUSER_CHIPS=100000
NEWUSER_COINS=10
```

## API Endpoints

- `GET /` - Server status
- `GET /chooseServer/:DeviceType/:v` - Get server info
- Socket events for real-time gaming

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License

MIT License