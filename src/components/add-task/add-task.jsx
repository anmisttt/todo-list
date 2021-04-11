import React from 'react'

const AddTask = () => {
    return (
        <div className="modal">                
        <div className="message">                                     
            <div className="section-head">                        
                <div className="text">                        
                   Заполните информацию о новом задании
                </div>            
                </div>
            <form action="#" className="modal__form">
                <div className="modal__fields">
                    <div className="modal__field">
                        <input className="sign-in__input" type="textarea" placeholder="Введите название" name="card-title" id="card-title" />
                       
                    </div>
                    <div className="modal__field">
                        <textarea className="sign-in__input" type="textarea" placeholder="Введите описание" name="card-description" id="card-description" />
                       
                    </div>
                </div>                                                             
                <div className="modal__submit">
              <button className="modal__btn" type="submit">Создать</button>
            </div>              
            </form>
        </div>            
    </div>    
    )
}


export default AddTask