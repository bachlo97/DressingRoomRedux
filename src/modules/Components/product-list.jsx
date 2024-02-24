import React from 'react'
import { useSelector } from 'react-redux'
import Item from './item'

function ProductList() {
  const {productData,chooseCategory} = useSelector(state => state.dressingRoomReducer)
  console.log('123',chooseCategory)
  return (
    <div className="row">
        {productData.map((item,index)=>{
          return(
            <div className="col-4" key={index}>
              <Item product={item}/>
          </div>
          )
        })}
      </div>
  )
}

export default ProductList