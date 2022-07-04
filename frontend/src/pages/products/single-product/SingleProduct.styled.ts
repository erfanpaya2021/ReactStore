import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";
import { Button as BaseButton } from "../../../styles";

export const Container = styled.div`
    ${tw`
        flex flex-col items-center mt-16
        sm:flex-row sm:gap-12
    `}
`;

export const Image = styled.img`
    width: clamp(200px, 40vw, 360px);
    ${tw`
        px-8
        py-4
        
    `}
`;

export const ProductDesc = styled.div`
    ${tw`
        w-full
        p-4
        text-center
        sm:text-left
        sm:w-[50%]
    `}
`;

export const Category = styled.span`
    ${tw`text-sm font-medium text-gray-400 uppercase
        sm:text-lg
    `}
`;
export const Title = styled.h2`
    ${tw`
        text-base font-medium text-slate-700 my-1
        sm:text-2xl
    `}
`;
export const Rating = styled.span`
    ${tw`
        flex justify-center items-center gap-1
        text-xs font-bold text-slate-900
        sm:justify-start
        sm:text-base
    `}
`;
export const Price = styled.h3`
    letter-spacing: 1px;
    ${tw`
    my-4
    text-sm font-extrabold text-slate-900
    sm:text-2xl
    `}
`;
export const Description = styled.h3`
    ${tw`
        text-xs text-slate-900
        sm:text-base
    `}
`;

export const ButtonContainer = styled.div`
    ${tw`
        flex justify-center gap-2 mt-4
        sm:justify-start
    `}
`;

export const Button = styled(BaseButton)`
    ${tw`
        text-xs
        py-2
        px-4
        rounded-lg
        sm:text-base
        sm:px-4
    `}
`;
