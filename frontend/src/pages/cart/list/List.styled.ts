import tw, { styled } from "twin.macro";

export const List = styled.div`
    ${tw`flex flex-col `}
    max-height: calc(70vh - 80px);
`;

export const ListHeader = styled.div`
    ${tw`grid grid-cols-4 text-center mt-8 pb-4 border-b
        md:grid-cols-5
    `}

    & > span {
        ${tw`flex-1 font-bold text-xs sm:text-base lg:text-lg `}
    }
`;

export const ListBody = styled.div`
    ${tw`flex-1 flex flex-col`}
    overflow-y: auto;
`;
export const ListFooter = styled.div`
    ${tw`flex items-center gap-8 mt-8`}
`;

export const TotalPrice = tw.span`text-2xl`;
