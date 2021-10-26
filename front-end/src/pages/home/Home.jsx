import { Button } from "../../components/Button"
import { useState } from 'react'
import PostBox from "../../components/PostBox"
import NewPost from "../newpost/NewPost"
import ListPosts from '../newpost/ListPosts'

export default function Home() {
    const[posts, setPosts] = useState([
        {
            id: '1',
            userName: 'foo',
            courseName: 'woo',
            time: '1/1',
            title: 'res',
            text: 'Scherbastky',
            privacy: false,
        }
    ])

    const onCreate = (post) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newPost = { id, ...post }
        setPosts([...posts, newPost])
    }

    return (
        <div className="homePage">
            <h1>Post page/Home page</h1>
            <Button onClick={() => console.log('clicked')}
                type="Button"
                buttonStyle="btn--primary--solid"
                buttonSize="btn--medium"
            > Click Here  </Button>

            <NewPost onCreate = {onCreate}/>
            {posts.length > 0 ? 
                <listPosts 
                    posts = {posts}
                /> : ('No Post To Show')}
        </div>
    )
}
