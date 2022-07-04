import tw from "twin.macro";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { FaAngleRight } from "react-icons/fa";

import { getProductsByCategory } from "../../../services/products/getProductsByCategory";

import { List } from "../list";
import { Spinner } from "../../../components/spinner";
import { SectionTitle } from "../../../styles";

import * as StyledElements from "./Category.styled";

export const Category: React.FC = () => {
    const navigate = useNavigate();
    const params = useParams();
    let categoryName: string = "";
    if (params.categoryName) {
        categoryName = params.categoryName;
    }

    const {
        data: products,
        error,
        isLoading,
        isSuccess,
        isError,
    } = useQuery(categoryName, () => getProductsByCategory(categoryName));

    if (isLoading) {
        return <Spinner />;
    }

    if (isError && error instanceof AxiosError) {
        return <SectionTitle>{error.message}</SectionTitle>;
    }

    const navigateToProducts = () => navigate("/products");

    return (
        <StyledElements.Container>
            <StyledElements.HeaderContainer>
                <SectionTitle tw="mb-2">{categoryName}</SectionTitle>
                <span onClick={navigateToProducts}>
                    Go Back <FaAngleRight />
                </span>
            </StyledElements.HeaderContainer>
            {isSuccess && <List products={products} />}
        </StyledElements.Container>
    );
};
