import api from "../../app/api";
import { Product } from "../../models/Product";
export const getAllProducts = async (): Promise<Product[]> => {
    const res = await api.get("products");
    return res.data;
};
