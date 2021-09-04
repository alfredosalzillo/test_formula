// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { username } = req.query;
  if (!/[a-zA-Z0-9]{3,24}/.test(username as string)) {
    return res.status(400).json({
      message: 'Must contain only letters and numbers, have at least 3 and no more than 24 characters.',
    });
  }
  if (username === 'lupo93') {
    return res.status(400).json({
      message: 'Username already in use.',
    });
  }
  return res.status(200).json(null);
}
