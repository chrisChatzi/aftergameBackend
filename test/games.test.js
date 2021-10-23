const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');

const User = require('../models/user.js').User;

before(function (done) {
  this.timeout(1500);
  setTimeout(done, 1250);
});

describe("GET /games", () => {
  it("should confirm that user is unauthorized due to bad user given", (done) => {
    request(app)
      .get("/games")
      .set('x-auth-token', 'mytoken')
      .set('x-auth-user', 'testUser')
      .expect(401)
      .then((res) => {
        expect(res.text).to.be.eql('Unauthorized');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm that user is unauthorized due to bad token given", (done) => {
    request(app)
      .get("/games")
      .set('x-auth-token', 'myToken')
      .set('x-auth-user', 'qwe')
      .expect(401)
      .then((res) => {
        expect(res.text).to.be.eql('Unauthorized');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm that user is unauthorized due expired token", (done) => {
    request(app)
      .get("/games")
      .set('x-auth-token', 'qwoken')
      .set('x-auth-user', 'qwe')
      .expect(401)
      .then((res) => {
        expect(res.text).to.be.eql('Token expired');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm that request is authorized with dummy user", (done) => {
    request(app)
      .get("/games")
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an('array');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
});