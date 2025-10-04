'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SkeletonLoader from './SkeletonLoader';

interface GameCardProps {
  id: string;
  title: string;
  slug: string;
  image: string;
  playersOnline: number;
  description?: string;
  isLoading?: boolean;
  hasError?: boolean;
  onPlayClick?: (gameId: string) => void;
  className?: string;
}

function GameCardSkeleton() {
  return (
    <div className="game-card p-6 rounded-2xl bg-white shadow-lg">
      <div className="space-y-4">
        <SkeletonLoader variant="rectangle" width="w-full" height="h-32" />
        <div className="space-y-2">
          <SkeletonLoader variant="text" width="w-3/4" height="h-6" />
          <SkeletonLoader variant="text" width="w-1/2" height="h-4" />
          <SkeletonLoader variant="text" width="w-2/3" height="h-4" />
        </div>
        <SkeletonLoader variant="rectangle" width="w-full" height="h-12" />
      </div>
    </div>
  );
}

function GameCardError({ onRetry }: { onRetry?: () => void }) {
  return (
    <div className="game-card p-6 rounded-2xl bg-white shadow-lg border-2 border-red-200">
      <div className="text-center space-y-4">
        <div className="text-4xl text-red-400">⚠️</div>
        <div>
          <h3 className="text-lg font-semibold text-red-600 mb-2">Failed to Load</h3>
          <p className="text-sm text-gray-600 mb-4">Unable to load game data</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GameCard({
  id,
  title,
  slug,
  image,
  playersOnline,
  description,
  isLoading = false,
  hasError = false,
  onPlayClick,
  className = '',
}: GameCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const formatPlayerCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const handlePlayClick = () => {
    if (onPlayClick) {
      onPlayClick(id);
    } else {
      router.push(`/games/${slug}`);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (isLoading) {
    return <GameCardSkeleton />;
  }

  if (hasError) {
    return <GameCardError />;
  }

  return (
    <div
      className={`game-card group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlayClick}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Image section */}
      <div className="relative h-32 sm:h-40 overflow-hidden">
        {!imageError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-4xl mb-2">🎲</div>
              <p className="text-sm font-medium">{title}</p>
            </div>
          </div>
        )}
        
        {/* Game ID badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full font-mono backdrop-blur-sm">
            #{id}
          </span>
        </div>
        
        {/* Players online badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1 backdrop-blur-sm shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="font-semibold">{formatPlayerCount(playersOnline)}</span>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-4 sm:p-6">
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          )}
        </div>
        
        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>{formatPlayerCount(playersOnline)} playing</span>
          </div>
          <div className="text-xs text-gray-500">
            ID: {id}
          </div>
        </div>
        
        {/* Play button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePlayClick();
          }}
          className={`w-full py-3 px-6 rounded-xl font-bold text-white transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-offset-2 ${
            isHovered
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500 shadow-lg scale-105'
              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:ring-purple-500'
          }`}
        >
          <span className="flex items-center justify-center space-x-2">
            <span>▶️</span>
            <span>Play Now</span>
          </span>
        </button>
      </div>
      
      {/* Hover shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shine" />
      </div>
    </div>
  );
}