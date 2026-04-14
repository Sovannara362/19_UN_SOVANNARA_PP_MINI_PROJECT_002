import ProductListingComponent from '../../../components/manage-product/ProductListingComponent'
import { CreateProductModalComponent } from '../../../components/manage-product/CreateProductModalComponent'
import React from 'react'

export default function page() {
  return (
    <main className="max-w-7xl mx-auto p-8 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-900">Manage Products</h1>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            Create, update, and delete products.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort</span>
            <select className="border rounded-full px-4 py-1 text-sm bg-gray-50 focus:outline-none">
              <option value="">Name (A-Z)</option>
              <option value="">Name (Z-A)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Products</h2>
          <CreateProductModalComponent />
        </div>

        <ProductListingComponent />
      </div>
    </main>
  );
}