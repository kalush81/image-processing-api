import express, { ErrorRequestHandler } from 'express';
import logger from './utilities/logger';
import homeRoute from './api/home';
import imagesRoute from './api/images';
import cacheMiddleware from './utilities/cacheMiddleware';

const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/', homeRoute)

//@ts-ignore
app.use('/api', cacheMiddleware, imagesRoute);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.stack);
  next()
};

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
app.use(errorHandler);

app.listen(port, () => console.log(`server is listening on ${port}`));

export default app;
