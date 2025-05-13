import './App.css'
import Menu from './components/Menu'
import Tasks from './components/Tasks'
import AddNewTask from './components/AddNewTask'
import TaskManager from './components/TaskManager'

function App() {

  return (
    <div className='MainContainer'>
      <Menu />
      <TaskManager />
      {/* <Tasks />
      <AddNewTask /> */}
    </div>
  )
}

export default App
