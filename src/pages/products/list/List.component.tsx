import React from "react";

import { Product } from "../../../models";

import { ListItem } from "./ListItem.component";

import * as styles from "./List.styled";

interface Props {
    products: Product[];
}

export const List: React.FC<Props> = ({ products }) => {
    return (
        <styles.ProductsList>
            {products.map(product => (
                <ListItem key={product.id} product={product} />
            ))}
        </styles.ProductsList>
    );
};
