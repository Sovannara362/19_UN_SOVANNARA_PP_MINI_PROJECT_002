import headerToken from "../lib/header";

export async function addNewProductService(req){
  const headers = await headerToken();
    const product = {
    name: req.name,
    description: req.description,
    colors: req.colors,
    sizes: req.sizes,
    imageUrl: req.imageUrl,
    price: req.price,
    categoryId: req.category
  };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(product),
    });
    const newProduct = await res.json();

    return newProduct;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProductService() {
  const headers = await headerToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
    headers: headers,
  });
  const products = await res.json();
  console.log("Products", products);
  return products;
}