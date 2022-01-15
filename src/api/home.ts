import express, { Request, Response} from 'express';

const homeRoute = express.Router()

homeRoute.get('/', (req: Request, res: Response) => {
  res.send('processing images home page ');
});

export default homeRoute