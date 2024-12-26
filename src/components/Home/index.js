import {Component} from 'react'
import TasksList from '../TasksList'
import './index.css'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <TasksList />
            </div>
        )
    }
}

export default Home
