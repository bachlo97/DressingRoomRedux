import React from 'react'
import { useSelector } from 'react-redux'
import Item from './item'

function ProductList() {
  const {productData,chooseCategory} = useSelector(state => state.dressingRoomReducer)
  const productDataFilter = productData.filter(item=>item.type === chooseCategory)
  return (
    <div className="row">
        {productDataFilter.map((item,index)=>{
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