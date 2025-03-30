import { create } from 'zustand';
import { CryptoCurrencyResponseArray } from './schema/cripto-schema';
async function getCryptos() {
  const url =
    'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD&asset_type=TOKEN';
  const data = await fetch(url)
    .then(async (res) => {
      if (!res) {
        throw new Error('no hay datos aún');
      }
      return await res.json();
    })
    .then((res) => {
      return res.Data.LIST;
    })
    .catch((err) => console.error(err));
  const result = CryptoCurrencyResponseArray.safeParse(data);
  if (result.success) {
    return result.data;
  }
}
export const useCryptoStore = create((set) => ({
  cryptoCurrency: [],
  fetchCryptos: async () => {
    const cryptoCurrency = await getCryptos();
    set(() => ({
      cryptoCurrency,
    }));
  },
}));
