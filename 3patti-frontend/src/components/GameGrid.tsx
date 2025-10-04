'use client';

import { useState } from 'react';
import useSWR from 'swr';
import GameCard from './GameCard';

interface Game {
  id: string;
  title: string;
  slug: string;
  image: string;
  playersOnline: number;
  description: string;
  isActive: boolean;
}

interface GameGridProps {
  className?: string;
  onGameSelect?: (gameId: string) => void;
  showLobbyModal?: boolean;
}

interface LobbyModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameId: string;
  gameTitle: string;
}

function LobbyModal({ isOpen, onClose, gameId, gameTitle }: LobbyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-t-2xl text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{gameTitle} Lobby</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="text-center space-y-6">
            <div className="text-6xl">🎲</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Join {gameTitle}
              </h3>
              <p className="text-gray-600 mb-6">
                Select your table and start playing!
              </p>
            </div>
            
            {/* Mock table options */}
            <div className="space-y-3">
              <button className="w-full p-4 bg-green-50 border-2 border-green-200 rounded-xl hover:bg-green-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Beginner Table</span>
                  <span className="text-sm text-green-600">Entry: ₹100</span>
                </div>
              </button>
              
              <button className="w-full p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl hover:bg-yellow-100 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Intermediate Table</span>
                  <span className="text-sm text-yellow-600">Entry: ₹500</span>
                </div>
              </button>
              
              <button className="w-full p-4 bg-red-50 border-2 border-red-200 rounded-xl hover:bg-red-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500">
                <div className="flex items-center justify-between">
                  <span className="font-medium">VIP Table</span>
                  <span className="text-sm text-red-600">Entry: ₹1000</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch games');
  return res.json();
};

export default function GameGrid({ 
  className = '', 
  onGameSelect,
  showLobbyModal = false 
}: GameGridProps) {
  const [selectedGame, setSelectedGame] = useState<{ id: string; title: string } | null>(null);
  
  const { data, error, isLoading, mutate } = useSWR('/api/games', fetcher, {
    refreshInterval: 30000, // Refresh every 30 seconds
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  const handleGameClick = (gameId: string) => {
    if (showLobbyModal) {
      const game = data?.data?.find((g: Game) => g.id === gameId);
      if (game) {
        setSelectedGame({ id: gameId, title: game.title });
      }
    } else if (onGameSelect) {
      onGameSelect(gameId);
    }
  };

  const handleRetry = () => {
    mutate();
  };

  // Loading state
  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${className}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <GameCard
            key={`skeleton-${index}`}
            id=""
            title=""
            slug=""
            image=""
            playersOnline={0}
            isLoading={true}
          />
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`${className}`}>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Failed to Load Games
          </h3>
          <p className="text-gray-600 mb-6">
            Unable to fetch game data. Please try again.
          </p>
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const games = data?.data || [];

  // Empty state
  if (games.length === 0) {
    return (
      <div className={`${className}`}>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎲</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Games Available
          </h3>
          <p className="text-gray-600">
            Check back later for exciting games!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${className}`}>
        {games.map((game: Game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            slug={game.slug}
            image={game.image}
            playersOnline={game.playersOnline}
            description={game.description}
            onPlayClick={handleGameClick}
          />
        ))}
      </div>
      
      {/* Lobby Modal */}
      {showLobbyModal && selectedGame && (
        <LobbyModal
          isOpen={!!selectedGame}
          onClose={() => setSelectedGame(null)}
          gameId={selectedGame.id}
          gameTitle={selectedGame.title}
        />
      )}
    </>
  );
}