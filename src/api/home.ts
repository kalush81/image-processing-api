import express, { Request, Response, Router } from 'express';

const homeRoute:Router = express.Router();

homeRoute.get('/', (req: Request, res: Response):void => {
  res.send('processing images home page ');
});

export default homeRoute;
