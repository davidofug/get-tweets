// import React, {useState, useEffect} from 'react'
import * as React from 'react'
import axios from 'axios'
import logo from '../imgs/Get-tweets-logo.png'

function App() {

    const [handle, setHandle] = React.useState('')
    const [error, setError] = React.useState('')
    const [todos, setTodos] = React.useState([])
    React.useEffect(() => {

    }, [])
    
    const handleClick = async () => {
        console.log(handle)
        setError('')
        const API_URL = "https://jsonplaceholder.typicode.com/todos";
        let response = ''

        try {
            response = await axios.get(API_URL);
            // console.log(response)
            let { data } = response
            setTodos(data)
            // console.log(data)
        } catch (error) {

            setError(<h1>Resource error</h1>)
            console.log(error)
            console.log(response)
        }

    }

/*     const myOutPut = <div>
        <b>Some thing </b >
    </div>

    return (myOutPut) */

    return (
        <>
            <h1>Todos</h1>
            {error}
            <div>
                <button onClick={handleClick}>Get Todos</button>
            </div>

            {todos?.length > 0 &&
                <ul>
                    {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
                </ul>
            }
        </>
    )
}

export default App
