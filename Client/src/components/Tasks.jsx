
const Tasks = ({task}) => {

    return (
        <div>
            <div className="TaskContainer">
                <div className="Task">
                    <input type="checkbox"/>
                    <p>{task}</p>
                </div>
            </div>
        </div>
    )
}

export default Tasks;