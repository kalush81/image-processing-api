import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('test endpoints', () => {
  it('gets the api respond', async () => {
    const res = await request.get('/');
    expect(res.statusCode).toBe(200);
    //done()
  });
});
