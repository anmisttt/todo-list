import React from 'react'
import CardList from '../card-list/card-list'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const TabsDone = ({filteredCards}) => {
    return (
        <>
       <CardList cards={filteredCards}></CardList>
       </>
    )
}

TabsDone.propTypes = () => ({
    filteredCards: PropTypes.array.isRequired
})

const mapStateToProps = (state) => ({
    filteredCards: state.cards.filter((card) => card.status==="done")
})

export {TabsDone}
export default connect(mapStateToProps, null)(TabsDone)