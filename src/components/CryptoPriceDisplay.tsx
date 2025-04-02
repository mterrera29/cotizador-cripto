import { useCryptoStore } from '../store';

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);
  const hasResult = !Object.values(result).includes('');
  return (
    <div>
      {hasResult && (
        <>
          <h2>Cotización</h2>
          <div className='result'>
            <div>
              <p>
                El precio es de: <span>{result.PRICE_CONVERSION_VALUE} </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
