const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');

before(function (done) {
  this.timeout(1500);
  setTimeout(done, 1250);
});

describe("GET-POST /teams", () => {
    it("should confirm GET players", (done) => {
        request(app)
          .get("/players")
          .set('x-auth-user', 'dummy_user')
          .set('x-auth-company', 'test')
          .set('x-auth-alias', 'gr_test_EmQEvx')
          .expect(200)
          .then((res) => {
            expect(res.body).to.be.an('array');
            done();
          })
          .catch((err) => {
            console.log('Unexpected:', err);
          });
    });
    it("should confirm GET one player", (done) => {
      request(app)
        .get("/players")
        .query({name: 'Steven Zuber'})
        .set('x-auth-user', 'dummy_user')
        .set('x-auth-company', 'test')
        .set('x-auth-alias', 'gr_test_EmQEvx')
        .expect(200)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch((err) => {
          console.log('Unexpected:', err);
        });
    });
    it("should confirm GET team's players", (done) => {
      request(app)
        .get("/players")
        .query({teamId: 'gr_aek_athens'})
        .set('x-auth-user', 'dummy_user')
        .set('x-auth-company', 'test')
        .set('x-auth-alias', 'gr_test_EmQEvx')
        .expect(200)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch((err) => {
          console.log('Unexpected:', err);
        });
    });
    it("should confirm invalid token in GET players", (done) => {
        request(app)
          .get("/players")
          .set('x-auth-user', 'dummy_user')
          .set('x-auth-company', 'test')
          .set('x-auth-alias', 'gr_test_EmQEvx_invalid')
          .expect(401)
          .then((res) => {
            expect(res.text).to.be.eql('Unauthorized');
            done();
          })
          .catch((err) => {
            console.log('Unexpected:', err);
          });
    });
    it("should confirm name is missing in POST", (done) => {
        request(app)
          .post("/player")
          .set('x-auth-token', 'dummy_token')
          .set('x-auth-user', 'dummy_user')
          .send({country: 'gr'})
          .expect(400)
          .then((res) => {
            expect(res.text).to.be.eql('Name is missing')
            done();
          })
          .catch((err) => {
            console.log('Unexpected:', err);
          });
    });
    it("should confirm leagueId is missing in POST", (done) => {
        request(app)
          .post("/player")
          .set('x-auth-token', 'dummy_token')
          .set('x-auth-user', 'dummy_user')
          .send({name: 'Steven Zuber', number: 33})
          .expect(400)
          .then((res) => {
            expect(res.text).to.be.eql('LeagueId is missing')
            done();
          })
          .catch((err) => {
            console.log('Unexpected:', err);
          });
    });
    it("should confirm a player already exists in POST", (done) => {
        request(app)
          .post("/player")
          .set('x-auth-token', 'dummy_token')
          .set('x-auth-user', 'dummy_user')
          .send({name: 'Steven Zuber', number: 33, leagueId: 'superleague_1', teamId: 'gr_aek_athens'})
          .expect(400)
          .then((res) => {
            expect(res.text).to.be.eql('Player already exists')
            done();
          })
          .catch((err) => {
            console.log('Unexpected:', err);
          });
    });
});