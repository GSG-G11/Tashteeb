/* eslint-disable no-undef */
import supertest from 'supertest';
import sequelize from '../database/config/connection';
import app from '../app';
import buildFakeData from '../database/FakeData/sync';

beforeAll(() => buildFakeData());
// success deleteProduct
describe('DELETE /products/:id', () => {
  test(
    'success deleteProduct',
    (done) => {
      supertest(app)
        .delete('/products/1')
        .end((err, res) => {
          if (err) return done(err);
          expect(JSON.parse(res.text).message).toBe('Product deleted'); return done();
        });
    },
  );
});

afterAll(() => {
  sequelize.close();
});
