/* eslint-disable no-undef */
import supertest from 'supertest';
import sequelize from '../database/config/connection';
import app from '../app';
import buildFakeData from '../database/FakeData/sync';

beforeAll(() => buildFakeData());

describe('GET /categories', () => {
  test('/get categories', (done) => {
    supertest(app).get('/categories')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status)
          .toBe(200);
        return done();
      });
  });
});

afterAll(() => {
  sequelize.close();
});
