import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('test endpoint "/" ', () => {
  it('gets 200 status code', async () => {
    const res = await request.get('/');
    expect(res.statusCode).toBe(200);
  });
  it('it returns an empty body object ', async () => {
    const res = await request.get('/');
    expect(res.body).toEqual({});
  });
  it('returns plain text from server', async () => {
    const res = await request.get('/');
    expect(res.text).toBe('processing images home page ');
  });
});
describe('test endpoint "/api/image?filename=fjord&width=200&height=200', () => {
  it('returns a image/webp content type', async () => {
    const res = await request.get(
      '/api/image?filename=fjord&width=200&height=200'
    );
    expect(res.type).toBe('image/webp');
  });
});
