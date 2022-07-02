import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import { Products } from "../pages/products";

const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="products" element={<Products />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
