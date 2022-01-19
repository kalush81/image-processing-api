"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var homeRoute = express_1.default.Router();
homeRoute.get('/', function (req, res) {
    res.send('processing images home page ');
});
exports.default = homeRoute;
