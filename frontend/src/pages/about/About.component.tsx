import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import * as StyledElements from "./About.styled";

export const About: React.FC = () => {
    return (
        <StyledElements.AboutContainer>
            <StyledElements.Title>Erfan Paya</StyledElements.Title>
            <StyledElements.SubTitle>
                Front End Developer
            </StyledElements.SubTitle>
            <StyledElements.SocialIcons>
                <a href="https://github.com/erfanpaya2021">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/erfan-paya/">
                    <FaLinkedin />
                </a>
            </StyledElements.SocialIcons>
        </StyledElements.AboutContainer>
    );
};
