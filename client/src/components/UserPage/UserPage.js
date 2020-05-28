import React, { useState } from 'react';
import './UserPage.css'

const UserPage = () => {

    const [quickPost, setQuickPost] = useState("")


    return (
        <div className="User-page">
            <div className="feed">
                <form action="">
                    <h3>Make a quick-post</h3>
                    <textarea type="text" name="quickPost" value={quickPost} onChange={e => setQuickPost(e.target.value)} />
                    <button>submit</button>
                </form>
                <div className='post-placeholder'>
                    <p>Today I wrote out all the key FlexBox methods whilst playing the FlexBox Froggy game.
                    What usually takes me minutes of constantly checking online for whether I'm using the correct methods
                    how takes me seconds. Stop being lazy and just write it out and embed it into your long term memory.
                    Random example text to show what a post may look like.
                </p>
                </div>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
                <h1>User's Homepage</h1>
            </div>
            <div className="sidebar">

            </div>
        </div>
    )
}

export default UserPage;