/* eslint-disable no-undef */
import supertest from 'supertest';
import sequelize from '../database/config/connection';
import app from '../app';
import buildFakeData from '../database/FakeData/sync';

beforeAll(() => buildFakeData());

describe('POST /login', () => {
  test('success login', (done) => {
    supertest(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: '123456789',

      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(JSON.parse(res.text).message).toBe('User logged in successfully!');

        return done();
      });
  });
});

describe('POST /login', () => {
  test('wrong password', (done) => {
    supertest(app)
      .post('/login')
      .send({
        email: 'admin@admin.com',
        password: 'incorrect password',
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(401);
        expect(JSON.parse(res.text).error.message).toBe('Password is not valid');

        return done();
      });
  });
});

describe('POST /login', () => {
  test('not esisting email', (done) => {
    supertest(app)
      .post('/login')
      .send({
        email: 'doesnt.exist@gmail.com',
        password: 'password',
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(409);
        expect(JSON.parse(res.text).error.message).toBe('Email does not exist');

        return done();
      });
  });
});

afterAll(() => {
  sequelize.close();
});
