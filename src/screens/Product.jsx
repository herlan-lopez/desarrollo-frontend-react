
import React from 'react'
import FilterableProductTable from '../Components/Product/FilterableProductTable'
import {useSelector} from 'react-redux'

const Product = () => {
 
  const dataProduct = useSelector((state) => state.product.dataProduct);
  return (
    <>
        <FilterableProductTable products={dataProduct} />
    </>
  )
}

export default Product