import React from 'react';
import TaskCard from '../task-card/task-card'
import ChartBlock from '../chart-block/chart-block';
import { Card, CardStatuses } from '../../constants';
import { connect } from 'react-redux';
import { IState } from '../../store/store';

const CardList = ({filteredCards, tabStatus}: Props) => {
    const isDoneList = tabStatus === CardStatuses.DONE;
    return(
        <div className={`${isDoneList ? 'done-block' : ''}`}>
        <div className="main-block">
        {filteredCards.map((el: Card) => (
        <TaskCard key={el.id} card = {el}
        />
        
        ))
        }</div>
       {isDoneList && <ChartBlock cards={filteredCards}></ChartBlock>}
        </div>    
    )}

    interface OwnProps {
        tabStatus: string
    }

    interface StateProps {
        filteredCards: Card[]
    }

    type Props = StateProps & OwnProps


    const mapStateToProps = (state: IState, {tabStatus}: OwnProps): StateProps => ({
        filteredCards: state.cards.filter((card: Card) => card.status===tabStatus)
    })

    const mapDispatchToProps = () => ({
      });


export {CardList}
export default connect<StateProps, {}, OwnProps, IState>(mapStateToProps, mapDispatchToProps)(CardList)
