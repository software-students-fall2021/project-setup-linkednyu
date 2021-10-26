import { useState } from 'react'
import { Button } from '../../components/Button'
import ImageAvatars from '../../components/Avatar'
import './NewPost.css'
import { FaTimes } from 'react-icons/fa'

export default function NewPost({ onCreate }) {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [privacy, setPrivate] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title || !text){
            alert(`Please add a ${!title ? 'title' : 'task'}`)
            return
        }

        onCreate({ title, text, privacy })

        setTitle('')
        setText('')
        setPrivate('')
    }

    const showChannel = () => {
        console.log('show channel')
    }

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>

            <div className = 'form-control'>
                <label>Title</label>
                <input type = 'text' 
                    placeholder = 'Title' 
                    value = {title} 
                    onChange = {
                        (e) => setTitle((e.target.value))
                    } />
            </div>

            <div>
            <Button onClick = {showChannel}>Channel 
                <FaTimes 
                    style = {{color: 'grey', cursor: 'pointer'}}
                />
            </Button>
            <ImageAvatars size = '45px'/>
            </div>
            
            <div>
                <Button children = 'editing tools here' />
            </div>

            <div className = 'form-control'>
                <label>Text</label> 
                <input type = 'text' 
                    placeholder = 'Text here.' 
                    value = {text} 
                    onChange = {
                        (e) => setText((e.target.value))
                    } />
            </div>

            <div className = 'form-control'>
                <label>Private</label> 
                <input type = 'checkbox' 
                    checked = {privacy} 
                    value = {privacy} 
                    onChange = {
                        (e) => setPrivate((e.currentTarget.checked))
                    } />
            </div>

            <input 
                type = 'submit' 
                value = 'Post' 
                className = 'btn' />

        </form>
    )
}
