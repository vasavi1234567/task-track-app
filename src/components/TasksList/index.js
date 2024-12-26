import React, {useState, useEffect} from 'react'
import Api from '../Api'
import './index.css'

const TasksList = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const fetchTask = async () => {
        const response = await Api.get('/tasks')
        setTasks(response.data)
    }

    const addTask = async () => {
        await Api.post('/tasks', {name: newTask})
        setNewTask('')
        fetchTask()
    }

    useEffect(() => {
        fetchTask()
    }, [])

    return (
        <div className="task-list-container">
            <h1 className="heading1">Tasks</h1>
            <input className="input" type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
            <button className="add-button" onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TasksList
