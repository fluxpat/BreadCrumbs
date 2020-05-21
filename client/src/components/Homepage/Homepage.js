import React from 'react';
import './Homepage.css'

const Homepage = () => {


    return (
        <div className="Homepage">
            <div className='introduction'>
                <h1>BreadCrumbs</h1>
                <p className='intro-text'>
                    It is said that self-reflection is the key to personal development.
                    How can we measure our growth without documenting our progress in important facets of life?
                    BreadCrumbs provides a simple system for logging your state of mind at different moments (called crumbs) and allows you to reflect on how much you've changed as a person over time.
                </p>
                <button>See Demo</button>
            </div>

            <div className="login">
                <h2>Login</h2>
                <p>Don't have an account?</p>
                <p>Click here to create one.</p>
                <input type="text" />
                <input type="text" />
                <button>Login</button>
            </div>
        </div>
    )
}

export default Homepage;