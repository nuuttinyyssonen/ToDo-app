
const Tasks = () => {

    return (
        <div>
            <h1>Today</h1>
            <div className="TaskContainer">
                <div className="Task">
                    <input type="checkbox"/>
                    <p>Research content ideas</p>
                </div>
                <div className="Task">
                    <input type="checkbox"/>
                    <p>Create a database of guest authors</p>
                </div>
                <div className="Task">
                    <input type="checkbox"/>
                    <p>Renew driver's license</p>
                </div>
            </div>
        </div>
    )
}

export default Tasks;