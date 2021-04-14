import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {ActionCreator} from '../../store/action'

const Sort = ({sortHandler}) => {
    const sortRef = useRef();

    return(
        <div className="sort-block">
            <div className="sort-text">Сортировать карточки: </div>
            <select ref={sortRef} name="sort" id="sort" onChange={() => {
                sortHandler(sortRef.current.value)
            }}>
                <option value="default">По умолчанию</option>
                <option value="dateUp">По дате вверх</option>
                <option value="dateDown">По дате вниз</option>
            </select>
        </div>
    )
}

Sort.propTypes = {
    sortHandler: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    sortHandler(sortType) {
        dispatch(ActionCreator.sortCards(sortType))
    }
})

export {Sort}
export default connect(null, mapDispatchToProps)(Sort)