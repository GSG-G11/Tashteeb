/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../../app';
import sequelize from '../../database/config/connection';
import buildFakeData from '../../database/FakeData/sync';

beforeEach(() => buildFakeData());

afterAll(() => {
  sequelize.close();
});

describe('get all engineer', () => {
  test('success get data', (done) => {
    supertest(app)
      .get('/engPage')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('success get all engineer');
        expect(res.body.data.rows.length).toBe(6);
        return done();
      });
  });
});

describe('get all engineer', () => {
  test('failed get data', (done) => {
    supertest(app)
      .get('/engPagee')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(404);
        return done();
      });
  });
});
