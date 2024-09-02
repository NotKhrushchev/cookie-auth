module.exports = class UserDto {
    email;
    id;

    constructor(model) {
        this.email = model.email;
        this.module = model._id;
    }
};
