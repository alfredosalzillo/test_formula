import { useCallback, useState } from 'react';

export type StepsController = {
  current: number,
  /**
   * Increment the current step.
   */
  next(): void,
  /**
   * Decrement the current step.
   */
  previous(): void,
};

/**
 * Return a StepsController with utility function to use within a stepper interface.
 */
const useStepsController = (initialStep: number = 1): StepsController => {
  const [step, setStep] = useState(initialStep);
  const next = useCallback(() => {
    setStep((c) => c + 1);
  }, [setStep]);
  const previous = useCallback(() => {
    setStep((c) => c - 1);
  }, [setStep]);
  return {
    current: step,
    next,
    previous,
  };
};

export default useStepsController;
