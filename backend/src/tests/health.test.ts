// Jest test example for health endpoint
import request from 'supertest';
import app from '../index';

describe('Health Check', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('ok');
  });
});
