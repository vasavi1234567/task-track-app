import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:3000/tasks'
})

Api.interceptors.request.use((request) => {
    const token = localStorage.getItem('token')
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
}) 

Api.get('/')
  .then((response) => {
    console.log('Tasks fetched:', response.data)
  })
  .catch ((error) => {
    console.log('Fetching error')
  })

Api.post('/', {
    taskName: 'Python',
    description: 'Python coding practice',
    dueDate: '2024-12-30',
    status: 'In Progress',
    priority: 'High',
})

  .then((response) => {
    console.log('Task created:', response.data)
  })
  .catch((error) => {
    console.log('Task error', error)
  })

Api.delete('/1')
  .then(() => {
    console.log('Task deleted')
  })
  .catch((error) => {
    console.log('Delete error')
  })

export default Api
