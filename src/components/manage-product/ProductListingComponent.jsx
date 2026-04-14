import { getAllProductService } from "../../services/product.service";
import React from "react";
import ProductCardComponent from "../ProductCardComponent";
import { getAllCategoriesService } from "../../services/category.service";
export default async function ProductListingComponent() {
  const products = await getAllProductService();
  const categories = await getAllCategoriesService();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
        {products.payload.map((product) => (
          <ProductCardComponent key={product.productId} product={product} categories={categories} />
        ))}
      </div>
    </div>
  );
}
