import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { FaBars, FaAngleRight, FaCartPlus, FaTimes } from "react-icons/fa";

import { Container } from "../../../styles";

import * as StyledElements from "./Header.styled";

export const Header: React.FC = () => {
    const [menuShown, setMenuShown] = useState<boolean>(true);

    const openMenuHandler = (): void => setMenuShown(true);
    const closeMenuHandler = (): void => setMenuShown(false);

    useEffect(() => {
        if (window.innerWidth >= 768) {
            closeMenuHandler();
        }
    }, [window.innerWidth]);

    return (
        <StyledElements.Header>
            <Container>
                <StyledElements.HeaderTitle>
                    <Link to={"/"}>
                        React<span>Store</span>
                    </Link>
                </StyledElements.HeaderTitle>
                <>
                    <FaBars
                        onClick={openMenuHandler}
                        tw="md:hidden text-2xl cursor-pointer hover:text-green-300"
                    />

                    <StyledElements.Navbar isShown={menuShown}>
                        <FaTimes
                            onClick={closeMenuHandler}
                            tw="block text-2xl cursor-pointer absolute top-8 right-8 md:hidden hover:text-green-300 "
                        />
                        <li>
                            <StyledElements.NavLink
                                onClick={closeMenuHandler}
                                to={"/"}
                            >
                                Home
                            </StyledElements.NavLink>
                        </li>
                        <li>
                            <StyledElements.NavLink
                                onClick={closeMenuHandler}
                                to={"/products"}
                            >
                                Products <FaAngleRight />
                            </StyledElements.NavLink>
                        </li>
                        <li>
                            <StyledElements.NavLink
                                onClick={closeMenuHandler}
                                to={"/about"}
                            >
                                About
                            </StyledElements.NavLink>
                        </li>
                    </StyledElements.Navbar>
                    <StyledElements.CartStatus>
                        <FaCartPlus tw="text-4xl" />
                        <span>0</span>
                    </StyledElements.CartStatus>
                </>
            </Container>
        </StyledElements.Header>
    );
};
