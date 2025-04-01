import { useState } from 'react';
import { currencies } from '../data';
import { useCryptoStore } from '../store';
import { Pairs } from '../types';
import ErrorMessage from './ErrorMessage';

export default function CriptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  const fetchData = useCryptoStore((state) => state.fetchData);

  const [pair, setPair] = useState<Pairs>({
    currency: '',
    cryptocurrencies: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes('')) {
      setError('Todos los campos son obligatorios');
    }
    setError('');
    fetchData(pair);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error} </ErrorMessage>}
      <div className='field'>
        <label htmlFor='currency'>Moneda:</label>
        <select
          name='currency'
          id='currency'
          value={pair.currency}
          onChange={handleChange}
        >
          <option value=''>-- Selecione --</option>
          {currencies.map((curr) => (
            <option key={curr.code} value={curr.code}>
              {curr.name}{' '}
            </option>
          ))}
        </select>
      </div>
      <div className='field'>
        <label htmlFor='cryptocurrencies'>Criptomoneda:</label>
        <select
          name='cryptocurrencies'
          id='cryptocurrencies'
          onChange={handleChange}
        >
          <option value={pair.cryptocurrencies}>-- Selecione --</option>
          {cryptocurrencies.map((curr) => (
            <option key={curr.SYMBOL} value={curr.SYMBOL}>
              {curr.NAME}
            </option>
          ))}
        </select>
      </div>
      <input type='submit' value='Cotizar' />
    </form>
  );
}
