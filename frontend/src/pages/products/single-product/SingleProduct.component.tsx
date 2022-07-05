import React from "react";
import tw from "twin.macro";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { FaStar } from "react-icons/fa";

import { CartItem } from "../../../models";

// Services
import { getProductById } from "../../../services/products";

// Context
import { useCartContext } from "../../../context";

// Components
import { Spinner } from "../../../components/spinner";
import { BackLink } from "../../../components/backLink";
import { SectionTitle } from "../../../styles";

// Styles
import * as StyledElements from "./SingleProduct.styled";

// Params type
type Params = {
    id: string;
};

export const SingleProduct: React.FC = () => {
    const { addItem } = useCartContext();
    const { id } = useParams<Params>();
    const navigate = useNavigate();

    const {
        data: product,
        error,
        isLoading,
        isError,
    } = useQuery("singleProduct", () => getProductById(id));

    const addToCartHandler = () => {
        if (product) {
            let cartItem: CartItem = {
                id: product?.id,
                image: product?.image,
                title: product?.title,
                price: product?.price,
                quantity: 1,
                total: product?.price,
            };
            addItem(cartItem);
        }
    };

    const navigateToCart = () => navigate("/cart");

    if (isLoading) {
        return <Spinner />;
    }

    if (isError && error instanceof AxiosError) {
        return <SectionTitle>{error.message}</SectionTitle>;
    }

    return (
        <StyledElements.Container>
            <StyledElements.Image src={product?.image} alt={product?.title} />
            <StyledElements.ProductDesc>
                <StyledElements.Category>
                    {product?.category}
                    <BackLink title="Back to products" path="/products" />
                </StyledElements.Category>
                <StyledElements.Title>{product?.title}</StyledElements.Title>
                <StyledElements.Rating>
                    Rating {product?.rating.rate} <FaStar />
                </StyledElements.Rating>
                <StyledElements.Price>$ {product?.price}</StyledElements.Price>
                <StyledElements.Description>
                    {product?.description}
                </StyledElements.Description>
                <StyledElements.ButtonContainer>
                    <StyledElements.Button onClick={addToCartHandler}>
                        Add To Cart
                    </StyledElements.Button>
                    <StyledElements.Button onClick={navigateToCart}>
                        Go To Cart
                    </StyledElements.Button>
                </StyledElements.ButtonContainer>
            </StyledElements.ProductDesc>
        </StyledElements.Container>
    );
};
