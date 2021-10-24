const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');

const User = require('../models/game.js').User;
const dummyGameData = require('../helpers/consts').dummyGameData;

before(function (done) {
  this.timeout(1500);
  setTimeout(done, 1250);
});

describe("POST /game", () => {
  it("should confirm league is missing", (done) => {
    request(app)
      .post("/game")
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .send({week: 1})
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
      .post("/game")
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .send({league: 'superleague_gr'})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Week is missing');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm teams array is missing", (done) => {
    request(app)
      .post("/game")
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .send({league: 'superleague_gr', week: 1})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Teams array is missing');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm gameData is missing", (done) => {
    request(app)
      .post("/game")
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .send({league: 'superleague_gr', week: 1, teams: ['AEK', 'Ionikos']})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('gameData is missing');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm gameData is invalid", (done) => {
    request(app)
      .post("/game")
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .send({league: 'superleague_gr', week: 1, teams: ['AEK', 'Ionikos'], gameData: {}})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('gameData.players is invalid');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
  it("should confirm game already exists", (done) => {
    request(app)
      .post("/game")
      .set('x-auth-token', 'dummy_token')
      .set('x-auth-user', 'dummy_user')
      .send({league: 'superleague_gr', week: 1, teams: ['AEK', 'Ionikos'], gameData: dummyGameData})
      .expect(400)
      .then((res) => {
        expect(res.text).to.be.eql('Game already exists');
        done();
      })
      .catch((err) => {
        console.log('Unexpected:', err);
      });
  });
//   it("should confirm game is added", (done) => {
//     request(app)
//       .post("/game")
//       .set('x-auth-token', 'dummy_token')
//       .set('x-auth-user', 'dummy_user')
//       .send({league: 'superleague_gr', week: 2, teams: ['AEK', 'Ionikos'], gameData: dummyGameData})
//       .expect(200)
//       .then((res) => {
//         expect(res.text).to.be.eql('Game added');
//         done();
//       })
//       .catch((err) => {
//         console.log('Unexpected:', err);
//       });
//   });
});