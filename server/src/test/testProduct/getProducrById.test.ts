/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../../app';
import sequelize from '../../database/config/connection';
import buildFakeData from '../../database/FakeData/sync';

beforeEach(() => buildFakeData());

afterAll(() => {
  sequelize.close();
});

describe('get product by id', () => {
  test('success get product by id', (done) => {
    supertest(app)
      .get('/product/1')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(200);
        expect(res.body.data.name).toBe('The Diary of a Young Girl');
        expect(res.body.data.price).toBe('14.5');
        return done();
      });
  });
});

describe('get product by id', () => {
  test('failed get product by id', (done) => {
    supertest(app)
      .get('/product/5000')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(404);
        expect(res.body.message).toBe('product not found');
        return done();
      });
  });
});
