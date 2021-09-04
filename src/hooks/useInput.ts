import {
  DetailedHTMLProps, InputHTMLAttributes, useCallback, useState,
} from 'react';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type OnChangeHandler = InputProps['onChange'];
const useInput = (initialValue?: string): [string, OnChangeHandler] => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback<OnChangeHandler>((e) => {
    setValue(e.target.value);
  }, [setValue]);
  return [value, onChange];
};

export default useInput;

