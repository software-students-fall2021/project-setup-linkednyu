const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
chai.should()
const assert = require('assert')

//channel detail test
describe('channel detail function test', ()=>{
    it('Channel detail', (done)=> {
        for(let i = 1; i < 5; i++){
            chai.request(app)
            .post('/channel/detail/' + i)
            .send("abc")
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('icon');
                res.body.should.have.property('avg_grade');
                res.body.should.have.property('rating');
                res.body.should.have.property('detail');
                res.body.should.have.property('enrolled');
            })
        }
        done();
    }).timeout(10000);

    it('Channel join/leave function', (done)=> {
        chai.request(app)
            .post('/channel/join/1')
            .send("abc")
            .end((err, res) =>{
                res.should.have.status(200);
            })

            chai.request(app)
            .post('/channel/detail/1')
            .send("abc")
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.have.property('enrolled').eq(true);
            })

        chai.request(app)
            .post('/channel/leave/1')
            .send("abc")
            .end((err, res) =>{
                res.should.have.status(200);
            })

        chai.request(app)
            .post('/channel/detail/1')
            .send("abc")
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.have.property('enrolled').eq(false);
            })

            done();
    })
});