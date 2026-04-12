import ProductListingComponent from '../../../components/manage-product/ProductListingComponent'
import { CreateProductModalComponent } from '../../../components/manage-product/CreateProductModalComponent'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col gap-10'> 
      <CreateProductModalComponent/>
      <ProductListingComponent/>
    </div>
  )
}
