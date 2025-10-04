// Mobile-First Header Component JSX Structure

<header className="header">
  {/* Main Header Content */}
  <div className="container">
    {/* Mobile: Stack vertically, Desktop: Horizontal layout */}
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      
      {/* Top Row: Avatar + Balances (Mobile) / Left + Center + Right (Desktop) */}
      <div className="flex items-center justify-between w-full md:w-auto">
        
        {/* Left: Avatar + Guest Info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* Avatar Circle */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
              G
            </div>
            {/* VIP Badge */}
            <div className="vip-badge">
              👑 VIP 3
            </div>
          </div>
          
          {/* Guest Info */}
          <div className="hidden sm:block">
            <div className="text-base font-medium" style={{color: 'var(--color-text)'}}>
              Guest451487…
            </div>
            <div className="text-dim text-sm">
              ID: 1245430
            </div>
          </div>
        </div>

        {/* Right: Action Buttons (Mobile: Show all, Desktop: Show all) */}
        <div className="flex items-center gap-2">
          {/* Withdraw Button */}
          <button className="icon-btn" aria-label="Withdraw">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10V9l4 3-4 3z"/>
            </svg>
          </button>
          
          {/* Service Button */}
          <button className="icon-btn" aria-label="Service">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0 5.5c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5z"/>
            </svg>
          </button>
          
          {/* Mail Button */}
          <button className="icon-btn" aria-label="Mail">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v.83l9 4.5 9-4.5V5H3zm0 2.17V19h18V7.17l-9 4.5-9-4.5z"/>
            </svg>
          </button>
          
          {/* Settings Button */}
          <button className="icon-btn" aria-label="Settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Center: Balances (Mobile: Full width, Desktop: Center) */}
      <div className="flex items-center justify-center gap-4 mt-2 md:mt-0 md:gap-6">
        {/* Coins Balance Pill */}
        <div className="balance-pill">
          <div className="balance-pill-content">
            <span className="balance-icon text-gold">🪙</span>
            <div className="balance-info">
              <div className="balance-label">Coins</div>
              <div className="balance-value tabular-nums">1,245,430</div>
            </div>
          </div>
        </div>

        {/* Cash Balance Pill */}
        <div className="balance-pill">
          <div className="balance-pill-content">
            <span className="balance-icon text-emerald">💵</span>
            <div className="balance-info">
              <div className="balance-label">Cash</div>
              <div className="balance-value tabular-nums">100.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom: Marquee Ticker */}
    <div className="marquee mt-4">
      <div className="marquee-text">
        🎉 Congrats to Imran Khan for getting a handful of coins!
      </div>
    </div>
  </div>
</header>