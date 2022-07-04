import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { FaSearch } from "react-icons/fa";

// Services
import { getAllProducts, getCategories } from "../../services/products";

import { List } from "./list";
import { Spinner } from "../../components/spinner";
import { SectionTitle } from "../../styles";

import * as StyledElements from "./Products.styled";
import { Product } from "../../models";

export const Products: React.FC = () => {
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState<string>("");

    const searchValueChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => setSearchValue(event.target.value);

    const {
        data: products,
        error,
        isLoading,
        isSuccess,
        isError,
    } = useQuery("products", getAllProducts);
    const { data: categories } = useQuery("categories", getCategories);

    const navigateToCategory = (categoryName: string) =>
        navigate(`/products/category/${categoryName}`);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError && error instanceof AxiosError) {
        return <SectionTitle>{error.message}</SectionTitle>;
    }

    return (
        <StyledElements.Products>
            <SectionTitle>Products</SectionTitle>

            <StyledElements.SearchInput
                type="text"
                placeholder="Search..."
                id="searchValue"
                name="searchValue"
                value={searchValue}
                onChange={searchValueChangeHandler}
            />

            <StyledElements.Categories>
                {categories?.map(category => (
                    <span
                        onClick={() => navigateToCategory(category)}
                        key={category}
                    >
                        {category}
                    </span>
                ))}
            </StyledElements.Categories>
            {isSuccess && (
                <List
                    products={products.filter(product =>
                        product.title
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()),
                    )}
                />
            )}
        </StyledElements.Products>
    );
};
