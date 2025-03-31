import { z } from 'zod';
import {
  CryptoCurrencyResponseArray,
  CryptoCurrencyResponseSchema,
  CurrencySchema,
} from '../schema/cripto-schema';

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Cryptocurrencies = z.infer<typeof CryptoCurrencyResponseArray>;
