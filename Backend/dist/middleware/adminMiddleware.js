export const adminMiddleware = (req, res, next) => {
    // Verificar que el usuario tenga el rol de admin
    if (req.user?.role !== 'admin') {
        // Si el usuario no es admin, se deniega el acceso
        return res.status(403).json({
            message: 'Access denied',
        });
    }
    next();
};
//# sourceMappingURL=adminMiddleware.js.map