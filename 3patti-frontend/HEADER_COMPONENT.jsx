/* Mobile-First Header Component */

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

/* Additional CSS Classes for Header Component */

/* Balance Pills */
.balance-pill {
  background: linear-gradient(135deg, rgba(20, 23, 29, 0.8) 0%, rgba(24, 27, 34, 0.8) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: 8px 16px;
  box-shadow: var(--shadow-soft);
}

.balance-pill-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.balance-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.balance-info {
  text-align: left;
}

.balance-label {
  color: var(--color-text-dim);
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  line-height: 1;
  margin-bottom: 2px;
}

.balance-value {
  color: var(--color-text);
  font-family: var(--font-manrope);
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  line-height: 1;
}

/* Mobile Responsive Adjustments */
@media (max-width: 640px) {
  .balance-pill {
    flex: 1;
    min-width: 0;
  }
  
  .balance-pill-content {
    justify-content: center;
  }
  
  .balance-value {
    font-size: 14px;
  }
  
  .icon-btn {
    width: 32px;
    height: 32px;
  }
  
  .icon-btn svg {
    width: 16px;
    height: 16px;
  }
}

/* VIP Badge Enhanced */
.vip-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%);
  color: var(--color-bg);
  font-size: 10px;
  font-weight: var(--font-weight-bold);
  padding: 2px 6px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(245, 192, 68, 0.6);
  box-shadow: 0 0 8px rgba(245, 192, 68, 0.4);
  white-space: nowrap;
}

/* Icon Button Enhancements */
.icon-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-panel-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-dim);
  cursor: pointer;
  transition: all var(--duration-hover) var(--easing-smooth);
}

.icon-btn:hover {
  color: var(--color-text);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hard);
}

.icon-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-focus);
}

/* Marquee Container */
.marquee {
  background-color: rgba(20, 23, 29, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(35, 39, 51, 0.5);
  border-radius: var(--radius-xl);
  padding: 12px;
  overflow: hidden;
}

.marquee-text {
  animation: marquee var(--duration-marquee) linear infinite;
  white-space: nowrap;
  color: var(--color-text-dim);
  font-size: 14px;
  font-weight: var(--font-weight-medium);
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .marquee-text {
    animation: none;
  }
  
  .icon-btn:hover {
    transform: none;
  }
}