import { create } from 'zustand';
import useSWR from 'swr';

export interface Game {
  id: string;
  name: string;
  slug: string;
  playerCount: number;
  image: string;
  description: string;
  minBet: number;
  maxBet: number;
  isActive: boolean;
  category: 'card' | 'casino' | 'slots';
}

interface GamesStore {
  games: Game[];
  selectedGame: Game | null;
  isLoading: boolean;
  error: string | null;
  setGames: (games: Game[]) => void;
  setSelectedGame: (game: Game | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  getGameBySlug: (slug: string) => Game | undefined;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGamesStore = create<GamesStore>((set, get) => ({
  games: [],
  selectedGame: null,
  isLoading: false,
  error: null,
  
  setGames: (games) => set({ games }),
  setSelectedGame: (game) => set({ selectedGame: game }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  
  getGameBySlug: (slug: string) => {
    const { games } = get();
    return games.find(game => game.slug === slug);
  },
}));

export const useGames = () => {
  const { setGames, setLoading, setError } = useGamesStore();
  
  const { data, error, isLoading, mutate } = useSWR('/api/games', fetcher, {
    refreshInterval: 30000,
    revalidateOnFocus: true,
    onSuccess: (data) => {
      setGames(data.games || []);
      setLoading(false);
      setError(null);
    },
    onError: (error) => {
      setError(error.message);
      setLoading(false);
    },
  });
  
  return {
    games: data?.games || [],
    isLoading,
    error,
    mutate,
  };
};
