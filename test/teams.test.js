const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');

before(function (done) {
  this.timeout(1500);
  setTimeout(done, 1250);
});

describe("GET-POST /teams", () => {
    it("should confirm GET teams", (done) => {
        request(app)
          .get("/teams")
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
    it("should confirm GET one team", (done) => {
      request(app)
        .get("/teams")
        .query({name: 'AEK Athens'})
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
    it("should confirm invalid token in GET teams", (done) => {
        request(app)
          .get("/teams")
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
          .post("/team")
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
    it("should confirm league is missing in POST", (done) => {
        request(app)
          .post("/team")
          .set('x-auth-token', 'dummy_token')
          .set('x-auth-user', 'dummy_user')
          .send({name: 'AEK Athens'})
          .expect(400)
          .then((res) => {
            expect(res.text).to.be.eql('League or leagueId is missing')
            done();
          })
          .catch((err) => {
            console.log('Unexpected:', err);
          });
    });
    it("should confirm a team already exists in POST", (done) => {
        request(app)
          .post("/team")
          .set('x-auth-token', 'dummy_token')
          .set('x-auth-user', 'dummy_user')
          .send({name: 'AEK Athens', league: 'superleague_1', country: 'gr'})
          .expect(400)
          .then((res) => {
            expect(res.text).to.be.eql('Team already exists')
            done();
          })
          .catch((err) => {
            console.log('Unexpected:', err);
          });
    });
});