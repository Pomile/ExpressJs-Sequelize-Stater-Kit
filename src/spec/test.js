import request from 'supertest';
import chai from 'chai';
import '@babel/polyfill';
import app from '../app';
import db from '../database/models';

const { sequelize } = db;
const { expect } = chai;

describe('TEST SUITE', () => {
  describe('GET /test', () => {
    before(async () => {
      await sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
      }).catch((err) => {
        console.error('Unable to connect to the database:', err);
      });
      await sequelize.close();
    });
    it('should test route', (done) => {
      request(app)
        .get('/api/v1/test')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body.msg).to.equal('Route module is working perfectly');
          done();
        });
    });
  });
});
