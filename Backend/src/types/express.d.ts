import 'express';

declare module 'express-serve-static-core' {

  interface Request {

    // Agregamos una propiedad "user" al objeto Request para almacenar la información del usuario autenticado
    
    user?: {
      id: number;
      name: string;
      email: string;
      role: string;
    };

  }

}