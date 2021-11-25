const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

// Configure chai
chai.use(chaiHttp)
chai.should()


// POST
describe('Create a new user', () => {
    describe('Post /register', () => {
        // //making a post request
        // it('it should create a new user', (done) => {

        //     const user = {
        //         "name": "King Ampofo",
        //         "username": "King34526",
        //         "email": "princeosei@nyu.edu",
        //         "password":'qwerty1234'
        //     };

        //     chai.request(app)
        //         .post('/register')
        //         .send(user)
        //         .end((err, res) => {
        //             res.should.have.status(200)
        //             res.body.should.be.a('object')
        //             done()
        //         })
        // }).timeout(10000)


        it('it should not create a new user if endpoint is not valid', (done) => {

            const user = {
                "name": "King Ampofo",
                "username": "King34526",
                "email": "princeosei@nyu.edu",
                "password":'qwerty1234'
            };

            chai.request(app)
                .post('/registe')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        }).timeout(10000)


        it('it should not create a new user if validation fails', (done) => {

            const user = {
                "name": "King Ampofo",
                "username": "4526",
                "email": "princeosei@nyu.edu",
                "password":'qwer'
            };

            chai.request(app)
                .post('/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(409)

                    done()
                })
        }).timeout(10000)

    })
})


describe('Login a user', () => {
    describe('Post /signin', () => {
        // //making a post request
        // it('it should login a user', (done) => {

        //     const user = {
        //         "email": "doa345@gmail.com",
        //         "password":'zxcv1234'
        //     };

        //     chai.request(app)
        //         .post('/login')
        //         .send(user)
        //         .end((err, res) => {
        //             res.should.have.status(200)
        //             done()
        //         })
        // }).timeout(10000)


        it('it should not login a user if endpoint is not valid', (done) => {

            const user = {
                "email": "doa345@gmail.com",
                "password":'zxcv1234'
            };

            chai.request(app)
                .post('/logi')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(404)

                    done()
                })
        }).timeout(10000)


        it('it should not login a user if validation fails', (done) => {

            const user = {
                "email": "doa345@gmail.com",
                "password":'zxc4'
            };

            chai.request(app)
                .post('/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(409)

                    done()
                })
        }).timeout(10000)

    })
})