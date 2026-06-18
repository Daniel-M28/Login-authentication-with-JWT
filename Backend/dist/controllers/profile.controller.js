export const profile = (req, res) => {
    // Acceder a req.user para obtener la información del usuario autenticado
    return res.json({
        message: 'Protected route',
        user: req.user,
    });
};
//# sourceMappingURL=profile.controller.js.map