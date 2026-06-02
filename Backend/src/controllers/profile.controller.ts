import type { Request, Response } from 'express';

export const profile = (req: Request,res: Response) => {

  // Acceder a req.user para obtener la información del usuario autenticado
  return res.json({
    message: 'Protected route',
    user: req.user,
  });

};