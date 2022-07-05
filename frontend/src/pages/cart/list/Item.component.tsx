import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { CartItem } from "../../../models";

import { useCartContext } from "../../../context";

import * as StyledElements from "./Item.styled";

interface Props {
    cartItem: CartItem;
}

export const Item: React.FC<Props> = ({ cartItem }) => {
    const { removeItem, increaseQuantity, decreaseQuantity } = useCartContext();

    const removeCartItemHandler = () => removeItem(cartItem.id);
    const increaseCartItemQuantityHandler = () => increaseQuantity(cartItem.id);
    const decreaseCartItemQuantityHandler = () => decreaseQuantity(cartItem.id);

    return (
        <StyledElements.Item>
            <StyledElements.Image src={cartItem.image} alt={cartItem.title} />
            <StyledElements.TitleContainer>
                <h3>{cartItem.title}</h3>
                <span onClick={removeCartItemHandler}>remove</span>
            </StyledElements.TitleContainer>
            <StyledElements.Price>
                $ {cartItem.price.toFixed(2)}
            </StyledElements.Price>
            <StyledElements.QuantityContainer>
                <FaMinusCircle onClick={decreaseCartItemQuantityHandler} />
                <span>{cartItem.quantity}</span>
                <FaPlusCircle onClick={increaseCartItemQuantityHandler} />
            </StyledElements.QuantityContainer>
            <StyledElements.SubTotal>
                $ {cartItem.total.toFixed(2)}
            </StyledElements.SubTotal>
        </StyledElements.Item>
    );
};
