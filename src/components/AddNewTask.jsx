
const AddNewTask = () => {

    return (
        <div>
            <div className="editTask">
                <h2>Task:</h2>
                <input className="SearchBar" type="text" placeholder="Renew driver's license"/>
                <textarea className='TaskDescription' placeholder="description"/>
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
                    <button>Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewTask;