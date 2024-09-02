const userService = require("../services/user-service");

class UserController {
    async registration(req, res, next) {
        const MONTH_IN_MS = 30 * 24 * 60 * 60 * 1000;
        try {
            const { email, password } = req.body;
            const userData = await userService.registration(email, password);

            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 1 * MONTH_IN_MS,
                httpOnly: true,
                secure: true,
            });

            return res.json(userData);
        } catch (err) {
            console.log(err);
        }
    }

    async login(req, res, next) {
        try {
        } catch (err) {}
    }

    async logout(req, res, next) {
        try {
        } catch (err) {}
    }

    async refresh(req, res, next) {
        try {
        } catch (err) {}
    }

    async getUsers(req, res, next) {
        try {
            res.json(["123", "321"]);
        } catch (err) {}
    }
}

module.exports = new UserController();
