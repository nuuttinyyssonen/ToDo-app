import { useState } from "react";

const AddNewTask = ({handleAddNewTask}) => {

    const [Task, setTask] = useState('')

    const handleSaveChanges = () =>{
        if(Task === '') {
            return
        }
        handleAddNewTask(Task)
        setTask('')
    }

    return (
        <div>
            <div className="editTask">
                <h2>Task:</h2>
                <input 
                    onChange={(e) => {setTask(e.target.value)}} 
                    value={Task} 
                    className="SearchBar" 
                    type="text" 
                    placeholder="Type task here..."
                />
                <textarea 
                    className='TaskDescription' 
                    placeholder="description"
                />
                <div className="dateContainer">
                    <p>Due date</p>
                    <input type="date"/>
                </div>
                <div className="TagsContainer">
                    <p>Tags</p>
                    <button>+ Add Tag</button>
                </div>
                <div className="TasksFooter">
                    <button>Delete Task</button>
                    <button onClick={handleSaveChanges}>Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewTask;