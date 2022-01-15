import express from 'express';
import processImage from '../utilities/processImage';

const imagesRoute = express.Router();

imagesRoute.route('/images')
  .get((req, res) => {
    const { filename, width, height } = req.query
    const image = processImage(filename, width, height)
    console.log('image', image)

  res.send(`images page and data: ${image}`);
});

export default imagesRoute;