import { productsResponse } from '../../../data/mockData'
import ShopCardComponent from '../../../components/shop/ShopCardComponent'
import React from 'react'

export default function Page() {
  const products = productsResponse.data
  return (
    <div className='flex gap-5 flex-wrap p-4'>
        {
          products.map((product)=>(
            <ShopCardComponent key={product.productId} product={product}/>
          ))
        }
    </div>
  )
}
