import headerToken from "../lib/header";

export async function getAllCategoriesService() {
  const headers = await headerToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`, {
    headers: headers,
  });
  const categories = await res.json();
  console.log("Categories", categories);
  return categories;
}
