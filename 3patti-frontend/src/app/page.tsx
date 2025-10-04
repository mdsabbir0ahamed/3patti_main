'use client';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Left Sidebar */}
      <div 
        className="hidden md:fixed z-10 flex flex-col gap-3"
        style={{
          left: '8px',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        <div className="flex flex-col items-center gap-1 p-2">
          <div 
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            🎁
          </div>
          <span className="text-dim text-sm font-medium">First Pay</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-2">
          <div 
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #F59E0B 0%, #DC2626 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            🎯
          </div>
          <span className="text-dim text-sm font-medium">Lucky Spin</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-2">
          <div 
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            👑
          </div>
          <span className="text-dim text-sm font-medium">Weekly VIP</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-2">
          <div 
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            💰
          </div>
          <span className="text-dim text-sm font-medium">Free Cash</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container md:ml-[60px]" style={{ paddingTop: '24px' }}>
        {/* Refer & Earn Card */}
        <div className="refer-card mb-6">
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 className="refer-title">Refer & Earn</h2>
            <div className="refer-subtitle">Get ₹ 200000000</div>
            <div className="refer-chips">
              <span className="chip">Weekly VIP</span>
              <span className="chip">Free Cash</span>
            </div>
            <button className="btn">Invite Now</button>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div
              style={{
                width: '200px',
                height: '150px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 100%)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px'
              }}
            >
              🎉
            </div>
          </div>
        </div>
        
        {/* Games Grid */}
        <div className="game-grid">
          {/* Teen Patti */}
          <div className="game-card">
            <div className="game-thumbnail">
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '700'
                }}
              >
                🃏 TEEN PATTI
              </div>
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
            <div className="game-thumbnail">
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #DC2626 0%, #EC4899 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '700'
                }}
              >
                🃏 JACK TP
              </div>
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
            <div className="game-thumbnail">
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '700'
                }}
              >
                🃏 RUMMY
              </div>
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
            <div className="game-thumbnail">
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '700'
                }}
              >
                🃏 A&B
              </div>
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
        <div className="container">
          <div className="actions-grid">
            <div className="action-chip">
              <div className="action-icon" style={{ backgroundColor: '#DC2626', color: 'white' }}>
                🏆
              </div>
              <span className="action-label">Award</span>
            </div>
            
            <div className="action-chip">
              <div className="action-icon" style={{ backgroundColor: '#2563EB', color: 'white' }}>
                📋
              </div>
              <span className="action-label">Task</span>
            </div>
            
            <div className="action-chip">
              <div className="action-icon" style={{ backgroundColor: '#6B7280', color: 'white' }}>
                💰
              </div>
              <span className="action-label">CashBack</span>
            </div>
            
            <div className="action-chip">
              <div className="action-icon" style={{ backgroundColor: '#F59E0B', color: 'white' }}>
                🎁
              </div>
              <span className="action-label">Bonus</span>
            </div>
            
            <div className="action-chip">
              <div className="action-icon" style={{ backgroundColor: '#8B5CF6', color: 'white' }}>
                👑
              </div>
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
    </div>
  );
}