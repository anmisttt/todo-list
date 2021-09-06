import React from 'react'
import CardList from '../card-list/card-list'
import {connect} from 'react-redux';
import { Card, State } from '../../constants';


const TabsInProgress = ({filteredCards}: Props) => {
    return (
       <CardList cards={filteredCards}></CardList>
    )
}

interface Props {
    filteredCards: Card[]
}

const mapStateToProps = (state: State) => ({
    filteredCards: state.cards.filter((card: Card) => card.status==="active")
})

export {TabsInProgress}
export default connect(mapStateToProps, null)(TabsInProgress)