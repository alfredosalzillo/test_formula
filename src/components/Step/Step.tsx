import React from 'react';
import clsx from 'clsx';
import classes from './Step.module.css';

export type StepProps = React.PropsWithChildren<{
  index: number,
  header?: React.ReactNode,
  active?: boolean,
}>;
const Step = (props: StepProps) => {
  const {
    index,
    header,
    children,
    active = false,
  } = props;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      <h2 className={classes.header}>
        <span className={classes.avatar}>
          {index}
        </span>
        {header}
      </h2>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Step;
