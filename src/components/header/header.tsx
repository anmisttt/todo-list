import React, {useState} from 'react'
import TaskAddingForm from '../task-adding-form/task-adding-form'

const Header = () => {
  const [isAdding, setAdding] = useState(false)
  const closeAdding = () => {
      setAdding(false)
  }
    return (
        <header>
            {isAdding && <TaskAddingForm handleClose={closeAdding}/>}
            <div className="logo">TODO LIST</div>
            <button className="task-adding-form" onClick = {() => setAdding(!isAdding)}>{isAdding ? 'Close' : 'Add'} new task</button>
        </header>
    )
}

export default Header