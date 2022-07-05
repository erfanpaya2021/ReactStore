import React from "react";
import tw from "twin.macro";

import { List } from "./list";
import { BackLink } from "../../components/backLink";
import { SectionTitle } from "../../styles";

import * as StyledElements from "./Cart.styled";

export const Cart: React.FC = () => {
    return (
        <StyledElements.Container>
            <SectionTitle>Cart</SectionTitle>
            <BackLink title="Back to products" path="/products" />
            <List />
        </StyledElements.Container>
    );
};
