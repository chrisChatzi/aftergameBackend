const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');

const User = require('../models/user.js').User;

before(function (done) {
  this.timeout(1500);
  setTimeout(done, 1250);
});

describe("POST /logout", () => {
  it("should confirm LOGOUT", (done) => {
    request(app)
      .post("/logout")
      .send({name: 'test3'})
      .expect(200)
      .then((res) => {
        expect(res.text).to.be.eql('User logged out');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
});