import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  username: string;
  email?: string;
  avatar: string;
  vipLevel: number;
  coins: number;
  cash: number;
  isLoading: boolean;
  isGuest: boolean;
  referralCode: string;
  totalEarnings: number;
  gamesPlayed: number;
  winRate: number;
}

export interface Notification {
  id: string;
  message: string;
  timestamp: number;
  type: 'info' | 'success' | 'warning' | 'celebration';
  isRead: boolean;
}

interface UserStore {
  user: User;
  notifications: Notification[];
  isLoading: boolean;
  setUser: (userData: Partial<User>) => void;
  updateBalance: (balanceUpdates: { coins?: number; cash?: number }) => void;
  setNotifications: (notifications: Notification[]) => void;
  addNotification: (message: string, type?: Notification['type']) => void;
  markNotificationAsRead: (id: string) => void;
  clearNotifications: () => void;
  setLoading: (loading: boolean) => void;
  generateReferralLink: () => string;
}

const generateGuestId = () => `GUEST${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

const defaultNotifications: Notification[] = [
  {
    id: '1',
    message: 'Welcome to the ultimate gaming experience! 🎮',
    timestamp: Date.now(),
    type: 'celebration',
    isRead: false,
  },
  {
    id: '2',
    message: 'Congratulations to Imran Khan for winning big in Teen Patti! 🎉',
    timestamp: Date.now() - 60000,
    type: 'celebration',
    isRead: false,
  },
  {
    id: '3',
    message: 'Lucky player Sarah just hit the jackpot! 💰',
    timestamp: Date.now() - 120000,
    type: 'celebration',
    isRead: false,
  },
];

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: {
        id: generateGuestId(),
        username: 'Guest User',
        avatar: '/avatar-placeholder.png',
        vipLevel: 1,
        coins: 50000,
        cash: 100.00,
        isLoading: false,
        isGuest: true,
        referralCode: `REF${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        totalEarnings: 0,
        gamesPlayed: 0,
        winRate: 0,
      },
      notifications: defaultNotifications,
      isLoading: false,
      
      setUser: (userData: Partial<User>) => {
        set((state: UserStore) => ({
          user: { ...state.user, ...userData },
        }));
      },
      
      updateBalance: (balanceUpdates: { coins?: number; cash?: number }) => {
        set((state: UserStore) => ({
          user: {
            ...state.user,
            coins: balanceUpdates.coins !== undefined 
              ? Math.max(0, state.user.coins + balanceUpdates.coins)
              : state.user.coins,
            cash: balanceUpdates.cash !== undefined 
              ? Math.max(0, state.user.cash + balanceUpdates.cash)
              : state.user.cash,
          },
        }));
      },
      
      setNotifications: (notifications: Notification[]) => {
        set({ notifications });
      },
      
      addNotification: (message: string, type: Notification['type'] = 'info') => {
        set((state: UserStore) => ({
          notifications: [
            {
              id: Date.now().toString(),
              message,
              timestamp: Date.now(),
              type,
              isRead: false,
            },
            ...state.notifications.slice(0, 9),
          ],
        }));
      },
      
      markNotificationAsRead: (id: string) => {
        set((state: UserStore) => ({
          notifications: state.notifications.map((notif: Notification) =>
            notif.id === id ? { ...notif, isRead: true } : notif
          ),
        }));
      },
      
      clearNotifications: () => {
        set({ notifications: [] });
      },
      
      setLoading: (loading: boolean) => {
        set((state: UserStore) => ({
          user: { ...state.user, isLoading: loading },
          isLoading: loading,
        }));
      },
      
      generateReferralLink: () => {
        const state = get() as UserStore;
        return `${typeof window !== 'undefined' ? window.location.origin : ''}/register?ref=${state.user.referralCode}`;
      },
    }),
    {
      name: 'user-storage',
      partialize: (state: UserStore) => ({ user: state.user }),
    }
  )
);
