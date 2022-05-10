/* eslint-disable no-undef */
import supertest from 'supertest';
import sequelize from '../database/config/connection';
import app from '../app';
import buildFakeData from '../database/FakeData/sync';

beforeAll(() => buildFakeData());
// success updateProduct
describe('patch /products/:id', () => {
  test('success updateProduct', (done) => {
    supertest(app)
      .patch('/products/1')
      .send({
        name: 'hummer',
        price: 20,
        description: 'simple hummer tool',
        categoryId: 1,
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(JSON.parse(res.text).message).toBe('Product updated');
        return done();
      });
  });
});

afterAll(() => {
  sequelize.close();
});
