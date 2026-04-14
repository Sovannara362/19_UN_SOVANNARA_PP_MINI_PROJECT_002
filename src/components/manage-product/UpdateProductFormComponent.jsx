"use client";
import { Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export function UpdateProductFormComponent({
  product,
  categories,
  onSubmit,
  isSubmitting,
}) {
  const productSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    price: z.coerce.number().min(0, "Enter a valid price"),
    category: z.string().min(1, "Please select a category"),
    imageUrl: z.url("Enter a valid URL"),
    colors: z.array(z.string()).min(1, "Select at least one color"),
    sizes: z.array(z.string()).min(1, "Select at least one size"),
    description: z.string().min(1, "Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: formSubmitting },
  } = useForm({
    defaultValues: {
      name: product.name,
      price: product.price,
      category: product.categoryId,
      imageUrl: product.imageUrl,
      colors: product.colors,
      sizes: product.sizes,
      description: product.description,
    },
    resolver: zodResolver(productSchema),
  });
  const COLORS = ["green", "gray", "red", "blue", "white"];
  const SIZES = ["s", "m", "l", "xl", "xxl", "xxxl"];

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {/* Name & Price */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product name
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="e.g. Classic Tee"
            className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm outline-none ${errors.name ? "border-red-500 focus:ring-2 focus:ring-red-500" : "border-gray-200 focus:ring-2 focus:ring-lime-400"}`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price 
          </label>
          <input
            type="number"
            {...register("price")}
            placeholder="0.00"
            min="0"
            step="0.01"
            className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm outline-none ${errors.price ? "border-red-500 focus:ring-2 focus:ring-red-500" : "border-gray-200 focus:ring-2 focus:ring-lime-400"}`}
          />
          {errors.price && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.price.message}
            </p>
          )}
        </div>
      </div>

      {/* Category & Image URL */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            {...register("category")}
            className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm outline-none ${errors.category ? "border-red-500 focus:ring-2 focus:ring-red-500" : "border-gray-200 focus:ring-2 focus:ring-lime-400"}`}
          >
            <option value="">Select category</option>
            {categories.payload.map((c) => (
              <option value={c.categoryId} key={c.categoryId}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            {...register("imageUrl")}
            placeholder="https://..."
            className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm outline-none ${errors.imageUrl ? "border-red-500 focus:ring-2 focus:ring-red-500" : "border-gray-200 focus:ring-2 focus:ring-lime-400"}`}
          />
          {errors.imageUrl && (
            <p className="mt-1.5 text-xs text-red-600">
              {errors.imageUrl.message}
            </p>
          )}
        </div>
      </div>

      {/* Colors */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Colors
        </label>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((color) => (
            <label
              key={color}
              className="flex items-center gap-2 cursor-pointer rounded-xl border border-gray-200 px-3 py-2 text-sm"
            >
              <input
                type="checkbox"
                value={color.toLowerCase()}
                {...register("colors")}
                className="accent-lime-500"
              />
              {color}
            </label>
          ))}
        </div>
        {errors.colors && (
          <p className="mt-1.5 text-xs text-red-600">{errors.colors.message}</p>
        )}
      </div>

      {/* Sizes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sizes
        </label>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <label
              key={size}
              className="flex items-center gap-2 cursor-pointer rounded-xl border border-gray-200 px-3 py-2 text-sm"
            >
              <input
                type="checkbox"
                value={size}
                {...register("sizes")}
                className="accent-lime-500"
              />
              {size}
            </label>
          ))}
        </div>
        {errors.sizes && (
          <p className="mt-1.5 text-xs text-red-600">{errors.sizes.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register("description")}
          rows={4}
          placeholder="Describe the product..."
          className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm outline-none resize-y ${errors.description ? "border-red-500 focus:ring-2 focus:ring-red-500" : "border-gray-200 focus:ring-2 focus:ring-lime-400"}`}
        />
        {errors.description && (
          <p className="mt-1.5 text-xs text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        isDisabled={isSubmitting}
        variant="solid"
        className="w-full rounded-full bg-lime-400 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-lime-300"
      >
        {isSubmitting ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
}
