'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface Game {
  id: string;
  title: string;
  slug: string;
  image: string;
  playersOnline: number;
  description: string;
  isActive: boolean;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch games');
  return res.json();
};

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const { data, error, isLoading } = useSWR('/api/games', fetcher);
  const [game, setGame] = useState<Game | null>(null);
  
  useEffect(() => {
    if (data?.data) {
      const foundGame = data.data.find((g: Game) => g.slug === slug);
      setGame(foundGame || null);
    }
  }, [data, slug]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading game...</p>
        </div>
      </div>
    );
  }
  
  if (error || !game) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold mb-2">Game Not Found</h1>
          <p className="text-lg mb-6">The requested game could not be found.</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-2">{game.title}</h1>
          <p className="text-lg opacity-90">{game.description}</p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm">{game.playersOnline.toLocaleString()} players online</span>
          </div>
        </div>
        
        {/* Game Area */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white text-center">
            <div className="text-8xl mb-6">🎲</div>
            <h2 className="text-2xl font-bold mb-4">Game Loading...</h2>
            <p className="text-lg mb-8">Get ready to play {game.title}!</p>
            
            {/* Mock game controls */}
            <div className="space-y-4">
              <button className="w-full py-4 bg-green-600 hover:bg-green-700 rounded-xl font-bold text-lg transition-colors">
                Join Quick Game
              </button>
              <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold text-lg transition-colors">
                Create Private Room
              </button>
              <button 
                onClick={() => router.push('/')}
                className="w-full py-4 bg-gray-600 hover:bg-gray-700 rounded-xl font-bold text-lg transition-colors"
              >
                Back to Lobby
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}