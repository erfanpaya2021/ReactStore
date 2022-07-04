import api from "../../app/api";
import { Product } from "../../models/Product";

export const getProductById = async (id: string = ""): Promise<Product> => {
    const res = await api.get(`products/${id}`);
    return res.data;
};
