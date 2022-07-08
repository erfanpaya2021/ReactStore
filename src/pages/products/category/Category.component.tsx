import tw from "twin.macro";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { AxiosError } from "axios";

import { getProductsByCategory } from "../../../services/products";

import { List } from "../list";
import { Spinner } from "../../../components/spinner";
import { BackLink } from "../../../components/backLink";
import { SectionTitle } from "../../../styles";

import * as StyledElements from "./Category.styled";

type Params = {
    categoryName: string;
};

export const Category: React.FC = () => {
    const { categoryName } = useParams<Params>();

    const {
        data: products,
        error,
        isFetching,
        isSuccess,
        isError,
    } = useQuery("categoryName", () => getProductsByCategory(categoryName));

    if (isFetching) {
        return <Spinner />;
    }

    if (isError && error instanceof AxiosError) {
        return <SectionTitle>{error.message}</SectionTitle>;
    }

    return (
        <StyledElements.Container>
            <StyledElements.HeaderContainer>
                <SectionTitle tw="mb-2">{categoryName}</SectionTitle>
                <BackLink path="/products" />
            </StyledElements.HeaderContainer>
            {isSuccess && <List products={products} />}
        </StyledElements.Container>
    );
};
