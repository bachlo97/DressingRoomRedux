import React from 'react'
import { useDispatch } from 'react-redux'
import { getCloth } from '../../redux/dressingRoom.slice'
function Item(props) {
  const { name, imgSrc_jpg,type,imgSrc_png} = props.product
  const dispatch = useDispatch()
  return (
    <div className="card p-2 my-2">
      <img src={imgSrc_jpg} alt="" />
      <p>{name}</p>
      <button className="btn btn-success" onClick={()=>{
        const action = getCloth({type,img:imgSrc_png})
        dispatch(action)
      }} >Thử đồ</button>
    </div>
  )
}

export default Item