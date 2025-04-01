import { create } from 'zustand';
import { Cryptocurrency, Pairs } from './types';
import { devtools } from 'zustand/middleware';
import { FetchCurrentCryptoPrice, getCryptos } from './services/CryptoService';

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pairs) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },
    fetchData: async (pair) => {
      await FetchCurrentCryptoPrice(pair);
    },
  }))
);
