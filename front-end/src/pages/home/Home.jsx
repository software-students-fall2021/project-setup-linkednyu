import "./home.css"
import PostBox from "../../components/PostBox"


export default function Home() {
    const posts = {
        id: '',
        userName: "Willis",
        courseName: 'Soft. Engineering',
        date: '09/10/22',
        imageSrc : "",
        title: 'How to eat?',
        content: "Gobe"
        
    }

    return (
        <div className="homePage">
            <PostBox {...posts} />
            <PostBox {...posts} />
            <PostBox {...posts} />
            <PostBox {...posts} />
        </div>
    )
}

