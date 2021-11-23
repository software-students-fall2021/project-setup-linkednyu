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
            .get('/channel/detail/' + i)
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
        //join
        chai.request(app)
            .post('/channel/join')
            .send({email:'tw2198@nyu.edu', channelId:'1'})
            .end((err, res) =>{
                res.should.have.status(200);
            })
        // check is joined
        chai.request(app)
            .post('/channel/isJoined')
            .send({email:"tw2198@nyu.edu", channelId:"1"})
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.have.property('joined').eq(true);
            })
        
        //leave
        chai.request(app)
            .post('/channel/leave/')
            .send({email:"tw2198@nyu.edu", channelId:"1"})
            .end((err, res) =>{
                res.should.have.status(200);
            })

        //check
        chai.request(app)
            .post('/channel/isJoined')
            .send({email:"tw2198@nyu.edu", channelId:"1"})
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.have.property('joined').eq(false);
            })

        //check nonexistence username
        chai.request(app)
            .post('/channel/join')
            .send({email:"abc", channelId:"100"})
            .end((err, res) =>{
                res.should.have.status(404);
            })

        chai.request(app)
            .post('/channel/leave')
            .send({email:"abc", channelId:"100"})
            .end((err, res) =>{
                res.should.have.status(404);
            })
            done();
    })
});