import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Locale = 'en' | 'bn';

interface LocaleStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'header.guest': 'Guest',
    'header.vip': 'VIP',
    'header.coins': 'Coins',
    'header.cash': 'Cash',
    'header.deposit': 'Deposit',
    'header.withdraw': 'Withdraw',
    'header.support': 'Support',
    'games.teenPatti': 'Teen Patti',
    'games.jackTP': 'Jack TP',
    'games.rummy': 'Rummy',
    'games.andarBahar': 'Andar Bahar',
    'games.players': 'players',
    'games.playNow': 'Play Now',
    'games.loading': 'Loading games...',
    'refer.title': 'Invite Friends & Earn',
    'refer.subtitle': 'Get rewards for every friend you invite',
    'refer.inviteNow': 'Invite Now',
    'actions.award': 'Award',
    'actions.task': 'Task',
    'actions.cashback': 'CashBack',
    'actions.bonus': 'Bonus',
    'actions.giftVip': 'Gift VIP',
    'actions.addCash': 'Add Cash',
    'actions.claimNow': 'Claim Now',
    'actions.claiming': 'Claiming...',
    'messages.copied': 'Copied to clipboard!',
    'messages.rewardClaimed': 'Reward claimed successfully!',
    'common.close': 'Close',
    'common.loading': 'Loading...',
  },
  bn: {
    'header.guest': 'গেস্ট',
    'header.vip': 'ভিআইপি',
    'header.coins': 'কয়েন',
    'header.cash': 'ক্যাশ',
    'header.deposit': 'জমা',
    'header.withdraw': 'তুলুন',
    'header.support': 'সাপোর্ট',
    'games.teenPatti': 'তিন পাত্তি',
    'games.jackTP': 'জ্যাক টিপি',
    'games.rummy': 'রামি',
    'games.andarBahar': 'আন্দার বাহার',
    'games.players': 'খেলোয়াড়',
    'games.playNow': 'এখনই খেলুন',
    'games.loading': 'গেম লোড হচ্ছে...',
    'refer.title': 'বন্ধুদের আমন্ত্রণ জানান ও পুরস্কার পান',
    'refer.subtitle': 'প্রতিটি বন্ধুর জন্য পুরস্কার পান',
    'refer.inviteNow': 'এখনই আমন্ত্রণ জানান',
    'actions.award': 'পুরস্কার',
    'actions.task': 'কাজ',
    'actions.cashback': 'ক্যাশব্যাক',
    'actions.bonus': 'বোনাস',
    'actions.giftVip': 'গিফট ভিআইপি',
    'actions.addCash': 'ক্যাশ যোগ করুন',
    'actions.claimNow': 'এখনই দাবি করুন',
    'actions.claiming': 'দাবি করা হচ্ছে...',
    'messages.copied': 'ক্লিপবোর্ডে কপি হয়েছে!',
    'messages.rewardClaimed': 'পুরস্কার সফলভাবে দাবি করা হয়েছে!',
    'common.close': 'বন্ধ করুন',
    'common.loading': 'লোড হচ্ছে...',
  },
};

export const useLocaleStore = create<LocaleStore>()(
  persist(
    (set, get) => ({
      locale: 'en' as Locale,
      setLocale: (locale: Locale) => set({ locale }),
      t: (key: string) => {
        const state = get() as LocaleStore;
        return translations[state.locale][key as keyof typeof translations.en] || key;
      },
    }),
    {
      name: 'locale-storage',
    }
  )
);
