const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');

const User = require('../models/user.js').User;

before(function (done) {
  this.timeout(1500);
  setTimeout(done, 1250);
});

describe("POST /register", () => {
  it("should confirm email is missing", (done) => {
    request(app)
      .post("/register")
      .send({name: 'qwe'})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Email is missing');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm password is missing", (done) => {
    request(app)
      .post("/register")
      .send({name: 'qwe', email: 'qwe@qwe.com', country: 'gr'})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Password is missing');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm that name already exists", (done) => {
    request(app)
      .post("/register")
      .send({name: 'test', email: 'qwe@qwe.com', country: 'gr', password: '123'})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Name already exists');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  // it("should confirm that INSERT works", (done) => {
  //   request(app)
  //     .post("/register")
  //     .send({name: 'test3', email: 'qwe@qwe.com', country: 'gr', password: '123'})
  //     .expect(200)
  //     .then((res) => {
  //       expect(res.text).to.be.eql('User created');
  //       done();
  //     })
  //     .catch((err) => {
  //       console.log('Unexpected:', err);
  //     });
  // });
});