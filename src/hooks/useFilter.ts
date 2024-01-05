import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

type TReturn = [URLSearchParams, (name: string, value: string) => void];

const useFilter = (): TReturn => {
  const [query, setQuery] = useSearchParams();

  const setParamValue = useCallback((name: string, value: string) => {
    query.delete('page');
    if (value) query.set(name, value);
    else query.delete(name);
    setQuery(query);
  }, []);

  return [query, setParamValue];
};

export default useFilter;
