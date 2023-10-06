import React, { useState, useEffect, useRef } from 'react'
import './css/Todo.css'

function Todo(props) {
    const [input, setInput] = useState('')
    const [todo, setTodo] = useState()
    return (
        <div className='container text-center p-5 mt-5'>
            <div className="text-center bg-secondary p-5 border-2">
                <h1 className='mb-4 text-white'>TODO APP</h1>
                <form action="" className='form-outline'>
                    <input type="text" className='w-100 form-control m-2' value={input} placeholder='Enter your task' onChange={(event) => setInput(event.target.value)} />
                    <button className='w-50 btn btn-dark mt-3 fw-bold'> SAVE TASK </button>
                </form>
            </div>

            <div className='bg-warning mt-3 p-3'>
                <div className="text-center border-bottom border-bottom-danger">
                    <h3>MY TASKS</h3>
                </div>
                <ul>
                    <li className='form-control mt-3'>First list</li>
                    <li className='form-control '>Second list</li>
                    <li className='form-control'>Third list</li>
                </ul>
            </div>
        </div>
    )
}

export default Todo
