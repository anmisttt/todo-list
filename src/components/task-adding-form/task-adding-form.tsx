import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {nanoid} from 'nanoid'
import {formatDate, isValidDate} from '../../utils/date'
import moment from 'moment'
import { Card } from '../../constants';
import { Dispatch } from '../../store/store';
import {CardStatuses} from '../../constants'
import { AnyAction } from 'redux';

const TaskAddingForm = ({createCard, editCard, handleClose, oldCard}: Props) => {
    const titleRef = React.useRef<HTMLInputElement>(null!);
    const descriptionRef = React.useRef<HTMLTextAreaElement>(null!);
    const dateRef = React.useRef<HTMLInputElement>(null!);
    const [isActive, setActive] = useState(false);
    
    const changeHandler = () => {
        setActive(titleRef.current.value.length>0 && descriptionRef.current.value.length>0 && isValidDate(dateRef.current.value))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {        
        const newDate = dateRef.current.value

        const data = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            status: (moment(newDate).isAfter(moment(new Date()))) ? CardStatuses.IN_PROGRESS : CardStatuses.OVERDUE,
            endDate: new Date(newDate).toString()
        }
        
        oldCard ? 
        editCard({
            id: oldCard.id,
            startDate: oldCard.startDate,
            ...data
        }) :
        createCard({
            id: +nanoid(),
            startDate: new Date().toString(),
            ...data
        })   
        handleClose()
      };

    return (
        <div className="modal">                
        <div className="message"> 
        <div className="closeText" onClick={handleClose}>Закрыть</div>                                           
            <div className="section-head">                        
                <div className="text">    
                {oldCard ? 'Измените информацию о задании' :  'Заполните информацию о новом задании'}                    
                   
                </div>            
                </div>
            <form action="#" className="modal__form" onSubmit={handleSubmit}>
                <div className="modal__fields">
                    <div className="modal__field">
                        <input ref = {titleRef} defaultValue={oldCard ? oldCard.title : ''} className="sign-in__input" type="textarea" placeholder="Введите название" name="card-title" id="card-title" onChange={changeHandler}/>
                       
                    </div>
                    <div className="modal__field">
                        <textarea ref = {descriptionRef} defaultValue={oldCard ? oldCard.description : ''} className="sign-in__input" placeholder="Введите описание" name="card-description" id="card-description" onChange={changeHandler}/>
                       
                    </div>
                    <div className="modal__field">
                        <input ref = {dateRef} defaultValue={oldCard ? formatDate(oldCard.endDate) : ''} className="sign-in__input" type="textarea" placeholder="Введите дедлайн в формате '1 January 2021'" name="card-title" id="card-title" onChange={changeHandler}/>
                       
                    </div>
                </div>                                                             
                <div className="modal__submit">
                    {isActive ? 
                    <button className="modal__btn" type="submit">{oldCard ? 'Изменить' :  'Создать'}</button> :
                    <button className="modal__btn" type="submit" disabled>{oldCard ? 'Изменить' :  'Создать'}</button>
                    }
              
            </div>              
            </form>
        </div>            
    </div>    
    )
}

interface OwnProps {
    oldCard?: Card,
    handleClose: () => void
}

interface DispatchProps {
    createCard: (card: Card) => void,
    editCard: (card: Card) => void
}

type Props = DispatchProps & OwnProps


const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => ({
    createCard(cardData: Card) {
      dispatch(ActionCreator.createCard(cardData));
    },
    editCard(cardData: Card) {
        dispatch(ActionCreator.editCard(cardData.id));
      }
  });

export {TaskAddingForm}
export default connect<{}, DispatchProps, OwnProps>(null, mapDispatchToProps)(TaskAddingForm)