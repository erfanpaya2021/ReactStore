import React from "react";
import tw from "twin.macro";
import * as StyledElements from "./List.styled";

import { useCartContext } from "../../../context";

import { Item } from "./Item.component";
import { Button } from "../../../styles";
import { FaAngleRight } from "react-icons/fa";

export const List: React.FC = () => {
    const { items, totalPrice } = useCartContext();

    return (
        <StyledElements.List>
            <StyledElements.ListHeader>
                <span>Image</span>
                <span>Title</span>
                <span>Price</span>
                <span>Quantity</span>
                <span tw="hidden md:block">SubTotal</span>
            </StyledElements.ListHeader>
            <StyledElements.ListBody>
                {items.map(product => (
                    <Item key={product.id} cartItem={product} />
                ))}
            </StyledElements.ListBody>
            <StyledElements.ListFooter>
                <StyledElements.TotalPrice>
                    Total: $ {totalPrice.toFixed(2)}
                </StyledElements.TotalPrice>
                <Button>
                    Checkout <FaAngleRight />
                </Button>
            </StyledElements.ListFooter>
        </StyledElements.List>
    );
};
