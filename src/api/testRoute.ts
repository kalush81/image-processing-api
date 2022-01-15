import express from 'express';

const testRoute = express.Router();

testRoute.route('/')
 .get((req, res) => {
  res.send('testRoute  page');
});

export default testRoute;
