'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
if (!process.env.isProduction) {
    require('dotenv').config();
}

var config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'secret',
    connectionString: process.env.CONNECTION_STRING || 'mongodb://localhost/souls',
    production: process.env.isProduction
};

exports.default = config;
//# sourceMappingURL=index.js.map