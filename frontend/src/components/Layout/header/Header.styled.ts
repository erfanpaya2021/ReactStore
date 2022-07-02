import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

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

export const Navbar = styled.ul`
    ${tw`
        hidden
        md:flex
        md:space-x-4
        md:w-full
        md:ml-12
    `}
`;

export const NavLink = styled(Link)`
    ${tw`
        flex
        items-center
        gap-1
        transition-colors
        md:font-medium
        md:text-lg
        hover:text-green-300
    `}
`;

export const CartStatus = styled.div`
    ${tw`
        relative
        hidden
        cursor-pointer
        md:block
    `}

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
