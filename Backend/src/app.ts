import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json()); // Convierte JSON del frontend en req.body

app.use('/api/auth', authRoutes);

app.get('/', (req, res)=>{
    res.send ('API funcionando')
})

export default app;