import { Router } from 'express';
import { getUsers, deleteUser, updateUserRole } from '../controllers/users.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';
const router = Router();
router.get('/', authMiddleware, adminMiddleware, getUsers);
router.delete('/:id', authMiddleware, adminMiddleware, deleteUser);
router.patch('/:id/role', authMiddleware, adminMiddleware, updateUserRole);
export default router;
//# sourceMappingURL=users.routes.js.map