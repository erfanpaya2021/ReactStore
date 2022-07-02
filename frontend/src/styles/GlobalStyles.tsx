// styles/GlobalStyles.js
import React from "react";
import { Global, css } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        ${tw`
            bg-gray-100
            text-slate-700
        `}
    }

    ul,
    li {
        list-style: none;
    }
`;

export const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={customStyles} />
    </>
);
