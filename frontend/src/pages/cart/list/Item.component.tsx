import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import * as StyledElements from "./Item.styled";

export const Item: React.FC = () => {
    return (
        <StyledElements.Item>
            <StyledElements.Image src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
            <StyledElements.TitleContainer>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi voluptas aspernatur quam repellat? Repellat corrupti
                    quo facere aspernatur quod animi?
                </h3>
                <span>remove</span>
            </StyledElements.TitleContainer>
            <StyledElements.Price>$ 10</StyledElements.Price>
            <StyledElements.QuantityContainer>
                <FaMinusCircle />
                <span>10</span>
                <FaPlusCircle />
            </StyledElements.QuantityContainer>
            <StyledElements.SubTotal>$10</StyledElements.SubTotal>
        </StyledElements.Item>
    );
};
