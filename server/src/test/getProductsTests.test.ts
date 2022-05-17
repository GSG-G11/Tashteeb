/* eslint-disable no-undef */
import supertest from 'supertest';
import sequelize from '../database/config/connection';
import app from '../app';
import buildFakeData from '../database/FakeData/sync';

beforeAll(() => buildFakeData());

// test if the request returns all of the products
describe('GET /products', () => {
  test('get products', (done) => {
    supertest(app)
      .get('/products')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.product.count).toBe(4);
        return done();
      });
  });

  // test if returns product that match the search

  test('get products with search', (done) => {
    supertest(app)
      .get('/products?q=diary')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.product.rows[0].name).toBe('The Diary of a Young Girl');
        return done();
      });
  });

  // test of returns product with the right category

  test('get products with category id', (done) => {
    supertest(app)
      .get('/products?categoryId=1')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.product.rows[0].categoryId).toBe(1);
        return done();
      });
  });

  // test if returns products with the range of max and min price

  test('/get products within range of max and min', (done) => {
    supertest(app)
      .get('/products?minPrice=10&maxPrice=20')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.product.rows[0].price).toBe('14.5');
        return done();
      });
  });
});
afterAll(() => {
  sequelize.close();
});
