/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../../app';
import sequelize from '../../database/config/connection';
import buildFakeData from '../../database/FakeData/sync';

beforeEach(() => buildFakeData());

afterAll(() => {
  sequelize.close();
});

describe('get home engineer', () => {
  test('success get data', (done) => {
    supertest(app)
      .get('/engHome')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.data.length).toBe(3);
        return done();
      });
  });
});

describe('get home engineer', () => {
  test('failed get data', (done) => {
    supertest(app)
      .get('/enghomee')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(404);
        return done();
      });
  });
});
