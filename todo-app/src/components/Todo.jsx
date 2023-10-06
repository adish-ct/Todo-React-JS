import React, { useState, useEffect, useRef } from 'react'
import './css/Todo.css'

function Todo(props) {
    // input state created to store data while
    const [input, setInput] = useState('')
    // todo state used to stored tasks in array format
    const [todo, setTodo] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addTodo = () => {
        setTodo([...todo, input]);
        setInput('');
    }

    const inputRef = useRef('null')

    useEffect(() => {
        inputRef.current.focus()
    })
    return (
        <div className='container text-center p-5 mt-5'>
            <div className="text-center bg-secondary p-5 border-2">
                <h1 className='mb-4 text-white'>TODO APP</h1>
                <form action="" className='form-outline' onSubmit={handleSubmit} >
                    <input type="text" className='w-100 form-control m-2' value={input} ref={inputRef} placeholder='Enter your task' onChange={(event) => setInput(event.target.value)} />
                    <button className='w-50 btn btn-dark mt-3 fw-bold' onClick={addTodo} > SAVE TASK </button>
                </form>
            </div>

            <div className='bg-warning mt-3 p-3'>
                <div className="text-center border-bottom border-bottom-danger">
                    <h3>MY TASKS</h3>
                </div>
                <ul className='text-left'>
                    {todo.map((task) => <li className='form-control task-control'><span className='icon-content'><i className="bi bi-star-fill"></i></span> {task} </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Todo
