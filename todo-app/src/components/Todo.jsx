import React, { useState, useEffect, useRef } from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { BsCheck2All } from 'react-icons/bs'
import './css/Todo.css'

function Todo(props) {
    // input state created to store data while
    const [input, setInput] = useState('')
    // todo state used to stored tasks in array format
    const [todo, setTodo] = useState([])
    // create new state for  storing id of perticular product which one we want to edit
    const [taskId, setTaskId] = useState(0)



    const addTodo = () => {
        if (input !== '') {
            setTodo([...todo, { task: input, id: Date.now(), status: false }]);
            setInput('');
        }
        if (taskId) {
            const taskObject = todo.find((i) => i.id === taskId)
            const updateTask = todo.map((item) => {
                if (item.id === taskId) {
                    return (
                        { ...item, task: input }
                    )
                }
                return item
            })
            setTodo(updateTask)
            setTaskId(0)
            setInput('')

        }

    }

    const taskDelete = (id) => {
        setTodo(todo.filter((to) => to.id !== id))
    }

    const taskComplete = (id) => {
        let task = todo.map((i) => {
            if (i.id === id) {
                return (
                    { ...i, status: !i.status }
                )
            }
            return i
        })
        setTodo(task)
    }

    const taskEdit = (id) => {
        let task = todo.find((item) => item.id === id);
        console.log(task.task);
        setInput(task.task)
        setTaskId(task.id)
    }

    const inputRef = useRef('null')

    useEffect(() => {
        inputRef.current.focus()
    })
    return (
        <div className='body'>
            <div className='text-center p-5 section-head'>
                <h1 className='mb-4 text-white custom-head'>TODO</h1>
            </div>
            <div className='container text-center p-5'>
                <div className="text-center p-5 border-2 todo-section">

                    <form action="" className='form-outline' onSubmit={(e) => e.preventDefault()} >
                        <input type="text" className='w-100 form-control m-2 form-input' value={input} ref={inputRef} placeholder='Enter your task' onChange={(event) => setInput(event.target.value)} />
                        <button className='w-50 btn btn-success mt-3 fw-bold submit-button' onClick={addTodo} > {taskId ? 'UPDATE TASK' : 'SAVE TASK'} </button>
                    </form>
                </div>

                <div className='task-section mt-3 p-3'>
                    <div className="text-center border-bottom border-bottom-danger">
                        <h3 className='text-white'>MY TASKS</h3>
                    </div>
                    <ul className='text-left'>
                        {todo.map((todoObj) => (
                            <div className='todo-task'>
                                <li className='form-control task-control' id={todoObj.status ? 'input-item' : ''}>
                                    <span className='icon-content'>
                                        <i className="bi bi-star-fill"></i>
                                    </span> {todoObj.task}
                                </li>
                                <div className='todo-icons text-success'>
                                    <BsCheck2All className='icons' id='complete' onClick={() => taskComplete(todoObj.id)} title='Complete' />
                                    <BiEdit className='icons text-info' title='Edit' id='edit' onClick={() => taskEdit(todoObj.id)} />
                                    <AiFillDelete className='icons text-danger' title='Delete' id='delete' onClick={() => taskDelete(todoObj.id)} />
                                </div>
                            </div>
                        )
                        )}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Todo
