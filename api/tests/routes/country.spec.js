/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

xdescribe('Country routes', () => {
  describe('GET /countries', function(){
    this.timeout(5000)
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('should get 404', () =>
      agent.get('/paises').expect(404)
    );
    it('should get Argentina', () =>
      agent.get('/countries?name=Arg')
      .then(res=>{
        expect(res.body[0].name).equal("Argentina")
      })
    );
    it('should get an error message', () =>
      agent.get('/countries?name=jsadj')
      .then(res=>{
        expect(res.body[0].name).equal("This country doesn't exist")
      })
    );
    it('should fill the database with all countries', () =>
      agent.get('/all')
      .then(res=>{
        expect(res.body.length).equal(250)
      })
    );
    it('should fill the database with the countries in that continent', () =>
      agent.get('/countries?continent=Africa')
      .then(res=>{
        expect(res.body.length).equal(60)
        expect(res.body[0].name).equal("Algeria")
      })
    );  
  });
})
