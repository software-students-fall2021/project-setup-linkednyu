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