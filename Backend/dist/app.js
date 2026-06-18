import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import 'dotenv/config';
import adminRoutes from './routes/admin.routes.js';
import usersRoutes from './routes/users.routes.js';
const app = express();
app.use(cors());
app.use(express.json()); // Convierte JSON del frontend en req.body
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/users', usersRoutes);
app.get('/', (req, res) => {
    res.send('API funcionando');
});
export default app;
//# sourceMappingURL=app.js.map