import React, { useState } from 'react';
import axios from 'axios';
import './UserPage.css'

const UserPage = (props) => {

    const [quickPost, setQuickPost] = useState("")
    const [title, setTitle] = useState("")
    const [postStatus, setPostStatus] = useState(true)

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (quickPost) {
            axios
                .post(`/api/crumb/${props.user._id}/newpost`, { title: title, text: quickPost })
            setQuickPost('');
            setTitle('');
            setPostStatus(true);
            axios.get("/api/auth/loggedin").then(response => {
                props.setUser(response.data)
            })
            // props.setUser(props.user)
        } else {
            setPostStatus(false)
        }
    }

    return (
        <div className="User-page">
            <div className="feed">
                <form className="quick-post" onSubmit={handleFormSubmit}>
                    <div className="quick-post-header">
                        <h3>Make a quick-post</h3>
                        {!postStatus ? (<h4>Cannot submit an empty post</h4>) : (<h4> </h4>)}
                    </div>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea type="text" name="text" value={quickPost} onChange={e => setQuickPost(e.target.value)} id="txtInput" />
                    <button type="submit">submit</button>
                </form>
                {props.user.crumbs.map(post => {
                    return (
                        <div className="post" key={post._id}>
                            <h1>{post.title}</h1>
                            <p>{post.text}</p>
                        </div>
                    )
                })}
                <div className='post-placeholder'>
                    <p>Today I wrote out all the key FlexBox methods whilst playing the FlexBox Froggy game.
                    What usually takes me minutes of constantly checking online for whether I'm using the correct methods
                    how takes me seconds. Stop being lazy and just write it out and embed it into your long term memory.
                    Random example text to show what a post may look like.
                    </p>
                </div>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
            </div>
            <div className="sidebar">

            </div>
        </div>
    )
}

export default UserPage;