/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../app';
import sequelize from '../database/config/connection';
import buildFakeData from '../database/FakeData/sync';

beforeEach(() => buildFakeData());

afterAll(() => {
  sequelize.close();
});

describe('get products by category', () => {
  test('success get product by category', (done) => {
    supertest(app)
      .get('/category/2/products')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(200);
        expect(res.body.data.length).toBe(1);
        return done();
      });
  });
  test('failed get product by category', (done) => {
    supertest(app)
      .get('/category/4000/products')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(404);
        expect(res.body.message).toBe('No products found');
        return done();
      });
  });
});
