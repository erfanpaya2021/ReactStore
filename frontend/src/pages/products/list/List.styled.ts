import tw, { styled } from "twin.macro";

export const ProductsList = styled.div`
    ${tw`
    grid grid-cols-2 gap-4 justify-center mt-8
    md:grid-cols-3
    lg:grid-cols-4
`}
`;
