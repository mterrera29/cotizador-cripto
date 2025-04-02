import { create } from 'zustand';
import { Cryptocurrency, CryptoPrice, Pairs } from './types';
import { devtools } from 'zustand/middleware';
import { FetchCurrentCryptoPrice, getCryptos } from './services/CryptoService';

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  result: CryptoPrice;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pairs) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {} as CryptoPrice,
    loading: false,
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },
    fetchData: async (pair) => {
      set(() => ({
        loading: true,
      }));
      const result = await FetchCurrentCryptoPrice(pair);
      set(() => ({
        result,
        loading: false,
      }));
    },
  }))
);
