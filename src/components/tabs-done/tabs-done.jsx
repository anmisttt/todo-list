import React from 'react'
import CardList from '../card-list/card-list'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ChartBlock from '../chart-block/chart-block'

const TabsDone = ({filteredCards}) => {
    return (
        <div className="done-block">
       <CardList cards={filteredCards}></CardList>
       <ChartBlock cards={filteredCards}></ChartBlock>
       </div>
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