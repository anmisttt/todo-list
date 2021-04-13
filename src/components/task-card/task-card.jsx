import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action'
import TaskAddingForm from '../../components/task-adding-form/task-adding-form'
import {formatDate} from '../../utils/date'

const TaskCard = ({card, doneCard, deleteCard}) => {
    const [isEdit, setEdit] = useState(false)
    const closeEdit = () => {
        setEdit(false)
    }

    return (
        <>        
        {isEdit && <TaskAddingForm handleClose={closeEdit} oldCard={card}/>}
        <div className={`task-card ${(card.status=='done') ? `task-card_done`: (card.status=='overdue') ? `task-card_overdue` : ``}`}>
            <div className="top-part">
                <div className="card-title">{card.title}</div>
                <div className="card-actions">
                    {card.status!="done" && 
                    <>
                    <div className="done-action" onClick={()=>doneCard(card.id)}></div>                    
                    <div className="edit-action" onClick = {() => setEdit(!isEdit)}></div>
                    </>
                    }
                    <div className="delete-action" onClick={()=>deleteCard(card.id)}></div>
                </div>
            </div>
            <div className="card-description">{card.description}</div>
            <div className="card-date">
                End till <span>{formatDate(card.date)}</span>
            </div>
        </div>
        </>
    )
}

TaskCard.propTypes = {
    card: PropTypes.object.isRequired,
    doneCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    doneCard(cardId) {
        dispatch(ActionCreator.doneCard(cardId))
    },
    deleteCard(cardId) {
        dispatch(ActionCreator.deleteCard(cardId))
    }
})

export {TaskCard}
export default connect(null, mapDispatchToProps)(TaskCard)