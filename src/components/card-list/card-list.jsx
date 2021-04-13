import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TaskCard from '../task-card/task-card'

const CardList = ({cards}) => {
    return(
        <div className="main-block">
        {cards.map((el) => (
        <TaskCard key={el.id} card = {el}
        />
        ))
}</div>
      
    )}

CardList.propTypes = {
    cards: PropTypes.array.isRequired
}



export default CardList
