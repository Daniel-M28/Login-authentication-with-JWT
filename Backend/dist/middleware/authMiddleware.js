import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: 'Token required',
        });
    }
    // El token se espera en el formato "Bearer <token>"
    // Por lo tanto, se divide el header para obtener solo el token
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: 'Token missing',
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: 'Invalid token',
        });
    }
};
//# sourceMappingURL=authMiddleware.js.map