const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

// Configure chai
chai.use(chaiHttp)
chai.should()

const assert = require('assert')
//const { expect } = require('chai')
const { viewComment } = require('../controllers/routeFunctions')

describe('Detailed post page', () => {
    describe('Get /detailedposts/:id', () => {
        //test get post
        it('should get all posts', (done) => {
            chai.request(app)
                .get('/detailedposts/:id')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
        //test get comments
        it('should get all comments', (done) => {
            chai.request(app)
                .get('/comments')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
    })
})


describe('Home page', () => {
    describe('Get /homeposts', () => {
        //test get post
        it('should get all home posts', (done) => {
            chai.request(app)
                .get('/homeposts')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body[0].should.have.property("id")
                    res.body[1].should.have.property("avatar")
                    res.body[4].should.have.property("userName")
                    res.body[2].should.have.property("courseName")
                    res.body[3].should.have.property("comments")
                    res.body[8].should.have.property("content")
                    res.body[5].should.have.property("date")
                    res.body[0].should.have.property("imgSrc")
                    res.body.should.be.a('array')
                    done()
                })
        })
    })
})


describe('Channel page', () => {
    describe('Get /channel/:id', () => {
        //test get post
        it('should get all channel posts', (done) => {
            chai.request(app)
                .get('/channel/:id')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body[0].should.have.property("id")
                    res.body[0].should.have.property("avatar")
                    res.body[0].should.have.property("userName")
                    res.body[0].should.have.property("courseName")
                    res.body[0].should.have.property("comments")
                    res.body[0].should.have.property("content")
                    res.body[0].should.have.property("date")
                    res.body[0].should.have.property("imgSrc")
                    res.body.should.be.a('array')
                    done()
                })
        })
    })
})


describe('Home page', () => {
    describe('Get /homeposts', () => {
        //test get post
        it('should return status==404 if endpoint=="homepost ', (done) => {
            chai.request(app)
                .get('/homepost')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        }).timeout(4000)
    })
})

describe('Home page', () => {
    describe('Get /channel/:id', () => {
        //test get post
        it('should return status==404 if channel is without an id' , (done) => {
            chai.request(app)
                .get('/channel')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        }).timeout(4000)
    })
})