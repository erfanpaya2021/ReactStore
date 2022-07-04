import React from "react";
import { Outlet } from "react-router-dom";

import { Container } from "../../styles";
import { Header } from "./header";

export const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <Container as={"main"}>
                <Outlet />
            </Container>
        </>
    );
};
