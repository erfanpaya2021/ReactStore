import tw, { styled } from "twin.macro";

export const Products = styled.section`
    margin-top: 4rem;
`;

export const Categories = styled.div`
    ${tw`
        flex justify-center flex-wrap gap-y-2 gap-x-4
    `}

    & > span {
        ${tw`
            p-2 border rounded-md text-xs font-medium bg-gray-100 
            cursor-pointer
            md:text-base
            hover:text-green-400 hover:border-green-400
            first-letter:uppercase
        `}
    }
`;

export const SearchInput = styled.input`
    ${tw`
        block w-64 border-2 rounded-md mx-auto mb-4 p-2 
        text-sm outline-none
        md:w-96 md:text-base
        focus:border-slate-300
    `}
`;
