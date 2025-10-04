import { create } from 'zustand';

interface User {
  id: string;
  username: string;
  avatar: string;
  vipLevel: number;
  coins: number;
  cash: number;
  isLoading: boolean;
}

interface Notification {
  id: string;
  message: string;
  timestamp: number;
}

interface UserStore {
  user: User;
  notifications: Notification[];
  isLoading: boolean;
  setUser: (userData: Partial<User>) => void;
  updateBalance: (balanceUpdates: { coins?: number; cash?: number; }) => void;
  setNotifications: (notifications: Notification[]) => void;
  setLoading: (loading: boolean) => void;
  addNotification: (message: string) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: {
    id: '1245430',
    username: 'Montu**',
    avatar: '/avatar-placeholder.png',
    vipLevel: 5,
    coins: 46680,
    cash: 5.00,
    isLoading: false,
  },
  notifications: [
    { id: '1', message: 'Congratulations to Imran Khan **** for getting a handful of f', timestamp: Date.now() },
    { id: '2', message: 'Congratulations to Sarah for winning big in Teen Patti!', timestamp: Date.now() },
    { id: '3', message: 'Lucky player John just hit the jackpot!', timestamp: Date.now() },
    { id: '4', message: 'New VIP member Maria earned exclusive rewards!', timestamp: Date.now() },
    { id: '5', message: 'Daily bonus available - claim your free coins now!', timestamp: Date.now() },
  ],
  isLoading: false,
  
  setUser: (userData: Partial<User>) => {
    set((state) => ({
      user: { ...state.user, ...userData },
    }));
  },
  
  updateBalance: (balanceUpdates: { coins?: number; cash?: number; }) => {
    set((state) => ({
      user: {
        ...state.user,
        coins: balanceUpdates.coins ? state.user.coins + balanceUpdates.coins : state.user.coins,
        cash: balanceUpdates.cash ? state.user.cash + balanceUpdates.cash : state.user.cash,
      },
    }));
  },

  setNotifications: (notifications: Notification[]) => {
    set({ notifications });
  },

  setLoading: (loading: boolean) => {
    set((state) => ({
      user: { ...state.user, isLoading: loading },
      isLoading: loading,
    }));
  },

  addNotification: (message: string) => {
    set((state) => ({
      notifications: [
        { id: Date.now().toString(), message, timestamp: Date.now() },
        ...state.notifications.slice(0, 4), // Keep only latest 5
      ],
    }));
  },
}));
