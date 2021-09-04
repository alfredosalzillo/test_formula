import { useCallback, useState } from 'react';

export type AsyncState<T, Error = any> = {
  value?: T,
  isValidating: boolean,
  error?: Error,
};
export type UseAsyncOptions = {
  onSuccess?: () => void,
};
/**
 * A simple hook to use async function.
 * Accept an async callback.
 * Return a state with the validating status `isValidating`,
 * the last fetched value and eventually the error.
 * Also return a function to call to run the callback.
 *
 * Example
 *
 * ```javascript jsx
 * const fetchTodos = () => ...
 * function App() {
 *  const [{
 *    value: todos,
 *    isValidating,
 *    error,
 *  }, validateTodos] = useAsync(fetchTodos);
 *  // fetch on mound
 *  useEffect(() => validateTodos(), []);
 *  if (error) return <>{error.message}</>
 *  if (isValidating || !todos) return <>Loading</>
 *  return (
 *    <ul>
 *      {todos.map((t) => <li key={t.id}>{t.name}</li>)}
 *    </ul>
 *  )
 * }
 * ```
 */
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
