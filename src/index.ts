import express from 'express';
import logger from './utilities/logger';
import testRoute from './api/testRoute';

const app = express();

app.use(logger);
app.use('/test-route', testRoute);

app.get('/', (req, res) => {
  res.send('processing images home page ');
});

app.listen('3000', () => console.log('server is listening on 3000'));

export default app;
