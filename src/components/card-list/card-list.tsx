import React from 'react';
import TaskCard from '../task-card/task-card'
import { Card } from '../../constants';

const CardList = ({cards}: Props) => {
    return(
        <div className="main-block">
        {cards.map((el: Card) => (
        <TaskCard key={el.id} card = {el}
        />
        ))
}</div>
      
    )}

interface Props {
    cards: Card[]
}



export default CardList
