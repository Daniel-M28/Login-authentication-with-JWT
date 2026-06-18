import { Router } from 'express';
import { adminPanel } from '../controllers/admin.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';
const router = Router();
router.get('/', authMiddleware, adminMiddleware, adminPanel);
export default router;
//# sourceMappingURL=admin.routes.js.map