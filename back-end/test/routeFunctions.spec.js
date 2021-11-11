const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

// Configure chai
chai.use(chaiHttp)
chai.should()

const assert = require('assert')


// GET

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


        //test get post if wrong route is given
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


describe('Detailed post page', () => {
    describe('Get /detailedposts/:id', () => {
        //test get post
        it('should get all posts', (done) => {
            chai.request(app)
                .get('/detailedposts/:id')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body[0].should.have.property('id')
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
        //test get comments
        it('should get all comments', (done) => {
            chai.request(app)
                .get('/comments')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body[0].should.have.property('comment_id')
                    res.body[1].should.have.property("post_id")
                    res.body[2].should.have.property("userName")
                    res.body[3].should.have.property("date")
                    res.body[4].should.have.property("comment")
                    res.body[5].should.have.property("avatar")
                    res.body.should.be.a('array')
                    done()
                })
        })

        //test get post if wrong route is given
        it('should return status==404 if /detailedposts is without an id', (done) => {
            chai.request(app)
                .get('/detailedposts')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        }).timeout(4000)
    })
})


describe('Channel page', () => {
    describe('Get /channel/:id', () => {
        //test get channel post
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



        //test get  channel post
        it('should return status==404 if channel is without an id', (done) => {
            chai.request(app)
                .get('/channel')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        }).timeout(4000)
    })
})

//test account page
describe('Account page', () => {
    describe('Get /account/:id', () => {
        //test get post
        it('should get account info', (done) => {
            chai.request(app)
                .get('/account/:id')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })

        //test get post if wrong route is given
        it('should return status==404 if /account is without an id', (done) => {
            chai.request(app)
                .get('/account')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        }).timeout(4000)
    })
})



// POST
describe('Create New Post Page', () => {
    describe('Post /homeposts', () => {
        //making a post request
        it('it should send a new post to the home page', (done) => {

            const posts = {
                "id": "89",
                "avatar": "https://robohash.org/utanimioccaecati.png?size=50x50&set=set1",
                "userName": "Prince",
                "courseName": "Mathematics",
                "date": "11/12/2020",
                "title": "Food",
                "content": "I love food",
                "comments": [1, 2, 3, 4, 5],
                "imgSrc": "https://picsum.photos/id/1000/5626/3635"
            };

            chai.request(app)
                .post('/homeposts')
                .send(posts)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property("userName").eq("Prince")
                    res.body.should.have.property("courseName").eq("Mathematics")
                    res.body.should.have.property("content").eq("I love food")
                    done()
                })
        }).timeout(5000)


        it('it should not send a new post to the home page if endpoint is not valid', (done) => {

            const posts = {
                "id": "89",
                "avatar": "https://robohash.org/utanimioccaecati.png?size=50x50&set=set1",
                "userName": "Prince",
                "courseName": "Mathematics",
                "date": "11/12/2020",
                "title": "Food",
                "content": "I love food",
                "comments": [1, 2, 3, 4, 5],
                "imgSrc": "https://picsum.photos/id/1000/5626/3635"
            };

            chai.request(app)
                .post('/homepost')
                .send(posts)
                .end((err, res) => {
                    res.should.have.status(404)

                    done()
                })
        }).timeout(5000)

    })
})



describe('Create New Comment', () => {
    describe('Post /comments', () => {
        //making a post request
        it('it should send a new comment', (done) => {

            const comment = {
                "date": "May",
                "first_name": "Prince",
                "last_name": "Ampofo",
                "comment": "I love food",
                "id": "90",
            };

            chai.request(app)
                .post('/comments')
                .send(comment)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property("date").eq("May")
                    res.body.should.have.property("comment").eq("I love food")
                    res.body.should.have.property("first_name").eq("Prince")
                    done()
                })
        }).timeout(5000)


        it('it should not send a new comment if endpoint is not valid', (done) => {

            const comment = {
                "date": "May",
                "first_name": "Prince",
                "last_name": "Ampofo",
                "comment": "I love food",
                "id": "90",
            };

            chai.request(app)
                .post('/comment')
                .send(comment)
                .end((err, res) => {
                    res.should.have.status(404)

                    done()
                })
        }).timeout(5000)

    })
})