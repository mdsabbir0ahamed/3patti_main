'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { useUserStore } from '../store/useUserStore';

interface ActionItem {
  id: string;
  icon: string;
  label: string;
  color: string;
  description: string;
  features: string[];
}

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  action: ActionItem;
  onClaim: (type: string) => void;
  isLoading: boolean;
}

interface BottomActionsBarProps {
  className?: string;
}

const actions: ActionItem[] = [
  {
    id: 'award',
    icon: '🏆',
    label: 'Award',
    color: 'bg-red-500 hover:bg-red-600',
    description: 'Claim your daily login rewards and achievements',
    features: [
      'Daily login bonus: 1000 coins + ₹5',
      'Weekly streak rewards',
      'Achievement badges',
      'Special milestone rewards'
    ]
  },
  {
    id: 'task',
    icon: '📋',
    label: 'Task',
    color: 'bg-blue-500 hover:bg-blue-600',
    description: 'Complete daily and weekly tasks for extra rewards',
    features: [
      'Daily task completion: 500 coins',
      'Play 5 games: 200 coins',
      'Win 3 games: 300 coins',
      'Weekly challenge: 2000 coins'
    ]
  },
  {
    id: 'cashback',
    icon: '💰',
    label: 'CashBack',
    color: 'bg-gray-500 hover:bg-gray-600',
    description: 'Get cashback on your gaming losses',
    features: [
      'Cashback bonus: ₹10',
      '5% cashback on losses',
      'Weekly cashback summary',
      'VIP members get extra cashback'
    ]
  },
  {
    id: 'bonus',
    icon: '🎁',
    label: 'Bonus',
    color: 'bg-yellow-500 hover:bg-yellow-600',
    description: 'Spin the lucky wheel and claim bonus rewards',
    features: [
      'Lucky spin: 2000 coins',
      'Hourly free spins',
      'Mega jackpot chances',
      'Special event bonuses'
    ]
  },
  {
    id: 'gift-vip',
    icon: '👑',
    label: 'Gift VIP',
    color: 'bg-purple-500 hover:bg-purple-600',
    description: 'Exclusive VIP member benefits and gifts',
    features: [
      'VIP gift: 5000 coins + 100 VIP points',
      'Priority customer support',
      'Exclusive tournaments',
      'Higher withdrawal limits'
    ]
  },
  {
    id: 'add-cash',
    icon: '💳',
    label: 'Add Cash',
    color: 'bg-green-500 hover:bg-green-600',
    description: 'Add cash to your account with bonus rewards',
    features: [
      'First deposit bonus: ₹25',
      'Instant deposits',
      'Multiple payment methods',
      'Secure transactions'
    ]
  }
];

function ActionModal({ isOpen, onClose, action, onClaim, isLoading }: ActionModalProps) {
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
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`${action.color.replace('hover:', '')} p-6 rounded-t-2xl text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{action.icon}</span>
              <h2 className="text-xl font-bold">{action.label}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <p className="text-sm opacity-90 mt-2">{action.description}</p>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-gray-900">Features & Rewards:</h3>
            <ul className="space-y-2">
              {action.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Claim Button */}
          <button
            onClick={() => onClaim(action.id)}
            disabled={isLoading}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : `${action.color} shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-current`
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Claiming...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <span>{action.icon}</span>
                <span>Claim Now</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BottomActionsBar({ className = '' }: BottomActionsBarProps) {
  const [selectedAction, setSelectedAction] = useState<ActionItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { updateBalance } = useUserStore();
  
  const handleActionClick = (action: ActionItem) => {
    setSelectedAction(action);
  };
  
  const handleClaim = async (type: string) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/reward/claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Update user balances
        if (data.reward) {
          updateBalance({
            coins: data.reward.coins || 0,
            cash: data.reward.cash || 0,
          });
        }
        
        // Show success toast
        toast.success(data.message, {
          icon: '🎉',
          duration: 4000,
          style: {
            background: '#10B981',
            color: '#FFFFFF',
          },
        });
        
        setSelectedAction(null);
      } else {
        // Handle different error types
        if (response.status === 429) {
          // Rate limited
          toast.error(
            `Too fast! ${data.message || 'Please wait before claiming again'}`,
            {
              icon: '⏰',
              duration: 5000,
              style: {
                background: '#F59E0B',
                color: '#FFFFFF',
              },
            }
          );
        } else {
          // Other errors
          toast.error(data.error || 'Failed to claim reward', {
            icon: '❌',
            duration: 4000,
            style: {
              background: '#EF4444',
              color: '#FFFFFF',
            },
          });
        }
      }
    } catch (error) {
      console.error('Claim error:', error);
      toast.error('Network error. Please try again.', {
        icon: '🌐',
        duration: 4000,
        style: {
          background: '#EF4444',
          color: '#FFFFFF',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <div className={`fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 z-40 ${className}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Action Buttons */}
            <div className="flex space-x-3 sm:space-x-6 flex-1 justify-center">
              {actions.slice(0, 5).map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleActionClick(action)}
                  className="flex flex-col items-center space-y-1 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
                >
                  <div className={`${action.color} p-2 sm:p-3 rounded-xl shadow-lg`}>
                    <span className="text-lg sm:text-xl">{action.icon}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Add Cash Button (Special) */}
            <button
              onClick={() => handleActionClick(actions[5])}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black pulse-glow"
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">💳</span>
                <span className="hidden sm:inline">ADD CASH</span>
                <span className="sm:hidden">ADD</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Action Modal */}
      {selectedAction && (
        <ActionModal
          isOpen={!!selectedAction}
          onClose={() => setSelectedAction(null)}
          action={selectedAction}
          onClaim={handleClaim}
          isLoading={isLoading}
        />
      )}
    </>
  );
}