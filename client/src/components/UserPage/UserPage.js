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
            axios.post(`${process.env.REACT_APP_API_URL}/api/crumb/${props.user._id}/newpost`, { title: title, text: quickPost }, { withCredentials: true })
                .then(response => {
                    props.setUser(response.data)
                })
            setQuickPost('');
            setTitle('');
            setPostStatus(true);
            // props.setUser(props.user)
        } else {
            setPostStatus(false);
            axios.get(`${process.env.REACT_APP_API_URL}/api/auth/loggedin`, { withCredentials: true }).then(response => {
                props.setUser(response.data)
            })
        }
    }

    const deletePost = (postId) => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/crumb/deletePost`, { postId: postId }, { withCredentials: true })
            .then(response => {
                props.setUser(response.data)
            })
    }

    return (
        <div className="User-page">
            <div className="feed">
                <form className="quick-post" autoComplete="off" onSubmit={handleFormSubmit}>
                    <div className="quick-post-header">
                        <h3>Make a quick-post</h3>
                        {!postStatus ? (<h4>Cannot submit an empty post</h4>) : (<h4> </h4>)}
                    </div>
                    <input type="text" name="title" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
                    <textarea type="text" name="text" value={quickPost} placeholder="Write your thoughts here..." onChange={e => setQuickPost(e.target.value)} id="txtInput" />
                    <button type="submit">submit</button>
                </form>
                {props.user.crumbs.map(post => {

                    return (
                        <div className="post" key={post._id}>
                            <div className="post-header">
                                <h4>{post.created_at.slice(0, 10)}</h4>
                                <div className="rubbish-div">
                                    <img src="./rubbish.png" alt="delete post" className="rubbish-icon" title="Delete Post" onClick={() => deletePost(post._id)} />
                                </div>
                            </div>
                            <h3>{post.title}</h3>
                            <p>{post.text}</p>
                        </div>
                    )
                })}
            </div>
            <div className="sidebar">

            </div>
        </div>
    )
}

export default UserPage;