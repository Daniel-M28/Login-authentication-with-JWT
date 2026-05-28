import type { Request, Response } from 'express';

export const profile = (
  req: Request,
  res: Response
) => {

  return res.json({
    message: 'Protected route',
    user: req.user,
  });

};