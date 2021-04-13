import React from 'react'
import CardList from '../card-list/card-list'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const TabsInProgress = ({filteredCards}) => {
    return (
       <CardList cards={filteredCards}></CardList>
    )
}

TabsInProgress.propTypes = () => ({
    filteredCards: PropTypes.array.isRequired
})

const mapStateToProps = (state) => ({
    filteredCards: state.cards.filter((card) => card.status==="active")
})

export {TabsInProgress}
export default connect(mapStateToProps, null)(TabsInProgress)