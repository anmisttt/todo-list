import React from 'react'
import CardList from '../card-list/card-list'
import {connect} from 'react-redux';
import ChartBlock from '../chart-block/chart-block'
import { Card, State } from '../../constants';

const TabsDone = ({filteredCards}: Props) => {
    return (
        <div className="done-block">
       <CardList cards={filteredCards}></CardList>
       <ChartBlock cards={filteredCards}></ChartBlock>
       </div>
    )
}

interface Props {
    filteredCards: Card[]
}

const mapStateToProps = (state: State) => ({
    filteredCards: state.cards.filter((card: Card) => card.status==="done")
})

export {TabsDone}
export default connect(mapStateToProps, null)(TabsDone)