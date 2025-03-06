import './App.css'
import Menu from './components/Menu'
import Tasks from './components/Tasks'
import AddNewTask from './components/AddNewTask'

function App() {

  return (
    <div className='MainContainer'>
      <Menu />
      <Tasks />
      <AddNewTask />
    </div>
  )
}

export default App
