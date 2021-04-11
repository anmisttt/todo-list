import React, {useState} from 'react'
import AddTask from '../add-task/add-task'

const Header = () => {
  const [isAdding, setAdding] = useState(false)
    return (
        <header>
            {isAdding && <AddTask/>}
            <div className="logo">TODO LIST</div>
            <button className="add-task" onClick = {() => setAdding(!isAdding)}>{isAdding ? 'Close' : 'Add'} new task</button>
        </header>
    )
}

export default Header