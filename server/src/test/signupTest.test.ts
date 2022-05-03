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
afterAll(() => {
  sequelize.close();
});
