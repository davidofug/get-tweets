// import React, {useState, useEffect} from 'react'
import * as React from 'react'
import { Link } from 'react-router-dom'
import getData from '../helpers/fetchData'

function Posts() { //Opening a component

    const [error, setError] = React.useState('')
    const [posts, setPosts] = React.useState([])

    const handlePosts = async () => {
        setPosts([])
        setError('')
        const posts = await getData('posts')

        if (posts?.error !== undefined) return setError(posts.error)

/*         if (todos.hasOwnProperty(error) && todos.error !== undefined) {
            return setError(todos.error)
        } */

        setPosts(posts)
    }

    React.useEffect(() => { //Is invoked at component rendering
        handlePosts()
    }, [])

    const handleClick = () => {
        handlePosts()
    }

/*     const myOutPut = <div>
        <b>Some thing </b >
    </div>

    return (myOutPut) */

    return (
        <>
            <Link to="/todos">Todos</Link>
            <h1>Posts</h1>
            {error}
            <div>
                <button onClick={handleClick}>Get Posts</button>
            </div>

            {posts?.length <= 0 && <div>Loading...</div>}
            {posts?.length > 0 &&
                <ul>
                    {posts.map(post =>
                        <li key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </li>
                    )}
                </ul>
            }
        </>
    )
}

export default Posts
