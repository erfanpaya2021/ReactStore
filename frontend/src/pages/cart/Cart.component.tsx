import React from "react";

import { List } from "./list";
import { SectionTitle } from "../../styles";

import * as StyledElements from "./Cart.styled";

export const Cart: React.FC = () => {
    return (
        <StyledElements.Container>
            <SectionTitle>Cart</SectionTitle>
            <List />
        </StyledElements.Container>
    );
};
