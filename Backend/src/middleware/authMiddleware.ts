import type {Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

  const authHeader = req.headers.authorization;

if (!authHeader) {

  return res.status(401).json({
    message: 'Token required',
  });

}
// El token se espera en el formato "Bearer <token>"
// Por lo tanto, se divide el header para obtener solo el token

const token = authHeader.split(' ')[1];

if (!token) {

  return res.status(401).json({
    message: 'Token missing',
  });

}

try {

 const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET as string
);

req.user = decoded as {
  id: number;
  name: string;
  email: string;
  role: string;
};

next();
} catch (error) {

  return res.status(401).json({
    message: 'Invalid token',
  });

}
};