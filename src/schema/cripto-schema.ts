import { z } from 'zod';

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencyResponseSchema = z.object({
  SYMBOL: z.string(),
  NAME: z.string(),
});

export const CryptoCurrencyResponseArray = z.array(
  CryptoCurrencyResponseSchema
);

export const PairSchema = z.object({
  currency: z.string(),
  cryptocurrencies: z.string(),
});
