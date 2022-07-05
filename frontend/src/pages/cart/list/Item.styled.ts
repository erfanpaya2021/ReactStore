import tw, { styled } from "twin.macro";

export const Item = styled.div`
    ${tw`grid grid-cols-4 items-center bg-gray-100 md:grid-cols-5`}

    &:nth-of-type(odd) {
        ${tw` bg-gray-50 `}
    }

    & > * {
        ${tw`mx-auto`}
    }
`;

export const Image = tw.img`
    w-12
    p-2
    sm:w-20
    sm:py-2
    sm:px-4
    lg:w-24
    lg:py-4
`;

export const TitleContainer = styled.div`
    & > h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: clamp(45px, 15vw, 200px);
        ${tw`mx-0 text-sm sm:text-base lg:text-lg`}
    }

    & > span {
        ${tw`
            text-xs text-gray-400 underline cursor-pointer
            sm:text-sm
            lg:text-base
            hover:text-gray-500
        `}
    }
`;

export const QuantityContainer = styled.div`
    ${tw`
        flex items-center gap-1 text-xs
        sm:text-base 
        lg:text-lg
    `}

    & > span {
        ${tw`cursor-pointer  hover:text-gray-500`}
    }

    & > svg {
        ${tw`cursor-pointer text-gray-400  hover:text-gray-500`}
    }
`;
export const Price = tw.span`text-sm font-bold sm:text-base  lg:text-lg`;
export const SubTotal = tw.span`hidden text-sm font-bold sm:text-base  md:block lg:text-lg`;
