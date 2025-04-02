import { create } from 'zustand';
import { Cryptocurrency, CryptoPrice, Pairs } from './types';
import { devtools } from 'zustand/middleware';
import { FetchCurrentCryptoPrice, getCryptos } from './services/CryptoService';

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  result: CryptoPrice;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pairs) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {} as CryptoPrice,
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },
    fetchData: async (pair) => {
      const result = await FetchCurrentCryptoPrice(pair);
      set(() => ({
        result,
      }));
    },
  }))
);
