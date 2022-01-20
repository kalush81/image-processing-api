import { Request, Response, NextFunction } from 'express';
import cache from 'memory-cache';

interface CustomResponse extends Response {
  sendResponse: (body: string) => void;
}

const memCache = new cache.Cache();

export default (req: Request, res: CustomResponse, next: NextFunction) => {
  const key = '__express__' + req.originalUrl;
  const cacheContent = memCache.get(key);
  if (cacheContent) {
    res.sendFile(cacheContent as string);
  } else {
    res.sendResponse = res.sendFile;
    res.sendFile = (body) => {
      memCache.put(key, body, 1000);
      res.sendResponse(body);
    };
    next();
  }
};
