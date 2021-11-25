// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const app = require('../app')

// // Configure chai
// chai.use(chaiHttp)
// chai.should()


// // POST
// describe('Create New Post Page', () => {
//     describe('Post /homeposts', () => {
//         //making a post request
//         it('it should send a new post to the home page', (done) => {

//             const posts = {
//                 "avatar": "https://robohash.org/utanimioccaecati.png?size=50x50&set=set1",
//                 "username": "Prince",
//                 "coursename": "Mathematics",
//                 "date": "2020/12/20",
//                 "title": "Food",
//                 "content": "I love food",
//                 "imgSrc": "https://picsum.photos/id/1000/5626/3635"
//             };

//             chai.request(app)
//                 .post('/homeposts')
//                 .send(posts)
//                 .end((err, res) => {
//                     res.should.have.status(200)
//                     res.body.should.be.a('object')
//                     res.body.should.have.property("username").eq("Prince")
//                     res.body.should.have.property("coursename").eq("Mathematics")
//                     res.body.should.have.property("content").eq("I love food")
//                     done()
//                 })
//         }).timeout(5000)


//         it('it should not send a new post to the home page if endpoint is not valid', (done) => {

//             const posts = {
//                 "avatar": "https://robohash.org/utanimioccaecati.png?size=50x50&set=set1",
//                 "username": "Prince",
//                 "coursename": "Mathematics",
//                 "date": "2020/12/20",
//                 "title": "Food",
//                 "content": "I love food",
//                 "imgSrc": "https://picsum.photos/id/1000/5626/3635"
//             };

//             chai.request(app)
//                 .post('/homepost')
//                 .send(posts)
//                 .end((err, res) => {
//                     res.should.have.status(404)

//                     done()
//                 })
//         }).timeout(10000)


//         it('it should not send a new post if validation fails', (done) => {

//             const posts = {
//                 "avatar": "https://robohash.org/utanimioccaecati.png?size=50x50&set=set1",
//                 "date": "2020/12/20",
//                 "title": "Food",
//                 "content": "I love food",
//                 "imgSrc": "https://picsum.photos/id/1000/5626/3635"
//             };

//             chai.request(app)
//                 .post('/homepost')
//                 .send(posts)
//                 .end((err, res) => {
//                     res.should.have.status(404)

//                     done()
//                 })
//         }).timeout(10000)

//     })
// })