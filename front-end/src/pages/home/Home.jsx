import { Button } from "../../components/Button"
import { useState } from 'react'
import { post } from "../newpost/NewPost"
import PostBox from "../../components/PostBox"


export default function Home() {
    
    const [posts, setPosts] = useState([
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

    setPosts([...posts, post])

    return (
        <div className="homePage">
            <h1>Post page/Home page</h1>
            <Button onClick={() => console.log('clicked')}
                type="Button"
                buttonStyle="btn--primary--solid"
                buttonSize="btn--medium"
            > Click Here  </Button>
            <div>
                {(posts.map(
                    (posts) => (
                        <PostBox
                            key = {posts.id}
                            post = {posts}
                        />
                    )
                ))}
            </div>
        </div>
    )
}

