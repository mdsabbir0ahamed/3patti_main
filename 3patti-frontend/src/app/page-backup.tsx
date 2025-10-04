'use client';

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="header">
        <div className="max-w-container mx-auto flex items-center justify-between">
          {/* Left: Avatar + Guest Info */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                G
              </div>
              <div className="vip-badge">
                👑 VIP 3
              </div>
            </div>
            <div>
              <div className="text-text font-medium">Guest451487…</div>
              <div className="text-textDim text-sm">ID: 1245430</div>
            </div>
          </div>
          
          {/* Center: Balances */}
          <div className="balances">
            <div className="balance">
              <span className="text-gold text-lg">🪙</span>
              <div>
                <div className="balance-label">Coins</div>
                <div className="balance-value">1,245,430</div>
              </div>
            </div>
            <div className="balance">
              <span className="text-emerald text-lg">💵</span>
              <div>
                <div className="balance-label">Cash</div>
                <div className="balance-value">26.09</div>
              </div>
            </div>
          </div>
          
          {/* Right: Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="icon-btn">🏦</button>
            <button className="icon-btn">🎧</button>
            <button className="icon-btn">✉️</button>
            <button className="icon-btn">⚙️</button>
          </div>
        </div>
        
        {/* Marquee */}
        <div className="max-w-container mx-auto mt-4">
          <div className="marquee">
            <div className="marquee-text">
              🎉 Congrats to Imran Khan for winning a handful of coins!
            </div>
          </div>
        </div>
      </header>
      
      {/* Left Sidebar */}
      <div className="fixed left-2 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        <div className="flex flex-col items-center gap-1 p-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
            🎁
          </div>
                    <span className="text-textDim text-xs font-medium">First Pay</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-2">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center">
            🎯
          </div>
          <span className="text-textDim text-xs font-medium">Lucky Spin</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            👑
          </div>
          <span className="text-textDim text-xs font-medium">Weekly VIP</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            💰
          </div>
          <span className="text-textDim text-xs font-medium">Free Cash</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-container mx-auto px-4 md:px-6 pt-6">
        {/* Refer & Earn Card */}
        <div className="refer-card mb-6">
          <div className="relative z-10">
            <h2 className="refer-title">Refer & Earn</h2>
            <div className="refer-subtitle">Get ₹ 200000000</div>
            <div className="refer-chips">
              <span className="chip">Weekly VIP</span>
              <span className="chip">Free Cash</span>
            </div>
            <button className="btn">Invite Now</button>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-48 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white text-6xl">
              🎁
            </div>
          </div>
        </div>
        
        {/* Games Grid */}
        <div className="grid-games">
          {/* Teen Patti */}
          <div className="game-card">
            <div className="game-top bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <div className="text-white text-4xl font-bold">🃏</div>
              <div className="ml-2 text-white font-bold text-lg">TEEN PATTI</div>
            </div>
            <div className="game-meta">
              <h3 className="game-title">TEEN PATTI</h3>
              <div className="game-id">#10295</div>
              <div className="game-count">
                <span>👥</span>
                <span>6,750,000</span>
              </div>
            </div>
          </div>
          
          {/* Jack TP */}
          <div className="game-card">
            <div className="game-top bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <div className="text-white text-4xl font-bold">🃏</div>
              <div className="ml-2 text-white font-bold text-lg">JACK TP</div>
            </div>
            <div className="game-meta">
              <h3 className="game-title">Jack TP</h3>
              <div className="game-id">#17825</div>
              <div className="game-count">
                <span>👥</span>
                <span>10,926</span>
              </div>
            </div>
          </div>
          
          {/* Rummy */}
          <div className="game-card">
            <div className="game-top bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <div className="text-white text-4xl font-bold">🎲</div>
              <div className="ml-2 text-white font-bold text-lg">RUMMY</div>
            </div>
            <div className="game-meta">
              <h3 className="game-title">Rummy</h3>
              <div className="game-id">#17823</div>
              <div className="game-count">
                <span>👥</span>
                <span>11,258</span>
              </div>
            </div>
          </div>
          
          {/* Andar Bahar */}
          <div className="game-card">
            <div className="game-top bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
              <div className="text-white text-4xl font-bold">♠️</div>
              <div className="ml-2 text-white font-bold text-lg">ANDAR BAHAR</div>
            </div>
            <div className="game-meta">
              <h3 className="game-title">Andar Bahar</h3>
              <div className="game-id">#17824</div>
              <div className="game-count">
                <span>👥</span>
                <span>17,058</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Actions */}
      <div className="bottom-actions">
        <div className="max-w-container mx-auto">
          <div className="actions-grid">
            <div className="action-chip">
              <div className="action-icon bg-red-500 text-white">
                🏆
              </div>
              <span className="action-label">Award</span>
            </div>
            
            <div className="action-chip">
              <div className="action-icon bg-blue-500 text-white">
                📋
              </div>
              <span className="action-label">Task</span>
            </div>
            
            <div className="action-chip">
              <div className="action-icon bg-gray-500 text-white">
                💰
              </div>
              <span className="action-label">CashBack</span>
            </div>
            
            <div className="action-chip">
              <div className="action-icon bg-yellow-500 text-white">
                🎁
              </div>
              <span className="action-label">Bonus</span>
            </div>
            
            <div className="action-chip">
              <div className="action-icon bg-purple-500 text-white">
                👑
              </div>
              <span className="action-label">Gift VIP</span>
            </div>
            
            <button className="add-cash-btn col-span-1">
              <span className="flex items-center gap-2 justify-center">
                <span>💳</span>
                <span>ADD CASH</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
