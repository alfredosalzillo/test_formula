import Step, { StepProps } from '@components/Step';
import React, { ReactElement } from 'react';
import classes from './Stepper.module.css';

export type StepperProps = {
  activeStep: number,
  children: ReactElement<StepProps, typeof Step>[]
};

const Stepper = (props: StepperProps) => {
  const { children, activeStep } = props;
  return (
    <div className={classes.root}>
      <div
        className={classes.content}
        style={{
          // @ts-ignore
          '--active-step': activeStep,
        }}
      >
        {React.Children.map(children, (item, index) => (
          // forced here to use the index as key
          // eslint-disable-next-line react/no-array-index-key
          <div className={classes.item} key={index}>
            {React.cloneElement(item, {
              active: index + 1 === activeStep,
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
