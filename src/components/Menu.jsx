import '../App.css'

const Menu = () => {
    return (
        <div className="container">
            <div className="header">
                <h2>Menu</h2>
                <input className='SearchBar' placeholder="Search"/>
            </div>
            <div className="Tasks">
                <h3>Tasks</h3>
                <div className='buttonDiv'>
                    <button>Upcoming</button>
                    <button>Today</button>
                    <button>Calendar</button>
                </div>
            </div>
            <div className="Lists">
                <h3>Lists</h3>
                <div className='buttonDiv'>
                    <button>Personal</button>
                    <button>Work</button>
                    <button>List 1</button>
                    <button>Add new List</button>
                </div>
            </div>
            <div className="Tags">
                <h3>Tags</h3>
                <div className='buttonDivTag'>
                    <button>Tag 1</button>
                    <button>Tag 2</button>
                    <button>Tag 3</button>
                </div>
            </div>
            <div className="footer">
                <div className='buttonDiv'>
                    <button>Settings</button>
                    <button>Sign out</button>
                </div>
            </div>
        </div>
    )
} 

export default Menu;