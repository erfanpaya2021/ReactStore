import tw, { styled } from "twin.macro";

export const List = tw.div``;

export const ListHeader = styled.div`
    ${tw`grid grid-cols-4 text-center mt-8 pb-4 border-b
        md:grid-cols-5
    `}

    & > span {
        ${tw`flex-1 font-bold text-xs sm:text-base `}
    }
`;

export const ListBody = styled.div`
    ${tw`flex flex-col`}
`;
