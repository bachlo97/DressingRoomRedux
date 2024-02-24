import React from 'react'
import Header from './layouts/header/header'
import Categories from './Components/categories'
import ProductList from './Components/product-list'
import Model from './Components/models/model'

function DressingRoom() {
    return (
        <div>
            <Header />
            <div className='container fluid'>
                <div className="row">
                    <div className="col-6">
                        <Categories />
                        <ProductList />
                    </div>
                    <div className="col-6">
                        <Model />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DressingRoom