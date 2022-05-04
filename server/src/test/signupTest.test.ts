/* eslint-disable no-undef */
import supertest from 'supertest';
import sequelize from '../database/config/connection';
import app from '../app';
import buildFakeData from '../database/FakeData/sync';

beforeAll(() => buildFakeData());

describe('POST /signup', () => {
  test('success sign up', (done) => {
    supertest(app)
      .post('/signup')
      .send({
        username: 'mohamed',
        password: 'password',
        email: 'mohamed@gmail.com',
        role: 1,
        phone: '0594121212',
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(JSON.parse(res.text).message).toBe('User created successfully!');

        return done();
      });
  });
});

// test for duplicate email
describe('POST /signup', () => {
  test('duplicate email', (done) => {
    supertest(app)
      .post('/signup')
      .send({
        username: 'hallos',
        password: 'password',
        email: 'mohamed@gmail.com',
        role: 1,
        phone: '0594121212',
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(409);
        expect(JSON.parse(res.text).error.message).toBe('This email is already taken!');

        return done();
      });
  });
});

// test for duplicate username
describe('POST /signup', () => {
  test('duplicate username', (done) => {
    supertest(app)
      .post('/signup')
      .send({
        username: 'mohamed',
        password: 'password',
        email: 'helles@gmail.com',
        role: 1,
        phone: '0594121212',
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(409);
        expect(JSON.parse(res.text).error.message).toBe('This username is already taken!');

        return done();
      });
  });
});

afterAll(() => {
  sequelize.close();
});
