import tw, { styled } from "twin.macro";
import { Button as BaseButton } from "../../../styles";

export const Container = styled.div`
    ${tw`
        flex flex-col
        border-2
        rounded-2xl
        shadow-xl
    `}
`;

export const Image = styled.img`
    ${tw`
        w-full
        h-32
        px-8
        py-4
        sm:h-56 sm:px-10 sm:py-6
        md:px-14 md:py-8
    `}
`;

export const ProductDesc = styled.div`
    ${tw`
        flex-1 flex flex-col items-start justify-between gap-4 
        border-t-2 p-4 mt-4
        sm:items-stretch
    `}
`;

export const Title = styled.h3`
    ${tw`
        text-sm
        sm:text-lg
    `}
`;

export const Button = styled(BaseButton)`
    ${tw`
        justify-center
        text-sm
        mt-auto
        p-2
        sm:text-lg
    `}
`;
