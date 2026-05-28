import type { Request, Response } from "express";
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';
import { ZodError } from 'zod';
import bcrypt from 'bcrypt';
import pool from "../config/db.js";
import jwt from 'jsonwebtoken';

// Login controller

export const login = async (req: Request, res: Response) => {
  try {
    // Validar datos con Zod
    const validatedData = loginSchema.parse(req.body);

    // Extraer datos ya validados
    const { email, password } = validatedData;

    //  Buscar usuario por email
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    //  Verificar si el usuario existe
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    // Obtener el usuario encontrado
    const user = result.rows[0];

    const isMatch = await bcrypt.compare(
    password,
    user.password
    );

    if (!isMatch) {
      return res.status(401).json({
       message: 'Invalid password',
     });
    }

    // Generar token JWT
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d',
      }
    );


    // Login exitoso
    return res.status(200).json({
      message: 'Login successful',
      token,
      
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });


  } catch (error) {
  if (error instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation error',
      errors: error.issues,
    });
  }

  console.error(error);

  return res.status(500).json({
    message: 'Internal server error',
  });
}
};



//Register controller
export const register = async (req: Request, res: Response) => {
  try {

     // Validar datos con Zod
    const validatedData = registerSchema.parse(req.body);

    // Extraer datos ya validados   
    const { name, email, password } = validatedData;

    // Verificar si el username ya existe
    const existingUserName = await pool.query(
      'SELECT * FROM users WHERE name = $1',
      [name]
    );

    if (existingUserName.rows.length > 0) {

      return res.status(409).json({
        message: 'This username is already in use',
      });

    }

    // Verificar si el email ya existe
    const existingUserEmail = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (existingUserEmail.rows.length > 0) {

      return res.status(409).json({
        message: 'This email is already in use',
      });

    }

    //hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);



    // Guardar en PostgreSQL
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING name, email, role", //returning * para devolver el usuario insertado
      [name, email, hashedPassword],
    );

    return res.json({ message: "Register successful", user: result.rows[0] }); //devuelve el usuario insertado en la respuesta

  } catch (error) {
  if (error instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation error',
      errors: error.issues,
    });
  }

  console.error(error);

  return res.status(500).json({
    message: 'Internal server error',
  });
}
};
