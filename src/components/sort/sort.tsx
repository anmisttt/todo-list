import React, {useRef} from 'react'
import {connect} from 'react-redux'
import {ActionCreator} from '../../store/action'

const Sort = ({sortHandler}: DispatchProps) => {
    const sortRef = useRef<HTMLSelectElement>(null!)


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

interface DispatchProps {
    sortHandler: (x: string) => void
}

const mapDispatchToProps = (dispatch: Function) => ({
    sortHandler(sortType: string) {
        dispatch(ActionCreator.sortCards(sortType))
    }
})

export {Sort}
export default connect<{}, DispatchProps, {}>(null, mapDispatchToProps)(Sort)