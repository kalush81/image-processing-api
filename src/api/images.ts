import express, { Request, Response } from 'express';
import processImage from '../utilities/processImage';

const imagesRoute = express.Router();

imagesRoute.route('/images').get(async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;
  const image = await processImage(
    filename as string,
    Number(width),
    Number(height)
  );
  console.log('image', image);

  res.send(`images page and data: ${JSON.stringify(image)}`);
});

export default imagesRoute;
