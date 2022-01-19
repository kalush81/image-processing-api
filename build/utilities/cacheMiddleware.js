"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var memory_cache_1 = __importDefault(require("memory-cache"));
var memCache = new memory_cache_1.default.Cache();
var cacheMiddleware = function (duration) {
    return function (req, res, next) {
        var key = '__express__' + req.originalUrl;
        var cacheContent = memCache.get(key);
        if (cacheContent) {
            res.sendFile(cacheContent);
        }
        else {
            res.sendResponse = res.sendFile;
            res.sendFile = function (body) {
                memCache.put(key, body, duration * 1000);
                res.sendResponse(body);
            };
            next();
        }
    };
};
exports.default = cacheMiddleware;
