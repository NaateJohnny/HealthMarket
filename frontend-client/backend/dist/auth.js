"use strict";
exports.__esModule = true;
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var users_1 = require("./users");
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        var token = jwt.sign({ sub: dbUser.email, iss: 'hm-api' }, api_config_1.apiConfig.secret);
        resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    }
    else {
        resp.status(403).json({ message: 'Dados invállidos.' });
    }
};
function isValid(user) {
    console.log(user);
    if (!user) {
        return false;
    }
    var dbUser = users_1.users[user.email];
    return dbUser != undefined && dbUser.matches(user);
}
