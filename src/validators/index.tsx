export class ValidatorError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
  }
}

export const validate = (type: string, value: string) => fetch(`/api/validators/${type}/${value}`)
  .then(async (response) => {
    if (response.status >= 400) {
      const error = await response.json();
      throw new ValidatorError(response.status, error.message);
    }
    return null;
  });
export const isUsername = (username: string) => validate('username', username);
export const isEmail = (email: string) => validate('email', email);
export const isPassword = (password: string) => validate('password', password);
