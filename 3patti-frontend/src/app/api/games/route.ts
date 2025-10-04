import { NextResponse } from 'next/server';

interface GameData {
  id: string;
  title: string;
  slug: string;
  image: string;
  playersOnline: number;
  description: string;
  isActive: boolean;
}

// Mock game data - in production, this would come from a database
const gamesData: GameData[] = [
  {
    id: '10295',
    title: 'Teen Patti',
    slug: 'teen-patti',
    image: '/api/placeholder/300/200',
    playersOnline: 10926,
    description: 'Classic Indian card game',
    isActive: true,
  },
  {
    id: '17825',
    title: 'Jack TP',
    slug: 'jack-tp',
    image: '/api/placeholder/300/200',
    playersOnline: 17263,
    description: 'Teen Patti with Jokers',
    isActive: true,
  },
  {
    id: '17823',
    title: 'Rummy',
    slug: 'rummy',
    image: '/api/placeholder/300/200',
    playersOnline: 17058,
    description: 'Classic Rummy card game',
    isActive: true,
  },
  {
    id: '17824',
    title: 'Andar Bahar',
    slug: 'andar-bahar',
    image: '/api/placeholder/300/200',
    playersOnline: Math.floor(6.75 * 1000), // Converting to actual number
    description: 'Traditional Indian card game',
    isActive: true,
  },
];

export async function GET() {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simulate random player count updates
    const updatedGames = gamesData.map(game => ({
      ...game,
      playersOnline: game.playersOnline + Math.floor(Math.random() * 100) - 50,
    }));
    
    return NextResponse.json({ 
      success: true, 
      data: updatedGames,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Games API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch games data' },
      { status: 500 }
    );
  }
}