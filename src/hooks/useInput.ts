import {
  DetailedHTMLProps, InputHTMLAttributes, useCallback, useState,
} from 'react';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type OnChangeHandler = InputProps['onChange'];
/**
 * A simple hook to use to avoid the boilerplate of the onChange on inputs.
 *
 * Examples
 * ```javascript jsx
 * function Form() {
 *   const [name, onNameChange] = useInput('');
 *   return (
 *     <div>
 *       Hello {name}
 *       <input value={name} onChange={onNameChange} />
 *     </div>
 *   )
 * }
 * ```
 */
const useInput = (initialValue?: string): [string, OnChangeHandler] => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback<OnChangeHandler>((e) => {
    setValue(e.target.value);
  }, [setValue]);
  return [value, onChange];
};

export default useInput;
