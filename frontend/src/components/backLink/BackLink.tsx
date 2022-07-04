import React from "react";
import { Link as BaseLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import tw, { styled } from "twin.macro";

const Link = styled(BaseLink)`
    ${tw`
        flex items-center font-bold text-xs text-green-400 
        transition-colors cursor-pointer
        sm:text-base
        hover:text-green-400
    `}
`;

interface Props {
    path: string;
    title?: string;
}

export const BackLink: React.FC<Props> = ({ path, title }) => {
    return (
        <Link to={path ? path : ""}>
            {title ? title : "Go Back"} <FaAngleRight />
        </Link>
    );
};
