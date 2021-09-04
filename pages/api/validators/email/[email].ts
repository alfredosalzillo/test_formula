import { NextApiRequest, NextApiResponse } from 'next';

const emailValidator = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email } = req.query;
  if (!emailValidator.test(email as string)) {
    return res.status(400).json({
      message: 'Email not valid.',
    });
  }
  if (email === 'lupo93@getnada.com') {
    return res.status(400).json({
      message: 'Unknown error',
    });
  }
  return res.status(200).json(null);
}
