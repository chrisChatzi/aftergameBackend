const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');

const User = require('../models/game.js').User;
const dummyGameData = require('../helpers/consts').dummyGameData;

before(function (done) {
  this.timeout(1500);
  setTimeout(done, 1250);
});

describe("GET /game", () => {
  it("should confirm league is missing", (done) => {
    request(app)
      .get("/game")
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('League is missing');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm week is missing", (done) => {
    request(app)
      .get("/game")
      .query({league: 'superleague_gr'}) 
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Week is missing');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm game does not exist", (done) => {
    request(app)
      .get("/game")
      .query({league: 'superleague_gr', week: 100})
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Game does not exist');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm game data is fetched", (done) => {
    request(app)
      .get("/game")
      .query({league: 'superleague_gr', week: 2})
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .expect(200)
      .then((res) => {
        expect(res.text).to.be.a('string');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
});