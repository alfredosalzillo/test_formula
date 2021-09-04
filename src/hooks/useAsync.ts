import { useCallback, useState } from 'react';

export type AsyncState<T, Error = any> = {
  value?: T,
  isValidating: boolean,
  error?: Error,
};
export type UseAsyncOptions = {
  onSuccess?: () => void,
};
const useAsync = <T, Error = any>(
  callback: (...args:any[]) => Promise<T>,
  options: UseAsyncOptions = {},
):[AsyncState<T, Error>, ((...args:any[]) => Promise<void>)] => {
  const [state, setState] = useState<AsyncState<T, Error>>({
    value: null,
    isValidating: false,
    error: null,
  });
  const validate = useCallback((...args) => {
    setState((prev) => ({
      ...prev,
      isValidating: true,
      error: null,
    }));
    return callback(...args)
      .then((value) => {
        setState({
          value,
          isValidating: false,
          error: null,
        });
        options.onSuccess?.();
      })
      .catch((e) => {
        setState({
          value: null,
          isValidating: false,
          error: e,
        });
      });
  }, [callback, setState]);
  return [state, validate];
};

export default useAsync;
