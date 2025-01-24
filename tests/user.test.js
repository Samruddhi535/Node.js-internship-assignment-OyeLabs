const request = require('supertest');
const app = require('../app');
const db = require('../models'); 

describe('User API', () => {
  test('GET /users should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
  });
});

afterAll(async () => {
  
  await db.sequelize.close();
  
  if (app.close) {
    await app.close();
  }
});
