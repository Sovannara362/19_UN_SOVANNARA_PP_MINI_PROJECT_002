import { productsResponse } from "../../../../data/mockData";
import React from "react";
import Image from "next/image";
import { StarRow } from "../../../../components/ProductCardComponent";
import { SizeGroupRadioComponent } from "../../../../components/SizeGroupRadioComponent";
import ColorGroupTagComponent from "../../../../components/ColorGroupTagComponent";
import { getAllProductService } from "../../../../services/product.service";

export default async function page({ params }) {
  const { id } = await params;
  const res =await getAllProductService();
  const product = res.payload.filter((p) => p.productId == id);

  console.log(product);
  return (
    <div>
      {product.map((p) => (
        <div key={p.productId} className="flex gap-10 p-10">
          <div className="p-10 border rounded-xl">
            <Image
              src={
                p.imageUrl ??
                "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=1000&fit=crop"
              }
              alt="image"
              width={500}
              height={500}
              className={`object-cover`}
            />
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex gap-4">
              <h3 className="font-semibold leading-snug text-gray-900">
                {p.name}
              </h3>
              <StarRow />
            </div>
            <div className="flex flex-col justify-baseline gap-3 pt-2">
              <div className="flex gap-4">
                <p className="text-2xl font-semibold tabular-nums text-gray-900">
                  {`$${p.price}`}
                </p>
                <p className="text-md font-semibold tabular-nums line-through text-gray-400">
                  {`$${p.price + 14}`}
                </p>
              </div>
              <ColorGroupTagComponent/>
              <SizeGroupRadioComponent/>
              <p className="mt-1 min-h-10 line-clamp-2 text-sm leading-5 text-gray-900">
                {p.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
