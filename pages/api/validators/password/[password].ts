// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { password } = req.query;
  if (!/[A-Z]/.test(password as string)) {
    return res.status(400).json({
      message: 'Must have at least one uppercase character.',
    });
  }
  if (!/[a-z]/.test(password as string)) {
    return res.status(400).json({
      message: 'Must have at least one lowercase character.',
    });
  }
  if (!/[0-9]/.test(password as string)) {
    return res.status(400).json({
      message: 'Must have at least one number.',
    });
  }
  if (!/.{8,128}/.test(password as string)) {
    return res.status(400).json({
      message: 'Must have at least 8 and no more than 128 characters.',
    });
  }
  return res.status(200).json(null);
}
