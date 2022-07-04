import React from "react";
import { FaAngleRight } from "react-icons/fa";

import { Product } from "../../../models";

import * as styles from "./ListItem.styled";

interface Props {
    product: Product;
}

export const ListItem: React.FC<Props> = ({ product }) => {
    return (
        <styles.Container>
            <styles.Image src={product.image} alt={product.title} />
            <styles.ProductDesc>
                <styles.Title>
                    {product.title.substring(0, 30)} ...
                </styles.Title>
                <styles.Button>
                    Buy it <FaAngleRight />
                </styles.Button>
            </styles.ProductDesc>
        </styles.Container>
    );
};
