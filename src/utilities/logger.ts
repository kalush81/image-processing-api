import express, { NextFunction}from 'express';

const logger =  (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void => {
  console.log(
    'originalUrl ',
    req.originalUrl
  );
  next();
};

export default logger;
