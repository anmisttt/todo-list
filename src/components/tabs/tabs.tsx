import React, {useState} from 'react';
import CardList from '../card-list/card-list'
import {connect} from 'react-redux'
import {ActionCreator} from '../../store/action'
import Sort from '../sort/sort';
import { CardStatuses } from '../../constants';

const Tabs = ({overdueCards}: DispatchProps) => {
  const [activeTab, setActiveTab] = useState(Object.keys(CardStatuses)[0]);

  () => overdueCards();

  return (
  <React.Fragment>
  <div className="tabs-block">
      <ul>
        {Object.keys(CardStatuses).map((tab) => (
          <li key={tab} className={`tabs-item ${(activeTab === tab) ? 'tabs-item--active' : ''}`}>
            <a href="#" className="tabs-item__link" onClick={(evt)=>{
              evt.preventDefault();
              setActiveTab(tab);
            }}>{CardStatuses[tab]}</a>
          </li>
        ))}
      </ul>
    
  </div>
  
    <Sort></Sort>
    <CardList tabStatus={CardStatuses[activeTab]}></CardList>
 
  </React.Fragment>);
};

interface DispatchProps {
  overdueCards: () => void
}

const mapDispatchToProps = (dispatch: Function) => ({
  overdueCards() {
    dispatch(ActionCreator.overdueCards)
  }
})

export {Tabs};
export default connect(null, mapDispatchToProps)(Tabs)