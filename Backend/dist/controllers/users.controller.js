import pool from '../config/db.js';
// Controlador para obtener la lista de usuarios (solo para admins)
export const getUsers = async (req, res) => {
    try {
        const result = await pool.query(`
      SELECT
        id,
        name,
        email,
        role
      FROM users
      ORDER BY id ASC
    `);
        return res.status(200).json(result.rows);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error',
        });
    }
};
//borrar usuario por id
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    // Evitar que un admin se borre a sí mismo
    const adminId = req.user?.id;
    if (Number(id) === adminId) {
        return res.status(400).json({
            message: 'You cannot delete your own account',
        });
    }
    try {
        const result = await pool.query(`
      DELETE FROM users
      WHERE id = $1
      RETURNING *
      `, [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        return res.status(200).json({
            message: 'User deleted successfully',
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error',
        });
    }
};
//editar usuario por id (solo el rol)
export const updateUserRole = async (req, res) => {
    const { id } = req.params;
    const { role } = req.body;
    const adminId = req.user?.id;
    // Evitar que un admin se cambie su propio rol
    if (Number(id) === adminId) {
        return res.status(400).json({
            message: 'You cannot change your own role',
        });
    }
    // Validar roles permitidos
    if (role !== 'admin' &&
        role !== 'user') {
        return res.status(400).json({
            message: 'Invalid role',
        });
    }
    try {
        const result = await pool.query(`
      UPDATE users
      SET role = $1
      WHERE id = $2
      RETURNING id, name, email, role
      `, [role, id]);
        if (result.rowCount === 0) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
        return res.status(200).json(result.rows[0]);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error',
        });
    }
};
//# sourceMappingURL=users.controller.js.map