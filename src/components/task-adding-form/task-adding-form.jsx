import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid'

const TaskAddingForm = ({createCard, editCard, handleClose, oldCard}) => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    console.log('lkjlkj')

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        oldCard ? 
        editCard({
            id: oldCard.id,
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            status: 'active',
            date: dateRef.current.value
        }) :
        createCard({
            id: nanoid(),
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            status: 'active',
            date: dateRef.current.value
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
                        <input ref = {titleRef} defaultValue={oldCard ? oldCard.title : ''} className="sign-in__input" type="textarea" placeholder="Введите название" name="card-title" id="card-title" />
                       
                    </div>
                    <div className="modal__field">
                        <textarea ref = {descriptionRef} defaultValue={oldCard ? oldCard.description : ''} className="sign-in__input" type="textarea" placeholder="Введите описание" name="card-description" id="card-description" />
                       
                    </div>
                    <div className="modal__field">
                        <input ref = {dateRef} defaultValue={oldCard ? oldCard.title : ''} className="sign-in__input" type="textarea" placeholder="Введите дату в формате DD/MM/YYYY" name="card-title" id="card-title" />
                       
                    </div>
                </div>                                                             
                <div className="modal__submit">
              <button className="modal__btn" type="submit">{oldCard ? 'Изменить' :  'Создать'}</button>
            </div>              
            </form>
        </div>            
    </div>    
    )
}

TaskAddingForm.propTypes = {
    oldCard: PropTypes.object,
    createCard: PropTypes.func.isRequired,
    editCard: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    createCard(cardData) {
      dispatch(ActionCreator.createCard(cardData));
    },
    editCard(cardData) {
        dispatch(ActionCreator.editCard(cardData));
      }
  });

export {TaskAddingForm}
export default connect(null, mapDispatchToProps)(TaskAddingForm)