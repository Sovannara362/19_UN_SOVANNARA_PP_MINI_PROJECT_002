import ShopCardComponent from '../../../components/shop/ShopCardComponent'
import React from 'react'
import { getAllProductService } from '../../../services/product.service'

export default async function Page() {
  const products = await getAllProductService();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4'>
        {
          products.payload.map((product)=>(
            <ShopCardComponent key={product.productId} product={product}/>
          ))
        }
    </div>
  )
}
