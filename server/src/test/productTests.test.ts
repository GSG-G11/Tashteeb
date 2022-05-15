/* eslint-disable no-undef */
import supertest from 'supertest';
import sequelize from '../database/config/connection';
import app from '../app';
import buildFakeData from '../database/FakeData/sync';

const {
  env: { ADMIN },
} = process;

beforeAll(() => buildFakeData());

describe('POST /addProduct', () => {
  test('success addProduct', (done) => {
    supertest(app)
      .post('/products')
      .set('Cookie', [`token=${ADMIN}`])
      .send({
        name: 'hummer',
        price: 20,
        description: 'simple hummer tool',
        categoryId: 1,
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).toBe(200);
        return done();
      });
  });
});

describe('POST /addProduct', () => {
  test('faild addProduct', (done) => {
    supertest(app)
      .post('/products')
      .set('Cookie', [`token=${ADMIN}`])
      .send({
        name: 'hummer',
        price: 20,
        description: 'sim',
        categoryId: 1,
      })
      .expect(422)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(422);
        return done();
      });
  });
});

describe('POST /addProduct', () => {
  test('validation failed addProduct', (done) => {
    supertest(app)
      .post('/products')
      .set('Cookie', [`token=${ADMIN}`])
      .send({
        name: 'hummer',
        price: 20,
        description: 'sim',
        categoryId: 1,
      })
      .expect(422)
      .end((err, res) => {
        if (err) return done(err);
        expect(JSON.parse(res.text).message).toBe(
          '"description" length must be at least 6 characters long',
        );
        return done();
      });
  });
});

// success updateProduct
describe('patch /products/:id', () => {
  test('success updateProduct', (done) => {
    supertest(app)
      .patch('/products/1')
      .set('Cookie', [`token=${ADMIN}`])
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

// success deleteProduct
describe('DELETE /products/:id', () => {
  test(
    'success deleteProduct',
    (done) => {
      supertest(app)
        .delete('/products/1')
        .set('Cookie', [`token=${ADMIN}`])
        .end((err, res) => {
          if (err) return done(err);
          expect(JSON.parse(res.text).message).toBe('Product deleted');
          return done();
        });
    },
  );
});

// test add product with unauthenticated user
describe('POST /addProduct', () => {
  test('unauthenticated addProduct', (done) => {
    supertest(app)
      .post('/products')
      .send({
        name: 'hummer',
        price: 20,
        description: 'simple hummer tool',
        categoryId: 1,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(401);
        return done();
      });
  });
});

afterAll(() => sequelize.close());
