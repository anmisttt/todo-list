import React, {useState} from 'react';
import TabsInProgress from '../tabs-in-progress/tabs-in-progress';
import TabsDone from '../tabs-done/tabs-done';
import TabsOverdue from '../tabs-overdue/tabs-overdue';
import {connect} from 'react-redux'
import {ActionCreator} from '../../store/action'
import PropTypes from 'prop-types'

const Tabs = ({overdueCards}) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsTitles = [`In Progress`, `Done`, `Overdue`];

  () => overdueCards();

  return (
  <React.Fragment>
  <div className="tabs-block">
      <ul>
        {tabsTitles.map((tab, i) => (
          <li key={i} className={(activeTab === i) ? `tabs-item tabs-item--active` : `tabs-item`}>
            <a href="#" className="tabs-item__link" onClick={(evt)=>{
              evt.preventDefault();
              setActiveTab(i);
            }}>{tab}</a>
          </li>
        ))}
      </ul>
    
  </div>
  
    {(activeTab === 0) && <TabsInProgress></TabsInProgress>}
    {(activeTab === 1) && <TabsDone></TabsDone>}
    {(activeTab === 2) && <TabsOverdue></TabsOverdue>}
 
  </React.Fragment>);
};

Tabs.propTypes = {
  overdueCards: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  overdueCards() {
    dispatch(ActionCreator.overdueCards)
  }
})

export {Tabs};
export default connect(null, mapDispatchToProps)(Tabs)