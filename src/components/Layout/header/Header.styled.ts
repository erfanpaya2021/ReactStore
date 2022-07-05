import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";
import { keyframes } from "@emotion/react";

export const Header = styled.header`
    ${tw`
        bg-slate-600
        text-white
    `}
    /* Select Container */
    & > div {
        ${tw`
            flex
            justify-between
            items-center
            py-4     
        `}
    }
`;

export const HeaderTitle = styled.h1`
    letter-spacing: 1px;
    ${tw`
        text-lg
        font-medium
        md:text-2xl
    `}

    & span {
        ${tw`text-green-300 font-extrabold `}
    }
`;

interface NavProps {
    isShown: boolean;
}

export const Navbar = styled.ul`
    ${tw`
        absolute
        top-0
        right[-100%]
        hidden
        animate-OpenMenuAnimation
        md:static
        md:flex
        md:space-x-4
        md:w-full
        md:ml-12
        `}

    ${(props: NavProps) =>
        props.isShown &&
        tw` 
        absolute top-0 right-0 z-50
        flex flex-col items-center space-y-8 w-full h-full pt-20
        bg-slate-900 bg-opacity-90`}
`;

export const NavLink = styled(Link)`
    ${tw`
        flex
        items-center
        gap-1
        transition-colors
        text-2xl
        md:font-medium
        md:text-lg
        hover:text-green-300
    `}
`;

export const CartStatus = styled(Link)`
    ${tw`
        relative
        flex-1
        flex
        justify-center
        cursor-pointer
    `}

    & > svg {
        margin-left: auto;
    }

    & > span {
        ${tw`
            absolute
            -top-1
            -right-2
            w-5
            h-5
            rounded-full
            font-bold
            text-center
            text-lg
            text-slate-700
            bg-green-300
        `}
        line-height: 1.25rem;
    }
`;
