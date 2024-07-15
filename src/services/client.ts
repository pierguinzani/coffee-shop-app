import { ProductItemProps } from "src/types/ProductItemProps";
import { api } from "./api";

export async function getCoffeeShopsClient(): Promise<ProductItemProps[]> {
  try {
    const { data } = await api.get(`/coffee/hot`);
    return data;
  } catch (error) {
    console.log("error fetching coffee shops", error);
    return Promise.reject(error);
  }
}
