// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const app = require('../app')

// // Configure chai
// chai.use(chaiHttp)
// chai.should()

// //GET
// describe('Home page', () => {
//     describe('Get /homeposts', () => {
//         //test get post
//         it('should get all home posts', (done) => {
//             chai.request(app)
//                 .get('/homeposts')
//                 .end((err, res) => {
//                     res.should.have.status(200)
//                     res.body[1].should.have.property("avatar")
//                     res.body[4].should.have.property("username")
//                     res.body[2].should.have.property("coursename")
//                     res.body[8].should.have.property("content")
//                     res.body[5].should.have.property("date")
//                     res.body[0].should.have.property("imgSrc")
//                     res.body.should.be.a('array')
//                     done()
//                 })
//         }).timeout(10000)


//         //test get post if wrong route is given
//         it('should return status==404 if endpoint=="homepost ', (done) => {
//             chai.request(app)
//                 .get('/homepost')
//                 .end((err, res) => {
//                     res.should.have.status(404)
//                     done()
//                 })
//         }).timeout(10000)


//     })
// })


