'use client';

import { useState } from 'react';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  return (
    <div className="dashboard-layout">
      
      {/* Mobile Overlay */}
      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'sidebar-overlay-visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />
      
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          
          {/* App Logo */}
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">🎰</div>
            <div className="sidebar-logo-text">Casino Pro</div>
          </div>
          
          {/* Search Input */}
          <div className="search-input-container">
            <div className="search-icon">🔍</div>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search games..."
            />
          </div>
          
          {/* Navigation Sections */}
          <nav className="flex flex-col gap-6">
            
            {/* GENERAL Section */}
            <div className="sidebar-section">
              <div className="sidebar-section-header">GENERAL</div>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'home' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('home')}
              >
                <span className="sidebar-link-icon">🏠</span>
                <span>Home</span>
              </a>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'profile' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('profile')}
              >
                <span className="sidebar-link-icon">👤</span>
                <span>Profile</span>
              </a>
            </div>
            
            {/* GAMES Section */}
            <div className="sidebar-section">
              <div className="sidebar-section-header">GAMES</div>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'teen-patti' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('teen-patti')}
              >
                <span className="sidebar-link-icon">🃏</span>
                <span>Teen Patti</span>
              </a>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'jack-tp' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('jack-tp')}
              >
                <span className="sidebar-link-icon">🎰</span>
                <span>Jack TP</span>
              </a>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'rummy' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('rummy')}
              >
                <span className="sidebar-link-icon">🎯</span>
                <span>Rummy</span>
              </a>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'andar-bahar' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('andar-bahar')}
              >
                <span className="sidebar-link-icon">🎲</span>
                <span>Andar Bahar</span>
              </a>
            </div>
            
            {/* REWARDS Section */}
            <div className="sidebar-section">
              <div className="sidebar-section-header">REWARDS</div>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'refer-earn' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('refer-earn')}
              >
                <span className="sidebar-link-icon">👥</span>
                <span>Refer & Earn</span>
              </a>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'bonus' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('bonus')}
              >
                <span className="sidebar-link-icon">🎁</span>
                <span>Bonus</span>
              </a>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'cashback' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('cashback')}
              >
                <span className="sidebar-link-icon">💰</span>
                <span>Cashback</span>
              </a>
            </div>
            
            {/* SETTINGS Section */}
            <div className="sidebar-section">
              <div className="sidebar-section-header">SETTINGS</div>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'account' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('account')}
              >
                <span className="sidebar-link-icon">⚙️</span>
                <span>Account</span>
              </a>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'support' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('support')}
              >
                <span className="sidebar-link-icon">🎧</span>
                <span>Support</span>
              </a>
              <a 
                href="#" 
                className={`sidebar-link ${activeLink === 'logout' ? 'sidebar-active' : ''}`}
                onClick={() => setActiveLink('logout')}
              >
                <span className="sidebar-link-icon">🚪</span>
                <span>Logout</span>
              </a>
            </div>
            
          </nav>
          
        </div>
      </aside>
      
      {/* Main Content Area */}
      <main className="main-content">
        
        {/* Header */}
        <header className="header">
          <div className="container flex items-center justify-between">
            
            {/* Mobile: Hamburger + Avatar, Desktop: Avatar + Guest Info */}
            <div className="flex items-center gap-3">
              
              {/* Mobile Hamburger Button */}
              <button 
                className="hamburger-btn"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              
              {/* Avatar + Guest Info */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                    G
                  </div>
                  <div className="vip-badge">👑 VIP 3</div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-base font-medium" style={{color: 'var(--color-text)'}}>
                    Guest451487…
                  </div>
                  <div className="text-dim text-sm">ID: 1245430</div>
                </div>
              </div>
            </div>
            
            {/* Center: Balances */}
            <div className="balance-group">
              <div className="balance-item">
                <span className="text-gold text-lg">🪙</span>
                <div>
                  <div className="balance-label">Coins</div>
                  <div className="balance-value">1,245,430</div>
                </div>
              </div>
              <div className="balance-item">
                <span className="text-emerald text-lg">💵</span>
                <div>
                  <div className="balance-label">Cash</div>
                  <div className="balance-value">100.00</div>
                </div>
              </div>
            </div>
            
            {/* Right: Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="icon-btn" aria-label="Withdraw">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10V9l4 3-4 3z"/>
                </svg>
              </button>
              <button className="icon-btn" aria-label="Service">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0 5.5c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5z"/>
                </svg>
              </button>
              <button className="icon-btn" aria-label="Mail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v.83l9 4.5 9-4.5V5H3zm0 2.17V19h18V7.17l-9 4.5-9-4.5z"/>
                </svg>
              </button>
              <button className="icon-btn" aria-label="Settings">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Marquee */}
          <div className="container mt-4">
            <div className="marquee">
              <div className="marquee-text">
                🎉 Congrats to Imran Khan for winning a handful of coins!
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <div className="container pt-6 pb-20">
          
          {/* Refer & Earn Card */}
          <div className="refer-earn-hero mb-6">
            <div className="refer-shine-overlay"></div>
            <div className="refer-content-grid">
              <div className="refer-visual">
                <div className="refer-visual-placeholder">
                  <div className="refer-icon-group">
                    <div className="refer-icon refer-icon-1">🎁</div>
                    <div className="refer-icon refer-icon-2">💰</div>
                    <div className="refer-icon refer-icon-3">👥</div>
                  </div>
                  <div className="refer-visual-text">
                    <div className="refer-visual-title">Invite Friends</div>
                    <div className="refer-visual-subtitle">Earn Together</div>
                  </div>
                </div>
              </div>
              <div className="refer-content">
                <h2 className="refer-title">Refer & Earn</h2>
                <div className="refer-subtitle">Get ₹ 20000000</div>
                <div className="refer-chips">
                  <div className="refer-chip">
                    <span className="refer-chip-icon">👑</span>
                    <span className="refer-chip-text">Weekly VIP</span>
                  </div>
                  <div className="refer-chip">
                    <span className="refer-chip-icon">💵</span>
                    <span className="refer-chip-text">Free Cash</span>
                  </div>
                </div>
                <button className="refer-cta-btn">
                  <span className="refer-cta-icon">📧</span>
                  <span className="refer-cta-text">Invite Now</span>
                  <span className="refer-cta-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Game Grid */}
          <div className="game-grid">
            {/* Teen Patti Card */}
            <div className="game-card" tabIndex="0" role="button" aria-label="Play Teen Patti">
              <div className="game-thumbnail">
                <div className="game-thumbnail-content game-thumbnail-teen-patti">
                  <div className="game-thumbnail-icon">🃏</div>
                  <div className="game-thumbnail-title">TEEN PATTI</div>
                  <div className="game-thumbnail-pattern"></div>
                </div>
              </div>
              <div className="game-meta">
                <h3 className="game-title">Teen Patti</h3>
                <div className="game-id">#10295</div>
                <div className="game-player-count">
                  <span className="game-player-icon">👥</span>
                  <span className="game-player-number">6,750,000</span>
                </div>
              </div>
            </div>
            
            {/* Jack TP Card */}
            <div className="game-card" tabIndex="0" role="button" aria-label="Play Jack TP">
              <div className="game-thumbnail">
                <div className="game-thumbnail-content game-thumbnail-jack-tp">
                  <div className="game-thumbnail-icon">🎰</div>
                  <div className="game-thumbnail-title">JACK TP</div>
                  <div className="game-thumbnail-pattern"></div>
                </div>
              </div>
              <div className="game-meta">
                <h3 className="game-title">Jack TP</h3>
                <div className="game-id">#17825</div>
                <div className="game-player-count">
                  <span className="game-player-icon">👥</span>
                  <span className="game-player-number">10,926</span>
                </div>
              </div>
            </div>
            
            {/* Rummy Card */}
            <div className="game-card" tabIndex="0" role="button" aria-label="Play Rummy">
              <div className="game-thumbnail">
                <div className="game-thumbnail-content game-thumbnail-rummy">
                  <div className="game-thumbnail-icon">🎯</div>
                  <div className="game-thumbnail-title">RUMMY</div>
                  <div className="game-thumbnail-pattern"></div>
                </div>
              </div>
              <div className="game-meta">
                <h3 className="game-title">Rummy</h3>
                <div className="game-id">#17823</div>
                <div className="game-player-count">
                  <span className="game-player-icon">👥</span>
                  <span className="game-player-number">11,258</span>
                </div>
              </div>
            </div>
            
            {/* Andar Bahar Card */}
            <div className="game-card" tabIndex="0" role="button" aria-label="Play Andar Bahar">
              <div className="game-thumbnail">
                <div className="game-thumbnail-content game-thumbnail-andar-bahar">
                  <div className="game-thumbnail-icon">🎲</div>
                  <div className="game-thumbnail-title">ANDAR BAHAR</div>
                  <div className="game-thumbnail-pattern"></div>
                </div>
              </div>
              <div className="game-meta">
                <h3 className="game-title">Andar Bahar</h3>
                <div className="game-id">#17824</div>
                <div className="game-player-count">
                  <span className="game-player-icon">👥</span>
                  <span className="game-player-number">17,058</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Actions */}
        <div className="bottom-actions">
          <div className="container">
            <div className="actions-grid">
              <div className="action-chip">
                <div className="action-icon" style={{ backgroundColor: '#DC2626', color: 'white' }}>🏆</div>
                <span className="action-label">Award</span>
              </div>
              <div className="action-chip">
                <div className="action-icon" style={{ backgroundColor: '#2563EB', color: 'white' }}>📋</div>
                <span className="action-label">Task</span>
              </div>
              <div className="action-chip">
                <div className="action-icon" style={{ backgroundColor: '#6B7280', color: 'white' }}>💰</div>
                <span className="action-label">CashBack</span>
              </div>
              <div className="action-chip">
                <div className="action-icon" style={{ backgroundColor: '#F59E0B', color: 'white' }}>🎁</div>
                <span className="action-label">Bonus</span>
              </div>
              <div className="action-chip">
                <div className="action-icon" style={{ backgroundColor: '#8B5CF6', color: 'white' }}>👑</div>
                <span className="action-label">Gift VIP</span>
              </div>
              <button className="add-cash-btn">
                <span className="flex items-center gap-2 justify-center">
                  <span>💳</span>
                  <span>ADD CASH</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        
      </main>
      
    </div>
  );
}