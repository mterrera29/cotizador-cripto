import { useCryptoStore } from '../store';
import Spinner from './Spinner';

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);
  const loading = useCryptoStore((state) => state.loading);
  console.log(Object.values(result).length);
  const hasResult = Object.values(result).length === 0 ? false : true;
  console.log(hasResult);
  return (
    <div className='result-wrapper'>
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2>Cotización</h2>
            <div className='result'>
              <img src={result.LOGO_URL} alt='Imágen cryptomoneda' />
              <div>
                <p>
                  El precio es de: <span>{result.PRICE_CONVERSION_VALUE} </span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
