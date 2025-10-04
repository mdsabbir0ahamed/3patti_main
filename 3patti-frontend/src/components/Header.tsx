'use client';

import { useEffect, useState } from 'react';
import { useUserStore } from '../stores/useUserStore';
import SkeletonLoader from './SkeletonLoader';

interface HeaderProps {
  className?: string;
}

interface TooltipButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  onClick?: () => void;
  variant?: 'default' | 'primary';
  className?: string;
}

function TooltipButton({ icon, tooltip, onClick, variant = 'default', className = '' }: TooltipButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const baseClasses = "relative p-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95";
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-yellow-600"
    : "bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-white/30";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {icon}
      {showTooltip && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-50 backdrop-blur-sm">
          {tooltip}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
        </div>
      )}
    </button>
  );
}

export default function Header({ className = '' }: HeaderProps) {
  const { user, notifications } = useUserStore();
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  useEffect(() => {
    // User data is already initialized in the store
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotificationIndex((prev) => 
        (prev + 1) % notifications.length
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [notifications.length]);

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      useGrouping: true,
    }).format(num);
  };

  return (
    <header className={`sticky top-0 z-50 ${className}`}>
      {/* Main Header */}
      <div className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 backdrop-blur-lg bg-opacity-95 border-b border-white/10 shadow-2xl">
        {/* Gradient overlay for glass effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-indigo-500/20 pointer-events-none"></div>
        
        <div className="relative container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: User Profile */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                {user.isLoading ? (
                  <SkeletonLoader variant="circle" width="w-14" height="h-14" />
                ) : (
                  <>
                    <img 
                      src={user.avatar}
                      alt="User Avatar" 
                      className="w-14 h-14 rounded-full border-3 border-yellow-400 shadow-lg group-hover:border-yellow-300 transition-colors duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${user.username}&background=6366f1&color=fff&size=60`;
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold shadow-md">
                      VIP {user.vipLevel}
                    </div>
                  </>
                )}
              </div>
              
              <div className="hidden sm:block">
                {user.isLoading ? (
                  <div className="space-y-2">
                    <SkeletonLoader width="w-28" height="h-4" />
                    <SkeletonLoader width="w-20" height="h-3" />
                  </div>
                ) : (
                  <>
                    <p className="font-semibold text-white text-base lg:text-lg">
                      {user.username}...
                    </p>
                    <p className="text-xs text-gray-300 font-mono">
                      ID: {user.id}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Center: Balances */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Coins */}
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  <span className="text-sm font-bold text-black">₹</span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-300 uppercase tracking-wide">Coins</p>
                  {user.isLoading ? (
                    <SkeletonLoader width="w-20" height="h-5" />
                  ) : (
                    <p className="font-mono font-bold text-white text-lg tabular-nums">
                      {formatNumber(user.coins)}
                    </p>
                  )}
                </div>
              </div>

              {/* Separator */}
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

              {/* Cash */}
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  <span className="text-sm font-bold text-white">₹</span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-300 uppercase tracking-wide">Cash</p>
                  {user.isLoading ? (
                    <SkeletonLoader width="w-16" height="h-5" />
                  ) : (
                    <p className="font-mono font-bold text-white text-lg tabular-nums">
                      {formatNumber(user.cash)}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              <TooltipButton 
                icon={
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">💰</span>
                    <span className="hidden sm:inline text-sm font-semibold">Withdraw</span>
                  </div>
                }
                tooltip="Withdraw Funds" 
                variant="primary"
                onClick={() => console.log('Withdraw clicked')}
              />
              
              <TooltipButton 
                icon={<span className="text-xl">🎧</span>}
                tooltip="Customer Service" 
                onClick={() => console.log('Services clicked')}
              />
              
              <TooltipButton 
                icon={<span className="text-xl">✉️</span>}
                tooltip="Messages" 
                onClick={() => console.log('Mail clicked')}
              />
              
              <TooltipButton 
                icon={<span className="text-xl">⚙️</span>}
                tooltip="Settings" 
                onClick={() => console.log('Settings clicked')}
              />
            </div>
          </div>

          {/* Mobile Balances */}
          <div className="md:hidden mt-4 flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-yellow-400">₹</span>
              <span className="text-sm text-gray-300">Coins:</span>
              <span className="font-mono font-bold text-white tabular-nums">
                {user.isLoading ? '...' : formatNumber(user.coins)}
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-green-400">₹</span>
              <span className="text-sm text-gray-300">Cash:</span>
              <span className="font-mono font-bold text-white tabular-nums">
                {user.isLoading ? '...' : formatNumber(user.cash)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Ticker */}
      <div className="bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-6 py-3">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <span className="text-yellow-400 text-lg animate-pulse">📢</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap text-sm text-gray-200">
                {notifications[currentNotificationIndex]?.message || 'No notifications'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </header>
  );
}