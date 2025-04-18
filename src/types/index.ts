import { z } from 'zod';
import {
  CryptoCurrencyResponseArray,
  CryptoCurrencyResponseSchema,
  CryptoPriceSchema,
  CurrencySchema,
  PairSchema,
} from '../schema/cripto-schema';

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Cryptocurrencies = z.infer<typeof CryptoCurrencyResponseArray>;
export type Pairs = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
