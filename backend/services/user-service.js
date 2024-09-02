const UserModel = require("../models/user-model");
const UserDto = require("../dtos/user-dto");
const bcrypt = require("bcryptjs");
const tokenService = require("./token-service");

class UserService {
    async registration(email, password) {
        const candidate = new UserModel.findOne({ email });

        if (candidate) {
            throw new Error("Email already exist");
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({ email, password: hashPassword });

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });

        await tokenService.saveToken(userDto.id, tokens);

        return {
            ...tokens,
            user: userDto,
        };
    }
}

module.exports = new UserService();
