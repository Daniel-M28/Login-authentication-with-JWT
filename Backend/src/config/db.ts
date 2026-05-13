import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'rocky2026',
  database: 'auth_system',
});

export default pool;