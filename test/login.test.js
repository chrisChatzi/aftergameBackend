const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');

const User = require('../models/user.js').User;

before(function (done) {
  this.timeout(1500);
  setTimeout(done, 1250);
});

describe("POST /login", () => {
  it("should confirm name is missing", (done) => {
    request(app)
      .post("/login")
      .send({password: 'qwe'})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Name/email is missing');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm password is missing", (done) => {
    request(app)
      .post("/login")
      .send({name: 'test3'})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Password is missing');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm that name does not exist in db", (done) => {
    request(app)
      .post("/login")
      .send({name: 'test unique', password: '123'})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Name does not exist');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm unmatched password", (done) => {
    request(app)
      .post("/login")
      .send({name: 'test3', password: '124'})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Password does not match');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm LOGIN", (done) => {
    request(app)
      .post("/login")
      .send({name: 'test3', password: '123'})
      .expect(200)
      .then((res) => {
        expect(res.text).to.be.eql('User logged in');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
});