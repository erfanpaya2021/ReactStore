import api from "../../app/api";
export const getCategories = async (): Promise<string[]> => {
    const res = await api.get("products/categories");
    return res.data;
};
