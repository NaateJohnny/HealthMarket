"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "james@gmail.com": new User('james@gmail.com', 'James', 'James19'),
    "jaqueline@gmail.com": new User('jaqueline@gmail.com', 'Jaqueline', 'jaque20')
};
