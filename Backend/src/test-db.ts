import pool from './config/db.js';

async function testConnection() {
  // Insertar un usuario
  await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
    ['ROcky', 'rocky@test.com', '12345667']
  );

  console.log('Usuario insertado correctamente');

  // Consultar todos los usuarios
  const result = await pool.query('SELECT * FROM users');

  console.log(result.rows);
}

testConnection();