"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./utilities/logger"));
var home_1 = __importDefault(require("./api/home"));
var images_1 = __importDefault(require("./api/images"));
var cacheMiddleware_1 = __importDefault(require("./utilities/cacheMiddleware"));
var port = 3000;
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(logger_1.default);
app.use('/', home_1.default);
//@ts-ignore
app.use('/api', (0, cacheMiddleware_1.default)(100), images_1.default);
var errorHandler = function (err, req, res) {
    console.error(err.stack);
    res.status(500).send("bad request ".concat(req.originalUrl));
};
app.use(errorHandler);
app.listen(port, function () { return console.log("server is listening on ".concat(port)); });
exports.default = app;
