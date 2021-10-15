import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to="/posts">Posts</Link>
            <Link to="/todos">Todos</Link>
            <h1>Use the name above</h1>
        </div>
    )
}

export default Home
