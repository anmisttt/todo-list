import React from 'react'

const TaskCard = () => {
    return (
        <div className="task-card">
            <div className="top-part">
                <div className="card-title">Доделать тестовые JetBrains</div>
                <div className="card-actions">
                    <div className="done-action"></div>
                    <div className="edit-action"></div>
                    <div className="delete-action"></div>
                </div>
            </div>
            <div className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis eos quia recusandae porro omnis. Maxime quibusdam suscipit iure facilis, deserunt odit quod ea fugit architecto, laboriosam labore, nihil enim.</div>
            <div className="date-block">
                03/01/2001-04/03/2022
            </div>
        </div>
    )
}

export default TaskCard