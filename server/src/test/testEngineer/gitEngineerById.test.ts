/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../../app';
import sequelize from '../../database/config/connection';
import buildFakeData from '../../database/FakeData/sync';

beforeEach(() => buildFakeData());

afterAll(() => {
  sequelize.close();
});

describe('get engineer by id', () => {
  test('success get engineer by id', (done) => {
    supertest(app)
      .get('/eng/4')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.user.username).toBe('enghfdsfdelles');
        expect(res.body.user.role).toBe(1);
        return done();
      });
  });
});
describe('get engineer by id', () => {
  test('failed get engineer by id', (done) => {
    supertest(app)
      .get('/eng/5000')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).toBe(404);
        expect(res.body.message).toBe('engineer not found');
        return done();
      });
  });
});
