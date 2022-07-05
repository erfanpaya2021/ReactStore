import React from "react";
import tw from "twin.macro";
import * as StyledElements from "./List.styled";

import { Item } from "./Item.component";

export const List: React.FC = () => {
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
                <Item />
                <Item />
                <Item />
            </StyledElements.ListBody>
        </StyledElements.List>
    );
};
