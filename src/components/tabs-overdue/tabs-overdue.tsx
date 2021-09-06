import React from 'react'
import CardList from '../card-list/card-list'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Card } from '../../constants';
import {State} from '../../store/store'

const TabsOverdue = ({filteredCards}: Props) => {
    return (
       <CardList cards={filteredCards}></CardList>
    )
}

TabsOverdue.propTypes = () => ({
    filteredCards: PropTypes.array.isRequired
})

const mapStateToProps = (state: State) => ({
    filteredCards: state.cards.filter((card: Card) => card.status==="overdue")
})

interface Props {
    filteredCards: Card[]
}

export {TabsOverdue}
export default connect(mapStateToProps, null)(TabsOverdue)
