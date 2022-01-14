import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  console.log(req.originalUrl);
  next();
};

export default logger;
