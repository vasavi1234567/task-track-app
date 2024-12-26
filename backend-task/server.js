const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const tasks = [
    {
        id: 1,
        taskName: 'Learn JavaScript',
        description: 'JavaScript DOM Manipulation Methods Learning',
        dueDate: '2024-12-27',
        status: 'In Progress',
        priority: 'Medium',
    },
    {
        id: 2,
        taskName: 'Learn React',
        description: 'React Lifecycle Methods Learning',
        dueDate: '2024-12-28',
        status: 'Pending',
        priority: 'High',
    },
    {
        id: 3,
        taskName: 'Learn SQL',
        description: 'SQL Commands Learning',
        dueDate: '2024-12-26',
        status: 'Completed',
        priority: 'Low',
    }
]

app.get('/tasks', (request, response) => {
    try {
        response.status(200).json(tasks)
    } catch (error) {
        response.status(500).json({message: 'Fetching error', error})
    }
})

app.post('/tasks', (request, response) => {
    const newTask = {id: tasks.length + 1, ...request.body}
    tasks.push(newTask)
    response.status(201).json(newTask)
})

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/')
})

module.exports = app
