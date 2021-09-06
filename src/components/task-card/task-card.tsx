import React, {useState} from 'react'
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action'
import { Dispatch } from '../../store/store';
import TaskAddingForm from '../task-adding-form/task-adding-form'
import {formatDate} from '../../utils/date'
import {Card} from '../../constants'
import moment from 'moment'

const TaskCard = ({card, doneCard, deleteCard}: Props) => {
    const [isEdit, setEdit] = useState(false)
    const closeEdit = () => {
        setEdit(false)
    }
    const diffTime = moment(card.endDate).fromNow();

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
                End till <span>{`${formatDate(card.endDate)} (${diffTime})`}</span>
            </div>

           
            
        </div>
        </>
    )
}

interface Props {
    card: Card,
    doneCard: (id: number) => void,
    deleteCard: (id: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    doneCard(cardId: number) {
        dispatch(ActionCreator.doneCard(cardId))
    },
    deleteCard(cardId: number) {
        dispatch(ActionCreator.deleteCard(cardId))
    }
})

export {TaskCard}
export default connect<Props>(null, mapDispatchToProps)(TaskCard)