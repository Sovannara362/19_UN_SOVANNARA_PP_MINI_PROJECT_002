import { getAllProductService } from "../../services/product.service";
import React from "react";
import ShopCardComponent from "../shop/ShopCardComponent";
export default async function ProductListingComponent() {
  const products = await getAllProductService();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
        {products.payload.map((product) => (
          <ShopCardComponent key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}
