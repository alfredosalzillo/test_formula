import Step, { StepProps } from '@components/Step';
import React, { ReactElement } from 'react';
import classes from './Stepper.module.css';

export type StepperProps = {
  activeStep: number,
  children: ReactElement<StepProps, typeof Step>[]
};

/**
 * A responsive stepper component to use with the `Step` components.
 * It's an uncontrolled wrapper of Steps.
 * Will be vertical in desktop and an horizontal slider in mobile.
 *
 * ```javascript jsx
 * function App() {
 *   const [step, setStep] = useState(1);
 *   return (
 *     <Stepper activeStep={step}>
 *       <Step index={1} label="Step 1" >
 *         <p>
 *         Dolor sit amet.
 *         </p>
 *         <button onClick={() => setStep(c => c + 1)}>Next</button>
 *       </Step>
 *       <Step index={2} label="Step 2" >
 *         <p>
 *         Numquam sit delirium.
 *         </p>
 *         <button>Finish</button>
 *       </Step>
 *     </Stepper>
 *   )
 * }
 * ```
 */
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
              active: item.props.index === activeStep,
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
