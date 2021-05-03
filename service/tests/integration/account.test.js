const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { userOneAccessToken } = require('../fixtures/token.fixture');
const { userOne, insertUsers } = require('../fixtures/user.fixture');

setupTestDB();

describe('Account routes', () => {
  describe('GET /v1/accounts/1', () => {
    test('should return 200 OK', async () => {
      await insertUsers([userOne]);
      const result = await request(app).get('/v1/accounts/1').set('Authorization', `Bearer ${userOneAccessToken}`);
      expect(result.status).toEqual(httpStatus.OK);
    });
  });
});
