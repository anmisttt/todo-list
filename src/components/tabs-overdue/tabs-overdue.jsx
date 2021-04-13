import React from 'react'
import CardList from '../card-list/card-list'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const TabsOverdue = ({filteredCards}) => {
    return (
       <CardList cards={filteredCards}></CardList>
    )
}

TabsOverdue.propTypes = () => ({
    filteredCards: PropTypes.array.isRequired
})

const mapStateToProps = (state) => ({
    filteredCards: state.cards.filter((card) => card.status==="overdue")
})

export {TabsOverdue}
export default connect(mapStateToProps, null)(TabsOverdue)