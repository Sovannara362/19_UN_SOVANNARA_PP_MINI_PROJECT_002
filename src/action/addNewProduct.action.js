"use server";

import { addNewProductService } from "../services/product.service";
export async function AddNewProductAction(data) {
  const { name, description, colors, sizes,imageUrl,price,category } = data;
  const product = {
    name: name,
    description: description,
    colors: colors,
    sizes: sizes,
    imageUrl: imageUrl,
    price: price,
    category: category,
  };
  console.log("product in action: ", product);

  try {
    const res = await addNewProductService(product);

    if (res.status !== "201 CREATED") {
      const errorData = await res.json();
      throw new Error(errorData.message || "Add New Product failed");
    }

  } catch (error) {

    console.error("Add New Product error:", error);
    return { error: error.message };
  }
}
