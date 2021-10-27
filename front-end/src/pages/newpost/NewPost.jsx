import { useState } from 'react'
import { Button } from '../../components/Button'
import ImageAvatars from '../../components/Avatar'
import './NewPost.css'
import Header from '../../components/Header'
import { Editor, EditorState } from 'draft-js'
import 'draft-js/dist/Draft.css'

const post = {
    id: '',
    userName: '',
    courseName: '',
    time: '',
    title: '',
    text: ''
}

export default function NewPost() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [privacy, setPrivate] = useState(false)

    //add the newly created post to list posts
    const onCreate = ({ title, text }) => {
        const id = Math.floor(Math.random() * 1000) + 1
        post.title = title
        post.text = text
    }

    //submit the form
    const onSubmit = (e) => {
        e.preventDefault()

        if(!title || !text){
            alert(`Please add a ${!title ? 'title' : 'task'}`)
            return
        }

        onCreate({ title, text })

        setTitle('')
        setText('')
        setPrivate('')
    }

    //yet to implement
    const showChannel = () => {
        console.log('show channel')
    }

    const [editorState, setEditorState] = useState(
		() => EditorState.createEmpty(),
	)

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <Header />
            <div className = 'container'>
            <h2> Create a Post </h2>
            <div className = 'form-control'>
                <label>Title</label>
                <input type = 'text' 
                    placeholder = 'Title' 
                    value = {title} 
                    onChange = {
                        (e) => setTitle((e.target.value))
                    } />
            </div>

            <div className = 'header'>
            <Button onClick = {showChannel}>Channel 
            </Button>
            <ImageAvatars size = '45px'/>
            </div>

            <div className = 'header' style = {{
                margin: '0 auto'
            }}>
                <Button 
                    children = 'editing tools here'
                />
            </div>

            <div className = 'form-control '>
                <label>Text</label> 
                <input type = 'text' 
                    placeholder = 'Text here.' 
                    value = {text} 
                    style = {{height: '180px'}}
                    onChange = {
                        (e) => setText((e.target.value))
                    } />
                
            </div>

            <input 
                type = 'submit' 
                value = 'Post' 
                className = 'btn' 
                style = {{ display: 'block' }}/>
            
            </div>

        </form>
    )
}

export { post }
