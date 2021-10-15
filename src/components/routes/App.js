import * as React from 'react'
import Posts from '../views/Posts'
import Todos from '../views/Todos'

function App() {
    const [page, setPage] = React.useState(null)

    return (
        <>
            {/* <button onClick={() => setPage(page === 'posts' ? 'todos' : 'posts')} >
                {page === 'posts' ? 'Todos' : 'Posts'}
            </button> */}

            {page === 'posts' ? <button onClick={() => setPage('todos')} > Todos </button>
                : <button onClick={() => setPage('posts')} > Posts </button>}

            {page === 'posts' ? <Posts /> : <Todos />}
        </>
    )
}

export default App
