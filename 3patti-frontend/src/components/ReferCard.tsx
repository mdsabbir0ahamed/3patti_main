'use client';

import { useState, useRef } from 'react';
import { useUserStore } from '../store/useUserStore';

interface ReferCardProps {
  className?: string;
  language?: 'en' | 'bn';
}

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'bn';
}

const translations = {
  en: {
    headline: 'Refer & Earn',
    subtitle: 'Get ₹ 2000000',
    weeklyVip: 'Weekly VIP',
    freeCash: 'Free Cash',
    inviteNow: 'Invite Now',
    referralCode: 'Your Referral Code',
    referralLink: 'Your Referral Link',
    copyCode: 'Copy Code',
    copyLink: 'Copy Link',
    copied: 'Copied!',
    shareWith: 'Share with friends',
    closeModal: 'Close',
    earnMore: 'Earn more by inviting friends!',
  },
  bn: {
    headline: 'রেফার ও আয় করুন',
    subtitle: '₹ ২০০০০০০ পান',
    weeklyVip: 'সাপ্তাহিক ভিআইপি',
    freeCash: 'ফ্রি ক্যাশ',
    inviteNow: 'এখনই আমন্ত্রণ করুন',
    referralCode: 'আপনার রেফারেল কোড',
    referralLink: 'আপনার রেফারেল লিংক',
    copyCode: 'কোড কপি করুন',
    copyLink: 'লিংক কপি করুন',
    copied: 'কপি হয়েছে!',
    shareWith: 'বন্ধুদের সাথে শেয়ার করুন',
    closeModal: 'বন্ধ করুন',
    earnMore: 'বন্ধুদের আমন্ত্রণ জানিয়ে আরও আয় করুন!',
  },
};

function ReferralModal({ isOpen, onClose, language }: ReferralModalProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const { user } = useUserStore();
  const t = translations[language];
  
  const referralCode = `REF${user.id}`;
  const referralLink = `https://3patti.game/ref/${referralCode}`;
  
  const copyToClipboard = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: '📱',
      url: `https://wa.me/?text=${encodeURIComponent(`Join me on 3 Patti Game! Use my referral code: ${referralCode} or click: ${referralLink}`)}`,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Telegram',
      icon: '✈️',
      url: `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(`Join me on 3 Patti Game! Use code: ${referralCode}`)}`,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Join me on 3 Patti Game! Use code: ${referralCode}`)}&url=${encodeURIComponent(referralLink)}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    }
  ];
  
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
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-t-2xl text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{t.headline}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={t.closeModal}
            >
              ✕
            </button>
          </div>
          <p className="text-sm opacity-90 mt-2">{t.earnMore}</p>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Referral Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.referralCode}
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={referralCode}
                readOnly
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={() => copyToClipboard(referralCode, 'code')}
                className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                {copiedItem === 'code' ? t.copied : t.copyCode}
              </button>
            </div>
          </div>
          
          {/* Referral Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.referralLink}
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={() => copyToClipboard(referralLink, 'link')}
                className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                {copiedItem === 'link' ? t.copied : t.copyLink}
              </button>
            </div>
          </div>
          
          {/* Share Options */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">{t.shareWith}</h3>
            <div className="grid grid-cols-2 gap-3">
              {shareOptions.map((option) => (
                <a
                  key={option.name}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${option.color} text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                >
                  <span className="text-lg">{option.icon}</span>
                  <span className="text-sm font-medium">{option.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReferCard({ className = '', language = 'en' }: ReferCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = translations[language];
  
  return (
    <>
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 p-1 ${className}`}>
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
        
        {/* Card content */}
        <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            {/* Left content */}
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 drop-shadow-lg">
                {t.headline}
              </h2>
              <p className="text-lg lg:text-xl mb-4 opacity-95 drop-shadow">
                {t.subtitle}
              </p>
              
              {/* Perk chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                  <span className="mr-1">👑</span>
                  {t.weeklyVip}
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                  <span className="mr-1">💰</span>
                  {t.freeCash}
                </div>
              </div>
              
              {/* CTA Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-purple-500 shadow-lg hover:shadow-xl"
              >
                {t.inviteNow}
              </button>
            </div>
            
            {/* Right hero image */}
            <div className="hidden sm:block ml-6">
              <div className="relative w-24 h-24 lg:w-32 lg:h-32">
                <img 
                  src="https://ui-avatars.com/api/?name=Girl&background=FF69B4&color=fff&size=128" 
                  alt="Refer & Earn" 
                  className="w-full h-full rounded-full border-4 border-white/30 shadow-2xl floating-animation"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/50 to-orange-400/50 blur-xl -z-10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Referral Modal */}
      <ReferralModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        language={language}
      />
      
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}