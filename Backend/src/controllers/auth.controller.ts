import type { Request, Response } from "express";
import pool from "../config/db.js";

// Login controller
export const login = async (req: Request, res: Response) => {
  try {

    //  Extraer datos enviados por el frontend
    const { email, password } = req.body;

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

    // Comparar la contraseña (temporalmente en texto plano)
    if (user.password !== password) {
      return res.status(401).json({
        message: 'Invalid password',
      });
    }

    // Login exitoso
    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });


  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};



//Register controller
export const register = async (req: Request, res: Response) => {
  try {
    //extrae los datos enviados desde el cuerpo de la solicitud desde el front
    const { name, email, password } = req.body;

    // Guardar en PostgreSQL
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING name, email", //returning * para devolver el usuario insertado
      [name, email, password],
    );

    return res.json({ message: "Register successful", user: result.rows[0] }); //devuelve el usuario insertado en la respuesta

  } catch (error) {
    console.error("Error registering user:", error);

    return res.status(500).json({ message: "Error registering user" }); 
  }
};
