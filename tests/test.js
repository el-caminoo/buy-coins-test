const chai = require('chai');
const mocha = require('mocha');

describe('GET /api/v1/users', () => {
    it('should respond with corresponding values', (done) => {
      chai.request(server)
      .get('/graphiql')
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        done();
      });
    });
  });