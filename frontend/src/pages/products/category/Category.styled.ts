import tw, { styled } from "twin.macro";

export const Container = tw.section`mt-16`;
export const HeaderContainer = styled.div`
    ${tw`flex flex-col justify-center items-center `}

    & > span {
        ${tw`
            flex items-center font-bold text-xs text-green-400 
            transition-colors cursor-pointer
            sm:text-base
            hover:text-green-400
        `}
    }
`;
