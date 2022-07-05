import api from "../../app/api";
import { Product } from "../../models/Product";

export const getProductsByCategory = async (
    categoryName: string = "",
): Promise<Product[]> => {
    const res = await api.get(`products/category/${categoryName}`);
    return res.data;
};
