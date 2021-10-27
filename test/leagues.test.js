const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');

before(function (done) {
  this.timeout(1500);
  setTimeout(done, 1250);
});

describe("GET-POST /leagues", () => {
    it("should confirm GET leagues", (done) => {
        request(app)
          .get("/leagues")
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
    it("should confirm invalid token in GET leagues", (done) => {
        request(app)
          .get("/leagues")
          .set('x-auth-token', 'dummy_token_invalid')
          .set('x-auth-user', 'dummy_user')
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
          .post("/league")
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
    it("should confirm country is missing in POST", (done) => {
        request(app)
          .post("/league")
          .set('x-auth-token', 'dummy_token')
          .set('x-auth-user', 'dummy_user')
          .send({name: 'superleague_1'})
          .expect(400)
          .then((res) => {
            expect(res.text).to.be.eql('Country is missing')
            done();
          })
          .catch((err) => {
            console.log('Unexpected:', err);
          });
    });
    it("should confirm a league already exists in POST", (done) => {
        request(app)
          .post("/league")
          .set('x-auth-token', 'dummy_token')
          .set('x-auth-user', 'dummy_user')
          .send({name: 'superleague_1', country: 'gr'})
          .expect(400)
          .then((res) => {
            expect(res.text).to.be.eql('League already exists')
            done();
          })
          .catch((err) => {
            console.log('Unexpected:', err);
          });
    });
});