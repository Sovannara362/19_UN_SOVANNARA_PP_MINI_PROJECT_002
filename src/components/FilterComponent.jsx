import React from "react";
import { StarRow } from "./ProductCardComponent";
export default function FilterComponent() {
  return (
    <div>
      <article className="group max-w-[300px] flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={
              product.imageUrl ??
              "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=1000&fit=crop"
            }
            alt="image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={`object-cover`}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <h3 className="font-semibold leading-snug text-gray-900">
              {product.productName}
            </h3>
            <p className="mt-1 min-h-10 line-clamp-2 text-sm leading-5 text-gray-500">
              {product.description}
            </p>
          </div>
          <StarRow />
          <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-2">
            <p className="text-xl font-semibold tabular-nums text-gray-900">
              {`$${product.price}`}
            </p>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${badgeClass("Skincare")}`}
            >
              {product.essentialsTag ?? ""}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
