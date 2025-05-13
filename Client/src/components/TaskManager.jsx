import { useState } from "react";
import Tasks from "./Tasks";
import AddNewTask from "./AddNewTask";

const TaskManager = () => {
    const [tasks, setTasks] = useState([])
    const handleAddNewTask = (newTask) => {
        setTasks([...tasks, newTask])
        console.log(tasks)
    }

    return (
        <div className="TaskManager">   
            <div className="TaskContainer">
                <h1>Today</h1>
                {tasks.map((task, index) => (
                    <Tasks key={index} task={task}/>
                ))}
            </div>
            <AddNewTask handleAddNewTask={handleAddNewTask}/>
        </div>
    )
};

export default TaskManager