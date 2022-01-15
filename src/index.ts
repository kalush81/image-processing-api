import express from 'express';
import logger from './utilities/logger';
import homeRoute from './api/home';
import imagesRoute from './api/images';

const port = 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/', homeRoute)
app.use('/api', imagesRoute);

app.listen(port, () => console.log(`server is listening on ${port}`));

export default app;
