import React from "react";

import * as StyledElements from "./NotFound.styled";

import Image from "../../assets/images/notfound.svg";
import { SectionTitle } from "../../styles";
import { BackLink } from "../../components/backLink";

export const NotFound: React.FC = () => {
    return (
        <StyledElements.Container>
            <SectionTitle>Page Not Found</SectionTitle>
            <BackLink title="Go to home" path="/" />

            <StyledElements.NotFoundImage src={Image} alt="Page Not Found" />
        </StyledElements.Container>
    );
};
