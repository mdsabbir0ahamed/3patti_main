import { NextRequest, NextResponse } from 'next/server';

interface ClaimRequest {
  type: 'award' | 'task' | 'cashback' | 'bonus' | 'gift-vip' | 'add-cash';
}

interface RewardData {
  type: string;
  title: string;
  description: string;
  reward: {
    coins?: number;
    cash?: number;
    vipPoints?: number;
  };
  cooldown: number; // in minutes
}

const rewards: Record<string, RewardData> = {
  award: {
    type: 'award',
    title: 'Daily Award',
    description: 'Claim your daily login reward!',
    reward: { coins: 1000, cash: 5 },
    cooldown: 1440, // 24 hours
  },
  task: {
    type: 'task',
    title: 'Daily Tasks',
    description: 'Complete daily tasks to earn rewards!',
    reward: { coins: 500 },
    cooldown: 1440,
  },
  cashback: {
    type: 'cashback',
    title: 'CashBack Bonus',
    description: 'Get cashback on your recent games!',
    reward: { cash: 10 },
    cooldown: 720, // 12 hours
  },
  bonus: {
    type: 'bonus',
    title: 'Lucky Bonus',
    description: 'Spin the wheel for bonus rewards!',
    reward: { coins: 2000 },
    cooldown: 360, // 6 hours
  },
  'gift-vip': {
    type: 'gift-vip',
    title: 'VIP Gift',
    description: 'Exclusive VIP member rewards!',
    reward: { coins: 5000, vipPoints: 100 },
    cooldown: 2880, // 48 hours
  },
  'add-cash': {
    type: 'add-cash',
    title: 'Add Cash Bonus',
    description: 'Get bonus on your next cash purchase!',
    reward: { cash: 25 },
    cooldown: 60, // 1 hour
  },
};

// Simple rate limiting (in production, use Redis or database)
const rateLimitStore = new Map<string, number>();

function isRateLimited(userId: string, type: string): boolean {
  const key = `${userId}:${type}`;
  const lastClaim = rateLimitStore.get(key);
  const now = Date.now();
  const cooldown = rewards[type]?.cooldown || 60;
  
  if (lastClaim && (now - lastClaim) < (cooldown * 60 * 1000)) {
    return true;
  }
  
  return false;
}

function setRateLimit(userId: string, type: string): void {
  const key = `${userId}:${type}`;
  rateLimitStore.set(key, Date.now());
}

function getRemainingCooldown(userId: string, type: string): number {
  const key = `${userId}:${type}`;
  const lastClaim = rateLimitStore.get(key);
  const now = Date.now();
  const cooldown = rewards[type]?.cooldown || 60;
  
  if (!lastClaim) return 0;
  
  const elapsed = now - lastClaim;
  const remaining = (cooldown * 60 * 1000) - elapsed;
  
  return Math.max(0, Math.ceil(remaining / (60 * 1000))); // Return minutes
}

export async function POST(request: NextRequest) {
  try {
    const body: ClaimRequest = await request.json();
    const { type } = body;
    
    // Validate request
    if (!type || !rewards[type]) {
      return NextResponse.json(
        { success: false, error: 'Invalid reward type' },
        { status: 400 }
      );
    }
    
    // Simulate user ID (in production, get from authentication)
    const userId = '1245430';
    
    // Check rate limiting
    if (isRateLimited(userId, type)) {
      const remaining = getRemainingCooldown(userId, type);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Rate limited',
          message: `Please wait ${remaining} minutes before claiming again`,
          remainingMinutes: remaining
        },
        { status: 429 }
      );
    }
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const reward = rewards[type];
    
    // Set rate limit
    setRateLimit(userId, type);
    
    return NextResponse.json({
      success: true,
      message: `${reward.title} claimed successfully!`,
      reward: reward.reward,
      nextClaimIn: reward.cooldown,
    });
    
  } catch (error) {
    console.error('Reward claim error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}