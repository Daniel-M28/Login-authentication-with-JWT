export const adminPanel = (req, res) => {
    return res.status(200).json({
        message: 'Welcome Admin',
        user: req.user,
    });
};
//# sourceMappingURL=admin.controller.js.map