import express, { NextFunction, Request, Response, Router } from 'express';
import processImage from '../utilities/processImage';
import path from 'path';

const imagesRoute:Router = express.Router();

imagesRoute
  .route('/image')
  .get(async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {
      const { filename, width, height } = req.query;
      await processImage(filename as string, Number(width), Number(height));
      res.sendFile(path.resolve(`images/thumbs/${filename}.webp`));
    } catch (error) {
      next(error);
    }
  });

export default imagesRoute;
