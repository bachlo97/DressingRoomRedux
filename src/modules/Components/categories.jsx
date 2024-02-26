import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { chosseClothesType } from '../../redux/dressingRoom.slice'

function Categories() {
  const categoriesData = useSelector(state => state.dressingRoomReducer.categoriesData)
  const chooseCategory = useSelector(state => state.dressingRoomReducer.chooseCategory)
  const dispatch = useDispatch()


  return (
    <div className="btn-group">
      {categoriesData.map((item, index) => {
        return (
          <button key={index} className={item.type === chooseCategory ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => {
            dispatch(chosseClothesType(item.type))
          }}>
            {item.showName}
          </button>
        );
      })}
    </div>
  )
}

export default Categories