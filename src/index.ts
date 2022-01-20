import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import logger from './utilities/logger';
import homeRoute from './api/home';
import imagesRoute from './api/images';
import cacheMiddleware from './utilities/cacheMiddleware';

const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
/*process.env.NODE_ENV !== 'test' && */app.use(logger);

app.use('/', homeRoute);

//@ts-ignore
app.use('/api', cacheMiddleware, imagesRoute);

const errorHandler: ErrorRequestHandler = (err:any, req:Request, res:Response, next:NextFunction):void => {
  console.error(err.stack);
  res.status(500).send(err.stack);
};

app.use(errorHandler);

app.use(function (req, res) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => console.log(`server is listening on ${port}`));

console.log('node env set to:', process.env.NODE_ENV)

export default app;
