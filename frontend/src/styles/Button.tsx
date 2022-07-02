import tw, { styled } from "twin.macro";

export const Button = styled.button`
    ${tw`
        transition-colors flex items-center py-2 px-4 rounded-2xl font-bold
        text-green-300 bg-slate-600
        hover:text-green-400 hover:bg-slate-700 
    `}
`;
