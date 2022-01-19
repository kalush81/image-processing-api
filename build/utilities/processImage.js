"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
exports.default = (function (filename, width, height) {
    return new Promise(function (res, rej) {
        (0, sharp_1.default)('images/' + filename + '.jpg')
            .resize(width, height)
            .toFile("images/thumbs/".concat(filename, ".webp"), function (err, info) {
            if (err) {
                rej(err);
            }
            else {
                res(info);
            }
        });
    });
});
