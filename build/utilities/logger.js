"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    console.log('originalUrl "', req.originalUrl, '" logger should be disabled for testing');
    next();
};
exports.default = logger;
