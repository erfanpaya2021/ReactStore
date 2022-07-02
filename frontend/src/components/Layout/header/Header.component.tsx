import React from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { FaBars, FaAngleRight } from "react-icons/fa";

import { Container } from "../../../styles";

import * as styles from "./Header.styled";

export const Header: React.FC = () => {
    return (
        <styles.Header>
            <Container>
                <styles.HeaderTitle>
                    <Link to={"/"}>
                        React<span>Store</span>
                    </Link>
                </styles.HeaderTitle>
                <>
                    <FaBars tw="md:hidden text-2xl" />

                    <styles.Navbar>
                        <li>
                            <styles.NavLink to={"/"}>Home</styles.NavLink>
                        </li>
                        <li>
                            <styles.NavLink to={"/products"}>
                                Products <FaAngleRight />
                            </styles.NavLink>
                        </li>
                        <li>
                            <styles.NavLink to={"/"}>About</styles.NavLink>
                        </li>
                    </styles.Navbar>
                </>
            </Container>
        </styles.Header>
    );
};
