import type { Request, Response } from 'express';

export const adminPanel = (
  req: Request,
  res: Response
) => {

  return res.status(200).json({
    message: 'Welcome Admin',
    user: req.user,
  });

};