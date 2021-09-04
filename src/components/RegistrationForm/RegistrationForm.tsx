import React from 'react';
import Stepper from '@components/Stepper';
import Step from '@components/Step';
import Button from '@components/Button';
import TextField from '@components/TextField';
import useInput from '@hooks/useInput';
import useStepsController from '@hooks/useStepsController';
import useAsync from '@hooks/useAsync';
import Loader from '@components/Loader';
import { isEmail, isPassword, isUsername } from '@validators/index';
import classes from './RegistrationForm.module.css';

const onFinish = () => {
  window.location.reload();
};

const RegistrationForm = () => {
  const stepsController = useStepsController(1);
  const {
    current: step,
    next: nextStep,
    previous: previousStep,
  } = stepsController;
  const [username, onChangeUsername] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [
    usernameValidation,
    revalidateUsername,
  ] = useAsync(() => isUsername(username), {
    onSuccess: nextStep,
  });
  const [
    emailValidation,
    revalidateEmail,
  ] = useAsync(() => isEmail(email), {
    onSuccess: nextStep,
  });
  const [
    passwordValidation,
    revalidatePassword,
  ] = useAsync(() => isPassword(password), {
    onSuccess: nextStep,
  });
  return (
    <form name="register" className={classes.root}>
      <Stepper activeStep={step}>
        <Step
          index={1}
          header="Choose an username"
        >
          <p>
            {
              usernameValidation.isValidating && <Loader />
            }
            <TextField
              id="username"
              label="Username"
              placeholder="lupo93"
              value={username}
              onChange={onChangeUsername}
              disabled={usernameValidation.isValidating}
              error={!!usernameValidation.error}
              helperText={usernameValidation.error?.message}
              required
              fullWidth
            />
          </p>
          <Button
            disabled={usernameValidation.isValidating || !username}
            onClick={revalidateUsername}
          >
            Next
          </Button>
        </Step>
        <Step
          index={2}
          header="Choose an email"
        >
          <p>
            {
              emailValidation.isValidating && <Loader />
            }
            <TextField
              id="email"
              label="Email"
              placeholder="lupo93@getnada.com"
              value={email}
              onChange={onChangeEmail}
              disabled={emailValidation.isValidating}
              error={!!emailValidation.error}
              helperText={emailValidation.error?.message}
              required
              fullWidth
            />
          </p>
          <div className={classes.stepActions}>
            <Button
              onClick={previousStep}
              disabled={emailValidation.isValidating}
            >
              Previous
            </Button>
            <Button
              onClick={revalidateEmail}
              disabled={emailValidation.isValidating || !email}
            >
              Next
            </Button>
          </div>
        </Step>
        <Step
          index={3}
          header="Choose a password"
        >
          <p>
            {
              passwordValidation.isValidating && <Loader />
            }
            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="xxxxyyyy"
              value={password}
              onChange={onChangePassword}
              disabled={passwordValidation.isValidating}
              error={!!passwordValidation.error}
              helperText={passwordValidation.error?.message}
              required
              fullWidth
            />
          </p>
          <div className={classes.stepActions}>
            <Button
              onClick={previousStep}
              disabled={passwordValidation.isValidating}
            >
              Previous
            </Button>
            <Button
              onClick={revalidatePassword}
              disabled={passwordValidation.isValidating || !password}
            >
              Next
            </Button>
          </div>
        </Step>
        <Step
          index={4}
          header="Summary"
          active={step === 4}
        >
          <p>
            Are you sure you want to create the account
            {' '}
            <strong>{ username }</strong>
            {' '}
            with the
            {' '}
            <strong>{email}</strong>
            {' '}
            email?
          </p>
          <div className={classes.stepActions}>
            <Button onClick={previousStep}>
              Previous
            </Button>
            <Button type="submit" color="primary" onClick={onFinish}>
              Finish
            </Button>
          </div>
        </Step>
      </Stepper>
    </form>
  );
};

export default RegistrationForm;
