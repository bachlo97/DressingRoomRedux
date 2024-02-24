import React from 'react'

function Item(props) {
  const { name, imgSrc_jpg} = props.product
  return (
    <div className="card p-2 my-2">
      <img src={imgSrc_jpg} alt="" />
      <p>{name}</p>
      <button className="btn btn-success" >Thử đồ</button>
    </div>
  )
}

export default Item