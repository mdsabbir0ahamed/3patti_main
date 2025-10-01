# 3 Patti Game

A full-stack 3 Patti (Teen Patti) card game with Node.js backend and Next.js frontend.

## Features

### Backend (Node.js)
- Socket.io for real-time gaming
- MongoDB database integration
- Game logic with multiple variations
- Robot players and auto-cases
- User authentication and management
- Table management system

### Frontend (Next.js)
- Modern React with TypeScript
- Tailwind CSS for styling
- Zustand for state management
- Gaming dashboard UI
- Real-time game interface
- Responsive design

## Game Variations
1. Normal Teen Patti
2. AK47 - Ace, King, 4, and 7 become jokers
3. Lowest Joker - Each player's lowest card becomes joker
4. Muflis - Lowest ranking combination wins
5. 4X Boot Value - Boot is 4 times normal
6. 1942 A Love Story - 1, 9, 4, 2 are jokers
7. Blackjack - Sum must be 21 or below
8. 999 - Cards closest to 999 win

## Installation

### Backend
```bash
cd 3patti-backend
npm install
npm start
```

### Frontend
```bash
cd 3patti-frontend
npm install
npm run dev
```

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