"use server";

import { addNewProductService,deleteProductService,updateProductService } from "../services/product.service";
import { revalidatePath } from "next/cache";
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
    revalidatePath("/manage-products"); 

  } catch (error) {

    console.error("Add New Product error:", error);
    return { error: error.message };
  }
}
export async function UpdateProductAction(productId, data) {
  const { name, description, colors, sizes, imageUrl, price, category } = data;
  const product = { name, description, colors, sizes, imageUrl, price, category };

  try {
    const res = await updateProductService(productId, product);

    if (res.status !== "200 OK") {
      throw new Error(res.message || "Update product failed");
    }

    revalidatePath("/manage-products");   
  } catch (error) {
    console.error("Update Product error:", error);
    return { error: error.message };
  }
}

export async function DeleteProductAction(productId) {
  try {
    const res = await deleteProductService(productId);

    if (res.status !== "200 OK") {
      throw new Error(res.message || "Delete product failed");
    }

    revalidatePath("/manage-products");   
  } catch (error) {
    console.error("Delete Product error:", error);
    return { error: error.message };
  }
}
